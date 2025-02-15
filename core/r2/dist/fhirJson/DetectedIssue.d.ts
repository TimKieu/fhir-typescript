import * as fhir from '../fhirJson.js';
/**
 * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export interface DetectedIssueMitigation extends fhir.BackboneElement {
    /**
     * Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
     */
    action: fhir.CodeableConcept | null;
    /**
     * Indicates when the mitigating action was documented.
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
     * While the subject could be inferred by tracing the subject of the implicated resources, it's useful to have a direct link for query purposes.
     */
    patient?: fhir.Reference | undefined;
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
     * Indicates the resource representing the current activity or proposed activity that is potentially problematic.
     */
    implicated?: (fhir.Reference | null)[] | undefined;
    /**
     * A textual explanation of the detected issue.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.detail
     */
    _detail?: fhir.FhirElement;
    /**
     * No-one can be responsible for mitigation prior to the issue being identified.
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
     * Allows linking instances of the same detected issue found on different servers.
     */
    identifier?: fhir.Identifier | undefined;
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