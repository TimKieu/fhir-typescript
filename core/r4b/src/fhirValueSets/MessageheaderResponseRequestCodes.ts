// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/messageheader-response-request|4.3.0

/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export const MessageheaderResponseRequestCodes = {
  /**
   * always: initiator expects a response for this message.
   */
  Always: "always",
  /**
   * never: initiator does not expect a response.
   */
  Never: "never",
  /**
   * on-error: initiator expects a response only if in error.
   */
  ErrorRejectConditionsOnly: "on-error",
  /**
   * on-success: initiator expects a response only if successful.
   */
  SuccessfulCompletionOnly: "on-success",
} as const;

/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export type MessageheaderResponseRequestCodeType = typeof MessageheaderResponseRequestCodes[keyof typeof MessageheaderResponseRequestCodes];
