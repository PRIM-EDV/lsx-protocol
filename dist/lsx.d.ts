import * as _m0 from "protobufjs/minimal";
import { BombArea_Request, BombArea_Response, BombBase_Request, BombBase_Response, GetBombAreaState_Request, GetBombAreaState_Response, GetModeSilentState_Request, GetModeSilentState_Response, SetModeSilentState_Request, SetModeSilentState_Response } from "./lsx.drone";
import { GetFluffFiles_Request, GetFluffFiles_Response, GetFluffState_Request, GetFluffState_Response, SetFluffState_Request, SetFluffState_Response } from "./lsx.fluff";
import { GetLightDmxState_Request, GetLightDmxState_Response, GetLightLockState_Request, GetLightLockState_Response, GetLightMode_Request, GetLightMode_Response, GetLightPowerState_Request, GetLightPowerState_Response, GetLightSwitchState_Request, GetLightSwitchState_Response, SetLightDmxState_Request, SetLightDmxState_Response, SetLightLockState_Request, SetLightLockState_Response, SetLightMode_Request, SetLightMode_Response, SetLightPowerState_Request, SetLightPowerState_Response, SetLightSwitchState_Request, SetLightSwitchState_Response } from "./lsx.light";
import { GetAutoLockdown_Request, GetAutoLockdown_Response, GetLockdownAnnouncements_Request, GetLockdownAnnouncements_Response, GetLockdownState_Request, GetLockdownState_Response, SetAutoLockdown_Request, SetAutoLockdown_Response, SetLockdownAnnouncements_Request, SetLockdownAnnouncements_Response, SetLockdownState_Request, SetLockdownState_Response } from "./lsx.lockdown";
import { GetDevicePowerState_Request, GetDevicePowerState_Response, GetPowerPlantState_Request, GetPowerPlantState_Response, SetDevicePowerState_Request, SetDevicePowerState_Response, SetPowerPlantState_Request, SetPowerPlantState_Response } from "./lsx.power";
export interface Request {
    getPowerPlantState?: GetPowerPlantState_Request | undefined;
    setPowerPlantState?: SetPowerPlantState_Request | undefined;
    /**
     * GetPowerLineState.Request get_power_line_state = 3;
     * SetPowerLineState.Request set_power_line_state = 4;
     */
    getAnnouncementFiles?: GetAnnouncementFiles_Request | undefined;
    getLockdownState?: GetLockdownState_Request | undefined;
    setLockdownState?: SetLockdownState_Request | undefined;
    getAutoLockdown?: GetAutoLockdown_Request | undefined;
    setAutoLockdown?: SetAutoLockdown_Request | undefined;
    getLockdownAnnouncements?: GetLockdownAnnouncements_Request | undefined;
    setLockdownAnnouncements?: SetLockdownAnnouncements_Request | undefined;
    getFluffFiles?: GetFluffFiles_Request | undefined;
    getFluffState?: GetFluffState_Request | undefined;
    setFluffState?: SetFluffState_Request | undefined;
    playAnnouncement?: PlayAnnouncement_Request | undefined;
    getModeSilentState?: GetModeSilentState_Request | undefined;
    setModeSilentState?: SetModeSilentState_Request | undefined;
    bombBase?: BombBase_Request | undefined;
    bombArea?: BombArea_Request | undefined;
    getBombAreaState?: GetBombAreaState_Request | undefined;
    /** Light */
    getLightPowerState?: GetLightPowerState_Request | undefined;
    setLightPowerState?: SetLightPowerState_Request | undefined;
    getLightSwitchState?: GetLightSwitchState_Request | undefined;
    setLightSwitchState?: SetLightSwitchState_Request | undefined;
    getLightDmxState?: GetLightDmxState_Request | undefined;
    setLightDmxState?: SetLightDmxState_Request | undefined;
    getLightLockState?: GetLightLockState_Request | undefined;
    setLightLockState?: SetLightLockState_Request | undefined;
    getLightMode?: GetLightMode_Request | undefined;
    setLightMode?: SetLightMode_Request | undefined;
    /**  */
    getDevicePowerState?: GetDevicePowerState_Request | undefined;
    setDevicePowerState?: SetDevicePowerState_Request | undefined;
}
export interface Response {
    getPowerPlantState?: GetPowerPlantState_Response | undefined;
    setPowerPlantState?: SetPowerPlantState_Response | undefined;
    /**
     * GetPowerLineState.Response get_power_line_state = 3;
     * SetPowerLineState.Response set_power_line_state = 4;
     */
    getAnnouncementFiles?: GetAnnouncementFiles_Response | undefined;
    getLockdownState?: GetLockdownState_Response | undefined;
    setLockdownState?: SetLockdownState_Response | undefined;
    getAutoLockdown?: GetAutoLockdown_Response | undefined;
    setAutoLockdown?: SetAutoLockdown_Response | undefined;
    getLockdownAnnouncements?: GetLockdownAnnouncements_Response | undefined;
    setLockdownAnnouncements?: SetLockdownAnnouncements_Response | undefined;
    getFluffFiles?: GetFluffFiles_Response | undefined;
    getFluffState?: GetFluffState_Response | undefined;
    setFluffState?: SetFluffState_Response | undefined;
    playAnnouncement?: PlayAnnouncement_Response | undefined;
    getModeSilentState?: GetModeSilentState_Response | undefined;
    setModeSilentState?: SetModeSilentState_Response | undefined;
    bombBase?: BombBase_Response | undefined;
    bombArea?: BombArea_Response | undefined;
    getBombAreaState?: GetBombAreaState_Response | undefined;
    /** Light */
    getLightPowerState?: GetLightPowerState_Response | undefined;
    setLightPowerState?: SetLightPowerState_Response | undefined;
    getLightSwitchState?: GetLightSwitchState_Response | undefined;
    setLightSwitchState?: SetLightSwitchState_Response | undefined;
    getLightDmxState?: GetLightDmxState_Response | undefined;
    setLightDmxState?: SetLightDmxState_Response | undefined;
    getLightLockState?: GetLightLockState_Response | undefined;
    setLightLockState?: SetLightLockState_Response | undefined;
    getLightMode?: GetLightMode_Response | undefined;
    setLightMode?: SetLightMode_Response | undefined;
    /**  */
    getDevicePowerState?: GetDevicePowerState_Response | undefined;
    setDevicePowerState?: SetDevicePowerState_Response | undefined;
}
export interface Error {
    type: string;
    message: string;
}
export interface LsxMessage {
    id: string;
    request?: Request | undefined;
    response?: Response | undefined;
    error?: Error | undefined;
}
export interface GetAnnouncementFiles {
}
export interface GetAnnouncementFiles_Response {
    files: string[];
}
export interface GetAnnouncementFiles_Request {
}
export interface PlayAnnouncement {
}
export interface PlayAnnouncement_Request {
    filepath: string;
}
export interface PlayAnnouncement_Response {
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request;
    fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response;
    fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response;
};
export declare const Error: {
    encode(message: Error, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Error;
    fromJSON(object: any): Error;
    toJSON(message: Error): unknown;
    create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error;
    fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error;
};
export declare const LsxMessage: {
    encode(message: LsxMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LsxMessage;
    fromJSON(object: any): LsxMessage;
    toJSON(message: LsxMessage): unknown;
    create<I extends Exact<DeepPartial<LsxMessage>, I>>(base?: I): LsxMessage;
    fromPartial<I extends Exact<DeepPartial<LsxMessage>, I>>(object: I): LsxMessage;
};
export declare const GetAnnouncementFiles: {
    encode(_: GetAnnouncementFiles, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAnnouncementFiles;
    fromJSON(_: any): GetAnnouncementFiles;
    toJSON(_: GetAnnouncementFiles): unknown;
    create<I extends Exact<DeepPartial<GetAnnouncementFiles>, I>>(base?: I): GetAnnouncementFiles;
    fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles>, I>>(_: I): GetAnnouncementFiles;
};
export declare const GetAnnouncementFiles_Response: {
    encode(message: GetAnnouncementFiles_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAnnouncementFiles_Response;
    fromJSON(object: any): GetAnnouncementFiles_Response;
    toJSON(message: GetAnnouncementFiles_Response): unknown;
    create<I extends Exact<DeepPartial<GetAnnouncementFiles_Response>, I>>(base?: I): GetAnnouncementFiles_Response;
    fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles_Response>, I>>(object: I): GetAnnouncementFiles_Response;
};
export declare const GetAnnouncementFiles_Request: {
    encode(_: GetAnnouncementFiles_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAnnouncementFiles_Request;
    fromJSON(_: any): GetAnnouncementFiles_Request;
    toJSON(_: GetAnnouncementFiles_Request): unknown;
    create<I extends Exact<DeepPartial<GetAnnouncementFiles_Request>, I>>(base?: I): GetAnnouncementFiles_Request;
    fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles_Request>, I>>(_: I): GetAnnouncementFiles_Request;
};
export declare const PlayAnnouncement: {
    encode(_: PlayAnnouncement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayAnnouncement;
    fromJSON(_: any): PlayAnnouncement;
    toJSON(_: PlayAnnouncement): unknown;
    create<I extends Exact<DeepPartial<PlayAnnouncement>, I>>(base?: I): PlayAnnouncement;
    fromPartial<I extends Exact<DeepPartial<PlayAnnouncement>, I>>(_: I): PlayAnnouncement;
};
export declare const PlayAnnouncement_Request: {
    encode(message: PlayAnnouncement_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayAnnouncement_Request;
    fromJSON(object: any): PlayAnnouncement_Request;
    toJSON(message: PlayAnnouncement_Request): unknown;
    create<I extends Exact<DeepPartial<PlayAnnouncement_Request>, I>>(base?: I): PlayAnnouncement_Request;
    fromPartial<I extends Exact<DeepPartial<PlayAnnouncement_Request>, I>>(object: I): PlayAnnouncement_Request;
};
export declare const PlayAnnouncement_Response: {
    encode(_: PlayAnnouncement_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlayAnnouncement_Response;
    fromJSON(_: any): PlayAnnouncement_Response;
    toJSON(_: PlayAnnouncement_Response): unknown;
    create<I extends Exact<DeepPartial<PlayAnnouncement_Response>, I>>(base?: I): PlayAnnouncement_Response;
    fromPartial<I extends Exact<DeepPartial<PlayAnnouncement_Response>, I>>(_: I): PlayAnnouncement_Response;
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
