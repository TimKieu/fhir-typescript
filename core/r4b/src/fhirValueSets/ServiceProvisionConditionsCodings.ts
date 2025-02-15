// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/service-provision-conditions|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export type ServiceProvisionConditionsCodingType = {
  /**
   * cost: Fees apply for this service.
   */
  FeesApply: CodingArgs;
  /**
   * disc: There are discounts available on this service for qualifying patients.
   */
  DiscountsAvailable: CodingArgs;
  /**
   * free: This service is available for no patient cost.
   */
  Free: CodingArgs;
}

/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export const ServiceProvisionConditionsCodings:ServiceProvisionConditionsCodingType = {
  /**
   * cost: Fees apply for this service.
   */
  FeesApply: {
    display: "Fees apply",
    code: "cost",
    system: "http://terminology.hl7.org/CodeSystem/service-provision-conditions",
  },
  /**
   * disc: There are discounts available on this service for qualifying patients.
   */
  DiscountsAvailable: {
    display: "Discounts Available",
    code: "disc",
    system: "http://terminology.hl7.org/CodeSystem/service-provision-conditions",
  },
  /**
   * free: This service is available for no patient cost.
   */
  Free: {
    display: "Free",
    code: "free",
    system: "http://terminology.hl7.org/CodeSystem/service-provision-conditions",
  },
} as const;
