import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Resource type.
 */
export interface ResourceArgs extends fhir.FhirBaseArgs {
    /**
     * Resource Type Name
     */
    resourceType: string | string | undefined;
    /**
     * The only time that a resource does not have an id is when it is being submitted to the server using a create operation.
     */
    id?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: Resource.id
     */
    _id?: fhir.FhirElementArgs;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */
    meta?: fhir.MetaArgs | undefined;
    /**
     * Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element.
     * This element is labelled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation.
     */
    implicitRules?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Resource.implicitRules
     */
    _implicitRules?: fhir.FhirElementArgs;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource  Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Resource.language
     */
    _language?: fhir.FhirElementArgs;
}
/**
 * This is the base resource type for everything.
 */
export declare class Resource extends fhir.FhirBase {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: string | null;
    /**
     * The only time that a resource does not have an id is when it is being submitted to the server using a create operation.
     */
    id?: fhir.FhirId | undefined;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */
    meta?: fhir.Meta | undefined;
    /**
     * Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element.
     * This element is labelled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation.
     */
    implicitRules?: fhir.FhirUri | undefined;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource  Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language?: fhir.FhirCode | undefined;
    /**
     * Default constructor for Resource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Resource.d.ts.map