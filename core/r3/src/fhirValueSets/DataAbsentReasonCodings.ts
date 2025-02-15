// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/data-absent-reason|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export type DataAbsentReasonCodingType = {
  /**
   * asked: The source human does not know the value.
   */
  Asked: CodingArgs;
  /**
   * astext: The content of the data is represented in the resource narrative.
   */
  AsText: CodingArgs;
  /**
   * error: Some system or workflow process error means that the information is not available.
   */
  Error: CodingArgs;
  /**
   * masked: The information is not available due to security, privacy or related reasons.
   */
  Masked: CodingArgs;
  /**
   * NaN: NaN, standing for not a number, is a numeric data type value representing an undefined or unrepresentable value.
   */
  NotANumber: CodingArgs;
  /**
   * not-asked: The workflow didn't lead to this value being known.
   */
  NotAsked: CodingArgs;
  /**
   * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
   */
  NotPerformed: CodingArgs;
  /**
   * temp: There is reason to expect (from the workflow) that the value may become known.
   */
  Temp: CodingArgs;
  /**
   * unknown: The value is not known.
   */
  Unknown: CodingArgs;
  /**
   * unsupported: The source system wasn't capable of supporting this element.
   */
  Unsupported: CodingArgs;
}

/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export const DataAbsentReasonCodings:DataAbsentReasonCodingType = {
  /**
   * asked: The source human does not know the value.
   */
  Asked: {
    display: "Asked",
    code: "asked",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * astext: The content of the data is represented in the resource narrative.
   */
  AsText: {
    display: "As Text",
    code: "astext",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * error: Some system or workflow process error means that the information is not available.
   */
  Error: {
    display: "Error",
    code: "error",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * masked: The information is not available due to security, privacy or related reasons.
   */
  Masked: {
    display: "Masked",
    code: "masked",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * NaN: NaN, standing for not a number, is a numeric data type value representing an undefined or unrepresentable value.
   */
  NotANumber: {
    display: "Not a Number",
    code: "NaN",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * not-asked: The workflow didn't lead to this value being known.
   */
  NotAsked: {
    display: "Not Asked",
    code: "not-asked",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
   */
  NotPerformed: {
    display: "Not Performed",
    code: "not-performed",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * temp: There is reason to expect (from the workflow) that the value may become known.
   */
  Temp: {
    display: "Temp",
    code: "temp",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * unknown: The value is not known.
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
  /**
   * unsupported: The source system wasn't capable of supporting this element.
   */
  Unsupported: {
    display: "Unsupported",
    code: "unsupported",
    system: "http://hl7.org/fhir/data-absent-reason",
  },
} as const;
