// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/guide-dependency-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * How a dependency is represented when the guide is published.
 */
export type GuideDependencyTypeCodingType = {
  /**
   * inclusion: The guide is embedded in this guide when published.
   */
  Inclusion: CodingArgs;
  /**
   * reference: The guide is referred to by URL.
   */
  Reference: CodingArgs;
}

/**
 * How a dependency is represented when the guide is published.
 */
export const GuideDependencyTypeCodings:GuideDependencyTypeCodingType = {
  /**
   * inclusion: The guide is embedded in this guide when published.
   */
  Inclusion: {
    display: "Inclusion",
    code: "inclusion",
    system: "http://hl7.org/fhir/guide-dependency-type",
  },
  /**
   * reference: The guide is referred to by URL.
   */
  Reference: {
    display: "Reference",
    code: "reference",
    system: "http://hl7.org/fhir/guide-dependency-type",
  },
} as const;
