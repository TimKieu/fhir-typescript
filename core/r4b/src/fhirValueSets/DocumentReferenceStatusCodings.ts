// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/document-reference-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The status of the document reference.
 */
export type DocumentReferenceStatusCodingType = {
  /**
   * current: This is the current reference for this document.
   */
  Current: CodingArgs;
  /**
   * entered-in-error: This reference was created in error.
   */
  EnteredInError: CodingArgs;
  /**
   * superseded: This reference has been superseded by another reference.
   */
  Superseded: CodingArgs;
}

/**
 * The status of the document reference.
 */
export const DocumentReferenceStatusCodings:DocumentReferenceStatusCodingType = {
  /**
   * current: This is the current reference for this document.
   */
  Current: {
    display: "Current",
    code: "current",
    system: "http://hl7.org/fhir/document-reference-status",
  },
  /**
   * entered-in-error: This reference was created in error.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/document-reference-status",
  },
  /**
   * superseded: This reference has been superseded by another reference.
   */
  Superseded: {
    display: "Superseded",
    code: "superseded",
    system: "http://hl7.org/fhir/document-reference-status",
  },
} as const;
