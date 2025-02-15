// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ProcedureRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { ProcedureRequestStatusCodes,  ProcedureRequestStatusCodeType } from '../fhirValueSets/ProcedureRequestStatusCodes.js';
// @ts-ignore
import { ProcedureRequestStatusVsValidation } from '../fhirValueSets/ProcedureRequestStatusVsValidation.js';
// @ts-ignore
import { ProcedureRequestPriorityCodes,  ProcedureRequestPriorityCodeType } from '../fhirValueSets/ProcedureRequestPriorityCodes.js';
// @ts-ignore
import { ProcedureRequestPriorityVsValidation } from '../fhirValueSets/ProcedureRequestPriorityVsValidation.js';
/**
 * Valid arguments for the ProcedureRequest type.
 */
export interface ProcedureRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ProcedureRequest"|undefined;
  /**
   * Identifiers assigned to this order by the order or by the receiver.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The person, animal or group that should receive the procedure.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The specific procedure that is ordered. Use text if the exact nature of the procedure cannot be coded.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * Knowing where the procedure is made is important for tracking if multiple sites are possible.
   */
  bodySite?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
   */
  reason?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
   */
  reasonCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
   */
  reasonReference?: fhir.ReferenceArgs|undefined;
  /**
   * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  scheduled?: fhir.FhirDateTime|fhir.Period|fhir.Timing|undefined;
  /**
   * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  scheduledDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  scheduledPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  scheduledTiming?: fhir.TimingArgs|undefined;
  /**
   * The encounter within which the procedure proposal or request was created.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * For example, the surgeon, anaethetist, endoscopist, etc.
   */
  performer?: fhir.ReferenceArgs|undefined;
  /**
   * The status of the order.
   */
  status?: fhir.FhirCode<ProcedureRequestStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ProcedureRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Any other notes associated with this proposal or order - e.g. provider instructions.
   */
  notes?: fhir.AnnotationArgs[]|undefined;
  /**
   * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
   */
  asNeeded?: fhir.FhirBoolean|fhir.CodeableConcept|undefined;
  /**
   * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
   */
  asNeededBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
   */
  asNeededCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The time when the request was made.
   */
  orderedOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ProcedureRequest.orderedOn
   */
  _orderedOn?:fhir.FhirElementArgs;
  /**
   * The healthcare professional responsible for proposing or ordering the procedure.
   */
  orderer?: fhir.ReferenceArgs|undefined;
  /**
   * The clinical priority associated with this order.
   */
  priority?: fhir.FhirCode<ProcedureRequestPriorityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ProcedureRequest.priority
   */
  _priority?:fhir.FhirElementArgs;
}

/**
 * A request for a procedure to be performed. May be a proposal or an order.
 */
export class ProcedureRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProcedureRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "ProcedureRequest";
  /**
   * Identifiers assigned to this order by the order or by the receiver.
   */
  public identifier: fhir.Identifier[];
  /**
   * The person, animal or group that should receive the procedure.
   */
  public subject: fhir.Reference|null;
  /**
   * The specific procedure that is ordered. Use text if the exact nature of the procedure cannot be coded.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Knowing where the procedure is made is important for tracking if multiple sites are possible.
   */
  public bodySite: fhir.CodeableConcept[];
  /**
   * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
   */
  public reason?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ProcedureRequest.reason[x]
   */
  protected static readonly _fts_reasonIsChoice:true = true;
  /**
   * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  public scheduled?: (fhir.FhirDateTime|fhir.Period|fhir.Timing)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ProcedureRequest.scheduled[x]
   */
  protected static readonly _fts_scheduledIsChoice:true = true;
  /**
   * The encounter within which the procedure proposal or request was created.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * For example, the surgeon, anaethetist, endoscopist, etc.
   */
  public performer?: fhir.Reference|undefined;
  /**
   * The status of the order.
   */
  public status?: fhir.FhirCode<ProcedureRequestStatusCodeType>|undefined;
  /**
   * Any other notes associated with this proposal or order - e.g. provider instructions.
   */
  public notes: fhir.Annotation[];
  /**
   * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
   */
  public asNeeded?: (fhir.FhirBoolean|fhir.CodeableConcept)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ProcedureRequest.asNeeded[x]
   */
  protected static readonly _fts_asNeededIsChoice:true = true;
  /**
   * The time when the request was made.
   */
  public orderedOn?: fhir.FhirDateTime|undefined;
  /**
   * The healthcare professional responsible for proposing or ordering the procedure.
   */
  public orderer?: fhir.Reference|undefined;
  /**
   * The clinical priority associated with this order.
   */
  public priority?: fhir.FhirCode<ProcedureRequestPriorityCodeType>|undefined;
  /**
   * Default constructor for ProcedureRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProcedureRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ProcedureRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    else { this.code = null; }
    if (source['bodySite']) { this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.bodySite = []; }
    if (source['reason']) { this.reason = source.reason; }
    else if (source['reasonCodeableConcept']) { this.reason = new fhir.CodeableConcept(source.reasonCodeableConcept, options); }
    else if (source['reasonReference']) { this.reason = new fhir.Reference(source.reasonReference, options); }
    if (source['scheduled']) { this.scheduled = source.scheduled; }
    else if (source['scheduledDateTime'] !== undefined) { this.scheduled = new fhir.FhirDateTime({value: source.scheduledDateTime}, options); }
    else if (source['scheduledPeriod']) { this.scheduled = new fhir.Period(source.scheduledPeriod, options); }
    else if (source['scheduledTiming']) { this.scheduled = new fhir.Timing(source.scheduledTiming, options); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter, options); }
    if (source['performer']) { this.performer = new fhir.Reference(source.performer, options); }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<ProcedureRequestStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ProcedureRequestStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['notes']) { this.notes = source.notes.map((x) => new fhir.Annotation(x, options)); }
    else { this.notes = []; }
    if (source['asNeeded']) { this.asNeeded = source.asNeeded; }
    else if (source['asNeededBoolean'] !== undefined) { this.asNeeded = new fhir.FhirBoolean({value: source.asNeededBoolean}, options); }
    else if (source['asNeededCodeableConcept']) { this.asNeeded = new fhir.CodeableConcept(source.asNeededCodeableConcept, options); }
    if (source['orderedOn'] !== undefined) { this.orderedOn = new fhir.FhirDateTime({value: source.orderedOn}, options); }
    if (source['_orderedOn']) {
      if (this.orderedOn) { this.orderedOn.addExtendedProperties(source._orderedOn!); }
      else { this.orderedOn = new fhir.FhirDateTime(source._orderedOn as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['orderer']) { this.orderer = new fhir.Reference(source.orderer, options); }
    if (source['priority'] !== undefined) { this.priority = new fhir.FhirCode<ProcedureRequestPriorityCodeType>({value: source.priority}, options); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode<ProcedureRequestPriorityCodeType>(source._priority as Partial<fhir.FhirCode>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ProcedureRequest' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOA('bodySite',exp));
    iss.push(...this.vOS('reason',exp));
    iss.push(...this.vOS('scheduled',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('performer',exp));
    iss.push(...this.vOSV('status',exp,'ProcedureRequestStatus',ProcedureRequestStatusVsValidation,'r'));
    iss.push(...this.vOA('notes',exp));
    iss.push(...this.vOS('asNeeded',exp));
    iss.push(...this.vOS('orderedOn',exp));
    iss.push(...this.vOS('orderer',exp));
    iss.push(...this.vOSV('priority',exp,'ProcedureRequestPriority',ProcedureRequestPriorityVsValidation,'r'));
    return iss;
  }
}
