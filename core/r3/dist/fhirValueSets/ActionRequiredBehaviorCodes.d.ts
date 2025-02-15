/**
 * Defines requiredness behavior for selecting an action or an action group
 */
export declare const ActionRequiredBehaviorCodes: {
    /**
     * could: An action with this behavior may be included in the set of actions processed by the end user
     */
    readonly Could: "could";
    /**
     * must: An action with this behavior must be included in the actions processed by the end user; the end user may not choose not to include this action
     */
    readonly Must: "must";
    /**
     * must-unless-documented: An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included
     */
    readonly MustUnlessDocumented: "must-unless-documented";
};
/**
 * Defines requiredness behavior for selecting an action or an action group
 */
export declare type ActionRequiredBehaviorCodeType = typeof ActionRequiredBehaviorCodes[keyof typeof ActionRequiredBehaviorCodes];
//# sourceMappingURL=ActionRequiredBehaviorCodes.d.ts.map