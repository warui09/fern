/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const ExampleSetContainer: core.serialization.ObjectSchema<
    serializers.ExampleSetContainer.Raw,
    FernIr.ExampleSetContainer
> = core.serialization.objectWithoutOptionalProperties({
    set: core.serialization.list(core.serialization.lazyObject(() => serializers.ExampleTypeReference)),
    itemType: core.serialization.lazy(() => serializers.TypeReference),
});

export declare namespace ExampleSetContainer {
    export interface Raw {
        set: serializers.ExampleTypeReference.Raw[];
        itemType: serializers.TypeReference.Raw;
    }
}
