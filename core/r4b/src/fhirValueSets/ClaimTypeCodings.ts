// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes Claim Type codes.
 */
export type ClaimTypeCodingType = {
  /**
   * institutional: Hospital, clinic and typically inpatient claims.
   */
  Institutional: CodingArgs;
  /**
   * oral: Dental, Denture and Hygiene claims.
   */
  Oral: CodingArgs;
  /**
   * pharmacy: Pharmacy claims for goods and services.
   */
  Pharmacy: CodingArgs;
  /**
   * professional: Typically, outpatient claims from Physician, Psychological, Chiropractor, Physiotherapy, Speech Pathology, rehabilitative, consulting.
   */
  Professional: CodingArgs;
  /**
   * vision: Vision claims for professional services and products such as glasses and contact lenses.
   */
  Vision: CodingArgs;
}

/**
 * This value set includes Claim Type codes.
 */
export const ClaimTypeCodings:ClaimTypeCodingType = {
  /**
   * institutional: Hospital, clinic and typically inpatient claims.
   */
  Institutional: {
    display: "Institutional",
    code: "institutional",
    system: "http://terminology.hl7.org/CodeSystem/claim-type",
  },
  /**
   * oral: Dental, Denture and Hygiene claims.
   */
  Oral: {
    display: "Oral",
    code: "oral",
    system: "http://terminology.hl7.org/CodeSystem/claim-type",
  },
  /**
   * pharmacy: Pharmacy claims for goods and services.
   */
  Pharmacy: {
    display: "Pharmacy",
    code: "pharmacy",
    system: "http://terminology.hl7.org/CodeSystem/claim-type",
  },
  /**
   * professional: Typically, outpatient claims from Physician, Psychological, Chiropractor, Physiotherapy, Speech Pathology, rehabilitative, consulting.
   */
  Professional: {
    display: "Professional",
    code: "professional",
    system: "http://terminology.hl7.org/CodeSystem/claim-type",
  },
  /**
   * vision: Vision claims for professional services and products such as glasses and contact lenses.
   */
  Vision: {
    display: "Vision",
    code: "vision",
    system: "http://terminology.hl7.org/CodeSystem/claim-type",
  },
} as const;
