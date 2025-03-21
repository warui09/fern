/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { GeneratorInvocationSchema } from "./GeneratorInvocationSchema";
import { OutputMetadataSchema } from "../../generators/types/OutputMetadataSchema";
import { ReviewersSchema } from "../../reviewers/types/ReviewersSchema";

export const GeneratorGroupSchema: core.serialization.ObjectSchema<
    serializers.GeneratorGroupSchema.Raw,
    FernDefinition.GeneratorGroupSchema
> = core.serialization.object({
    audiences: core.serialization.list(core.serialization.string()).optional(),
    generators: core.serialization.list(GeneratorInvocationSchema),
    metadata: OutputMetadataSchema.optional(),
    reviewers: ReviewersSchema.optional(),
});

export declare namespace GeneratorGroupSchema {
    export interface Raw {
        audiences?: string[] | null;
        generators: GeneratorInvocationSchema.Raw[];
        metadata?: OutputMetadataSchema.Raw | null;
        reviewers?: ReviewersSchema.Raw | null;
    }
}
