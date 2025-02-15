import * as fhir from '../fhirJson.js';
/**
 * A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export interface CoverageGrouping extends fhir.BackboneElement {
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.
     */
    group?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.group
     */
    _group?: fhir.FhirElement;
    /**
     * A short description for the group.
     */
    groupDisplay?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.groupDisplay
     */
    _groupDisplay?: fhir.FhirElement;
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.
     */
    subGroup?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subGroup
     */
    _subGroup?: fhir.FhirElement;
    /**
     * A short description for the subgroup.
     */
    subGroupDisplay?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subGroupDisplay
     */
    _subGroupDisplay?: fhir.FhirElement;
    /**
     * Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.
     */
    plan?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.plan
     */
    _plan?: fhir.FhirElement;
    /**
     * A short description for the plan.
     */
    planDisplay?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.planDisplay
     */
    _planDisplay?: fhir.FhirElement;
    /**
     * Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.
     */
    subPlan?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subPlan
     */
    _subPlan?: fhir.FhirElement;
    /**
     * A short description for the subplan.
     */
    subPlanDisplay?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subPlanDisplay
     */
    _subPlanDisplay?: fhir.FhirElement;
    /**
     * Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.
     */
    class?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.class
     */
    _class?: fhir.FhirElement;
    /**
     * A short description for the class.
     */
    classDisplay?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.classDisplay
     */
    _classDisplay?: fhir.FhirElement;
    /**
     * Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.
     */
    subClass?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subClass
     */
    _subClass?: fhir.FhirElement;
    /**
     * A short description for the subclass.
     */
    subClassDisplay?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.grouping.subClassDisplay
     */
    _subClassDisplay?: fhir.FhirElement;
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services.
 */
export interface Coverage extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Coverage" | null;
    /**
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatination of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: Coverage.status
     */
    _status?: fhir.FhirElement;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The party who 'owns' the insurance policy,  may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.Reference | undefined;
    /**
     * The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
     */
    subscriber?: fhir.Reference | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.subscriberId
     */
    _subscriberId?: fhir.FhirElement;
    /**
     * The party who benefits from the insurance coverage., the patient when services are provided.
     */
    beneficiary?: fhir.Reference | undefined;
    /**
     * The relationship of beneficiary (patient) to the subscriber.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.Period | undefined;
    /**
     * The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     */
    payor?: (fhir.Reference | null)[] | undefined;
    /**
     * A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    grouping?: fhir.CoverageGrouping | undefined;
    /**
     * A unique identifier for a dependent under the coverage.
     */
    dependent?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.dependent
     */
    _dependent?: fhir.FhirElement;
    /**
     * An optional counter for a particular instance of the identified coverage which increments upon each renewal.
     */
    sequence?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: number | undefined;
    /**
     * Extended properties for primitive element: Coverage.order
     */
    _order?: fhir.FhirElement;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.network
     */
    _network?: fhir.FhirElement;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=Coverage.d.ts.map