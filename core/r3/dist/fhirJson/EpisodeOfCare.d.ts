import * as fhir from '../fhirJson.js';
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export interface EpisodeOfCareStatusHistory extends fhir.BackboneElement {
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: 'active' | 'cancelled' | 'entered-in-error' | 'finished' | 'onhold' | 'planned' | 'waitlist' | null;
    /**
     * Extended properties for primitive element: EpisodeOfCare.statusHistory.status
     */
    _status?: fhir.FhirElement;
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.Period | null;
}
/**
 * The list of diagnosis relevant to this episode of care.
 */
export interface EpisodeOfCareDiagnosis extends fhir.BackboneElement {
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition: fhir.Reference | null;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    /**
     * Extended properties for primitive element: EpisodeOfCare.diagnosis.rank
     */
    _rank?: fhir.FhirElement;
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export interface EpisodeOfCare extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EpisodeOfCare" | null;
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
     */
    status: 'active' | 'cancelled' | 'entered-in-error' | 'finished' | 'onhold' | 'planned' | 'waitlist' | null;
    /**
     * Extended properties for primitive element: EpisodeOfCare.status
     */
    _status?: fhir.FhirElement;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: (fhir.EpisodeOfCareStatusHistory | null)[] | undefined;
    /**
     * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: (fhir.EpisodeOfCareDiagnosis | null)[] | undefined;
    /**
     * The patient who is the focus of this episode of care.
     */
    patient: fhir.Reference | null;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhir.Period | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: (fhir.Reference | null)[] | undefined;
    /**
     * The practitioner that is the care manager/care co-ordinator for this patient.
     */
    careManager?: fhir.Reference | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    team?: (fhir.Reference | null)[] | undefined;
    /**
     * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
     */
    account?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=EpisodeOfCare.d.ts.map