// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-precheck-behavior|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Defines selection frequency behavior for an action or group.
 */
export type ActionPrecheckBehaviorCodingType = {
  /**
   * no: An action with this behavior is one of the less frequent actions included by the end user, for the particular context in which the action occurs. The system displaying the actions to the end user would typically not "pre-check" such an action.
   */
  No: CodingArgs;
  /**
   * yes: An action with this behavior is one of the most frequent action that is, or should be, included by an end user, for the particular context in which the action occurs. The system displaying the action to the end user should consider "pre-checking" such an action as a convenience for the user.
   */
  Yes: CodingArgs;
}

/**
 * Defines selection frequency behavior for an action or group.
 */
export const ActionPrecheckBehaviorCodings:ActionPrecheckBehaviorCodingType = {
  /**
   * no: An action with this behavior is one of the less frequent actions included by the end user, for the particular context in which the action occurs. The system displaying the actions to the end user would typically not "pre-check" such an action.
   */
  No: {
    display: "No",
    code: "no",
    system: "http://hl7.org/fhir/action-precheck-behavior",
  },
  /**
   * yes: An action with this behavior is one of the most frequent action that is, or should be, included by an end user, for the particular context in which the action occurs. The system displaying the action to the end user should consider "pre-checking" such an action as a convenience for the user.
   */
  Yes: {
    display: "Yes",
    code: "yes",
    system: "http://hl7.org/fhir/action-precheck-behavior",
  },
} as const;
