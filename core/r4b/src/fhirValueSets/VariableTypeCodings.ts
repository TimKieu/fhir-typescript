// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/variable-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export type VariableTypeCodingType = {
  /**
   * continuous: The variable is a continuous result such as a quantity.
   */
  Continuous: CodingArgs;
  /**
   * descriptive: The variable is described narratively rather than quantitatively.
   */
  Descriptive: CodingArgs;
  /**
   * dichotomous: The variable is dichotomous, such as present or absent.
   */
  Dichotomous: CodingArgs;
}

/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export const VariableTypeCodings:VariableTypeCodingType = {
  /**
   * continuous: The variable is a continuous result such as a quantity.
   */
  Continuous: {
    display: "Continuous",
    code: "continuous",
    system: "http://hl7.org/fhir/variable-type",
  },
  /**
   * descriptive: The variable is described narratively rather than quantitatively.
   */
  Descriptive: {
    display: "Descriptive",
    code: "descriptive",
    system: "http://hl7.org/fhir/variable-type",
  },
  /**
   * dichotomous: The variable is dichotomous, such as present or absent.
   */
  Dichotomous: {
    display: "Dichotomous",
    code: "dichotomous",
    system: "http://hl7.org/fhir/variable-type",
  },
} as const;
