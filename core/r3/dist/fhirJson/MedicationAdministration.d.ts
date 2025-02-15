import * as fhir from '../fhirJson.js';
/**
 * The individual who was responsible for giving the medication to the patient.
 */
export interface MedicationAdministrationPerformer extends fhir.BackboneElement {
    /**
     * The device, practitioner, etc. who performed the action.
     */
    actor: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
}
/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export interface MedicationAdministrationDosage extends fhir.BackboneElement {
    /**
     * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
     * The dosage instructions should reflect the dosage of the medication that was administered.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationAdministration.dosage.text
     */
    _text?: fhir.FhirElement;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.CodeableConcept | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
     */
    dose?: fhir.Quantity | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateRatio?: fhir.Ratio | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateQuantity?: fhir.Quantity | undefined;
}
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export interface MedicationAdministration extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationAdministration" | null;
    /**
     * External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this event.
     */
    definition?: (fhir.Reference | null)[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: (fhir.Reference | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'completed' | 'entered-in-error' | 'in-progress' | 'on-hold' | 'stopped' | 'unknown' | null;
    /**
     * Extended properties for primitive element: MedicationAdministration.status
     */
    _status?: fhir.FhirElement;
    /**
     * Indicates the type of medication administration and where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example if you require form or lot number, then you must reference the Medication resource. .
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example if you require form or lot number, then you must reference the Medication resource. .
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * The person or animal or group receiving the medication.
     */
    subject: fhir.Reference | null;
    /**
     * The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.
     */
    context?: fhir.Reference | undefined;
    /**
     * Additional information (for example, patient height and weight) that supports the administration of the medication.
     */
    supportingInformation?: (fhir.Reference | null)[] | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationAdministration.effective[x]
     */
    _effectiveDateTime?: fhir.FhirElement;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * The individual who was responsible for giving the medication to the patient.
     */
    performer?: (fhir.MedicationAdministrationPerformer | null)[] | undefined;
    /**
     * This element is labeled as a modifier because it indicates that a administration didn't happen.
     */
    notGiven?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationAdministration.notGiven
     */
    _notGiven?: fhir.FhirElement;
    /**
     * A code indicating why the administration was not performed.
     */
    reasonNotGiven?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A code indicating why the medication was given.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * The original request, instruction or authority to perform the administration.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * The device used in administering the medication to the patient.  For example, a particular infusion pump.
     */
    device?: (fhir.Reference | null)[] | undefined;
    /**
     * Extra information about the medication administration that is not conveyed by the other attributes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: fhir.MedicationAdministrationDosage | undefined;
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
     */
    eventHistory?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=MedicationAdministration.d.ts.map