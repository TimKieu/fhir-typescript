// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-amount-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The relationship between two substance types.
 */
export type SubstanceAmountTypeCodingType = {
  /**
   * Code: Approximately
   */
  Approximately: CodingArgs;
  /**
   * Code: Average
   */
  Average: CodingArgs;
  /**
   * Code: LessThan
   */
  LessThan: CodingArgs;
  /**
   * Code: MoreThan
   */
  MoreThan: CodingArgs;
}

/**
 * The relationship between two substance types.
 */
export const SubstanceAmountTypeCodings:SubstanceAmountTypeCodingType = {
  /**
   * Code: Approximately
   */
  Approximately: {
    display: "Approximately",
    code: "Approximately",
    system: "http://hl7.org/fhir/substance-amount-type",
  },
  /**
   * Code: Average
   */
  Average: {
    display: "Average",
    code: "Average",
    system: "http://hl7.org/fhir/substance-amount-type",
  },
  /**
   * Code: LessThan
   */
  LessThan: {
    display: "Less Than",
    code: "LessThan",
    system: "http://hl7.org/fhir/substance-amount-type",
  },
  /**
   * Code: MoreThan
   */
  MoreThan: {
    display: "More Than",
    code: "MoreThan",
    system: "http://hl7.org/fhir/substance-amount-type",
  },
} as const;
