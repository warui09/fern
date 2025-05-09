# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic
import typing_extensions
from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ...core.serialization import FieldMetadata
from .scope import Scope


class StackFrame(UniversalBaseModel):
    method_name: typing_extensions.Annotated[str, FieldMetadata(alias="methodName")]
    line_number: typing_extensions.Annotated[int, FieldMetadata(alias="lineNumber")]
    scopes: typing.List[Scope]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
