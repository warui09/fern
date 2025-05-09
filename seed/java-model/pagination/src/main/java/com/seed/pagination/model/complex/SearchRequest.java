/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.model.complex;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.pagination.core.ObjectMappers;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = SearchRequest.Builder.class)
public final class SearchRequest {
    private final Optional<StartingAfterPaging> pagination;

    private final SearchRequestQuery query;

    private SearchRequest(Optional<StartingAfterPaging> pagination, SearchRequestQuery query) {
        this.pagination = pagination;
        this.query = query;
    }

    @JsonProperty("pagination")
    public Optional<StartingAfterPaging> getPagination() {
        return pagination;
    }

    @JsonProperty("query")
    public SearchRequestQuery getQuery() {
        return query;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof SearchRequest && equalTo((SearchRequest) other);
    }

    private boolean equalTo(SearchRequest other) {
        return pagination.equals(other.pagination) && query.equals(other.query);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.pagination, this.query);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static QueryStage builder() {
        return new Builder();
    }

    public interface QueryStage {
        _FinalStage query(SearchRequestQuery query);

        Builder from(SearchRequest other);
    }

    public interface _FinalStage {
        SearchRequest build();

        _FinalStage pagination(Optional<StartingAfterPaging> pagination);

        _FinalStage pagination(StartingAfterPaging pagination);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements QueryStage, _FinalStage {
        private SearchRequestQuery query;

        private Optional<StartingAfterPaging> pagination = Optional.empty();

        private Builder() {}

        @java.lang.Override
        public Builder from(SearchRequest other) {
            pagination(other.getPagination());
            query(other.getQuery());
            return this;
        }

        @java.lang.Override
        @JsonSetter("query")
        public _FinalStage query(SearchRequestQuery query) {
            this.query = Objects.requireNonNull(query, "query must not be null");
            return this;
        }

        @java.lang.Override
        public _FinalStage pagination(StartingAfterPaging pagination) {
            this.pagination = Optional.ofNullable(pagination);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "pagination", nulls = Nulls.SKIP)
        public _FinalStage pagination(Optional<StartingAfterPaging> pagination) {
            this.pagination = pagination;
            return this;
        }

        @java.lang.Override
        public SearchRequest build() {
            return new SearchRequest(pagination, query);
        }
    }
}
