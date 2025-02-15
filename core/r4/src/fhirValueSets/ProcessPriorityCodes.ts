// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/process-priority|4.0.1

/**
 * This value set includes the financial processing priority codes.
 */
export const ProcessPriorityCodes = {
  /**
   * deferred: Later, when possible.
   */
  Deferred: "deferred",
  /**
   * normal: With best effort.
   */
  Normal: "normal",
  /**
   * stat: Immediately in real time.
   */
  Immediate: "stat",
} as const;

/**
 * This value set includes the financial processing priority codes.
 */
export type ProcessPriorityCodeType = typeof ProcessPriorityCodes[keyof typeof ProcessPriorityCodes];
