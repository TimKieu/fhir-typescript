import * as fhir from '../fhirJson.js';
/**
 * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export interface DetectedIssueMitigation extends fhir.BackboneElement {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.CodeableConcept | null;
    /**
     * This may not be the same as when the mitigating step was actually taken.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.mitigation.date
     */
    _date?: fhir.FhirElement;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.Reference | undefined;
}
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export interface DetectedIssue extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DetectedIssue" | null;
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: 'amended' | 'cancelled' | 'corrected' | 'entered-in-error' | 'final' | 'preliminary' | 'registered' | 'unknown' | null;
    /**
     * Extended properties for primitive element: DetectedIssue.status
     */
    _status?: fhir.FhirElement;
    /**
     * Identifies the general type of issue identified.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: 'high' | 'low' | 'moderate' | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.severity
     */
    _severity?: fhir.FhirElement;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The date or date-time when the detected issue was initially identified.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.date
     */
    _date?: fhir.FhirElement;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.Reference | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: (fhir.Reference | null)[] | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.detail
     */
    _detail?: fhir.FhirElement;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.reference
     */
    _reference?: fhir.FhirElement;
    /**
     * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: (fhir.DetectedIssueMitigation | null)[] | undefined;
}
//# sourceMappingURL=DetectedIssue.d.ts.map