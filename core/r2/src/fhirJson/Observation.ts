// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Observation

import * as fhir from '../fhirJson.js';


/**
 * Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
 */
export interface ObservationReferenceRange extends fhir.BackboneElement { 
  /**
   * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
   */
  low?: fhir.Quantity|undefined;
  /**
   * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
   */
  high?: fhir.Quantity|undefined;
  /**
   * Need to be able to say what kind of reference range this is - normal, recommended, therapeutic, or perhaps what state this reference range applies to (i.e. age, hormonal cycles, etc.).
   */
  meaning?: fhir.CodeableConcept|undefined;
  /**
   * Some analytes vary greatly over age.
   */
  age?: fhir.Range|undefined;
  /**
   * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'.
   */
  text?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.referenceRange.text
   */
  _text?:fhir.FhirElement;
}

/**
 * Normally, an observation will have either a value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and a set of related observations or sometimes QuestionnaireResponse  from which the measure is derived.
 */
export interface ObservationRelated extends fhir.BackboneElement { 
  /**
   * A relationship type SHOULD be provided.
   */
  type?: 'derived-from'|'has-member'|'interfered-by'|'qualified-by'|'replaces'|'sequel-to'|undefined;
  /**
   * Extended properties for primitive element: Observation.related.type
   */
  _type?:fhir.FhirElement;
  /**
   * A reference to the observation or [[[QuestionnaireResponse]]] resource that is related to this observation.
   */
  target: fhir.Reference|null;
}

/**
 * Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable).   However, the reference range for the primary observation value is not inherited by the component values and is required when appropriate for each component observation.
 */
export interface ObservationComponent extends fhir.BackboneElement { 
  /**
   * Knowing what kind of observation is being made is essential to understanding the observation.
   */
  code: fhir.CodeableConcept|null;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueQuantity?: fhir.Quantity|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueString?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.component.value[x]
   */
  _valueString?:fhir.FhirElement;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueRange?: fhir.Range|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueRatio?: fhir.Ratio|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueSampledData?: fhir.SampledData|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueAttachment?: fhir.Attachment|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueTime?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.component.value[x]
   */
  _valueTime?:fhir.FhirElement;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.component.value[x]
   */
  _valueDateTime?:fhir.FhirElement;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valuePeriod?: fhir.Period|undefined;
  /**
   * For many results it is necessary to handle exceptional values in measurements.
   */
  dataAbsentReason?: fhir.CodeableConcept|undefined;
  /**
   * Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
   */
  referenceRange?: (fhir.ObservationReferenceRange|null)[]|undefined;
}

/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export interface Observation extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "Observation"|null;
  /**
   * Allows observations to be distinguished and referenced.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * Need to track the status of individual results. Some results are finalized before the whole report is finalized.
   */
  status: 'amended'|'cancelled'|'entered-in-error'|'final'|'preliminary'|'registered'|'unknown'|null;
  /**
   * Extended properties for primitive element: Observation.status
   */
  _status?:fhir.FhirElement;
  /**
   * A code that classifies the general type of observation being made.  This is used  for searching, sorting and display purposes.
   */
  category?: fhir.CodeableConcept|undefined;
  /**
   * Knowing what kind of observation is being made is essential to understanding the observation.
   */
  code: fhir.CodeableConcept|null;
  /**
   * Observations have no value if you don't know who or what they're about.
   */
  subject?: fhir.Reference|undefined;
  /**
   * For some observations it may be important to know the link between an observation and a particular encounter.
   */
  encounter?: fhir.Reference|undefined;
  /**
   * Knowing when an observation was deemed true is important to its relevance as well as determining trends.
   */
  effectiveDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.effective[x]
   */
  _effectiveDateTime?:fhir.FhirElement;
  /**
   * Knowing when an observation was deemed true is important to its relevance as well as determining trends.
   */
  effectivePeriod?: fhir.Period|undefined;
  /**
   * The date and time this observation was made available to providers, typically after the results have been reviewed and verified.
   */
  issued?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.issued
   */
  _issued?:fhir.FhirElement;
  /**
   * May give a degree of confidence in the observation and also indicates where follow-up questions should be directed.
   */
  performer?: (fhir.Reference|null)[]|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueQuantity?: fhir.Quantity|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueString?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.value[x]
   */
  _valueString?:fhir.FhirElement;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueRange?: fhir.Range|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueRatio?: fhir.Ratio|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueSampledData?: fhir.SampledData|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueAttachment?: fhir.Attachment|undefined;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueTime?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.value[x]
   */
  _valueTime?:fhir.FhirElement;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valueDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.value[x]
   */
  _valueDateTime?:fhir.FhirElement;
  /**
   * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
   */
  valuePeriod?: fhir.Period|undefined;
  /**
   * For many results it is necessary to handle exceptional values in measurements.
   */
  dataAbsentReason?: fhir.CodeableConcept|undefined;
  /**
   * For some results, particularly numeric results, an interpretation is necessary to fully understand the significance of a result.
   */
  interpretation?: fhir.CodeableConcept|undefined;
  /**
   * Need to be able to provide free text additional information.
   */
  comments?: string|undefined;
  /**
   * Extended properties for primitive element: Observation.comments
   */
  _comments?:fhir.FhirElement;
  /**
   * Knowing where the observation is made is important for tracking if multiple sites are possible.
   */
  bodySite?: fhir.CodeableConcept|undefined;
  /**
   * In some cases, method can impact results and is thus used for determining whether results can be compared or determining significance of results.
   */
  method?: fhir.CodeableConcept|undefined;
  /**
   * The specimen that was used when this observation was made.
   */
  specimen?: fhir.Reference|undefined;
  /**
   * The device used to generate the observation data.
   */
  device?: fhir.Reference|undefined;
  /**
   * Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
   */
  referenceRange?: (fhir.ObservationReferenceRange|null)[]|undefined;
  /**
   * Normally, an observation will have either a value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and a set of related observations or sometimes QuestionnaireResponse  from which the measure is derived.
   */
  related?: (fhir.ObservationRelated|null)[]|undefined;
  /**
   * Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable).   However, the reference range for the primary observation value is not inherited by the component values and is required when appropriate for each component observation.
   */
  component?: (fhir.ObservationComponent|null)[]|undefined;
}
