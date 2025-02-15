// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-route|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export type ImmunizationRouteCodingType = {
  /**
   * Code: IDINJ
   */
  InjectionIntradermal: CodingArgs;
  /**
   * Code: IM
   */
  InjectionIntramuscular: CodingArgs;
  /**
   * Code: IVINJ
   */
  InjectionIntravenous: CodingArgs;
  /**
   * Code: NASINHLC
   */
  InhalationNasal: CodingArgs;
  /**
   * Code: PO
   */
  SwallowOral: CodingArgs;
  /**
   * Code: SQ
   */
  InjectionSubcutaneous: CodingArgs;
  /**
   * Code: TRNSDERM
   */
  Transdermal: CodingArgs;
}

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export const ImmunizationRouteCodings:ImmunizationRouteCodingType = {
  /**
   * Code: IDINJ
   */
  InjectionIntradermal: {
    display: "Injection, intradermal",
    code: "IDINJ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: IM
   */
  InjectionIntramuscular: {
    display: "Injection, intramuscular",
    code: "IM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: IVINJ
   */
  InjectionIntravenous: {
    display: "Injection, intravenous",
    code: "IVINJ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: NASINHLC
   */
  InhalationNasal: {
    display: "Inhalation, nasal",
    code: "NASINHLC",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: PO
   */
  SwallowOral: {
    display: "Swallow, oral",
    code: "PO",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: SQ
   */
  InjectionSubcutaneous: {
    display: "Injection, subcutaneous",
    code: "SQ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: TRNSDERM
   */
  Transdermal: {
    display: "Transdermal",
    code: "TRNSDERM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
} as const;
