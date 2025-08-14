import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export declare enum PowerState {
    POWER_STATE_EMPTY = 0,
    POWER_STATE_POWERED = 1,
    POWER_STATE_CRITICAL = 2,
    POWER_STATE_UNPOWERED = 3,
    POWER_STATE_EMERGENCY = 4,
    UNRECOGNIZED = -1
}
export declare function powerStateFromJSON(object: any): PowerState;
export declare function powerStateToJSON(object: PowerState): string;
export declare enum PowerPlantState {
    STATE_EMPTY = 0,
    STATE_NORMAL = 1,
    STATE_POWER_SAVING = 2,
    STATE_CRITICAL = 3,
    STATE_OFFLINE = 4,
    UNRECOGNIZED = -1
}
export declare function powerPlantStateFromJSON(object: any): PowerPlantState;
export declare function powerPlantStateToJSON(object: PowerPlantState): string;
export declare enum PowerDevice {
    DEVICE_CIC_MAPTOOL = 0,
    DEVICE_ADM_BASETOOL = 1,
    DEVICE_IRD_RAPIDCARE = 2,
    DEVICE_MED_OP_ROOM = 3,
    DEVICE_CIC_COFFEE = 4,
    UNRECOGNIZED = -1
}
export declare function powerDeviceFromJSON(object: any): PowerDevice;
export declare function powerDeviceToJSON(object: PowerDevice): string;
export interface GetPowerPlantState {
}
export interface GetPowerPlantState_Request {
}
export interface GetPowerPlantState_Response {
    state: PowerPlantState;
}
export interface SetPowerPlantState {
}
export interface SetPowerPlantState_Request {
    state: PowerPlantState;
}
export interface SetPowerPlantState_Response {
}
export interface SetDevicePowerState {
}
export interface SetDevicePowerState_Request {
    device: PowerDevice;
    state: PowerState;
}
export interface SetDevicePowerState_Response {
}
export interface GetDevicePowerState {
}
export interface GetDevicePowerState_Request {
    device: PowerDevice;
}
export interface GetDevicePowerState_Response {
    state: PowerState;
}
export declare const GetPowerPlantState: {
    encode(_: GetPowerPlantState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPowerPlantState;
    fromJSON(_: any): GetPowerPlantState;
    toJSON(_: GetPowerPlantState): unknown;
    create<I extends Exact<DeepPartial<GetPowerPlantState>, I>>(base?: I): GetPowerPlantState;
    fromPartial<I extends Exact<DeepPartial<GetPowerPlantState>, I>>(_: I): GetPowerPlantState;
};
export declare const GetPowerPlantState_Request: {
    encode(_: GetPowerPlantState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPowerPlantState_Request;
    fromJSON(_: any): GetPowerPlantState_Request;
    toJSON(_: GetPowerPlantState_Request): unknown;
    create<I extends Exact<DeepPartial<GetPowerPlantState_Request>, I>>(base?: I): GetPowerPlantState_Request;
    fromPartial<I extends Exact<DeepPartial<GetPowerPlantState_Request>, I>>(_: I): GetPowerPlantState_Request;
};
export declare const GetPowerPlantState_Response: {
    encode(message: GetPowerPlantState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPowerPlantState_Response;
    fromJSON(object: any): GetPowerPlantState_Response;
    toJSON(message: GetPowerPlantState_Response): unknown;
    create<I extends Exact<DeepPartial<GetPowerPlantState_Response>, I>>(base?: I): GetPowerPlantState_Response;
    fromPartial<I extends Exact<DeepPartial<GetPowerPlantState_Response>, I>>(object: I): GetPowerPlantState_Response;
};
export declare const SetPowerPlantState: {
    encode(_: SetPowerPlantState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPowerPlantState;
    fromJSON(_: any): SetPowerPlantState;
    toJSON(_: SetPowerPlantState): unknown;
    create<I extends Exact<DeepPartial<SetPowerPlantState>, I>>(base?: I): SetPowerPlantState;
    fromPartial<I extends Exact<DeepPartial<SetPowerPlantState>, I>>(_: I): SetPowerPlantState;
};
export declare const SetPowerPlantState_Request: {
    encode(message: SetPowerPlantState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPowerPlantState_Request;
    fromJSON(object: any): SetPowerPlantState_Request;
    toJSON(message: SetPowerPlantState_Request): unknown;
    create<I extends Exact<DeepPartial<SetPowerPlantState_Request>, I>>(base?: I): SetPowerPlantState_Request;
    fromPartial<I extends Exact<DeepPartial<SetPowerPlantState_Request>, I>>(object: I): SetPowerPlantState_Request;
};
export declare const SetPowerPlantState_Response: {
    encode(_: SetPowerPlantState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPowerPlantState_Response;
    fromJSON(_: any): SetPowerPlantState_Response;
    toJSON(_: SetPowerPlantState_Response): unknown;
    create<I extends Exact<DeepPartial<SetPowerPlantState_Response>, I>>(base?: I): SetPowerPlantState_Response;
    fromPartial<I extends Exact<DeepPartial<SetPowerPlantState_Response>, I>>(_: I): SetPowerPlantState_Response;
};
export declare const SetDevicePowerState: {
    encode(_: SetDevicePowerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDevicePowerState;
    fromJSON(_: any): SetDevicePowerState;
    toJSON(_: SetDevicePowerState): unknown;
    create<I extends Exact<DeepPartial<SetDevicePowerState>, I>>(base?: I): SetDevicePowerState;
    fromPartial<I extends Exact<DeepPartial<SetDevicePowerState>, I>>(_: I): SetDevicePowerState;
};
export declare const SetDevicePowerState_Request: {
    encode(message: SetDevicePowerState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDevicePowerState_Request;
    fromJSON(object: any): SetDevicePowerState_Request;
    toJSON(message: SetDevicePowerState_Request): unknown;
    create<I extends Exact<DeepPartial<SetDevicePowerState_Request>, I>>(base?: I): SetDevicePowerState_Request;
    fromPartial<I extends Exact<DeepPartial<SetDevicePowerState_Request>, I>>(object: I): SetDevicePowerState_Request;
};
export declare const SetDevicePowerState_Response: {
    encode(_: SetDevicePowerState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDevicePowerState_Response;
    fromJSON(_: any): SetDevicePowerState_Response;
    toJSON(_: SetDevicePowerState_Response): unknown;
    create<I extends Exact<DeepPartial<SetDevicePowerState_Response>, I>>(base?: I): SetDevicePowerState_Response;
    fromPartial<I extends Exact<DeepPartial<SetDevicePowerState_Response>, I>>(_: I): SetDevicePowerState_Response;
};
export declare const GetDevicePowerState: {
    encode(_: GetDevicePowerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDevicePowerState;
    fromJSON(_: any): GetDevicePowerState;
    toJSON(_: GetDevicePowerState): unknown;
    create<I extends Exact<DeepPartial<GetDevicePowerState>, I>>(base?: I): GetDevicePowerState;
    fromPartial<I extends Exact<DeepPartial<GetDevicePowerState>, I>>(_: I): GetDevicePowerState;
};
export declare const GetDevicePowerState_Request: {
    encode(message: GetDevicePowerState_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDevicePowerState_Request;
    fromJSON(object: any): GetDevicePowerState_Request;
    toJSON(message: GetDevicePowerState_Request): unknown;
    create<I extends Exact<DeepPartial<GetDevicePowerState_Request>, I>>(base?: I): GetDevicePowerState_Request;
    fromPartial<I extends Exact<DeepPartial<GetDevicePowerState_Request>, I>>(object: I): GetDevicePowerState_Request;
};
export declare const GetDevicePowerState_Response: {
    encode(message: GetDevicePowerState_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDevicePowerState_Response;
    fromJSON(object: any): GetDevicePowerState_Response;
    toJSON(message: GetDevicePowerState_Response): unknown;
    create<I extends Exact<DeepPartial<GetDevicePowerState_Response>, I>>(base?: I): GetDevicePowerState_Response;
    fromPartial<I extends Exact<DeepPartial<GetDevicePowerState_Response>, I>>(object: I): GetDevicePowerState_Response;
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
