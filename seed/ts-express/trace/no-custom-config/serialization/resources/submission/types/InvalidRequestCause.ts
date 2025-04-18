/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const InvalidRequestCause: core.serialization.Schema<
    serializers.InvalidRequestCause.Raw,
    SeedTrace.InvalidRequestCause
> = core.serialization
    .union("type", {
        submissionIdNotFound: core.serialization.lazyObject(() => serializers.SubmissionIdNotFound),
        customTestCasesUnsupported: core.serialization.lazyObject(() => serializers.CustomTestCasesUnsupported),
        unexpectedLanguage: core.serialization.lazyObject(() => serializers.UnexpectedLanguageError),
    })
    .transform<SeedTrace.InvalidRequestCause>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace InvalidRequestCause {
    export type Raw =
        | InvalidRequestCause.SubmissionIdNotFound
        | InvalidRequestCause.CustomTestCasesUnsupported
        | InvalidRequestCause.UnexpectedLanguage;

    export interface SubmissionIdNotFound extends serializers.SubmissionIdNotFound.Raw {
        type: "submissionIdNotFound";
    }

    export interface CustomTestCasesUnsupported extends serializers.CustomTestCasesUnsupported.Raw {
        type: "customTestCasesUnsupported";
    }

    export interface UnexpectedLanguage extends serializers.UnexpectedLanguageError.Raw {
        type: "unexpectedLanguage";
    }
}
