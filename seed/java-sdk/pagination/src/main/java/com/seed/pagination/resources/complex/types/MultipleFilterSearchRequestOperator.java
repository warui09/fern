/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.resources.complex.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum MultipleFilterSearchRequestOperator {
    AND("AND"),

    OR("OR");

    private final String value;

    MultipleFilterSearchRequestOperator(String value) {
        this.value = value;
    }

    @JsonValue
    @java.lang.Override
    public String toString() {
        return this.value;
    }
}
