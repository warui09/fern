/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { JsRemoteConfig } from "./JsRemoteConfig";
import { JsFileConfig } from "./JsFileConfig";

export const JsConfigOptions: core.serialization.Schema<
    serializers.JsConfigOptions.Raw,
    FernDocsConfig.JsConfigOptions
> = core.serialization.undiscriminatedUnion([JsRemoteConfig, JsFileConfig]);

export declare namespace JsConfigOptions {
    export type Raw = JsRemoteConfig.Raw | JsFileConfig.Raw;
}
