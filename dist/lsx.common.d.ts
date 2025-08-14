export declare const protobufPackage = "";
export declare enum LockState {
    LOCK_STATE_EMPTY = 0,
    LOCK_STATE_LOCKED = 1,
    LOCK_STATE_UNLOCKED = 2,
    UNRECOGNIZED = -1
}
export declare function lockStateFromJSON(object: any): LockState;
export declare function lockStateToJSON(object: LockState): string;
