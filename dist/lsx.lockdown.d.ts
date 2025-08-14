import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export declare enum LockdownState {
    LOCKDOWN_STATE_EMPTY = 0,
    LOCKDOWN_STATE_NORMAL = 1,
    LOCKDOWN_STATE_LOCKDOWN = 2,
    UNRECOGNIZED = -1
}
export declare function lockdownStateFromJSON(object: any): LockdownState;
export declare function lockdownStateToJSON(object: LockdownState): string;
export interface GetAutoLockdown {
}
export interface GetAutoLockdown_Response {
    state: boolean;
}
export interface GetAutoLockdown_Request {
}
export interface SetAutoLockdown {
}
export interface SetAutoLockdown_Request {
    state: boolean;
}
export interface SetAutoLockdown_Response {
}
export interface GetLockdownState {
}
export interface GetLockdownState_Response {
    state: LockdownState;
}
export interface GetLockdownState_Request {
}
export interface SetLockdownState {
}
export interface SetLockdownState_Request {
    state: LockdownState;
}
export interface SetLockdownState_Response {
}
export interface GetLockdownAnnouncements {
}
export interface GetLockdownAnnouncements_Response {
    state: boolean;
}
export interface GetLockdownAnnouncements_Request {
}
export interface SetLockdownAnnouncements {
}
export interface SetLockdownAnnouncements_Request {
    state: boolean;
}
export interface SetLockdownAnnouncements_Response {
}
export declare const GetAutoLockdown: {
    encode(_: GetAutoLockdown, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAutoLockdown;
    fromJSON(_: any): GetAutoLockdown;
    toJSON(_: GetAutoLockdown): unknown;
    create<I extends Exact<DeepPartial<GetAutoLockdown>, I>>(base?: I): GetAutoLockdown;
    fromPartial<I extends Exact<DeepPartial<GetAutoLockdown>, I>>(_: I): GetAutoLockdown;
};
export declare const GetAutoLockdown_Response: {
    encode(message: GetAutoLockdown_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAutoLockdown_Response;
    fromJSON(object: any): GetAutoLockdown_Response;
    toJSON(message: GetAutoLockdown_Response): unknown;
    create<I extends Exact<DeepPartial<GetAutoLockdown_Response>, I>>(base?: I): GetAutoLockdown_Response;
    fromPartial<I extends Exact<DeepPartial<GetAutoLockdown_Response>, I>>(object: I): GetAutoLockdown_Response;
};
export declare const GetAutoLockdown_Request: {
    encode(_: GetAutoLockdown_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAutoLockdown_Request;
    fromJSON(_: any): GetAutoLockdown_Request;
    toJSON(_: GetAutoLockdown_Request): unknown;
    create<I extends Exact<DeepPartial<GetAutoLockdown_Request>, I>>(base?: I): GetAutoLockdown_Request;
    fromPartial<I extends Exact<DeepPartial<GetAutoLockdown_Request>, I>>(_: I): GetAutoLockdown_Request;
};
export declare const SetAutoLockdown: {
    encode(_: SetAutoLockdown, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAutoLockdown;
    fromJSON(_: any): SetAutoLockdown;
    toJSON(_: SetAutoLockdown): unknown;
    create<I extends Exact<DeepPartial<SetAutoLockdown>, I>>(base?: I): SetAutoLockdown;
    fromPartial<I extends Exact<DeepPartial<SetAutoLockdown>, I>>(_: I): SetAutoLockdown;
};
export declare const SetAutoLockdown_Request: {
    encode(message: SetAutoLockdown_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAutoLockdown_Request;
    fromJSON(object: any): SetAutoLockdown_Request;
    toJSON(message: SetAutoLockdown_Request): unknown;
    create<I extends Exact<DeepPartial<SetAutoLockdown_Request>, I>>(base?: I): SetAutoLockdown_Request;
    fromPartial<I extends Exact<DeepPartial<SetAutoLockdown_Request>, I>>(object: I): SetAutoLockdown_Request;
};
export declare const SetAutoLockdown_Response: {
    encode(_: SetAutoLockdown_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAutoLockdown_Response;
    fromJSON(_: any): SetAutoLockdown_Response;
    toJSON(_: SetAutoLockdown_Response): unknown;
    create<I extends Exact<DeepPartial<SetAutoLockdown_Response>, I>>(base?: I): SetAutoLockdown_Response;
    fromPartial<I extends Exact<DeepPartial<SetAutoLockdown_Response>, I>>(_: I): SetAutoLockdown_Response;
};
export declare const GetLockdownState: {
    encode(_: GetLockdownState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockdownState;
    fromJSON(_: any): GetLockdownState;
    toJSON(_: GetLockdownState): unknown;
    create<I extends Exact<DeepPartial<GetLockdownState>, I>>(base?: I): GetLockdownState;
    fromPartial<I extends Exact<DeepPartial<GetLockdownState>, I>>(_: I): GetLockdownState;
};
export declare const GetLockdownState_Response: {
    encode(message: GetLockdownState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockdownState_Response;
    fromJSON(object: any): GetLockdownState_Response;
    toJSON(message: GetLockdownState_Response): unknown;
    create<I extends Exact<DeepPartial<GetLockdownState_Response>, I>>(base?: I): GetLockdownState_Response;
    fromPartial<I extends Exact<DeepPartial<GetLockdownState_Response>, I>>(object: I): GetLockdownState_Response;
};
export declare const GetLockdownState_Request: {
    encode(_: GetLockdownState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockdownState_Request;
    fromJSON(_: any): GetLockdownState_Request;
    toJSON(_: GetLockdownState_Request): unknown;
    create<I extends Exact<DeepPartial<GetLockdownState_Request>, I>>(base?: I): GetLockdownState_Request;
    fromPartial<I extends Exact<DeepPartial<GetLockdownState_Request>, I>>(_: I): GetLockdownState_Request;
};
export declare const SetLockdownState: {
    encode(_: SetLockdownState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLockdownState;
    fromJSON(_: any): SetLockdownState;
    toJSON(_: SetLockdownState): unknown;
    create<I extends Exact<DeepPartial<SetLockdownState>, I>>(base?: I): SetLockdownState;
    fromPartial<I extends Exact<DeepPartial<SetLockdownState>, I>>(_: I): SetLockdownState;
};
export declare const SetLockdownState_Request: {
    encode(message: SetLockdownState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLockdownState_Request;
    fromJSON(object: any): SetLockdownState_Request;
    toJSON(message: SetLockdownState_Request): unknown;
    create<I extends Exact<DeepPartial<SetLockdownState_Request>, I>>(base?: I): SetLockdownState_Request;
    fromPartial<I extends Exact<DeepPartial<SetLockdownState_Request>, I>>(object: I): SetLockdownState_Request;
};
export declare const SetLockdownState_Response: {
    encode(_: SetLockdownState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLockdownState_Response;
    fromJSON(_: any): SetLockdownState_Response;
    toJSON(_: SetLockdownState_Response): unknown;
    create<I extends Exact<DeepPartial<SetLockdownState_Response>, I>>(base?: I): SetLockdownState_Response;
    fromPartial<I extends Exact<DeepPartial<SetLockdownState_Response>, I>>(_: I): SetLockdownState_Response;
};
export declare const GetLockdownAnnouncements: {
    encode(_: GetLockdownAnnouncements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockdownAnnouncements;
    fromJSON(_: any): GetLockdownAnnouncements;
    toJSON(_: GetLockdownAnnouncements): unknown;
    create<I extends Exact<DeepPartial<GetLockdownAnnouncements>, I>>(base?: I): GetLockdownAnnouncements;
    fromPartial<I extends Exact<DeepPartial<GetLockdownAnnouncements>, I>>(_: I): GetLockdownAnnouncements;
};
export declare const GetLockdownAnnouncements_Response: {
    encode(message: GetLockdownAnnouncements_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockdownAnnouncements_Response;
    fromJSON(object: any): GetLockdownAnnouncements_Response;
    toJSON(message: GetLockdownAnnouncements_Response): unknown;
    create<I extends Exact<DeepPartial<GetLockdownAnnouncements_Response>, I>>(base?: I): GetLockdownAnnouncements_Response;
    fromPartial<I extends Exact<DeepPartial<GetLockdownAnnouncements_Response>, I>>(object: I): GetLockdownAnnouncements_Response;
};
export declare const GetLockdownAnnouncements_Request: {
    encode(_: GetLockdownAnnouncements_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockdownAnnouncements_Request;
    fromJSON(_: any): GetLockdownAnnouncements_Request;
    toJSON(_: GetLockdownAnnouncements_Request): unknown;
    create<I extends Exact<DeepPartial<GetLockdownAnnouncements_Request>, I>>(base?: I): GetLockdownAnnouncements_Request;
    fromPartial<I extends Exact<DeepPartial<GetLockdownAnnouncements_Request>, I>>(_: I): GetLockdownAnnouncements_Request;
};
export declare const SetLockdownAnnouncements: {
    encode(_: SetLockdownAnnouncements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLockdownAnnouncements;
    fromJSON(_: any): SetLockdownAnnouncements;
    toJSON(_: SetLockdownAnnouncements): unknown;
    create<I extends Exact<DeepPartial<SetLockdownAnnouncements>, I>>(base?: I): SetLockdownAnnouncements;
    fromPartial<I extends Exact<DeepPartial<SetLockdownAnnouncements>, I>>(_: I): SetLockdownAnnouncements;
};
export declare const SetLockdownAnnouncements_Request: {
    encode(message: SetLockdownAnnouncements_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLockdownAnnouncements_Request;
    fromJSON(object: any): SetLockdownAnnouncements_Request;
    toJSON(message: SetLockdownAnnouncements_Request): unknown;
    create<I extends Exact<DeepPartial<SetLockdownAnnouncements_Request>, I>>(base?: I): SetLockdownAnnouncements_Request;
    fromPartial<I extends Exact<DeepPartial<SetLockdownAnnouncements_Request>, I>>(object: I): SetLockdownAnnouncements_Request;
};
export declare const SetLockdownAnnouncements_Response: {
    encode(_: SetLockdownAnnouncements_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLockdownAnnouncements_Response;
    fromJSON(_: any): SetLockdownAnnouncements_Response;
    toJSON(_: SetLockdownAnnouncements_Response): unknown;
    create<I extends Exact<DeepPartial<SetLockdownAnnouncements_Response>, I>>(base?: I): SetLockdownAnnouncements_Response;
    fromPartial<I extends Exact<DeepPartial<SetLockdownAnnouncements_Response>, I>>(_: I): SetLockdownAnnouncements_Response;
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
