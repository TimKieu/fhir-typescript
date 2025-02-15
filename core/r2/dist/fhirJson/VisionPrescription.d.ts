import * as fhir from '../fhirJson.js';
/**
 * Deals with details of the dispense part of the supply specification.
 */
export interface VisionPrescriptionDispense extends fhir.BackboneElement {
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.Coding | null;
    /**
     * The eye for which the lens applies.
     */
    eye?: 'left' | 'right' | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.eye
     */
    _eye?: fhir.FhirElement;
    /**
     * Lens power measured in diopters (0.25 units).
     */
    sphere?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.sphere
     */
    _sphere?: fhir.FhirElement;
    /**
     * Power adjustment for astigmatism measured in diopters (0.25 units).
     */
    cylinder?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.cylinder
     */
    _cylinder?: fhir.FhirElement;
    /**
     * Adjustment for astigmatism measured in integer degrees.
     */
    axis?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.axis
     */
    _axis?: fhir.FhirElement;
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    prism?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.prism
     */
    _prism?: fhir.FhirElement;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base?: 'down' | 'in' | 'out' | 'up' | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.base
     */
    _base?: fhir.FhirElement;
    /**
     * Power adjustment for multifocal lenses measured in diopters (0.25 units).
     */
    add?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.add
     */
    _add?: fhir.FhirElement;
    /**
     * Contact lens power measured in diopters (0.25 units).
     */
    power?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.power
     */
    _power?: fhir.FhirElement;
    /**
     * Back curvature measured in millimeters.
     */
    backCurve?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.backCurve
     */
    _backCurve?: fhir.FhirElement;
    /**
     * Contact lens diameter measured in millimeters.
     */
    diameter?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.diameter
     */
    _diameter?: fhir.FhirElement;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * Special color or pattern.
     */
    color?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.color
     */
    _color?: fhir.FhirElement;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.brand
     */
    _brand?: fhir.FhirElement;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    notes?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.notes
     */
    _notes?: fhir.FhirElement;
}
/**
 * An authorization for the supply of glasses and/or contact lenses to a patient.
 */
export interface VisionPrescription extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "VisionPrescription" | null;
    /**
     * Business identifier which may be used by other parties to reference or identify the prescription.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The date (and perhaps time) when the prescription was written.
     */
    dateWritten?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dateWritten
     */
    _dateWritten?: fhir.FhirElement;
    /**
     * A link to a resource representing the person to whom the vision products will be supplied.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber?: fhir.Reference | undefined;
    /**
     * A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reasonCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * Deals with details of the dispense part of the supply specification.
     */
    dispense?: (fhir.VisionPrescriptionDispense | null)[] | undefined;
}
//# sourceMappingURL=VisionPrescription.d.ts.map