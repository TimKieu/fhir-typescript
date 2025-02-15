import * as fhir from '../fhirJson.js';
/**
 * List of participants involved in the appointment.
 */
export interface AppointmentParticipant extends fhir.BackboneElement {
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.Reference | undefined;
    /**
     * Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */
    required?: 'information-only' | 'optional' | 'required' | undefined;
    /**
     * Extended properties for primitive element: Appointment.participant.required
     */
    _required?: fhir.FhirElement;
    /**
     * Participation status of the actor.
     */
    status: 'accepted' | 'declined' | 'needs-action' | 'tentative' | null;
    /**
     * Extended properties for primitive element: Appointment.participant.status
     */
    _status?: fhir.FhirElement;
}
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export interface Appointment extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Appointment" | null;
    /**
     * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
     * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
     */
    status: 'arrived' | 'booked' | 'cancelled' | 'entered-in-error' | 'fulfilled' | 'noshow' | 'pending' | 'proposed' | null;
    /**
     * Extended properties for primitive element: Appointment.status
     */
    _status?: fhir.FhirElement;
    /**
     * A broad categorisation of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConcept | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The style of appointment or patient that has been booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConcept | undefined;
    /**
     * The reason that this appointment is being scheduled. This is more clinical than administrative.
     */
    reason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    indication?: (fhir.Reference | null)[] | undefined;
    /**
     * Seeking implementer feedback on this property and how interoperable it is.
     * Using an extension to record a codeableconcept for named values may be tested at a future connectathon.
     */
    priority?: number | undefined;
    /**
     * Extended properties for primitive element: Appointment.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.description
     */
    _description?: fhir.FhirElement;
    /**
     * Additional information to support the appointment provided when making the appointment.
     */
    supportingInformation?: (fhir.Reference | null)[] | undefined;
    /**
     * Date/Time that the appointment is to take place.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.start
     */
    _start?: fhir.FhirElement;
    /**
     * Date/Time that the appointment is to conclude.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.end
     */
    _end?: fhir.FhirElement;
    /**
     * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).
     */
    minutesDuration?: number | undefined;
    /**
     * Extended properties for primitive element: Appointment.minutesDuration
     */
    _minutesDuration?: fhir.FhirElement;
    /**
     * The slots from the participants' schedules that will be filled by the appointment.
     */
    slot?: (fhir.Reference | null)[] | undefined;
    /**
     * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.created
     */
    _created?: fhir.FhirElement;
    /**
     * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
     * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * The referral request this appointment is allocated to assess (incoming referral).
     */
    incomingReferral?: (fhir.Reference | null)[] | undefined;
    /**
     * List of participants involved in the appointment.
     */
    participant: (fhir.AppointmentParticipant | null)[] | null;
    /**
     * This does not introduce a capacity for recurring appointments.
     */
    requestedPeriod?: (fhir.Period | null)[] | undefined;
}
//# sourceMappingURL=Appointment.d.ts.map