// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ConceptMap

import * as fhir from '../fhirJson.js';


/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export interface ConceptMapGroupElementTargetDependsOn extends fhir.BackboneElement { 
  /**
   * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.
   */
  property: string|null;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.property
   */
  _property?:fhir.FhirElement;
  /**
   * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
   */
  system?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.system
   */
  _system?:fhir.FhirElement;
  /**
   * Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.
   */
  code: string|null;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.code
   */
  _code?:fhir.FhirElement;
  /**
   * The display is ignored when processing the map.
   */
  display?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.display
   */
  _display?:fhir.FhirElement;
}

/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export interface ConceptMapGroupElementTarget extends fhir.BackboneElement { 
  /**
   * Identity (code or path) or the element/item that the map refers to.
   */
  code?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.target.code
   */
  _code?:fhir.FhirElement;
  /**
   * The display is ignored when processing the map.
   */
  display?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.target.display
   */
  _display?:fhir.FhirElement;
  /**
   * This element is labeled as a modifier because it may indicate that a target does not apply.
   */
  equivalence?: 'disjoint'|'equal'|'equivalent'|'inexact'|'narrower'|'relatedto'|'specializes'|'subsumes'|'unmatched'|'wider'|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.target.equivalence
   */
  _equivalence?:fhir.FhirElement;
  /**
   * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
   */
  comment?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.target.comment
   */
  _comment?:fhir.FhirElement;
  /**
   * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
   */
  dependsOn?: (fhir.ConceptMapGroupElementTargetDependsOn|null)[]|undefined;
  /**
   * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
   */
  product?: (fhir.ConceptMapGroupElementTargetDependsOn|null)[]|undefined;
}

/**
 * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export interface ConceptMapGroupElement extends fhir.BackboneElement { 
  /**
   * Identity (code or path) or the element/item being mapped.
   */
  code?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.code
   */
  _code?:fhir.FhirElement;
  /**
   * The display is ignored when processing the map.
   */
  display?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.element.display
   */
  _display?:fhir.FhirElement;
  /**
   * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
   */
  target?: (fhir.ConceptMapGroupElementTarget|null)[]|undefined;
}

/**
 * This only applies if the source code is in the system defined for the group.
 */
export interface ConceptMapGroupUnmapped extends fhir.BackboneElement { 
  /**
   * Defines which action to take if there is no match in the group. One of 3 actions is possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
   */
  mode: 'fixed'|'other-map'|'provided'|null;
  /**
   * Extended properties for primitive element: ConceptMap.group.unmapped.mode
   */
  _mode?:fhir.FhirElement;
  /**
   * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
   */
  code?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.unmapped.code
   */
  _code?:fhir.FhirElement;
  /**
   * The display is ignored when processing the map.
   */
  display?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.unmapped.display
   */
  _display?:fhir.FhirElement;
  /**
   * The canonical URL of the map to use if this map contains no mapping.
   */
  url?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.unmapped.url
   */
  _url?:fhir.FhirElement;
}

/**
 * A group of mappings that all have the same source and target system.
 */
export interface ConceptMapGroup extends fhir.BackboneElement { 
  /**
   * An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).
   */
  source?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.source
   */
  _source?:fhir.FhirElement;
  /**
   * The specification of a particular code system version may be required for code systems which lack concept permanence.
   */
  sourceVersion?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.sourceVersion
   */
  _sourceVersion?:fhir.FhirElement;
  /**
   * Target may be omitted if all the targget element equivalence values are 'unmatched'.
   */
  target?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.target
   */
  _target?:fhir.FhirElement;
  /**
   * The specification of a particular code system version may be required for code systems which lack concept permanence.
   */
  targetVersion?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.group.targetVersion
   */
  _targetVersion?:fhir.FhirElement;
  /**
   * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
   */
  element: (fhir.ConceptMapGroupElement|null)[]|null;
  /**
   * This only applies if the source code is in the system defined for the group.
   */
  unmapped?: fhir.ConceptMapGroupUnmapped|undefined;
}

/**
 * A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
 */
export interface ConceptMap extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "ConceptMap"|null;
  /**
   * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
   */
  url?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.url
   */
  _url?:fhir.FhirElement;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this concept map outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.Identifier|undefined;
  /**
   * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the concept map with the format [url]|[version].
   */
  version?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.version
   */
  _version?:fhir.FhirElement;
  /**
   * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.name
   */
  _name?:fhir.FhirElement;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.title
   */
  _title?:fhir.FhirElement;
  /**
   * Allows filtering of concept maps that are appropriate for use vs. not.  
   * This is labeled as "Is Modifier" because applications should not use a retired concept map without due consideration.
   */
  status: 'active'|'draft'|'retired'|'unknown'|null;
  /**
   * Extended properties for primitive element: ConceptMap.status
   */
  _status?:fhir.FhirElement;
  /**
   * Allows filtering of concept map that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental concept map in production.
   */
  experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.experimental
   */
  _experimental?:fhir.FhirElement;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.date
   */
  _date?:fhir.FhirElement;
  /**
   * Usually an organization, but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.publisher
   */
  _publisher?:fhir.FhirElement;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: (fhir.ContactDetail|null)[]|undefined;
  /**
   * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.description
   */
  _description?:fhir.FhirElement;
  /**
   * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
   */
  useContext?: (fhir.UsageContext|null)[]|undefined;
  /**
   * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * This element does not describe the usage of the concept map Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
   */
  purpose?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.purpose
   */
  _purpose?:fhir.FhirElement;
  /**
   * null Frequently, the copyright differs between the concept map, and codes that are included. The copyright statement should clearly differentiate between these when required.
   */
  copyright?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.copyright
   */
  _copyright?:fhir.FhirElement;
  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
   */
  sourceUri?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.source[x]
   */
  _sourceUri?:fhir.FhirElement;
  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
   */
  sourceReference?: fhir.Reference|undefined;
  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
   */
  targetUri?: string|undefined;
  /**
   * Extended properties for primitive element: ConceptMap.target[x]
   */
  _targetUri?:fhir.FhirElement;
  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
   */
  targetReference?: fhir.Reference|undefined;
  /**
   * A group of mappings that all have the same source and target system.
   */
  group?: (fhir.ConceptMapGroup|null)[]|undefined;
}
