/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type ExamplePrimitive =
    | FernIr.ExamplePrimitive.Integer
    | FernIr.ExamplePrimitive.Long
    | FernIr.ExamplePrimitive.Uint
    | FernIr.ExamplePrimitive.Uint64
    | FernIr.ExamplePrimitive.Float
    | FernIr.ExamplePrimitive.Double
    | FernIr.ExamplePrimitive.Boolean
    | FernIr.ExamplePrimitive.String
    | FernIr.ExamplePrimitive.Date_
    | FernIr.ExamplePrimitive.Datetime
    | FernIr.ExamplePrimitive.Uuid
    | FernIr.ExamplePrimitive.Base64
    | FernIr.ExamplePrimitive.BigInteger;

export namespace ExamplePrimitive {
    export interface Integer extends _Utils {
        type: "integer";
        integer: number;
    }

    export interface Long extends _Utils {
        type: "long";
        long: number;
    }

    export interface Uint extends _Utils {
        type: "uint";
        uint: number;
    }

    export interface Uint64 extends _Utils {
        type: "uint64";
        uint64: number;
    }

    export interface Float extends _Utils {
        type: "float";
        float: number;
    }

    export interface Double extends _Utils {
        type: "double";
        double: number;
    }

    export interface Boolean extends _Utils {
        type: "boolean";
        boolean: boolean;
    }

    export interface String extends _Utils {
        type: "string";
        string: FernIr.EscapedString;
    }

    export interface Date_ extends _Utils {
        type: "date";
        date: string;
    }

    export interface Datetime extends FernIr.ExampleDatetime, _Utils {
        type: "datetime";
    }

    export interface Uuid extends _Utils {
        type: "uuid";
        uuid: string;
    }

    export interface Base64 extends _Utils {
        type: "base64";
        base64: string;
    }

    export interface BigInteger extends _Utils {
        type: "bigInteger";
        bigInteger: string;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExamplePrimitive._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        integer: (value: number) => _Result;
        long: (value: number) => _Result;
        uint: (value: number) => _Result;
        uint64: (value: number) => _Result;
        float: (value: number) => _Result;
        double: (value: number) => _Result;
        boolean: (value: boolean) => _Result;
        string: (value: FernIr.EscapedString) => _Result;
        date: (value: string) => _Result;
        datetime: (value: FernIr.ExampleDatetime) => _Result;
        uuid: (value: string) => _Result;
        base64: (value: string) => _Result;
        bigInteger: (value: string) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ExamplePrimitive = {
    integer: (value: number): FernIr.ExamplePrimitive.Integer => {
        return {
            integer: value,
            type: "integer",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Integer,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    long: (value: number): FernIr.ExamplePrimitive.Long => {
        return {
            long: value,
            type: "long",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Long,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    uint: (value: number): FernIr.ExamplePrimitive.Uint => {
        return {
            uint: value,
            type: "uint",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Uint,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    uint64: (value: number): FernIr.ExamplePrimitive.Uint64 => {
        return {
            uint64: value,
            type: "uint64",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Uint64,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    float: (value: number): FernIr.ExamplePrimitive.Float => {
        return {
            float: value,
            type: "float",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Float,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    double: (value: number): FernIr.ExamplePrimitive.Double => {
        return {
            double: value,
            type: "double",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Double,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    boolean: (value: boolean): FernIr.ExamplePrimitive.Boolean => {
        return {
            boolean: value,
            type: "boolean",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Boolean,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    string: (value: FernIr.EscapedString): FernIr.ExamplePrimitive.String => {
        return {
            string: value,
            type: "string",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.String,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    date: (value: string): FernIr.ExamplePrimitive.Date_ => {
        return {
            date: value,
            type: "date",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Date_,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    datetime: (value: FernIr.ExampleDatetime): FernIr.ExamplePrimitive.Datetime => {
        return {
            ...value,
            type: "datetime",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Datetime,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    uuid: (value: string): FernIr.ExamplePrimitive.Uuid => {
        return {
            uuid: value,
            type: "uuid",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Uuid,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    base64: (value: string): FernIr.ExamplePrimitive.Base64 => {
        return {
            base64: value,
            type: "base64",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Base64,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    bigInteger: (value: string): FernIr.ExamplePrimitive.BigInteger => {
        return {
            bigInteger: value,
            type: "bigInteger",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.BigInteger,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>,
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: FernIr.ExamplePrimitive, visitor: FernIr.ExamplePrimitive._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "integer":
                return visitor.integer(value.integer);
            case "long":
                return visitor.long(value.long);
            case "uint":
                return visitor.uint(value.uint);
            case "uint64":
                return visitor.uint64(value.uint64);
            case "float":
                return visitor.float(value.float);
            case "double":
                return visitor.double(value.double);
            case "boolean":
                return visitor.boolean(value.boolean);
            case "string":
                return visitor.string(value.string);
            case "date":
                return visitor.date(value.date);
            case "datetime":
                return visitor.datetime(value);
            case "uuid":
                return visitor.uuid(value.uuid);
            case "base64":
                return visitor.base64(value.base64);
            case "bigInteger":
                return visitor.bigInteger(value.bigInteger);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
