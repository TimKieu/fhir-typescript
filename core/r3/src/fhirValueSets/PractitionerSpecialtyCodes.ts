// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/practitioner-specialty|3.0.2

/**
 * This example value set defines a set of codes that can be used to indicate the specialty of a Practitioner.
 */
export const PractitionerSpecialtyCodes = {
  /**
   * Code: cardio
   */
  Cardiologist: "cardio",
  /**
   * Code: dent
   */
  Dentist: "dent",
  /**
   * Code: dietary
   */
  DietaryConsultant: "dietary",
  /**
   * Code: midw
   */
  Midwife: "midw",
  /**
   * Code: sysarch
   */
  SystemsArchitect: "sysarch",
} as const;

/**
 * This example value set defines a set of codes that can be used to indicate the specialty of a Practitioner.
 */
export type PractitionerSpecialtyCodeType = typeof PractitionerSpecialtyCodes[keyof typeof PractitionerSpecialtyCodes];
