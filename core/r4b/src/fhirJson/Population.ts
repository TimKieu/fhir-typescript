// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Population

import * as fhir from '../fhirJson.js';


/**
 * A populatioof people with some set of grouping criteria.
 */
export interface Population extends fhir.BackboneElement { 
  /**
   * The age of the specific population.
   */
  ageRange?: fhir.Range|undefined;
  /**
   * The age of the specific population.
   */
  ageCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * The gender of the specific population.
   */
  gender?: fhir.CodeableConcept|undefined;
  /**
   * Race of the specific population.
   */
  race?: fhir.CodeableConcept|undefined;
  /**
   * The existing physiological conditions of the specific population to which this applies.
   */
  physiologicalCondition?: fhir.CodeableConcept|undefined;
}
