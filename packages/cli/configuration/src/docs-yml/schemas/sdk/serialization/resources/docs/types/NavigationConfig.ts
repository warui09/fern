/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { UntabbedNavigationConfig } from "./UntabbedNavigationConfig";
import { TabbedNavigationConfig } from "./TabbedNavigationConfig";
import { TabbedNavigationItem } from "./TabbedNavigationItem";

export const NavigationConfig: core.serialization.Schema<
    serializers.NavigationConfig.Raw,
    FernDocsConfig.NavigationConfig
> = core.serialization.undiscriminatedUnion([UntabbedNavigationConfig, TabbedNavigationConfig]);

export declare namespace NavigationConfig {
    export type Raw = UntabbedNavigationConfig.Raw | TabbedNavigationConfig.Raw;
}
