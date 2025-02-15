import * as fhir from '../fhirJson.js';
/**
 * Identifies CarePlans with some sort of formal relationship to the current plan.
 */
export interface CarePlanRelatedPlan extends fhir.BackboneElement {
    /**
     * Identifies the type of relationship this plan has to the target plan.
     */
    code?: 'fulfills' | 'includes' | 'replaces' | undefined;
    /**
     * Extended properties for primitive element: CarePlan.relatedPlan.code
     */
    _code?: fhir.FhirElement;
    /**
     * A reference to the plan to which a relationship is asserted.
     */
    plan: fhir.Reference | null;
}
/**
 * Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
 */
export interface CarePlanParticipant extends fhir.BackboneElement {
    /**
     * Indicates specific responsibility of an individual within the care plan; e.g. "Primary physician", "Team coordinator", "Caregiver", etc.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The specific person or organization who is participating/expected to participate in the care plan.
     */
    member?: fhir.Reference | undefined;
}
/**
 * Details in a simple form for generic care plan systems.
 */
export interface CarePlanActivityDetail extends fhir.BackboneElement {
    /**
     * May determine what types of extensions are permitted.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Allows matching performed to planned as well as validation against protocols.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Provides the rationale that drove the inclusion of this particular activity as part of the plan.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * So that participants know the link explicitly.
     */
    goal?: (fhir.Reference | null)[] | undefined;
    /**
     * Indicates progress against the plan, whether the activity is still relevant for the plan.
     */
    status?: 'cancelled' | 'completed' | 'in-progress' | 'not-started' | 'on-hold' | 'scheduled' | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.status
     */
    _status?: fhir.FhirElement;
    /**
     * Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Captures intention to not do something that may have been previously typical.
     */
    prohibited: boolean | null;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.prohibited
     */
    _prohibited?: fhir.FhirElement;
    /**
     * Allows prompting for activities and detection of missed planned activities.
     */
    scheduledTiming?: fhir.Timing | undefined;
    /**
     * Allows prompting for activities and detection of missed planned activities.
     */
    scheduledPeriod?: fhir.Period | undefined;
    /**
     * Allows prompting for activities and detection of missed planned activities.
     */
    scheduledString?: string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.scheduled[x]
     */
    _scheduledString?: fhir.FhirElement;
    /**
     * Helps in planning of activity.
     */
    location?: fhir.Reference | undefined;
    /**
     * Helps in planning of activity.
     */
    performer?: (fhir.Reference | null)[] | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productReference?: fhir.Reference | undefined;
    /**
     * Allows rough dose checking.
     */
    dailyAmount?: fhir.Quantity | undefined;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.description
     */
    _description?: fhir.FhirElement;
}
/**
 * Allows systems to prompt for performance of planned activities, and validate plans against best practice.
 */
export interface CarePlanActivity extends fhir.BackboneElement {
    /**
     * Links plan to resulting actions.
     */
    actionResulting?: (fhir.Reference | null)[] | undefined;
    /**
     * Can be used to capture information about adherence, progress, concerns, etc.
     */
    progress?: (fhir.Annotation | null)[] | undefined;
    /**
     * Details in a form consistent with other applications and contexts of use.
     */
    reference?: fhir.Reference | undefined;
    /**
     * Details in a simple form for generic care plan systems.
     */
    detail?: fhir.CarePlanActivityDetail | undefined;
}
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export interface CarePlan extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "CarePlan" | null;
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Allows clinicians to determine whether the plan is actionable or not.
     */
    status: 'active' | 'cancelled' | 'completed' | 'draft' | 'proposed' | null;
    /**
     * Extended properties for primitive element: CarePlan.status
     */
    _status?: fhir.FhirElement;
    /**
     * Identifies the context in which this particular CarePlan is defined.
     */
    context?: fhir.Reference | undefined;
    /**
     * Allows tracking what plan(s) are in effect at a particular time.
     */
    period?: fhir.Period | undefined;
    /**
     * Identifies the individual(s) or ogranization who is responsible for the content of the care plan.
     */
    author?: (fhir.Reference | null)[] | undefined;
    /**
     * Indicates how current the plan is.
     */
    modified?: string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.modified
     */
    _modified?: fhir.FhirElement;
    /**
     * Used for filtering what plan(s) are retrieved and displayed to different types of users.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Provides more detail than conveyed by category.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.description
     */
    _description?: fhir.FhirElement;
    /**
     * Links plan to the conditions it manages.  Also scopes plans - multiple plans may exist addressing different concerns.
     */
    addresses?: (fhir.Reference | null)[] | undefined;
    /**
     * Identifies barriers and other considerations associated with the care plan.
     */
    support?: (fhir.Reference | null)[] | undefined;
    /**
     * Identifies CarePlans with some sort of formal relationship to the current plan.
     */
    relatedPlan?: (fhir.CarePlanRelatedPlan | null)[] | undefined;
    /**
     * Allows representation of care teams, helps scope care plan.  In some cases may be a determiner of access permissions.
     */
    participant?: (fhir.CarePlanParticipant | null)[] | undefined;
    /**
     * Provides context for plan.  Allows plan effectiveness to be evaluated by clinicians.
     */
    goal?: (fhir.Reference | null)[] | undefined;
    /**
     * Allows systems to prompt for performance of planned activities, and validate plans against best practice.
     */
    activity?: (fhir.CarePlanActivity | null)[] | undefined;
    /**
     * Used to capture information that applies to the plan as a whole that doesn't fit into discrete elements.
     */
    note?: fhir.Annotation | undefined;
}
//# sourceMappingURL=CarePlan.d.ts.map