/**
 * Indicates whether the account is available to be used.
 */
export declare const AccountStatusCodes: {
    /**
     * active: This account is active and may be used.
     */
    readonly Active: "active";
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: This account is inactive and should not be used to track financial information.
     */
    readonly Inactive: "inactive";
};
/**
 * Indicates whether the account is available to be used.
 */
export declare type AccountStatusCodeType = typeof AccountStatusCodes[keyof typeof AccountStatusCodes];
//# sourceMappingURL=AccountStatusCodes.d.ts.map