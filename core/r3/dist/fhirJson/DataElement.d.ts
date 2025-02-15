import * as fhir from '../fhirJson.js';
/**
 * Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
 */
export interface DataElementMapping extends fhir.BackboneElement {
    /**
     * The specification is described once, with general comments, and then specific mappings are made that reference this declaration.
     */
    identity: string | null;
    /**
     * Extended properties for primitive element: DataElement.mapping.identity
     */
    _identity?: fhir.FhirElement;
    /**
     * A formal identity for the specification being mapped to helps with identifying maps consistently.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.uri
     */
    _uri?: fhir.FhirElement;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.name
     */
    _name?: fhir.FhirElement;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.comment
     */
    _comment?: fhir.FhirElement;
}
/**
 * The formal description of a single piece of information that can be gathered and reported.
 */
export interface DataElement extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DataElement" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this data element outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different data element instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the data element with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.version
     */
    _version?: fhir.FhirElement;
    /**
     * Allows filtering of data elements that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired data element without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: DataElement.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of data element that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental data element in production.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: DataElement.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the data element. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the data element is the organization or individual primarily responsible for the maintenance and upkeep of the data element. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the data element. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc. This may be similar to the question used to prompt someone for a data element value, but the purpose is communicating about the data element, not asking the question.  (Refer to the 'question' element for the latter.).
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.title
     */
    _title?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the data element to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * null The copyright statement does not apply to values for the data element, only to its definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * Identifies how precise the data element is in its definition.
     */
    stringency?: 'comparable' | 'convertable' | 'equivalent' | 'flexible' | 'fully-specified' | 'scaleable' | undefined;
    /**
     * Extended properties for primitive element: DataElement.stringency
     */
    _stringency?: fhir.FhirElement;
    /**
     * Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
     */
    mapping?: (fhir.DataElementMapping | null)[] | undefined;
    /**
     * For simple data types there will only be one repetition.  For complex data types, multiple repetitions will be present defining a nested structure using the "path" element.
     */
    element: (fhir.ElementDefinition | null)[] | null;
}
//# sourceMappingURL=DataElement.d.ts.map