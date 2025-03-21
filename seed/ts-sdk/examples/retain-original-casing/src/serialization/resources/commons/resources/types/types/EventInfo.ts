/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedExamples from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Metadata } from "./Metadata";
import { Tag } from "./Tag";

export const EventInfo: core.serialization.Schema<serializers.commons.EventInfo.Raw, SeedExamples.commons.EventInfo> =
    core.serialization
        .union("type", {
            metadata: Metadata,
            tag: core.serialization.object({
                value: Tag,
            }),
        })
        .transform<SeedExamples.commons.EventInfo>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace EventInfo {
    export type Raw = EventInfo.Metadata | EventInfo.Tag;

    export interface Metadata extends Metadata.Raw {
        type: "metadata";
    }

    export interface Tag {
        type: "tag";
        value: Tag.Raw;
    }
}
