/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedNullable from "../../../../api/index";
import * as core from "../../../../core";

export const Metadata: core.serialization.ObjectSchema<serializers.Metadata.Raw, SeedNullable.Metadata> =
    core.serialization.object({
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        avatar: core.serialization.string().optional(),
        activated: core.serialization.boolean().optional(),
        status: core.serialization.lazy(() => serializers.Status),
    });

export declare namespace Metadata {
    export interface Raw {
        createdAt: string;
        updatedAt: string;
        avatar?: string | null;
        activated?: boolean | null;
        status: serializers.Status.Raw;
    }
}
