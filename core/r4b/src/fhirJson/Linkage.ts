// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Linkage

import * as fhir from '../fhirJson.js';


/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export interface LinkageItem extends fhir.BackboneElement { 
  /**
   * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
   */
  type: 'alternate'|'historical'|'source'|null;
  /**
   * Extended properties for primitive element: Linkage.item.type
   */
  _type?:fhir.FhirElement;
  /**
   * The resource instance being linked as part of the group.
   */
  resource: fhir.Reference|null;
}

/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export interface Linkage extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "Linkage"|null;
  /**
   * If false, any asserted linkages should not be considered current/relevant/applicable.
   */
  active?: boolean|undefined;
  /**
   * Extended properties for primitive element: Linkage.active
   */
  _active?:fhir.FhirElement;
  /**
   * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
   */
  author?: fhir.Reference|undefined;
  /**
   * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
   */
  item: (fhir.LinkageItem|null)[]|null;
}
