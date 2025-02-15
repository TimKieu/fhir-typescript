import * as fhir from '../fhirJson.js';
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export interface EnrollmentRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentRequest" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentRequest.created
     */
    _created?: fhir.FhirElement;
    /**
     * The Insurer who is target  of the request.
     */
    target?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    organization?: fhir.Reference | undefined;
    /**
     * Patient Resource.
     */
    subject: fhir.Reference | null;
    /**
     * Need to identify the issuer to target for processing and for coordination of benefit processing.
     */
    coverage: fhir.Reference | null;
    /**
     * To determine the relationship between the patient and the subscriber.
     */
    relationship: fhir.Coding | null;
}
//# sourceMappingURL=EnrollmentRequest.d.ts.map