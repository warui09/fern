from pydantic import BaseModel
from typing import List
from resources.v_2.resources.problem.types.parameter import Parameter
from resources.v_2.resources.problem.types.function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from dt import datetime
from core.datetime_utils import serialize_datetime
class VoidFunctionDefinitionThatTakesActualResult(BaseModel):
"""The generated signature will include an additional param, actualResult"""
    additional_parameters: List[Parameter] = 
    code: FunctionImplementationForMultipleLanguages
    class Config:
        frozen = True
        smart_union = True
        json_encoders = {datetime: serialize_datetime}

