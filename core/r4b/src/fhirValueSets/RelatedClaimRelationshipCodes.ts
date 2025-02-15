// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/related-claim-relationship|4.3.0

/**
 * This value set includes sample Related Claim Relationship codes.
 */
export const RelatedClaimRelationshipCodes = {
  /**
   * associated: A claim for a different suite of services which is related the suite claimed here.
   */
  AssociatedClaim: "associated",
  /**
   * prior: A prior claim instance for the same intended suite of services.
   */
  PriorClaim: "prior",
} as const;

/**
 * This value set includes sample Related Claim Relationship codes.
 */
export type RelatedClaimRelationshipCodeType = typeof RelatedClaimRelationshipCodes[keyof typeof RelatedClaimRelationshipCodes];
