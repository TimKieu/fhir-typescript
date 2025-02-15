import * as fhir from '../fhirJson.js';
/**
 * The creator of the task.
 */
export interface TaskRequester extends fhir.BackboneElement {
    /**
     * The device, practitioner, etc. who initiated the task.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of when they initiated the task.
     */
    onBehalfOf?: fhir.Reference | undefined;
}
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export interface TaskRestriction extends fhir.BackboneElement {
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number | undefined;
    /**
     * Extended properties for primitive element: Task.restriction.repetitions
     */
    _repetitions?: fhir.FhirElement;
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhir.Period | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient?: (fhir.Reference | null)[] | undefined;
}
/**
 * Additional information that may be needed in the execution of the task.
 */
export interface TaskInput extends fhir.BackboneElement {
    /**
     * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueCode?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueId?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueInstant?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueMarkdown?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueOid?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAge?: fhir.Age | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCount?: fhir.Count | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDistance?: fhir.Distance | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMeta?: fhir.Meta | undefined;
}
/**
 * Outputs produced by the Task.
 */
export interface TaskOutput extends fhir.BackboneElement {
    /**
     * The name of the Output parameter.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueCode?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueId?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueInstant?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueMarkdown?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueOid?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAge?: fhir.Age | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCount?: fhir.Count | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDistance?: fhir.Distance | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMeta?: fhir.Meta | undefined;
}
/**
 * A task to be performed.
 */
export interface Task extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Task" | null;
    /**
     * The business identifier for this task.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
     */
    definitionUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.definition[x]
     */
    _definitionUri?: fhir.FhirElement;
    /**
     * A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
     */
    definitionReference?: fhir.Reference | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ProcedureRequest, MedicationRequest, ProcedureRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfil.  This latter resource is referenced by FocusOn.  For example, based on a ProcedureRequest (= BasedOn), a task is created to fulfil a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf?: (fhir.Reference | null)[] | undefined;
    /**
     * The current status of the task.
     */
    status: 'accepted' | 'cancelled' | 'completed' | 'draft' | 'entered-in-error' | 'failed' | 'in-progress' | 'on-hold' | 'ready' | 'received' | 'rejected' | 'requested' | null;
    /**
     * Extended properties for primitive element: Task.status
     */
    _status?: fhir.FhirElement;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhir.CodeableConcept | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent: 'filler-order' | 'instance-order' | 'option' | 'order' | 'original-order' | 'plan' | 'proposal' | 'reflex-order' | null;
    /**
     * Extended properties for primitive element: Task.intent
     */
    _intent?: fhir.FhirElement;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: Task.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Task.description
     */
    _description?: fhir.FhirElement;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhir.Reference | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhir.Reference | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    context?: fhir.Reference | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhir.Period | undefined;
    /**
     * The date and time this task was created.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: Task.authoredOn
     */
    _authoredOn?: fhir.FhirElement;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string | undefined;
    /**
     * Extended properties for primitive element: Task.lastModified
     */
    _lastModified?: fhir.FhirElement;
    /**
     * The creator of the task.
     */
    requester?: fhir.TaskRequester | undefined;
    /**
     * The type of participant that can execute the task.
     */
    performerType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.Reference | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: (fhir.Reference | null)[] | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhir.TaskRestriction | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: (fhir.TaskInput | null)[] | undefined;
    /**
     * Outputs produced by the Task.
     */
    output?: (fhir.TaskOutput | null)[] | undefined;
}
//# sourceMappingURL=Task.d.ts.map