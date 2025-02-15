// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-modifier-code|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A supported modifier for a search parameter.
 */
export type SearchModifierCodingType = {
  /**
   * above: The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
   */
  Above: CodingArgs;
  /**
   * below: The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
   */
  Below: CodingArgs;
  /**
   * contains: The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
   */
  Contains: CodingArgs;
  /**
   * exact: The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
   */
  Exact: CodingArgs;
  /**
   * in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
   */
  In: CodingArgs;
  /**
   * missing: The search parameter returns resources that have a value or not.
   */
  Missing: CodingArgs;
  /**
   * not: The search parameter returns resources that do not contain a match.
   */
  Not: CodingArgs;
  /**
   * not-in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
   */
  NotIn: CodingArgs;
  /**
   * text: The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
   */
  Text: CodingArgs;
  /**
   * type: The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
   */
  Type: CodingArgs;
}

/**
 * A supported modifier for a search parameter.
 */
export const SearchModifierCodings:SearchModifierCodingType = {
  /**
   * above: The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
   */
  Above: {
    display: "Above",
    code: "above",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * below: The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
   */
  Below: {
    display: "Below",
    code: "below",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * contains: The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
   */
  Contains: {
    display: "Contains",
    code: "contains",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * exact: The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
   */
  Exact: {
    display: "Exact",
    code: "exact",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
   */
  In: {
    display: "In",
    code: "in",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * missing: The search parameter returns resources that have a value or not.
   */
  Missing: {
    display: "Missing",
    code: "missing",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * not: The search parameter returns resources that do not contain a match.
   */
  Not: {
    display: "Not",
    code: "not",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * not-in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
   */
  NotIn: {
    display: "Not In",
    code: "not-in",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * text: The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
   */
  Text: {
    display: "Text",
    code: "text",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
  /**
   * type: The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
   */
  Type: {
    display: "Type",
    code: "type",
    system: "http://hl7.org/fhir/search-modifier-code",
  },
} as const;
