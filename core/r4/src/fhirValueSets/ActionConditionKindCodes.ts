// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-condition-kind|4.0.1

/**
 * Defines the kinds of conditions that can appear on actions.
 */
export const ActionConditionKindCodes = {
  /**
   * applicability: The condition describes whether or not a given action is applicable.
   */
  Applicability: "applicability",
  /**
   * start: The condition is a starting condition for the action.
   */
  Start: "start",
  /**
   * stop: The condition is a stop, or exit condition for the action.
   */
  Stop: "stop",
} as const;

/**
 * Defines the kinds of conditions that can appear on actions.
 */
export type ActionConditionKindCodeType = typeof ActionConditionKindCodes[keyof typeof ActionConditionKindCodes];
