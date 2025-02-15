import * as fhir from '../fhir.js';
/**
 * Valid arguments for the BackboneElement type.
 */
export interface BackboneElementArgs extends fhir.FhirElementArgs {
    /**
     * May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
     */
    modifierExtension?: fhir.ExtensionArgs[] | undefined;
}
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export declare class BackboneElement extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
     */
    modifierExtension: fhir.Extension[];
    /**
     * Default constructor for BackboneElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BackboneElementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=BackboneElement.d.ts.map