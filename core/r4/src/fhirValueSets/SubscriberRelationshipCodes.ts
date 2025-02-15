// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscriber-relationship|4.0.1

/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export const SubscriberRelationshipCodes = {
  /**
   * child: The Beneficiary is a child of the Subscriber
   */
  Child: "child",
  /**
   * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
   */
  CommonLawSpouse: "common",
  /**
   * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
   */
  InjuredParty: "injured",
  /**
   * other: The Beneficiary has some other relationship the Subscriber
   */
  Other: "other",
  /**
   * parent: The Beneficiary is a parent of the Subscriber
   */
  Parent: "parent",
  /**
   * self: The Beneficiary is the Subscriber
   */
  Self: "self",
  /**
   * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
   */
  Spouse: "spouse",
} as const;

/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export type SubscriberRelationshipCodeType = typeof SubscriberRelationshipCodes[keyof typeof SubscriberRelationshipCodes];
