/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { JsScriptStrategy } from "./JsScriptStrategy";

export const JsFileConfigSettings: core.serialization.ObjectSchema<
    serializers.JsFileConfigSettings.Raw,
    FernDocsConfig.JsFileConfigSettings
> = core.serialization.object({
    path: core.serialization.string(),
    strategy: JsScriptStrategy.optional(),
});

export declare namespace JsFileConfigSettings {
    export interface Raw {
        path: string;
        strategy?: JsScriptStrategy.Raw | null;
    }
}
