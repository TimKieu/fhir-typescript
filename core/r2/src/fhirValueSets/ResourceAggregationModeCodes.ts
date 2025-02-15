// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/resource-aggregation-mode|1.0.2

/**
 * How resource references can be aggregated.
 */
export const ResourceAggregationModeCodes = {
  /**
   * bundled: The resource the reference points to will be found in the same bundle as the resource that includes the reference.
   */
  Bundled: "bundled",
  /**
   * contained: The reference is a local reference to a contained resource.
   */
  Contained: "contained",
  /**
   * referenced: The reference to a resource that has to be resolved externally to the resource that includes the reference.
   */
  Referenced: "referenced",
} as const;

/**
 * How resource references can be aggregated.
 */
export type ResourceAggregationModeCodeType = typeof ResourceAggregationModeCodes[keyof typeof ResourceAggregationModeCodes];
