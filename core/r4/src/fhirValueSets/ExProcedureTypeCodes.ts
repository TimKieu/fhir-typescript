// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ex-procedure-type|4.0.1

/**
 * This value set includes example Procedure Type codes.
 */
export const ExProcedureTypeCodes = {
  /**
   * primary: The first procedure in a series required to produce and overall patient outcome.
   */
  PrimaryProcedure: "primary",
  /**
   * secondary: The second procedure in a series required to produce and overall patient outcome.
   */
  SecondaryProcedure: "secondary",
} as const;

/**
 * This value set includes example Procedure Type codes.
 */
export type ExProcedureTypeCodeType = typeof ExProcedureTypeCodes[keyof typeof ExProcedureTypeCodes];
