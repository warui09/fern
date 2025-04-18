/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernSeedConfig from "../../../index";

export interface FixtureConfigurations {
    publishConfig?: unknown;
    publishMetadata?: unknown;
    customConfig?: unknown;
    readmeConfig?: FernSeedConfig.ReadmeConfig;
    audiences?: string[];
    outputFolder: string;
    outputVersion?: string;
    /** Overrides the default output mode */
    outputMode?: FernSeedConfig.OutputMode;
}
