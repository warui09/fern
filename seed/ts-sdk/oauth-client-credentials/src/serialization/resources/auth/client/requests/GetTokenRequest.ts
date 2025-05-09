/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as SeedOauthClientCredentials from "../../../../../api/index";
import * as core from "../../../../../core";

export const GetTokenRequest: core.serialization.Schema<
    serializers.GetTokenRequest.Raw,
    SeedOauthClientCredentials.GetTokenRequest
> = core.serialization.object({
    clientId: core.serialization.property("client_id", core.serialization.string()),
    clientSecret: core.serialization.property("client_secret", core.serialization.string()),
    scope: core.serialization.string().optional(),
});

export declare namespace GetTokenRequest {
    export interface Raw {
        client_id: string;
        client_secret: string;
        scope?: string | null;
    }
}
