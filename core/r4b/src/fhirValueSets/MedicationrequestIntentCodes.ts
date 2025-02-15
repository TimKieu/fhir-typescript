// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-intent|4.3.0

/**
 * MedicationRequest Intent Codes
 */
export const MedicationrequestIntentCodes = {
  /**
   * filler-order: The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
   */
  FillerOrder: "filler-order",
  /**
   * instance-order: The request represents an instance for the particular order, for example a medication administration record.
   */
  InstanceOrder: "instance-order",
  /**
   * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.
   */
  Option: "option",
  /**
   * order: The request represents a request/demand and authorization for action
   */
  Order: "order",
  /**
   * original-order: The request represents the original authorization for the medication request.
   */
  OriginalOrder: "original-order",
  /**
   * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
   */
  Plan: "plan",
  /**
   * proposal: The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
   */
  Proposal: "proposal",
  /**
   * reflex-order: The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..
   */
  ReflexOrder: "reflex-order",
} as const;

/**
 * MedicationRequest Intent Codes
 */
export type MedicationrequestIntentCodeType = typeof MedicationrequestIntentCodes[keyof typeof MedicationrequestIntentCodes];
