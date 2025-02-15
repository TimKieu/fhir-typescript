// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/messageheader-response-request|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export type MessageheaderResponseRequestCodingType = {
  /**
   * always: initiator expects a response for this message.
   */
  Always: CodingArgs;
  /**
   * never: initiator does not expect a response.
   */
  Never: CodingArgs;
  /**
   * on-error: initiator expects a response only if in error.
   */
  ErrorRejectConditionsOnly: CodingArgs;
  /**
   * on-success: initiator expects a response only if successful.
   */
  SuccessfulCompletionOnly: CodingArgs;
}

/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export const MessageheaderResponseRequestCodings:MessageheaderResponseRequestCodingType = {
  /**
   * always: initiator expects a response for this message.
   */
  Always: {
    display: "Always",
    code: "always",
    system: "http://hl7.org/fhir/messageheader-response-request",
  },
  /**
   * never: initiator does not expect a response.
   */
  Never: {
    display: "Never",
    code: "never",
    system: "http://hl7.org/fhir/messageheader-response-request",
  },
  /**
   * on-error: initiator expects a response only if in error.
   */
  ErrorRejectConditionsOnly: {
    display: "Error/reject conditions only",
    code: "on-error",
    system: "http://hl7.org/fhir/messageheader-response-request",
  },
  /**
   * on-success: initiator expects a response only if successful.
   */
  SuccessfulCompletionOnly: {
    display: "Successful completion only",
    code: "on-success",
    system: "http://hl7.org/fhir/messageheader-response-request",
  },
} as const;
