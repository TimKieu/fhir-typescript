// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication-error|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of adjudication codes.
 */
export type AdjudicationErrorCodingType = {
  /**
   * a001: Missing Identifier
   */
  MissingIdentifier: CodingArgs;
  /**
   * a002: Missing Creation Date
   */
  MissingCreationDate: CodingArgs;
}

/**
 * This value set includes a smattering of adjudication codes.
 */
export const AdjudicationErrorCodings:AdjudicationErrorCodingType = {
  /**
   * a001: Missing Identifier
   */
  MissingIdentifier: {
    display: "Missing Identifier",
    code: "a001",
    system: "http://hl7.org/fhir/adjudication-error",
  },
  /**
   * a002: Missing Creation Date
   */
  MissingCreationDate: {
    display: "Missing Creation Date",
    code: "a002",
    system: "http://hl7.org/fhir/adjudication-error",
  },
} as const;
