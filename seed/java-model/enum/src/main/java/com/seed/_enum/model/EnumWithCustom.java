/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed._enum.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum EnumWithCustom {
    SAFE("safe"),

    CUSTOM("Custom");

    private final String value;

    EnumWithCustom(String value) {
        this.value = value;
    }

    @JsonValue
    @java.lang.Override
    public String toString() {
        return this.value;
    }
}
