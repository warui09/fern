# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from .types.search_request_query import SearchRequestQuery
from .types.starting_after_paging import StartingAfterPaging
from ..core.request_options import RequestOptions
from ..core.pagination import SyncPager
from .types.conversation import Conversation
from ..core.serialization import convert_and_respect_annotation_metadata
from .types.paginated_conversation_response import PaginatedConversationResponse
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper
from ..core.pagination import AsyncPager

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ComplexClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def search(
        self,
        *,
        query: SearchRequestQuery,
        pagination: typing.Optional[StartingAfterPaging] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> SyncPager[Conversation]:
        """
        Parameters
        ----------
        query : SearchRequestQuery

        pagination : typing.Optional[StartingAfterPaging]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        SyncPager[Conversation]

        Examples
        --------
        from seed import SeedPagination
        from seed.complex_ import SingleFilterSearchRequest, StartingAfterPaging

        client = SeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        response = client.complex_.search(
            pagination=StartingAfterPaging(
                per_page=1,
                starting_after="starting_after",
            ),
            query=SingleFilterSearchRequest(
                field="field",
                operator="=",
                value="value",
            ),
        )
        for item in response:
            yield item
        # alternatively, you can paginate page-by-page
        for page in response.iter_pages():
            yield page
        """
        _response = self._client_wrapper.httpx_client.request(
            "conversations/search",
            method="POST",
            json={
                "pagination": convert_and_respect_annotation_metadata(
                    object_=pagination, annotation=StartingAfterPaging, direction="write"
                ),
                "query": convert_and_respect_annotation_metadata(
                    object_=query, annotation=SearchRequestQuery, direction="write"
                ),
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                _parsed_response = typing.cast(
                    PaginatedConversationResponse,
                    parse_obj_as(
                        type_=PaginatedConversationResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
                _has_next = False
                _get_next = None
                if _parsed_response.pages is not None and _parsed_response.pages.next is not None:
                    _parsed_next = _parsed_response.pages.next.starting_after
                    _has_next = _parsed_next is not None and _parsed_next != ""
                    _get_next = lambda: self.search(
                        query=query,
                        pagination=pagination,
                        request_options=request_options,
                    )
                _items = _parsed_response.conversations
                return SyncPager(has_next=_has_next, items=_items, get_next=_get_next)
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncComplexClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def search(
        self,
        *,
        query: SearchRequestQuery,
        pagination: typing.Optional[StartingAfterPaging] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> AsyncPager[Conversation]:
        """
        Parameters
        ----------
        query : SearchRequestQuery

        pagination : typing.Optional[StartingAfterPaging]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        AsyncPager[Conversation]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedPagination
        from seed.complex_ import SingleFilterSearchRequest, StartingAfterPaging

        client = AsyncSeedPagination(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            response = await client.complex_.search(
                pagination=StartingAfterPaging(
                    per_page=1,
                    starting_after="starting_after",
                ),
                query=SingleFilterSearchRequest(
                    field="field",
                    operator="=",
                    value="value",
                ),
            )
            async for item in response:
                yield item
            # alternatively, you can paginate page-by-page
            async for page in response.iter_pages():
                yield page


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "conversations/search",
            method="POST",
            json={
                "pagination": convert_and_respect_annotation_metadata(
                    object_=pagination, annotation=StartingAfterPaging, direction="write"
                ),
                "query": convert_and_respect_annotation_metadata(
                    object_=query, annotation=SearchRequestQuery, direction="write"
                ),
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                _parsed_response = typing.cast(
                    PaginatedConversationResponse,
                    parse_obj_as(
                        type_=PaginatedConversationResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
                _has_next = False
                _get_next = None
                if _parsed_response.pages is not None and _parsed_response.pages.next is not None:
                    _parsed_next = _parsed_response.pages.next.starting_after
                    _has_next = _parsed_next is not None and _parsed_next != ""
                    _get_next = lambda: self.search(
                        query=query,
                        pagination=pagination,
                        request_options=request_options,
                    )
                _items = _parsed_response.conversations
                return AsyncPager(has_next=_has_next, items=_items, get_next=_get_next)
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
