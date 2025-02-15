// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: ManufacturedItemDefinition

import * as fhir from '../fhirJson.js';


/**
 * General characteristics of this item.
 */
export interface ManufacturedItemDefinitionProperty extends fhir.BackboneElement { 
  /**
   * A code expressing the type of characteristic.
   */
  type: fhir.CodeableConcept|null;
  /**
   * A value for the characteristic.
   */
  valueCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * A value for the characteristic.
   */
  valueQuantity?: fhir.Quantity|undefined;
  /**
   * A value for the characteristic.
   */
  valueDate?: string|undefined;
  /**
   * Extended properties for primitive element: ManufacturedItemDefinition.property.value[x]
   */
  _valueDate?:fhir.FhirElement;
  /**
   * A value for the characteristic.
   */
  valueBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: ManufacturedItemDefinition.property.value[x]
   */
  _valueBoolean?:fhir.FhirElement;
  /**
   * A value for the characteristic.
   */
  valueAttachment?: fhir.Attachment|undefined;
}

/**
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 */
export interface ManufacturedItemDefinition extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "ManufacturedItemDefinition"|null;
  /**
   * Unique identifier.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * Allows filtering of manufactured items that are appropriate for use versus not.
   */
  status: 'active'|'draft'|'retired'|'unknown'|null;
  /**
   * Extended properties for primitive element: ManufacturedItemDefinition.status
   */
  _status?:fhir.FhirElement;
  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product.
   */
  manufacturedDoseForm: fhir.CodeableConcept|null;
  /**
   * The “real world” units in which the quantity of the manufactured item is described.
   */
  unitOfPresentation?: fhir.CodeableConcept|undefined;
  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   */
  manufacturer?: (fhir.Reference|null)[]|undefined;
  /**
   * The ingredients of this manufactured item. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource.
   */
  ingredient?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * General characteristics of this item.
   */
  property?: (fhir.ManufacturedItemDefinitionProperty|null)[]|undefined;
}
