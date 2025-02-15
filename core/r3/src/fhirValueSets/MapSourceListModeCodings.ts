// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-source-list-mode|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * If field is a list, how to manage the source
 */
export type MapSourceListModeCodingType = {
  /**
   * first: Only process this rule for the first in the list
   */
  First: CodingArgs;
  /**
   * last: Only process this rule for the last in the list
   */
  Last: CodingArgs;
  /**
   * not_first: Process this rule for all but the first
   */
  AllButTheFirst: CodingArgs;
  /**
   * not_last: Process this rule for all but the last
   */
  AllButTheLast: CodingArgs;
  /**
   * only_one: Only process this rule is there is only item
   */
  EnforceOnlyOne: CodingArgs;
}

/**
 * If field is a list, how to manage the source
 */
export const MapSourceListModeCodings:MapSourceListModeCodingType = {
  /**
   * first: Only process this rule for the first in the list
   */
  First: {
    display: "First",
    code: "first",
    system: "http://hl7.org/fhir/map-source-list-mode",
  },
  /**
   * last: Only process this rule for the last in the list
   */
  Last: {
    display: "Last",
    code: "last",
    system: "http://hl7.org/fhir/map-source-list-mode",
  },
  /**
   * not_first: Process this rule for all but the first
   */
  AllButTheFirst: {
    display: "All but the first",
    code: "not_first",
    system: "http://hl7.org/fhir/map-source-list-mode",
  },
  /**
   * not_last: Process this rule for all but the last
   */
  AllButTheLast: {
    display: "All but the last",
    code: "not_last",
    system: "http://hl7.org/fhir/map-source-list-mode",
  },
  /**
   * only_one: Only process this rule is there is only item
   */
  EnforceOnlyOne: {
    display: "Enforce only one",
    code: "only_one",
    system: "http://hl7.org/fhir/map-source-list-mode",
  },
} as const;
