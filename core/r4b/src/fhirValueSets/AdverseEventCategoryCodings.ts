// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adverse-event-category|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export type AdverseEventCategoryCodingType = {
  /**
   * expired-drug: The adverse event pertains to an expired drug.
   */
  ExpiredDrug: CodingArgs;
  /**
   * incorrect-prescribing-information: The adverse event pertains to incorrect perscribing information.
   */
  IncorrectPrescribingInformation: CodingArgs;
  /**
   * medical-device-use-error: The adverse event pertains to a medical device use error.
   */
  MedicalDeviceUseError: CodingArgs;
  /**
   * problem-different-manufacturer: The adverse event pertains to a problem with a different manufacturer of the same medication.
   */
  ProblemWithDifferentManufacturerOfSameMedicine: CodingArgs;
  /**
   * product-problem: The adverse event pertains to a product problem.
   */
  ProductProblem: CodingArgs;
  /**
   * product-quality: The adverse event pertains to product quality.
   */
  ProductQuality: CodingArgs;
  /**
   * product-use-error: The adverse event pertains to a product use error.
   */
  ProductUseError: CodingArgs;
  /**
   * unsafe-physical-environment: The adverse event pertains to an unsafe physical environment.
   */
  UnsafePhysicalEnvironment: CodingArgs;
  /**
   * wrong-dose: The adverse event pertains to a wrong dose.
   */
  WrongDose: CodingArgs;
  /**
   * wrong-duration: The adverse event pertains to a wrong duration.
   */
  WrongDuration: CodingArgs;
  /**
   * wrong-rate: The adverse event pertains to a wrong rate.
   */
  WrongRate: CodingArgs;
  /**
   * wrong-route-of-administration: The adverse event pertains to a wrong route of administration.
   */
  WrongRouteOfAdministration: CodingArgs;
  /**
   * wrong-technique: The adverse event pertains to a wrong technique.
   */
  WrongTechnique: CodingArgs;
  /**
   * wrong-time: The adverse event pertains to a wrong time.
   */
  WrongTime: CodingArgs;
}

/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export const AdverseEventCategoryCodings:AdverseEventCategoryCodingType = {
  /**
   * expired-drug: The adverse event pertains to an expired drug.
   */
  ExpiredDrug: {
    display: "Expired Drug",
    code: "expired-drug",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * incorrect-prescribing-information: The adverse event pertains to incorrect perscribing information.
   */
  IncorrectPrescribingInformation: {
    display: "Incorrect Prescribing Information",
    code: "incorrect-prescribing-information",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * medical-device-use-error: The adverse event pertains to a medical device use error.
   */
  MedicalDeviceUseError: {
    display: "Medical Device Use Error",
    code: "medical-device-use-error",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * problem-different-manufacturer: The adverse event pertains to a problem with a different manufacturer of the same medication.
   */
  ProblemWithDifferentManufacturerOfSameMedicine: {
    display: "Problem with Different Manufacturer of Same Medicine",
    code: "problem-different-manufacturer",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * product-problem: The adverse event pertains to a product problem.
   */
  ProductProblem: {
    display: "Product Problem",
    code: "product-problem",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * product-quality: The adverse event pertains to product quality.
   */
  ProductQuality: {
    display: "Product Quality",
    code: "product-quality",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * product-use-error: The adverse event pertains to a product use error.
   */
  ProductUseError: {
    display: "Product Use Error",
    code: "product-use-error",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * unsafe-physical-environment: The adverse event pertains to an unsafe physical environment.
   */
  UnsafePhysicalEnvironment: {
    display: "Unsafe Physical Environment",
    code: "unsafe-physical-environment",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * wrong-dose: The adverse event pertains to a wrong dose.
   */
  WrongDose: {
    display: "Wrong Dose",
    code: "wrong-dose",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * wrong-duration: The adverse event pertains to a wrong duration.
   */
  WrongDuration: {
    display: "Wrong Duration",
    code: "wrong-duration",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * wrong-rate: The adverse event pertains to a wrong rate.
   */
  WrongRate: {
    display: "Wrong Rate",
    code: "wrong-rate",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * wrong-route-of-administration: The adverse event pertains to a wrong route of administration.
   */
  WrongRouteOfAdministration: {
    display: "Wrong Route of Administration",
    code: "wrong-route-of-administration",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * wrong-technique: The adverse event pertains to a wrong technique.
   */
  WrongTechnique: {
    display: "Wrong Technique",
    code: "wrong-technique",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
  /**
   * wrong-time: The adverse event pertains to a wrong time.
   */
  WrongTime: {
    display: "Wrong Time",
    code: "wrong-time",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  },
} as const;
