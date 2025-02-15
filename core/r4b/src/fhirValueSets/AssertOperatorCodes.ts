// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/assert-operator-codes|4.3.0

/**
 * The type of operator to use for assertion.
 */
export const AssertOperatorCodes = {
  /**
   * contains: Compare value string contains a known value.
   */
  Contains: "contains",
  /**
   * empty: Compare value is empty.
   */
  Empty: "empty",
  /**
   * equals: Default value. Equals comparison.
   */
  Equals: "equals",
  /**
   * eval: Evaluate the FHIRPath expression as a boolean condition.
   */
  Evaluate: "eval",
  /**
   * greaterThan: Compare value to be greater than a known value.
   */
  GreaterThan: "greaterThan",
  /**
   * in: Compare value within a known set of values.
   */
  In: "in",
  /**
   * lessThan: Compare value to be less than a known value.
   */
  LessThan: "lessThan",
  /**
   * notContains: Compare value string does not contain a known value.
   */
  NotContains: "notContains",
  /**
   * notEmpty: Compare value is not empty.
   */
  NotEmpty: "notEmpty",
  /**
   * notEquals: Not equals comparison.
   */
  NotEquals: "notEquals",
  /**
   * notIn: Compare value not within a known set of values.
   */
  NotIn: "notIn",
} as const;

/**
 * The type of operator to use for assertion.
 */
export type AssertOperatorCodeType = typeof AssertOperatorCodes[keyof typeof AssertOperatorCodes];
