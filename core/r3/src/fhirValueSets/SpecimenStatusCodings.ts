// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/specimen-status|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes providing the status/availability of a specimen.
 */
export type SpecimenStatusCodingType = {
  /**
   * available: The physical specimen is present and in good condition.
   */
  Available: CodingArgs;
  /**
   * entered-in-error: The specimen was entered in error and therefore nullified.
   */
  EnteredInError: CodingArgs;
  /**
   * unavailable: There is no physical specimen because it is either lost, destroyed or consumed.
   */
  Unavailable: CodingArgs;
  /**
   * unsatisfactory: The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.
   */
  Unsatisfactory: CodingArgs;
}

/**
 * Codes providing the status/availability of a specimen.
 */
export const SpecimenStatusCodings:SpecimenStatusCodingType = {
  /**
   * available: The physical specimen is present and in good condition.
   */
  Available: {
    display: "Available",
    code: "available",
    system: "http://hl7.org/fhir/specimen-status",
  },
  /**
   * entered-in-error: The specimen was entered in error and therefore nullified.
   */
  EnteredInError: {
    display: "Entered-in-error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/specimen-status",
  },
  /**
   * unavailable: There is no physical specimen because it is either lost, destroyed or consumed.
   */
  Unavailable: {
    display: "Unavailable",
    code: "unavailable",
    system: "http://hl7.org/fhir/specimen-status",
  },
  /**
   * unsatisfactory: The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.
   */
  Unsatisfactory: {
    display: "Unsatisfactory",
    code: "unsatisfactory",
    system: "http://hl7.org/fhir/specimen-status",
  },
} as const;
