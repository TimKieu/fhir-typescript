// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conditional-read-status|4.3.0

/**
 * A code that indicates how the server supports conditional read.
 */
export const ConditionalReadStatusCodes = {
  /**
   * full-support: Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
   */
  FullSupport: "full-support",
  /**
   * modified-since: Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
   */
  IfModifiedSince: "modified-since",
  /**
   * not-match: Conditional reads are supported, but only with the If-None-Match HTTP Header.
   */
  IfNoneMatch: "not-match",
  /**
   * not-supported: No support for conditional reads.
   */
  NotSupported: "not-supported",
} as const;

/**
 * A code that indicates how the server supports conditional read.
 */
export type ConditionalReadStatusCodeType = typeof ConditionalReadStatusCodes[keyof typeof ConditionalReadStatusCodes];
