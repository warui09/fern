import { OpenAPIV3, OpenAPIV3_1 } from "openapi-types";

import { AuthScheme, IntermediateRepresentation } from "@fern-api/ir-sdk";
import { constructHttpPath, injectAutogeneratedExamples, injectAutogeneratedV2Examples } from "@fern-api/ir-utils";
import { AbstractConverter, Converters, ServersConverter } from "@fern-api/v2-importer-commons";

import { OpenAPIConverterContext3_1 } from "./OpenAPIConverterContext3_1";
import { PathConverter } from "./paths/PathConverter";
import { WebhookConverter } from "./paths/operations/WebhookConverter";
import { SecuritySchemeConverter } from "./securitySchemes/SecuritySchemeConverter";

export type BaseIntermediateRepresentation = Omit<IntermediateRepresentation, "apiName" | "constants">;

export declare namespace OpenAPIConverter {
    type Args = AbstractConverter.Args<OpenAPIConverterContext3_1>;
}

export class OpenAPIConverter extends AbstractConverter<OpenAPIConverterContext3_1, IntermediateRepresentation> {
    constructor({ breadcrumbs, context }: AbstractConverter.Args<OpenAPIConverterContext3_1>) {
        super({ breadcrumbs, context });
    }

    public async convert(): Promise<IntermediateRepresentation> {
        this.context.spec = this.removeXFernIgnores({
            document: this.context.spec,
            context: this.context
        }) as OpenAPIV3_1.Document;

        await this.convertSecuritySchemes();

        await this.convertSchemas();

        await this.convertWebhooks();

        const { endpointLevelServers } = await this.convertPaths();

        this.convertServers({ endpointLevelServers });

        let ir = {
            ...this.ir,
            apiName: this.context.casingsGenerator.generateName(this.ir.apiDisplayName ?? ""),
            constants: {
                errorInstanceIdKey: this.context.casingsGenerator.generateNameAndWireValue({
                    wireValue: "errorInstanceId",
                    name: "errorInstanceId"
                })
            }
        };

        ir = {
            ...ir,
            ...injectAutogeneratedExamples({ ir, exampleGeneration: this.context.exampleGenerationArgs }),
            ...injectAutogeneratedV2Examples({ ir, exampleGeneration: this.context.exampleGenerationArgs })
        };

        return ir;
    }

    private async convertSecuritySchemes(): Promise<void> {
        const securitySchemes: AuthScheme[] = [];

        for (const [id, securityScheme] of Object.entries(this.context.spec.components?.securitySchemes ?? {})) {
            let resolvedSecurityScheme: OpenAPIV3_1.SecuritySchemeObject;
            if (this.context.isReferenceObject(securityScheme)) {
                const resolvedReference =
                    await this.context.resolveReference<OpenAPIV3_1.SecuritySchemeObject>(securityScheme);
                if (!resolvedReference.resolved) {
                    continue;
                }
                resolvedSecurityScheme = resolvedReference.value;
            } else {
                resolvedSecurityScheme = securityScheme;
            }

            const securitySchemeConverter = new SecuritySchemeConverter({
                context: this.context,
                breadcrumbs: ["components", "securitySchemes", id],
                securityScheme: resolvedSecurityScheme
            });
            const convertedScheme = securitySchemeConverter.convert();
            if (convertedScheme != null) {
                securitySchemes.push(convertedScheme);
            }
        }

        if (securitySchemes.length > 0) {
            this.ir.auth = {
                requirement: "ANY",
                schemes: securitySchemes,
                docs: undefined
            };
        }
    }

    private convertServers({ endpointLevelServers }: { endpointLevelServers?: OpenAPIV3_1.ServerObject[] }): void {
        const serversConverter = new ServersConverter({
            context: this.context,
            breadcrumbs: ["servers"],
            servers: this.context.spec.servers,
            endpointLevelServers
        });
        const convertedServers = serversConverter.convert();
        if (convertedServers != null) {
            this.ir.environments = convertedServers.value;
        }
    }

    private async convertSchemas(): Promise<void> {
        const group = this.context.getGroup({
            groupParts: [],
            namespace: this.context.namespace
        });

        const pkg = this.getOrCreatePackage({
            group
        });

        for (const [id, schema] of Object.entries(this.context.spec.components?.schemas ?? {})) {
            const schemaConverter = new Converters.SchemaConverters.SchemaConverter({
                context: this.context,
                id,
                breadcrumbs: ["components", "schemas", id],
                schema
            });
            const convertedSchema = await schemaConverter.convert();
            if (convertedSchema != null) {
                pkg.types.push(id);
                this.ir.types = {
                    ...this.ir.types,
                    ...convertedSchema.inlinedTypes,
                    [id]: convertedSchema.typeDeclaration
                };
            }
        }
    }

    private async convertWebhooks(): Promise<void> {
        const groupToWebhooks: Record<string, string[]> = {};

        for (const [, webhookItem] of Object.entries(this.context.spec.webhooks ?? {})) {
            if (webhookItem == null || !("post" in webhookItem) || !webhookItem.post?.operationId) {
                continue;
            }
            const operationId = webhookItem.post.operationId;
            const webHookConverter = new WebhookConverter({
                context: this.context,
                breadcrumbs: ["webhooks", operationId],
                operation: webhookItem.post,
                method: OpenAPIV3.HttpMethods.POST,
                path: operationId
            });

            const convertedWebHook = await webHookConverter.convert();

            if (convertedWebHook != null) {
                const group = convertedWebHook.group?.join(".") ?? operationId;
                if (groupToWebhooks[group] == null) {
                    groupToWebhooks[group] = [];
                }
                groupToWebhooks[group].push(operationId);

                const pkg = this.getOrCreatePackage({
                    group: convertedWebHook.group
                });

                if (this.ir.webhookGroups[group] == null) {
                    this.ir.webhookGroups[group] = [];
                }
                this.ir.webhookGroups[group].push(convertedWebHook.webhook);
                pkg.webhooks = group;

                this.ir.types = {
                    ...this.ir.types,
                    ...convertedWebHook.inlinedTypes
                };
            }
        }
    }

    private async convertPaths(): Promise<{ endpointLevelServers?: OpenAPIV3_1.ServerObject[] }> {
        const endpointLevelServers: OpenAPIV3_1.ServerObject[] = [];

        for (const [path, pathItem] of Object.entries(this.context.spec.paths ?? {})) {
            if (pathItem == null) {
                continue;
            }
            const pathConverter = new PathConverter({
                context: this.context,
                breadcrumbs: ["paths", path],
                pathItem,
                path,
                servers: this.context.spec.servers
            });
            const convertedPath = await pathConverter.convert();
            if (convertedPath != null) {
                for (const endpoint of convertedPath.endpoints) {
                    const group = this.context.getGroup({
                        groupParts: endpoint.group,
                        namespace: this.context.namespace
                    });
                    const groupId = group.join(".");

                    const pkg = this.getOrCreatePackage({
                        group: endpoint.group
                    });

                    const allParts = [...group].map((part) => this.context.casingsGenerator.generateName(part));
                    const finalpart = allParts[allParts.length - 1];

                    if (pkg.service == null) {
                        pkg.service = `service_${groupId}`;
                    }

                    if (this.ir.services[pkg.service] == null) {
                        this.ir.services[pkg.service] = {
                            name: {
                                fernFilepath: {
                                    allParts,
                                    packagePath: allParts.slice(0, -1),
                                    file: finalpart
                                }
                            },
                            displayName: undefined,
                            basePath: constructHttpPath(""),
                            headers: [],
                            pathParameters: [],
                            availability: undefined,
                            endpoints: [],
                            transport: undefined,
                            encoding: undefined
                        };
                    }
                    this.ir.services[pkg.service]?.endpoints.push(endpoint.endpoint);

                    // Collect endpoint-level servers
                    if (endpoint.servers && endpoint.servers[0] != null) {
                        endpointLevelServers.push(endpoint.servers[0]);
                    }
                }

                for (const webhook of convertedPath.webhooks) {
                    const group = this.context.getGroup({
                        groupParts: webhook.group,
                        namespace: this.context.namespace
                    });
                    const groupId = group.join(".");

                    const pkg = this.getOrCreatePackage({
                        group: webhook.group
                    });

                    this.ir.webhookGroups[groupId] ??= [];
                    this.ir.webhookGroups[groupId].push(webhook.webhook);

                    pkg.webhooks = groupId;
                }

                this.ir.types = {
                    ...this.ir.types,
                    ...convertedPath.inlinedTypes
                };
            }
        }
        return { endpointLevelServers };
    }
}
