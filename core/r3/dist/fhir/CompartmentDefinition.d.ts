import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { CompartmentTypeCodeType } from '../fhirValueSets/CompartmentTypeCodes.js';
/**
 * Valid arguments for the CompartmentDefinitionResource type.
 */
export interface CompartmentDefinitionResourceArgs extends fhir.BackboneElementArgs {
    /**
     * The name of a resource supported by the server.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.param
     */
    _param?: (fhir.FhirElementArgs | null)[];
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * Information about how a resource is related to the compartment.
 */
export declare class CompartmentDefinitionResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of a resource supported by the server.
     */
    code: fhir.FhirCode | null;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param: fhir.FhirString[];
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for CompartmentDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompartmentDefinitionResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CompartmentDefinition type.
 */
export interface CompartmentDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly. This is often the same as the code for the parameter, but does not need to be.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of compartment definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired compartment definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of compartment definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental compartment definition in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * This element does not describe the usage of the compartment definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the compartment definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: fhir.FhirCode<CompartmentTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.search
     */
    _search?: fhir.FhirElementArgs;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: fhir.CompartmentDefinitionResourceArgs[] | undefined;
}
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export declare class CompartmentDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url: fhir.FhirUri | null;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly. This is often the same as the code for the parameter, but does not need to be.
     */
    name: fhir.FhirString | null;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of compartment definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired compartment definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of compartment definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental compartment definition in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * This element does not describe the usage of the compartment definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the compartment definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: fhir.FhirCode<CompartmentTypeCodeType> | null;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: fhir.FhirBoolean | null;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource: fhir.CompartmentDefinitionResource[];
    /**
     * Default constructor for CompartmentDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompartmentDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CompartmentDefinition.d.ts.map