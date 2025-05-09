/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.nullable.resources.nullable.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.seed.nullable.core.WrappedAlias;
import java.util.Optional;

public final class Email implements WrappedAlias {
    private final Optional<String> value;

    private Email(Optional<String> value) {
        this.value = value;
    }

    @JsonValue
    public Optional<String> get() {
        return this.value;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        return this == other || (other instanceof Email && this.value.equals(((Email) other).value));
    }

    @java.lang.Override
    public int hashCode() {
        return value.hashCode();
    }

    @java.lang.Override
    public String toString() {
        return value.toString();
    }

    @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
    public static Email of(Optional<String> value) {
        return new Email(value);
    }
}
