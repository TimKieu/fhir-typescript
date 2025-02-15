import * as fhir from '../fhir.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
/**
 * Valid arguments for the CommunicationRequestPayload type.
 */
export interface CommunicationRequestPayloadArgs extends fhir.BackboneElementArgs {
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    content?: fhir.FhirString | fhir.Attachment | fhir.Reference | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: fhir.FhirString | string | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export declare class CommunicationRequestPayload extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    content: (fhir.FhirString | fhir.Attachment | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element CommunicationRequest.payload.content[x]
     */
    protected static readonly _fts_contentIsChoice: true;
    /**
     * Default constructor for CommunicationRequestPayload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CommunicationRequestPayloadArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CommunicationRequestRequester type.
 */
export interface CommunicationRequestRequesterArgs extends fhir.BackboneElementArgs {
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    agent: fhir.ReferenceArgs | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
}
/**
 * The individual who initiated the request and has responsibility for its activation.
 */
export declare class CommunicationRequestRequester extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for CommunicationRequestRequester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CommunicationRequestRequesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CommunicationRequest type.
 */
export interface CommunicationRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CommunicationRequest" | undefined;
    /**
     * A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
    /**
     * The resources which were related to producing this communication request.
     */
    topic?: fhir.ReferenceArgs[] | undefined;
    /**
     * The encounter or episode of care within which the communication request was created.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload?: fhir.CommunicationRequestPayloadArgs[] | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhir.ReferenceArgs | undefined;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.CommunicationRequestRequesterArgs | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export declare class CommunicationRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CommunicationRequest";
    /**
     * A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
     */
    identifier: fhir.Identifier[];
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn: fhir.Reference[];
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces: fhir.Reference[];
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | null;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category: fhir.CodeableConcept[];
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: fhir.FhirCode | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium: fhir.CodeableConcept[];
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient: fhir.Reference[];
    /**
     * The resources which were related to producing this communication request.
     */
    topic: fhir.Reference[];
    /**
     * The encounter or episode of care within which the communication request was created.
     */
    context?: fhir.Reference | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload: fhir.CommunicationRequestPayload[];
    /**
     * The time when this communication is to occur.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CommunicationRequest.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.CommunicationRequestRequester | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference: fhir.Reference[];
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for CommunicationRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CommunicationRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CommunicationRequest.d.ts.map