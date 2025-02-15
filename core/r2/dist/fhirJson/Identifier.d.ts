import * as fhir from '../fhirJson.js';
/**
 * A technical identifier - identifies some entity uniquely and unambiguously.
 */
export interface Identifier extends fhir.FhirElement {
    /**
     * Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.
     */
    use?: 'official' | 'secondary' | 'temp' | 'usual' | undefined;
    /**
     * Extended properties for primitive element: Identifier.use
     */
    _use?: fhir.FhirElement;
    /**
     * Allows users to make use of identifiers when the identifier system is not known.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * There are many sequences of identifiers.  To perform matching, we need to know what sequence we're dealing with. The system identifies a particular sequence or set of unique identifiers.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Identifier.system
     */
    _system?: fhir.FhirElement;
    /**
     * The portion of the identifier typically displayed to the user and which is unique within the context of the system.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: Identifier.value
     */
    _value?: fhir.FhirElement;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhir.Period | undefined;
    /**
     * Organization that issued/manages the identifier.
     */
    assigner?: fhir.Reference | undefined;
}
//# sourceMappingURL=Identifier.d.ts.map