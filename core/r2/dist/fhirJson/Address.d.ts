import * as fhir from '../fhirJson.js';
/**
 * There is a variety of postal address formats defined around the world. This format defines a superset that is the basis for all addresses around the world.
 */
export interface Address extends fhir.FhirElement {
    /**
     * Allows an appropriate address to be chosen from a list of many.
     */
    use?: 'home' | 'old' | 'temp' | 'work' | undefined;
    /**
     * Extended properties for primitive element: Address.use
     */
    _use?: fhir.FhirElement;
    /**
     * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
     */
    type?: 'both' | 'physical' | 'postal' | undefined;
    /**
     * Extended properties for primitive element: Address.type
     */
    _type?: fhir.FhirElement;
    /**
     * A renderable, unencoded form.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Address.text
     */
    _text?: fhir.FhirElement;
    /**
     * home | work | temp | old - purpose of this address.
     */
    line?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Address.line
     */
    _line?: (fhir.FhirElement | null)[];
    /**
     * The name of the city, town, village or other community or delivery center.
     */
    city?: string | undefined;
    /**
     * Extended properties for primitive element: Address.city
     */
    _city?: fhir.FhirElement;
    /**
     * The name of the administrative area (county).
     */
    district?: string | undefined;
    /**
     * Extended properties for primitive element: Address.district
     */
    _district?: fhir.FhirElement;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).
     */
    state?: string | undefined;
    /**
     * Extended properties for primitive element: Address.state
     */
    _state?: fhir.FhirElement;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: string | undefined;
    /**
     * Extended properties for primitive element: Address.postalCode
     */
    _postalCode?: fhir.FhirElement;
    /**
     * Country - a nation as commonly understood or generally accepted.
     */
    country?: string | undefined;
    /**
     * Extended properties for primitive element: Address.country
     */
    _country?: fhir.FhirElement;
    /**
     * Allows addresses to be placed in historical context.
     */
    period?: fhir.Period | undefined;
}
//# sourceMappingURL=Address.d.ts.map