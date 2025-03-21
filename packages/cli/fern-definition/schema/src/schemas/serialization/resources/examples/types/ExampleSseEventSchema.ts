/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ExampleTypeReferenceSchema } from "./ExampleTypeReferenceSchema";

export const ExampleSseEventSchema: core.serialization.ObjectSchema<
    serializers.ExampleSseEventSchema.Raw,
    FernDefinition.ExampleSseEventSchema
> = core.serialization.object({
    event: core.serialization.string(),
    data: ExampleTypeReferenceSchema.optional(),
});

export declare namespace ExampleSseEventSchema {
    export interface Raw {
        event: string;
        data?: (ExampleTypeReferenceSchema.Raw | undefined) | null;
    }
}
