// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/communication-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The status of the communication.
 */
export type CommunicationStatusCodingType = {
  /**
   * completed: The message transmission is complete, i.e., delivered to the recipient's destination.
   */
  Completed: CodingArgs;
  /**
   * failed: There was a failure in transmitting the message out.
   */
  Failed: CodingArgs;
  /**
   * in-progress: The communication transmission is ongoing.
   */
  InProgress: CodingArgs;
  /**
   * rejected: The receiving system has declined to accept the message.
   */
  Rejected: CodingArgs;
  /**
   * suspended: The communication transmission has been held by originating system/user request.
   */
  Suspended: CodingArgs;
}

/**
 * The status of the communication.
 */
export const CommunicationStatusCodings:CommunicationStatusCodingType = {
  /**
   * completed: The message transmission is complete, i.e., delivered to the recipient's destination.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/communication-status",
  },
  /**
   * failed: There was a failure in transmitting the message out.
   */
  Failed: {
    display: "Failed",
    code: "failed",
    system: "http://hl7.org/fhir/communication-status",
  },
  /**
   * in-progress: The communication transmission is ongoing.
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/communication-status",
  },
  /**
   * rejected: The receiving system has declined to accept the message.
   */
  Rejected: {
    display: "Rejected",
    code: "rejected",
    system: "http://hl7.org/fhir/communication-status",
  },
  /**
   * suspended: The communication transmission has been held by originating system/user request.
   */
  Suspended: {
    display: "Suspended",
    code: "suspended",
    system: "http://hl7.org/fhir/communication-status",
  },
} as const;
