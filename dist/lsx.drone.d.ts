import * as _m0 from "protobufjs/minimal";
export declare enum BombAreaId {
    AREA_MED = 0,
    AREA_CIC = 1,
    AREA_CORRIDOR = 2,
    AREA_HALL = 3,
    AREA_SCI = 4,
    AREA_TEC = 5,
    AREA_PARCEL = 6,
    AREA_TUNNEL = 7,
    UNRECOGNIZED = -1
}
export declare function bombAreaIdFromJSON(object: any): BombAreaId;
export declare function bombAreaIdToJSON(object: BombAreaId): string;
export declare enum BombAreaState {
    STATE_ARMED = 0,
    STATE_FUSED = 1,
    UNRECOGNIZED = -1
}
export declare function bombAreaStateFromJSON(object: any): BombAreaState;
export declare function bombAreaStateToJSON(object: BombAreaState): string;
export declare enum ModeSilentState {
    MODE_SILENT_STATE_EMPTY = 0,
    MODE_SILENT_STATE_NORMAL = 1,
    MODE_SILENT_STATE_SILENT = 2,
    MODE_SILENT_STATE_SILENT_DRONE = 3,
    UNRECOGNIZED = -1
}
export declare function modeSilentStateFromJSON(object: any): ModeSilentState;
export declare function modeSilentStateToJSON(object: ModeSilentState): string;
export interface BombBase {
}
export interface BombBase_Response {
}
export interface BombBase_Request {
}
export interface BombArea {
}
export interface BombArea_Response {
}
export interface BombArea_Request {
    id: BombAreaId;
}
export interface GetBombAreaState {
}
export interface GetBombAreaState_Response {
    state: BombAreaState;
}
export interface GetBombAreaState_Request {
    id: BombAreaId;
}
export interface GetModeSilentState {
}
export interface GetModeSilentState_Response {
    state: ModeSilentState;
}
export interface GetModeSilentState_Request {
}
export interface SetModeSilentState {
}
export interface SetModeSilentState_Request {
    state: ModeSilentState;
}
export interface SetModeSilentState_Response {
}
export declare const BombBase: {
    encode(_: BombBase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BombBase;
    fromJSON(_: any): BombBase;
    toJSON(_: BombBase): unknown;
    create<I extends Exact<DeepPartial<BombBase>, I>>(base?: I): BombBase;
    fromPartial<I extends Exact<DeepPartial<BombBase>, I>>(_: I): BombBase;
};
export declare const BombBase_Response: {
    encode(_: BombBase_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BombBase_Response;
    fromJSON(_: any): BombBase_Response;
    toJSON(_: BombBase_Response): unknown;
    create<I extends Exact<DeepPartial<BombBase_Response>, I>>(base?: I): BombBase_Response;
    fromPartial<I extends Exact<DeepPartial<BombBase_Response>, I>>(_: I): BombBase_Response;
};
export declare const BombBase_Request: {
    encode(_: BombBase_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BombBase_Request;
    fromJSON(_: any): BombBase_Request;
    toJSON(_: BombBase_Request): unknown;
    create<I extends Exact<DeepPartial<BombBase_Request>, I>>(base?: I): BombBase_Request;
    fromPartial<I extends Exact<DeepPartial<BombBase_Request>, I>>(_: I): BombBase_Request;
};
export declare const BombArea: {
    encode(_: BombArea, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BombArea;
    fromJSON(_: any): BombArea;
    toJSON(_: BombArea): unknown;
    create<I extends Exact<DeepPartial<BombArea>, I>>(base?: I): BombArea;
    fromPartial<I extends Exact<DeepPartial<BombArea>, I>>(_: I): BombArea;
};
export declare const BombArea_Response: {
    encode(_: BombArea_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BombArea_Response;
    fromJSON(_: any): BombArea_Response;
    toJSON(_: BombArea_Response): unknown;
    create<I extends Exact<DeepPartial<BombArea_Response>, I>>(base?: I): BombArea_Response;
    fromPartial<I extends Exact<DeepPartial<BombArea_Response>, I>>(_: I): BombArea_Response;
};
export declare const BombArea_Request: {
    encode(message: BombArea_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BombArea_Request;
    fromJSON(object: any): BombArea_Request;
    toJSON(message: BombArea_Request): unknown;
    create<I extends Exact<DeepPartial<BombArea_Request>, I>>(base?: I): BombArea_Request;
    fromPartial<I extends Exact<DeepPartial<BombArea_Request>, I>>(object: I): BombArea_Request;
};
export declare const GetBombAreaState: {
    encode(_: GetBombAreaState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBombAreaState;
    fromJSON(_: any): GetBombAreaState;
    toJSON(_: GetBombAreaState): unknown;
    create<I extends Exact<DeepPartial<GetBombAreaState>, I>>(base?: I): GetBombAreaState;
    fromPartial<I extends Exact<DeepPartial<GetBombAreaState>, I>>(_: I): GetBombAreaState;
};
export declare const GetBombAreaState_Response: {
    encode(message: GetBombAreaState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBombAreaState_Response;
    fromJSON(object: any): GetBombAreaState_Response;
    toJSON(message: GetBombAreaState_Response): unknown;
    create<I extends Exact<DeepPartial<GetBombAreaState_Response>, I>>(base?: I): GetBombAreaState_Response;
    fromPartial<I extends Exact<DeepPartial<GetBombAreaState_Response>, I>>(object: I): GetBombAreaState_Response;
};
export declare const GetBombAreaState_Request: {
    encode(message: GetBombAreaState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBombAreaState_Request;
    fromJSON(object: any): GetBombAreaState_Request;
    toJSON(message: GetBombAreaState_Request): unknown;
    create<I extends Exact<DeepPartial<GetBombAreaState_Request>, I>>(base?: I): GetBombAreaState_Request;
    fromPartial<I extends Exact<DeepPartial<GetBombAreaState_Request>, I>>(object: I): GetBombAreaState_Request;
};
export declare const GetModeSilentState: {
    encode(_: GetModeSilentState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetModeSilentState;
    fromJSON(_: any): GetModeSilentState;
    toJSON(_: GetModeSilentState): unknown;
    create<I extends Exact<DeepPartial<GetModeSilentState>, I>>(base?: I): GetModeSilentState;
    fromPartial<I extends Exact<DeepPartial<GetModeSilentState>, I>>(_: I): GetModeSilentState;
};
export declare const GetModeSilentState_Response: {
    encode(message: GetModeSilentState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetModeSilentState_Response;
    fromJSON(object: any): GetModeSilentState_Response;
    toJSON(message: GetModeSilentState_Response): unknown;
    create<I extends Exact<DeepPartial<GetModeSilentState_Response>, I>>(base?: I): GetModeSilentState_Response;
    fromPartial<I extends Exact<DeepPartial<GetModeSilentState_Response>, I>>(object: I): GetModeSilentState_Response;
};
export declare const GetModeSilentState_Request: {
    encode(_: GetModeSilentState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetModeSilentState_Request;
    fromJSON(_: any): GetModeSilentState_Request;
    toJSON(_: GetModeSilentState_Request): unknown;
    create<I extends Exact<DeepPartial<GetModeSilentState_Request>, I>>(base?: I): GetModeSilentState_Request;
    fromPartial<I extends Exact<DeepPartial<GetModeSilentState_Request>, I>>(_: I): GetModeSilentState_Request;
};
export declare const SetModeSilentState: {
    encode(_: SetModeSilentState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetModeSilentState;
    fromJSON(_: any): SetModeSilentState;
    toJSON(_: SetModeSilentState): unknown;
    create<I extends Exact<DeepPartial<SetModeSilentState>, I>>(base?: I): SetModeSilentState;
    fromPartial<I extends Exact<DeepPartial<SetModeSilentState>, I>>(_: I): SetModeSilentState;
};
export declare const SetModeSilentState_Request: {
    encode(message: SetModeSilentState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetModeSilentState_Request;
    fromJSON(object: any): SetModeSilentState_Request;
    toJSON(message: SetModeSilentState_Request): unknown;
    create<I extends Exact<DeepPartial<SetModeSilentState_Request>, I>>(base?: I): SetModeSilentState_Request;
    fromPartial<I extends Exact<DeepPartial<SetModeSilentState_Request>, I>>(object: I): SetModeSilentState_Request;
};
export declare const SetModeSilentState_Response: {
    encode(_: SetModeSilentState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetModeSilentState_Response;
    fromJSON(_: any): SetModeSilentState_Response;
    toJSON(_: SetModeSilentState_Response): unknown;
    create<I extends Exact<DeepPartial<SetModeSilentState_Response>, I>>(base?: I): SetModeSilentState_Response;
    fromPartial<I extends Exact<DeepPartial<SetModeSilentState_Response>, I>>(_: I): SetModeSilentState_Response;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
