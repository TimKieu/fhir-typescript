// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0092|2.9

import { CodingArgs } from '../fhir/Coding.js'

/**
 * FHIR Value set/code system definition for HL7 v2 table 0092 ( RE-ADMISSION INDICATOR)
 */
export type V20092CodingType = {
  /**
   * Code: R
   */
  ReAdmission: CodingArgs;
}

/**
 * FHIR Value set/code system definition for HL7 v2 table 0092 ( RE-ADMISSION INDICATOR)
 */
export const V20092Codings:V20092CodingType = {
  /**
   * Code: R
   */
  ReAdmission: {
    display: "Re-admission",
    code: "R",
    system: "http://terminology.hl7.org/CodeSystem/v2-0092",
  },
} as const;
