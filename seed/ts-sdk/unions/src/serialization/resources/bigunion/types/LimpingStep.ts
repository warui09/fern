/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";

export const LimpingStep: core.serialization.ObjectSchema<serializers.LimpingStep.Raw, SeedUnions.LimpingStep> =
    core.serialization.object({
        value: core.serialization.string(),
    });

export declare namespace LimpingStep {
    export interface Raw {
        value: string;
    }
}
