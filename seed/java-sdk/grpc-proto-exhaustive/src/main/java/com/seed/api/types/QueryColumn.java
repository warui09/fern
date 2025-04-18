/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.api.core.ObjectMappers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = QueryColumn.Builder.class)
public final class QueryColumn {
    private final List<Float> values;

    private final Optional<Long> topK;

    private final Optional<String> namespace;

    private final Optional<Metadata> filter;

    private final Optional<IndexedData> indexedData;

    private final Map<String, Object> additionalProperties;

    private QueryColumn(
            List<Float> values,
            Optional<Long> topK,
            Optional<String> namespace,
            Optional<Metadata> filter,
            Optional<IndexedData> indexedData,
            Map<String, Object> additionalProperties) {
        this.values = values;
        this.topK = topK;
        this.namespace = namespace;
        this.filter = filter;
        this.indexedData = indexedData;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("values")
    public List<Float> getValues() {
        return values;
    }

    @JsonProperty("topK")
    public Optional<Long> getTopK() {
        return topK;
    }

    @JsonProperty("namespace")
    public Optional<String> getNamespace() {
        return namespace;
    }

    @JsonProperty("filter")
    public Optional<Metadata> getFilter() {
        return filter;
    }

    @JsonProperty("indexedData")
    public Optional<IndexedData> getIndexedData() {
        return indexedData;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof QueryColumn && equalTo((QueryColumn) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(QueryColumn other) {
        return values.equals(other.values)
                && topK.equals(other.topK)
                && namespace.equals(other.namespace)
                && filter.equals(other.filter)
                && indexedData.equals(other.indexedData);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.values, this.topK, this.namespace, this.filter, this.indexedData);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static Builder builder() {
        return new Builder();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private List<Float> values = new ArrayList<>();

        private Optional<Long> topK = Optional.empty();

        private Optional<String> namespace = Optional.empty();

        private Optional<Metadata> filter = Optional.empty();

        private Optional<IndexedData> indexedData = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        public Builder from(QueryColumn other) {
            values(other.getValues());
            topK(other.getTopK());
            namespace(other.getNamespace());
            filter(other.getFilter());
            indexedData(other.getIndexedData());
            return this;
        }

        @JsonSetter(value = "values", nulls = Nulls.SKIP)
        public Builder values(List<Float> values) {
            this.values.clear();
            this.values.addAll(values);
            return this;
        }

        public Builder addValues(Float values) {
            this.values.add(values);
            return this;
        }

        public Builder addAllValues(List<Float> values) {
            this.values.addAll(values);
            return this;
        }

        @JsonSetter(value = "topK", nulls = Nulls.SKIP)
        public Builder topK(Optional<Long> topK) {
            this.topK = topK;
            return this;
        }

        public Builder topK(Long topK) {
            this.topK = Optional.ofNullable(topK);
            return this;
        }

        @JsonSetter(value = "namespace", nulls = Nulls.SKIP)
        public Builder namespace(Optional<String> namespace) {
            this.namespace = namespace;
            return this;
        }

        public Builder namespace(String namespace) {
            this.namespace = Optional.ofNullable(namespace);
            return this;
        }

        @JsonSetter(value = "filter", nulls = Nulls.SKIP)
        public Builder filter(Optional<Metadata> filter) {
            this.filter = filter;
            return this;
        }

        public Builder filter(Metadata filter) {
            this.filter = Optional.ofNullable(filter);
            return this;
        }

        @JsonSetter(value = "indexedData", nulls = Nulls.SKIP)
        public Builder indexedData(Optional<IndexedData> indexedData) {
            this.indexedData = indexedData;
            return this;
        }

        public Builder indexedData(IndexedData indexedData) {
            this.indexedData = Optional.ofNullable(indexedData);
            return this;
        }

        public QueryColumn build() {
            return new QueryColumn(values, topK, namespace, filter, indexedData, additionalProperties);
        }
    }
}
