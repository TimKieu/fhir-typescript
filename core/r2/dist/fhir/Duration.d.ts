import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Duration type.
 */
export interface DurationArgs extends fhir.QuantityArgs {
}
/**
 * There SHALL be a code if there is a value and it SHALL be an expression of time.  If system is present, it SHALL be UCUM.
 */
export declare class Duration extends fhir.Quantity {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Default constructor for Duration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DurationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Duration.d.ts.map