import * as _m0 from "protobufjs/minimal";
import { LockState } from "./lsx.common";
import { PowerState } from "./lsx.power";
export declare const protobufPackage = "";
export declare enum LightSwitchState {
    SWITCH_STATE_OFF = 0,
    SWITCH_STATE_ON = 1,
    UNRECOGNIZED = -1
}
export declare function lightSwitchStateFromJSON(object: any): LightSwitchState;
export declare function lightSwitchStateToJSON(object: LightSwitchState): string;
export declare enum LightDMXState {
    DMX_STATE_EMPTY = 0,
    DMX_STATE_OFF = 1,
    DMX_STATE_WHITE = 2,
    DMX_STATE_RED = 3,
    DMX_STATE_FLICKER = 4,
    UNRECOGNIZED = -1
}
export declare function lightDMXStateFromJSON(object: any): LightDMXState;
export declare function lightDMXStateToJSON(object: LightDMXState): string;
export declare enum LightMode {
    LIGHT_MODE_EMPTY = 0,
    LIGHT_MODE_WHITE = 1,
    LIGHT_MODE_RED = 2,
    LIGHT_MODE_BLACKOUT = 3,
    UNRECOGNIZED = -1
}
export declare function lightModeFromJSON(object: any): LightMode;
export declare function lightModeToJSON(object: LightMode): string;
export declare enum LightId {
    LIGHT_EMPTY = 0,
    LIGHT_OG_BASE_MED = 1,
    LIGHT_OG_BASE_ADM = 2,
    LIGHT_OG_BASE_CIC = 3,
    LIGHT_OG_BASE_SCI = 4,
    LIGHT_OG_BASE_TEC = 5,
    LIGHT_OG_BASE_HC = 7,
    LIGHT_OG_HALL = 8,
    LIGHT_OG_COURTYARD = 9,
    LIGHT_OG_MESSHALL = 10,
    LIGHT_OG_GATE = 11,
    LIGHT_OG_PARCELS = 12,
    LIGHT_UG_RWALL = 13,
    /** LIGHT_UG_HALL - LIGHT_UG_PARCELS_RIGHT = 14; */
    LIGHT_UG_HALL = 15,
    LIGHT_OG_LOG = 16,
    LIGHT_OG_BASE_FC = 17,
    LIGHT_UG_BASE_SEC = 18,
    LIGHT_TUNNEL = 19,
    UNRECOGNIZED = -1
}
export declare function lightIdFromJSON(object: any): LightId;
export declare function lightIdToJSON(object: LightId): string;
export interface GetLightPowerState {
    request?: GetLightPowerState_Request | undefined;
    response?: GetLightPowerState_Response | undefined;
    error?: string | undefined;
}
export interface GetLightPowerState_Response {
    state: PowerState;
}
export interface GetLightPowerState_Request {
    id: LightId;
}
export interface SetLightPowerState {
    request?: SetLightPowerState_Request | undefined;
    response?: SetLightPowerState_Response | undefined;
    error?: string | undefined;
}
export interface SetLightPowerState_Request {
    id: LightId;
    state: PowerState;
}
export interface SetLightPowerState_Response {
}
export interface GetLightSwitchState {
    request?: GetLightSwitchState_Request | undefined;
    response?: GetLightSwitchState_Response | undefined;
    error?: string | undefined;
}
export interface GetLightSwitchState_Response {
    state: LightSwitchState;
}
export interface GetLightSwitchState_Request {
    id: LightId;
}
export interface SetLightSwitchState {
    request?: SetLightSwitchState_Request | undefined;
    response?: SetLightSwitchState_Response | undefined;
    error?: string | undefined;
}
export interface SetLightSwitchState_Request {
    id: LightId;
    state: LightSwitchState;
}
export interface SetLightSwitchState_Response {
}
export interface GetLightDmxState {
    request?: GetLightDmxState_Request | undefined;
    response?: GetLightDmxState_Response | undefined;
    error?: string | undefined;
}
export interface GetLightDmxState_Response {
    state: LightDMXState;
}
export interface GetLightDmxState_Request {
    id: LightId;
}
export interface SetLightDmxState {
    request?: SetLightDmxState_Request | undefined;
    response?: SetLightDmxState_Response | undefined;
    error?: string | undefined;
}
export interface SetLightDmxState_Request {
    id: LightId;
    state: LightDMXState;
}
export interface SetLightDmxState_Response {
}
export interface GetLightLockState {
    request?: GetLightLockState_Request | undefined;
    response?: GetLightLockState_Response | undefined;
    error?: string | undefined;
}
export interface GetLightLockState_Response {
    state: LockState;
}
export interface GetLightLockState_Request {
    id: LightId;
}
export interface SetLightLockState {
    request?: SetLightLockState_Request | undefined;
    response?: SetLightLockState_Response | undefined;
    error?: string | undefined;
}
export interface SetLightLockState_Request {
    id: LightId;
    state: LockState;
}
export interface SetLightLockState_Response {
}
export interface GetLightMode {
    request?: GetLightMode_Request | undefined;
    response?: GetLightMode_Response | undefined;
    error?: string | undefined;
}
export interface GetLightMode_Response {
    mode: LightMode;
}
export interface GetLightMode_Request {
    id: LightId;
}
export interface SetLightMode {
    request?: SetLightMode_Request | undefined;
    response?: SetLightMode_Response | undefined;
    error?: string | undefined;
}
export interface SetLightMode_Request {
    id: LightId;
    mode: LightMode;
}
export interface SetLightMode_Response {
}
export declare const GetLightPowerState: {
    encode(message: GetLightPowerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightPowerState;
    fromJSON(object: any): GetLightPowerState;
    toJSON(message: GetLightPowerState): unknown;
    create<I extends Exact<DeepPartial<GetLightPowerState>, I>>(base?: I): GetLightPowerState;
    fromPartial<I extends Exact<DeepPartial<GetLightPowerState>, I>>(object: I): GetLightPowerState;
};
export declare const GetLightPowerState_Response: {
    encode(message: GetLightPowerState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightPowerState_Response;
    fromJSON(object: any): GetLightPowerState_Response;
    toJSON(message: GetLightPowerState_Response): unknown;
    create<I extends Exact<DeepPartial<GetLightPowerState_Response>, I>>(base?: I): GetLightPowerState_Response;
    fromPartial<I extends Exact<DeepPartial<GetLightPowerState_Response>, I>>(object: I): GetLightPowerState_Response;
};
export declare const GetLightPowerState_Request: {
    encode(message: GetLightPowerState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightPowerState_Request;
    fromJSON(object: any): GetLightPowerState_Request;
    toJSON(message: GetLightPowerState_Request): unknown;
    create<I extends Exact<DeepPartial<GetLightPowerState_Request>, I>>(base?: I): GetLightPowerState_Request;
    fromPartial<I extends Exact<DeepPartial<GetLightPowerState_Request>, I>>(object: I): GetLightPowerState_Request;
};
export declare const SetLightPowerState: {
    encode(message: SetLightPowerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightPowerState;
    fromJSON(object: any): SetLightPowerState;
    toJSON(message: SetLightPowerState): unknown;
    create<I extends Exact<DeepPartial<SetLightPowerState>, I>>(base?: I): SetLightPowerState;
    fromPartial<I extends Exact<DeepPartial<SetLightPowerState>, I>>(object: I): SetLightPowerState;
};
export declare const SetLightPowerState_Request: {
    encode(message: SetLightPowerState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightPowerState_Request;
    fromJSON(object: any): SetLightPowerState_Request;
    toJSON(message: SetLightPowerState_Request): unknown;
    create<I extends Exact<DeepPartial<SetLightPowerState_Request>, I>>(base?: I): SetLightPowerState_Request;
    fromPartial<I extends Exact<DeepPartial<SetLightPowerState_Request>, I>>(object: I): SetLightPowerState_Request;
};
export declare const SetLightPowerState_Response: {
    encode(_: SetLightPowerState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightPowerState_Response;
    fromJSON(_: any): SetLightPowerState_Response;
    toJSON(_: SetLightPowerState_Response): unknown;
    create<I extends Exact<DeepPartial<SetLightPowerState_Response>, I>>(base?: I): SetLightPowerState_Response;
    fromPartial<I extends Exact<DeepPartial<SetLightPowerState_Response>, I>>(_: I): SetLightPowerState_Response;
};
export declare const GetLightSwitchState: {
    encode(message: GetLightSwitchState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightSwitchState;
    fromJSON(object: any): GetLightSwitchState;
    toJSON(message: GetLightSwitchState): unknown;
    create<I extends Exact<DeepPartial<GetLightSwitchState>, I>>(base?: I): GetLightSwitchState;
    fromPartial<I extends Exact<DeepPartial<GetLightSwitchState>, I>>(object: I): GetLightSwitchState;
};
export declare const GetLightSwitchState_Response: {
    encode(message: GetLightSwitchState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightSwitchState_Response;
    fromJSON(object: any): GetLightSwitchState_Response;
    toJSON(message: GetLightSwitchState_Response): unknown;
    create<I extends Exact<DeepPartial<GetLightSwitchState_Response>, I>>(base?: I): GetLightSwitchState_Response;
    fromPartial<I extends Exact<DeepPartial<GetLightSwitchState_Response>, I>>(object: I): GetLightSwitchState_Response;
};
export declare const GetLightSwitchState_Request: {
    encode(message: GetLightSwitchState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightSwitchState_Request;
    fromJSON(object: any): GetLightSwitchState_Request;
    toJSON(message: GetLightSwitchState_Request): unknown;
    create<I extends Exact<DeepPartial<GetLightSwitchState_Request>, I>>(base?: I): GetLightSwitchState_Request;
    fromPartial<I extends Exact<DeepPartial<GetLightSwitchState_Request>, I>>(object: I): GetLightSwitchState_Request;
};
export declare const SetLightSwitchState: {
    encode(message: SetLightSwitchState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightSwitchState;
    fromJSON(object: any): SetLightSwitchState;
    toJSON(message: SetLightSwitchState): unknown;
    create<I extends Exact<DeepPartial<SetLightSwitchState>, I>>(base?: I): SetLightSwitchState;
    fromPartial<I extends Exact<DeepPartial<SetLightSwitchState>, I>>(object: I): SetLightSwitchState;
};
export declare const SetLightSwitchState_Request: {
    encode(message: SetLightSwitchState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightSwitchState_Request;
    fromJSON(object: any): SetLightSwitchState_Request;
    toJSON(message: SetLightSwitchState_Request): unknown;
    create<I extends Exact<DeepPartial<SetLightSwitchState_Request>, I>>(base?: I): SetLightSwitchState_Request;
    fromPartial<I extends Exact<DeepPartial<SetLightSwitchState_Request>, I>>(object: I): SetLightSwitchState_Request;
};
export declare const SetLightSwitchState_Response: {
    encode(_: SetLightSwitchState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightSwitchState_Response;
    fromJSON(_: any): SetLightSwitchState_Response;
    toJSON(_: SetLightSwitchState_Response): unknown;
    create<I extends Exact<DeepPartial<SetLightSwitchState_Response>, I>>(base?: I): SetLightSwitchState_Response;
    fromPartial<I extends Exact<DeepPartial<SetLightSwitchState_Response>, I>>(_: I): SetLightSwitchState_Response;
};
export declare const GetLightDmxState: {
    encode(message: GetLightDmxState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightDmxState;
    fromJSON(object: any): GetLightDmxState;
    toJSON(message: GetLightDmxState): unknown;
    create<I extends Exact<DeepPartial<GetLightDmxState>, I>>(base?: I): GetLightDmxState;
    fromPartial<I extends Exact<DeepPartial<GetLightDmxState>, I>>(object: I): GetLightDmxState;
};
export declare const GetLightDmxState_Response: {
    encode(message: GetLightDmxState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightDmxState_Response;
    fromJSON(object: any): GetLightDmxState_Response;
    toJSON(message: GetLightDmxState_Response): unknown;
    create<I extends Exact<DeepPartial<GetLightDmxState_Response>, I>>(base?: I): GetLightDmxState_Response;
    fromPartial<I extends Exact<DeepPartial<GetLightDmxState_Response>, I>>(object: I): GetLightDmxState_Response;
};
export declare const GetLightDmxState_Request: {
    encode(message: GetLightDmxState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightDmxState_Request;
    fromJSON(object: any): GetLightDmxState_Request;
    toJSON(message: GetLightDmxState_Request): unknown;
    create<I extends Exact<DeepPartial<GetLightDmxState_Request>, I>>(base?: I): GetLightDmxState_Request;
    fromPartial<I extends Exact<DeepPartial<GetLightDmxState_Request>, I>>(object: I): GetLightDmxState_Request;
};
export declare const SetLightDmxState: {
    encode(message: SetLightDmxState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightDmxState;
    fromJSON(object: any): SetLightDmxState;
    toJSON(message: SetLightDmxState): unknown;
    create<I extends Exact<DeepPartial<SetLightDmxState>, I>>(base?: I): SetLightDmxState;
    fromPartial<I extends Exact<DeepPartial<SetLightDmxState>, I>>(object: I): SetLightDmxState;
};
export declare const SetLightDmxState_Request: {
    encode(message: SetLightDmxState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightDmxState_Request;
    fromJSON(object: any): SetLightDmxState_Request;
    toJSON(message: SetLightDmxState_Request): unknown;
    create<I extends Exact<DeepPartial<SetLightDmxState_Request>, I>>(base?: I): SetLightDmxState_Request;
    fromPartial<I extends Exact<DeepPartial<SetLightDmxState_Request>, I>>(object: I): SetLightDmxState_Request;
};
export declare const SetLightDmxState_Response: {
    encode(_: SetLightDmxState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightDmxState_Response;
    fromJSON(_: any): SetLightDmxState_Response;
    toJSON(_: SetLightDmxState_Response): unknown;
    create<I extends Exact<DeepPartial<SetLightDmxState_Response>, I>>(base?: I): SetLightDmxState_Response;
    fromPartial<I extends Exact<DeepPartial<SetLightDmxState_Response>, I>>(_: I): SetLightDmxState_Response;
};
export declare const GetLightLockState: {
    encode(message: GetLightLockState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightLockState;
    fromJSON(object: any): GetLightLockState;
    toJSON(message: GetLightLockState): unknown;
    create<I extends Exact<DeepPartial<GetLightLockState>, I>>(base?: I): GetLightLockState;
    fromPartial<I extends Exact<DeepPartial<GetLightLockState>, I>>(object: I): GetLightLockState;
};
export declare const GetLightLockState_Response: {
    encode(message: GetLightLockState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightLockState_Response;
    fromJSON(object: any): GetLightLockState_Response;
    toJSON(message: GetLightLockState_Response): unknown;
    create<I extends Exact<DeepPartial<GetLightLockState_Response>, I>>(base?: I): GetLightLockState_Response;
    fromPartial<I extends Exact<DeepPartial<GetLightLockState_Response>, I>>(object: I): GetLightLockState_Response;
};
export declare const GetLightLockState_Request: {
    encode(message: GetLightLockState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightLockState_Request;
    fromJSON(object: any): GetLightLockState_Request;
    toJSON(message: GetLightLockState_Request): unknown;
    create<I extends Exact<DeepPartial<GetLightLockState_Request>, I>>(base?: I): GetLightLockState_Request;
    fromPartial<I extends Exact<DeepPartial<GetLightLockState_Request>, I>>(object: I): GetLightLockState_Request;
};
export declare const SetLightLockState: {
    encode(message: SetLightLockState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightLockState;
    fromJSON(object: any): SetLightLockState;
    toJSON(message: SetLightLockState): unknown;
    create<I extends Exact<DeepPartial<SetLightLockState>, I>>(base?: I): SetLightLockState;
    fromPartial<I extends Exact<DeepPartial<SetLightLockState>, I>>(object: I): SetLightLockState;
};
export declare const SetLightLockState_Request: {
    encode(message: SetLightLockState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightLockState_Request;
    fromJSON(object: any): SetLightLockState_Request;
    toJSON(message: SetLightLockState_Request): unknown;
    create<I extends Exact<DeepPartial<SetLightLockState_Request>, I>>(base?: I): SetLightLockState_Request;
    fromPartial<I extends Exact<DeepPartial<SetLightLockState_Request>, I>>(object: I): SetLightLockState_Request;
};
export declare const SetLightLockState_Response: {
    encode(_: SetLightLockState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightLockState_Response;
    fromJSON(_: any): SetLightLockState_Response;
    toJSON(_: SetLightLockState_Response): unknown;
    create<I extends Exact<DeepPartial<SetLightLockState_Response>, I>>(base?: I): SetLightLockState_Response;
    fromPartial<I extends Exact<DeepPartial<SetLightLockState_Response>, I>>(_: I): SetLightLockState_Response;
};
export declare const GetLightMode: {
    encode(message: GetLightMode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightMode;
    fromJSON(object: any): GetLightMode;
    toJSON(message: GetLightMode): unknown;
    create<I extends Exact<DeepPartial<GetLightMode>, I>>(base?: I): GetLightMode;
    fromPartial<I extends Exact<DeepPartial<GetLightMode>, I>>(object: I): GetLightMode;
};
export declare const GetLightMode_Response: {
    encode(message: GetLightMode_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightMode_Response;
    fromJSON(object: any): GetLightMode_Response;
    toJSON(message: GetLightMode_Response): unknown;
    create<I extends Exact<DeepPartial<GetLightMode_Response>, I>>(base?: I): GetLightMode_Response;
    fromPartial<I extends Exact<DeepPartial<GetLightMode_Response>, I>>(object: I): GetLightMode_Response;
};
export declare const GetLightMode_Request: {
    encode(message: GetLightMode_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLightMode_Request;
    fromJSON(object: any): GetLightMode_Request;
    toJSON(message: GetLightMode_Request): unknown;
    create<I extends Exact<DeepPartial<GetLightMode_Request>, I>>(base?: I): GetLightMode_Request;
    fromPartial<I extends Exact<DeepPartial<GetLightMode_Request>, I>>(object: I): GetLightMode_Request;
};
export declare const SetLightMode: {
    encode(message: SetLightMode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightMode;
    fromJSON(object: any): SetLightMode;
    toJSON(message: SetLightMode): unknown;
    create<I extends Exact<DeepPartial<SetLightMode>, I>>(base?: I): SetLightMode;
    fromPartial<I extends Exact<DeepPartial<SetLightMode>, I>>(object: I): SetLightMode;
};
export declare const SetLightMode_Request: {
    encode(message: SetLightMode_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightMode_Request;
    fromJSON(object: any): SetLightMode_Request;
    toJSON(message: SetLightMode_Request): unknown;
    create<I extends Exact<DeepPartial<SetLightMode_Request>, I>>(base?: I): SetLightMode_Request;
    fromPartial<I extends Exact<DeepPartial<SetLightMode_Request>, I>>(object: I): SetLightMode_Request;
};
export declare const SetLightMode_Response: {
    encode(_: SetLightMode_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLightMode_Response;
    fromJSON(_: any): SetLightMode_Response;
    toJSON(_: SetLightMode_Response): unknown;
    create<I extends Exact<DeepPartial<SetLightMode_Response>, I>>(base?: I): SetLightMode_Response;
    fromPartial<I extends Exact<DeepPartial<SetLightMode_Response>, I>>(_: I): SetLightMode_Response;
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
