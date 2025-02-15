import * as fhir from '../fhirJson.js';
/**
 * Record of delivery of what is supplied.
 */
export interface SupplyDelivery extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyDelivery" | null;
    /**
     * Identifier assigned by the dispensing facility when the item(s) is dispensed.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * A code specifying the state of the dispense event.
     */
    status?: 'abandoned' | 'completed' | 'in-progress' | undefined;
    /**
     * Extended properties for primitive element: SupplyDelivery.status
     */
    _status?: fhir.FhirElement;
    /**
     * A link to a resource representing the person whom the delivered item is for.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.
     */
    suppliedItem?: fhir.Reference | undefined;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: fhir.Reference | undefined;
    /**
     * The time the dispense event occurred.
     */
    whenPrepared?: fhir.Period | undefined;
    /**
     * The time the dispensed item was sent or handed to the patient (or agent).
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: SupplyDelivery.time
     */
    _time?: fhir.FhirElement;
    /**
     * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
     */
    destination?: fhir.Reference | undefined;
    /**
     * Identifies the person who picked up the Supply.
     */
    receiver?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=SupplyDelivery.d.ts.map