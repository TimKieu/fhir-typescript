import * as fhir from '../fhirJson.js';
/**
 * If none of the conditions listed have an outcome of "death" specified, that indicates that none of the specified conditions are known to have been the primary cause of death.
 */
export interface FamilyMemberHistoryCondition extends fhir.BackboneElement {
    /**
     * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetAge?: fhir.Age | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetRange?: fhir.Range | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetPeriod?: fhir.Period | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.condition.onset[x]
     */
    _onsetString?: fhir.FhirElement;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
/**
 * Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.
 */
export interface FamilyMemberHistory extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "FamilyMemberHistory" | null;
    /**
     * This records identifiers associated with this family member history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A protocol or questionnaire that was adhered to in whole or in part by this event.
     */
    definition?: (fhir.Reference | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'completed' | 'entered-in-error' | 'health-unknown' | 'partial' | null;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.status
     */
    _status?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because it marks the family member history as a family member history that did not occur.  The more attributes are populated, the more constrained the negated statement is.  This notDone element is being evaluated and will likely be removed in a subsequent release.
     */
    notDone?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.notDone
     */
    _notDone?: fhir.FhirElement;
    /**
     * This notDoneReason element is being evaluated and will likely be replaced in a subsequent release (e.g. dataAbsentReason).
     */
    notDoneReason?: fhir.CodeableConcept | undefined;
    /**
     * The person who this history concerns.
     */
    patient: fhir.Reference | null;
    /**
     * This should be captured even if the same as the date on the List aggregating the full family history.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.date
     */
    _date?: fhir.FhirElement;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.name
     */
    _name?: fhir.FhirElement;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship: fhir.CodeableConcept | null;
    /**
     * Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.gender
     */
    _gender?: fhir.FhirElement;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornPeriod?: fhir.Period | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornDate?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornDate?: fhir.FhirElement;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornString?: fhir.FhirElement;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageAge?: fhir.Age | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageRange?: fhir.Range | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.age[x]
     */
    _ageString?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because the fact tha age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.estimatedAge
     */
    _estimatedAge?: fhir.FhirElement;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedBoolean?: fhir.FhirElement;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedAge?: fhir.Age | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedRange?: fhir.Range | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedDate?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedDate?: fhir.FhirElement;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedString?: fhir.FhirElement;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * If none of the conditions listed have an outcome of "death" specified, that indicates that none of the specified conditions are known to have been the primary cause of death.
     */
    condition?: (fhir.FamilyMemberHistoryCondition | null)[] | undefined;
}
//# sourceMappingURL=FamilyMemberHistory.d.ts.map