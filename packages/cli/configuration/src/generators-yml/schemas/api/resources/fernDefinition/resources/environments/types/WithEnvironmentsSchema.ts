/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDefinition from "../../../../../index";

export interface WithEnvironmentsSchema {
    "default-url"?: string;
    "default-environment"?: string;
    environments?: Record<string, FernDefinition.fernDefinition.EnvironmentSchema>;
}
