// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0916|2.9

import { CodingArgs } from '../fhir/Coding.js'

/**
 * FHIR Value set/code system definition for HL7 v2 table 0916 ( Relevant Clincial Information)
 */
export type V20916CodingType = {
  /**
   * Code: F
   */
  PatientWasFastingPriorToTheProcedure: CodingArgs;
  /**
   * Code: NF
   */
  ThePatientIndicatedTheyDidNotFastPriorToTheProcedure: CodingArgs;
  /**
   * Code: NG
   */
  NotGivenPatientWasNotAskedAtTheTimeOfTheProcedure: CodingArgs;
}

/**
 * FHIR Value set/code system definition for HL7 v2 table 0916 ( Relevant Clincial Information)
 */
export const V20916Codings:V20916CodingType = {
  /**
   * Code: F
   */
  PatientWasFastingPriorToTheProcedure: {
    display: "Patient was fasting prior to the procedure.",
    code: "F",
    system: "http://terminology.hl7.org/CodeSystem/v2-0916",
  },
  /**
   * Code: NF
   */
  ThePatientIndicatedTheyDidNotFastPriorToTheProcedure: {
    display: "The patient indicated they did not fast prior to the procedure.",
    code: "NF",
    system: "http://terminology.hl7.org/CodeSystem/v2-0916",
  },
  /**
   * Code: NG
   */
  NotGivenPatientWasNotAskedAtTheTimeOfTheProcedure: {
    display: "Not Given - Patient was not asked at the time of the procedure.",
    code: "NG",
    system: "http://terminology.hl7.org/CodeSystem/v2-0916",
  },
} as const;
