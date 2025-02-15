// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-state-codes|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indicates the state of the consent
 */
export type ConsentStateCodingType = {
  /**
   * active: The consent is to be followed and enforced.
   */
  Active: CodingArgs;
  /**
   * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
   */
  Pending: CodingArgs;
  /**
   * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored
   */
  EnteredInError: CodingArgs;
  /**
   * inactive: The consent is terminated or replaced.
   */
  Inactive: CodingArgs;
  /**
   * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
   */
  Proposed: CodingArgs;
  /**
   * rejected: The consent has been rejected by one or more of the parties.
   */
  Rejected: CodingArgs;
}

/**
 * Indicates the state of the consent
 */
export const ConsentStateCodings:ConsentStateCodingType = {
  /**
   * active: The consent is to be followed and enforced.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/consent-state-codes",
  },
  /**
   * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
   */
  Pending: {
    display: "Pending",
    code: "draft",
    system: "http://hl7.org/fhir/consent-state-codes",
  },
  /**
   * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/consent-state-codes",
  },
  /**
   * inactive: The consent is terminated or replaced.
   */
  Inactive: {
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/consent-state-codes",
  },
  /**
   * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
   */
  Proposed: {
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/consent-state-codes",
  },
  /**
   * rejected: The consent has been rejected by one or more of the parties.
   */
  Rejected: {
    display: "Rejected",
    code: "rejected",
    system: "http://hl7.org/fhir/consent-state-codes",
  },
} as const;
