// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: CommunicationRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { RequestStatusCodes,  RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
// @ts-ignore
import { RequestStatusVsValidation } from '../fhirValueSets/RequestStatusVsValidation.js';
// @ts-ignore
import { CommunicationCategoryCodes,  CommunicationCategoryCodeType } from '../fhirValueSets/CommunicationCategoryCodes.js';
// @ts-ignore
import { CommunicationCategoryVsValidation } from '../fhirValueSets/CommunicationCategoryVsValidation.js';
// @ts-ignore
import { RequestPriorityCodes,  RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
// @ts-ignore
import { RequestPriorityVsValidation } from '../fhirValueSets/RequestPriorityVsValidation.js';
// @ts-ignore
import { V3ParticipationModeCodes,  V3ParticipationModeCodeType } from '../fhirValueSets/V3ParticipationModeCodes.js';
// @ts-ignore
import { V3ParticipationModeVsValidation } from '../fhirValueSets/V3ParticipationModeVsValidation.js';
// @ts-ignore
import { V3ActReasonCodes,  V3ActReasonCodeType } from '../fhirValueSets/V3ActReasonCodes.js';
// @ts-ignore
import { V3ActReasonVsValidation } from '../fhirValueSets/V3ActReasonVsValidation.js';
/**
 * Valid arguments for the CommunicationRequestPayload type.
 */
export interface CommunicationRequestPayloadArgs extends fhir.BackboneElementArgs {
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  content?: fhir.FhirString|fhir.Attachment|fhir.Reference|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentString?: fhir.FhirString|string|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentReference?: fhir.ReferenceArgs|undefined;
}

/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export class CommunicationRequestPayload extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CommunicationRequestPayload';
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  public content: (fhir.FhirString|fhir.Attachment|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element CommunicationRequest.payload.content[x]
   */
  protected static readonly _fts_contentIsChoice:true = true;
  /**
   * Default constructor for CommunicationRequestPayload - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CommunicationRequestPayloadArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['content']) { this.content = source.content; }
    else if (source['contentString'] !== undefined) { this.content = new fhir.FhirString({value: source.contentString}, options); }
    else if (source['contentAttachment']) { this.content = new fhir.Attachment(source.contentAttachment, options); }
    else if (source['contentReference']) { this.content = new fhir.Reference(source.contentReference, options); }
    else { this.content = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CommunicationRequest.payload' }
    iss.push(...this.vRS('content',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CommunicationRequestRequester type.
 */
export interface CommunicationRequestRequesterArgs extends fhir.BackboneElementArgs {
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  agent: fhir.ReferenceArgs|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  onBehalfOf?: fhir.ReferenceArgs|undefined;
}

/**
 * The individual who initiated the request and has responsibility for its activation.
 */
export class CommunicationRequestRequester extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CommunicationRequestRequester';
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  public agent: fhir.Reference|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * Default constructor for CommunicationRequestRequester - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CommunicationRequestRequesterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['agent']) { this.agent = new fhir.Reference(source.agent, options); }
    else { this.agent = null; }
    if (source['onBehalfOf']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CommunicationRequest.requester' }
    iss.push(...this.vRS('agent',exp));
    iss.push(...this.vOS('onBehalfOf',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CommunicationRequest type.
 */
export interface CommunicationRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CommunicationRequest"|undefined;
  /**
   * A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A plan or proposal that is fulfilled in whole or in part by this request.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  replaces?: fhir.ReferenceArgs[]|undefined;
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  groupIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
   */
  status: fhir.FhirCode<RequestStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CommunicationRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * There may be multiple axes of categorization and one communication request may serve multiple purposes.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  priority?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: CommunicationRequest.priority
   */
  _priority?:fhir.FhirElementArgs;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The patient or group that is the focus of this communication request.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
   */
  recipient?: fhir.ReferenceArgs[]|undefined;
  /**
   * The resources which were related to producing this communication request.
   */
  topic?: fhir.ReferenceArgs[]|undefined;
  /**
   * The encounter or episode of care within which the communication request was created.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  payload?: fhir.CommunicationRequestPayloadArgs[]|undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
   */
  authoredOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: CommunicationRequest.authoredOn
   */
  _authoredOn?:fhir.FhirElementArgs;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  sender?: fhir.ReferenceArgs|undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  requester?: fhir.CommunicationRequestRequesterArgs|undefined;
  /**
   * Textual reasons can be caprued using reasonCode.text.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates another resource whose existence justifies this request.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Comments made about the request by the requester, sender, recipient, subject or other participants.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export class CommunicationRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CommunicationRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "CommunicationRequest";
  /**
   * A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
   */
  public identifier: fhir.Identifier[];
  /**
   * A plan or proposal that is fulfilled in whole or in part by this request.
   */
  public basedOn: fhir.Reference[];
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  public replaces: fhir.Reference[];
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  public groupIdentifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
   */
  public status: fhir.FhirCode<RequestStatusCodeType>|null;
  /**
   * There may be multiple axes of categorization and one communication request may serve multiple purposes.
   */
  public category: fhir.CodeableConcept[];
  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  public priority?: fhir.FhirCode|undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  public medium: fhir.CodeableConcept[];
  /**
   * The patient or group that is the focus of this communication request.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
   */
  public recipient: fhir.Reference[];
  /**
   * The resources which were related to producing this communication request.
   */
  public topic: fhir.Reference[];
  /**
   * The encounter or episode of care within which the communication request was created.
   */
  public context?: fhir.Reference|undefined;
  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  public payload: fhir.CommunicationRequestPayload[];
  /**
   * The time when this communication is to occur.
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CommunicationRequest.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
   */
  public authoredOn?: fhir.FhirDateTime|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  public sender?: fhir.Reference|undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  public requester?: fhir.CommunicationRequestRequester|undefined;
  /**
   * Textual reasons can be caprued using reasonCode.text.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Indicates another resource whose existence justifies this request.
   */
  public reasonReference: fhir.Reference[];
  /**
   * Comments made about the request by the requester, sender, recipient, subject or other participants.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for CommunicationRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CommunicationRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CommunicationRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x, options)); }
    else { this.basedOn = []; }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.Reference(x, options)); }
    else { this.replaces = []; }
    if (source['groupIdentifier']) { this.groupIdentifier = new fhir.Identifier(source.groupIdentifier, options); }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<RequestStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<RequestStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.category = []; }
    if (source['priority'] !== undefined) { this.priority = new fhir.FhirCode({value: source.priority}, options); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode(source._priority as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['medium']) { this.medium = source.medium.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.medium = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    if (source['recipient']) { this.recipient = source.recipient.map((x) => new fhir.Reference(x, options)); }
    else { this.recipient = []; }
    if (source['topic']) { this.topic = source.topic.map((x) => new fhir.Reference(x, options)); }
    else { this.topic = []; }
    if (source['context']) { this.context = new fhir.Reference(source.context, options); }
    if (source['payload']) { this.payload = source.payload.map((x) => new fhir.CommunicationRequestPayload(x, options)); }
    else { this.payload = []; }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime'] !== undefined) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}, options); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod, options); }
    if (source['authoredOn'] !== undefined) { this.authoredOn = new fhir.FhirDateTime({value: source.authoredOn}, options); }
    if (source['_authoredOn']) {
      if (this.authoredOn) { this.authoredOn.addExtendedProperties(source._authoredOn!); }
      else { this.authoredOn = new fhir.FhirDateTime(source._authoredOn as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['sender']) { this.sender = new fhir.Reference(source.sender, options); }
    if (source['requester']) { this.requester = new fhir.CommunicationRequestRequester(source.requester, options); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x, options)); }
    else { this.reasonReference = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CommunicationRequest' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vOA('replaces',exp));
    iss.push(...this.vOS('groupIdentifier',exp));
    iss.push(...this.vRSV('status',exp,'RequestStatus',RequestStatusVsValidation,'r'));
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vOSV('priority',exp,'RequestPriority',RequestPriorityVsValidation,'r'));
    iss.push(...this.vOA('medium',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOA('recipient',exp));
    iss.push(...this.vOA('topic',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOA('payload',exp));
    iss.push(...this.vOS('occurrence',exp));
    iss.push(...this.vOS('authoredOn',exp));
    iss.push(...this.vOS('sender',exp));
    iss.push(...this.vOS('requester',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOA('reasonReference',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}
