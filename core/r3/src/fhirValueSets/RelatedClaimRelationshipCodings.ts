// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/related-claim-relationship|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Related Claim Relationship codes.
 */
export type RelatedClaimRelationshipCodingType = {
  /**
   * associated: A claim for a different suite of services which is related the suite claimed here.
   */
  AssociatedClaim: CodingArgs;
  /**
   * prior: A prior claim instance for the same intended suite of services.
   */
  PriorClaim: CodingArgs;
}

/**
 * This value set includes sample Related Claim Relationship codes.
 */
export const RelatedClaimRelationshipCodings:RelatedClaimRelationshipCodingType = {
  /**
   * associated: A claim for a different suite of services which is related the suite claimed here.
   */
  AssociatedClaim: {
    display: "Associated Claim",
    code: "associated",
    system: "http://hl7.org/fhir/ex-relatedclaimrelationship",
  },
  /**
   * prior: A prior claim instance for the same intended suite of services.
   */
  PriorClaim: {
    display: "Prior Claim",
    code: "prior",
    system: "http://hl7.org/fhir/ex-relatedclaimrelationship",
  },
} as const;
