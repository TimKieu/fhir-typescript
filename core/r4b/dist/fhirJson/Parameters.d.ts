import * as fhir from '../fhirJson.js';
/**
 * A parameter passed to or received from the operation.
 */
export interface ParametersParameter extends fhir.BackboneElement {
    /**
     * The name of the parameter (reference to the operation definition).
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Parameters.parameter.name
     */
    _name?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueCanonical?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueCode?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueId?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueInstant?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueMarkdown?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueOid?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUrl?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: Parameters.parameter.value[x]
     */
    _valueUuid?: fhir.FhirElement;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueAge?: fhir.Age | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueCount?: fhir.Count | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueDistance?: fhir.Distance | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueContactDetail?: fhir.ContactDetail | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueContributor?: fhir.Contributor | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueExpression?: fhir.Expression | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueUsageContext?: fhir.UsageContext | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueDosage?: fhir.Dosage | undefined;
    /**
     * Conveys the content if the parameter is a data type.
     */
    valueMeta?: fhir.Meta | undefined;
    /**
     * When resolving references in resources, the operation definition may specify how references may be resolved between parameters. If a reference cannot be resolved between the parameters, the application should fall back to it's general resource resolution methods.
     */
    resource?: fhir.FhirResource | undefined;
    /**
     * Only one level of nested parameters is allowed.
     */
    part?: (fhir.ParametersParameter | null)[] | undefined;
}
/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export interface Parameters extends fhir.Resource {
    /**
     * Resource Type Name
     */
    resourceType: "Parameters" | null;
    /**
     * A parameter passed to or received from the operation.
     */
    parameter?: (fhir.ParametersParameter | null)[] | undefined;
}
//# sourceMappingURL=Parameters.d.ts.map