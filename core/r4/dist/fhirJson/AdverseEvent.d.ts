import * as fhir from '../fhirJson.js';
/**
 * Information on the possible cause of the event.
 */
export interface AdverseEventSuspectEntityCausality extends fhir.BackboneElement {
    /**
     * Assessment of if the entity caused the event.
     */
    assessment?: fhir.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    productRelatedness?: string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.suspectEntity.causality.productRelatedness
     */
    _productRelatedness?: fhir.FhirElement;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    author?: fhir.Reference | undefined;
    /**
     * ProbabilityScale | Bayesian | Checklist.
     */
    method?: fhir.CodeableConcept | undefined;
}
/**
 * Describes the entity that is suspected to have caused the adverse event.
 */
export interface AdverseEventSuspectEntity extends fhir.BackboneElement {
    /**
     * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
     */
    instance: fhir.Reference | null;
    /**
     * Information on the possible cause of the event.
     */
    causality?: (fhir.AdverseEventSuspectEntityCausality | null)[] | undefined;
}
/**
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export interface AdverseEvent extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "AdverseEvent" | null;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
     */
    actuality: 'actual' | 'potential' | null;
    /**
     * Extended properties for primitive element: AdverseEvent.actuality
     */
    _actuality?: fhir.FhirElement;
    /**
     * The overall type of event, intended for search and filtering purposes.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element defines the specific type of event that occurred or that was prevented from occurring.
     */
    event?: fhir.CodeableConcept | undefined;
    /**
     * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.date
     */
    _date?: fhir.FhirElement;
    /**
     * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
     */
    detected?: string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.detected
     */
    _detected?: fhir.FhirElement;
    /**
     * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
     */
    recordedDate?: string | undefined;
    /**
     * Extended properties for primitive element: AdverseEvent.recordedDate
     */
    _recordedDate?: fhir.FhirElement;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    resultingCondition?: (fhir.Reference | null)[] | undefined;
    /**
     * The information about where the adverse event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * Assessment whether this event was of real importance.
     */
    seriousness?: fhir.CodeableConcept | undefined;
    /**
     * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
     */
    severity?: 'mild' | 'moderate' | 'severe' | undefined;
    /**
     * Describes the type of outcome from the adverse event.
     */
    outcome?: 'fatal' | 'ongoing' | 'recovering' | 'resolved' | 'resolvedWithSequelae' | 'unknown' | undefined;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
     */
    contributor?: (fhir.Reference | null)[] | undefined;
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity?: (fhir.AdverseEventSuspectEntity | null)[] | undefined;
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory?: (fhir.Reference | null)[] | undefined;
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument?: (fhir.Reference | null)[] | undefined;
    /**
     * AdverseEvent.study.
     */
    study?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=AdverseEvent.d.ts.map