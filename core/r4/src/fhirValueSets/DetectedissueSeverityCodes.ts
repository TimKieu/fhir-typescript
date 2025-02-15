// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/detectedissue-severity|4.0.1

/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export const DetectedissueSeverityCodes = {
  /**
   * high: Indicates the issue may be life-threatening or has the potential to cause permanent injury.
   */
  High: "high",
  /**
   * low: Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
   */
  Low: "low",
  /**
   * moderate: Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
   */
  Moderate: "moderate",
} as const;

/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export type DetectedissueSeverityCodeType = typeof DetectedissueSeverityCodes[keyof typeof DetectedissueSeverityCodes];
