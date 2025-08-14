import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export interface GetFluffFiles {
}
export interface GetFluffFiles_Response {
    files: string[];
}
export interface GetFluffFiles_Request {
}
export interface GetFluffState {
}
export interface GetFluffState_Response {
    state: boolean;
}
export interface GetFluffState_Request {
}
export interface SetFluffState {
}
export interface SetFluffState_Request {
    state: boolean;
}
export interface SetFluffState_Response {
}
export declare const GetFluffFiles: {
    encode(_: GetFluffFiles, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffFiles;
    fromJSON(_: any): GetFluffFiles;
    toJSON(_: GetFluffFiles): unknown;
    create<I extends Exact<DeepPartial<GetFluffFiles>, I>>(base?: I): GetFluffFiles;
    fromPartial<I extends Exact<DeepPartial<GetFluffFiles>, I>>(_: I): GetFluffFiles;
};
export declare const GetFluffFiles_Response: {
    encode(message: GetFluffFiles_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffFiles_Response;
    fromJSON(object: any): GetFluffFiles_Response;
    toJSON(message: GetFluffFiles_Response): unknown;
    create<I extends Exact<DeepPartial<GetFluffFiles_Response>, I>>(base?: I): GetFluffFiles_Response;
    fromPartial<I extends Exact<DeepPartial<GetFluffFiles_Response>, I>>(object: I): GetFluffFiles_Response;
};
export declare const GetFluffFiles_Request: {
    encode(_: GetFluffFiles_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffFiles_Request;
    fromJSON(_: any): GetFluffFiles_Request;
    toJSON(_: GetFluffFiles_Request): unknown;
    create<I extends Exact<DeepPartial<GetFluffFiles_Request>, I>>(base?: I): GetFluffFiles_Request;
    fromPartial<I extends Exact<DeepPartial<GetFluffFiles_Request>, I>>(_: I): GetFluffFiles_Request;
};
export declare const GetFluffState: {
    encode(_: GetFluffState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffState;
    fromJSON(_: any): GetFluffState;
    toJSON(_: GetFluffState): unknown;
    create<I extends Exact<DeepPartial<GetFluffState>, I>>(base?: I): GetFluffState;
    fromPartial<I extends Exact<DeepPartial<GetFluffState>, I>>(_: I): GetFluffState;
};
export declare const GetFluffState_Response: {
    encode(message: GetFluffState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffState_Response;
    fromJSON(object: any): GetFluffState_Response;
    toJSON(message: GetFluffState_Response): unknown;
    create<I extends Exact<DeepPartial<GetFluffState_Response>, I>>(base?: I): GetFluffState_Response;
    fromPartial<I extends Exact<DeepPartial<GetFluffState_Response>, I>>(object: I): GetFluffState_Response;
};
export declare const GetFluffState_Request: {
    encode(_: GetFluffState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffState_Request;
    fromJSON(_: any): GetFluffState_Request;
    toJSON(_: GetFluffState_Request): unknown;
    create<I extends Exact<DeepPartial<GetFluffState_Request>, I>>(base?: I): GetFluffState_Request;
    fromPartial<I extends Exact<DeepPartial<GetFluffState_Request>, I>>(_: I): GetFluffState_Request;
};
export declare const SetFluffState: {
    encode(_: SetFluffState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetFluffState;
    fromJSON(_: any): SetFluffState;
    toJSON(_: SetFluffState): unknown;
    create<I extends Exact<DeepPartial<SetFluffState>, I>>(base?: I): SetFluffState;
    fromPartial<I extends Exact<DeepPartial<SetFluffState>, I>>(_: I): SetFluffState;
};
export declare const SetFluffState_Request: {
    encode(message: SetFluffState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetFluffState_Request;
    fromJSON(object: any): SetFluffState_Request;
    toJSON(message: SetFluffState_Request): unknown;
    create<I extends Exact<DeepPartial<SetFluffState_Request>, I>>(base?: I): SetFluffState_Request;
    fromPartial<I extends Exact<DeepPartial<SetFluffState_Request>, I>>(object: I): SetFluffState_Request;
};
export declare const SetFluffState_Response: {
    encode(_: SetFluffState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetFluffState_Response;
    fromJSON(_: any): SetFluffState_Response;
    toJSON(_: SetFluffState_Response): unknown;
    create<I extends Exact<DeepPartial<SetFluffState_Response>, I>>(base?: I): SetFluffState_Response;
    fromPartial<I extends Exact<DeepPartial<SetFluffState_Response>, I>>(_: I): SetFluffState_Response;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
