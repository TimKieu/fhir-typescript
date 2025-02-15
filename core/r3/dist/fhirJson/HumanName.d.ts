import * as fhir from '../fhirJson.js';
/**
 * A human's name with the ability to identify parts and usage.
 */
export interface HumanName extends fhir.FhirElement {
    /**
     * This is labeled as "Is Modifier" because applications should not mistake a temporary or old name etc.for a current/permanent one. Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: 'anonymous' | 'maiden' | 'nickname' | 'official' | 'old' | 'temp' | 'usual' | undefined;
    /**
     * Extended properties for primitive element: HumanName.use
     */
    _use?: fhir.FhirElement;
    /**
     * Can provide both a text representation and structured parts.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: HumanName.text
     */
    _text?: fhir.FhirElement;
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: string | undefined;
    /**
     * Extended properties for primitive element: HumanName.family
     */
    _family?: fhir.FhirElement;
    /**
     * If only initials are recorded, they may be used in place of the full name.  Not called "first name" since given names do not always come first.
     */
    given?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.given
     */
    _given?: (fhir.FhirElement | null)[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.prefix
     */
    _prefix?: (fhir.FhirElement | null)[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.suffix
     */
    _suffix?: (fhir.FhirElement | null)[];
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhir.Period | undefined;
}
//# sourceMappingURL=HumanName.d.ts.map