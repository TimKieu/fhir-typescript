// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/testscript-profile-origin-types|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export type TestscriptProfileOriginTypesCodingType = {
  /**
   * FHIR-Client: General FHIR client used to initiate operations against a FHIR server.
   */
  FHIRClient: CodingArgs;
  /**
   * FHIR-SDC-FormFiller: A FHIR client acting as a Structured Data Capture Form Filler.
   */
  FHIRSDCFormFiller: CodingArgs;
}

/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export const TestscriptProfileOriginTypesCodings:TestscriptProfileOriginTypesCodingType = {
  /**
   * FHIR-Client: General FHIR client used to initiate operations against a FHIR server.
   */
  FHIRClient: {
    display: "FHIR Client",
    code: "FHIR-Client",
    system: "http://hl7.org/fhir/testscript-profile-origin-types",
  },
  /**
   * FHIR-SDC-FormFiller: A FHIR client acting as a Structured Data Capture Form Filler.
   */
  FHIRSDCFormFiller: {
    display: "FHIR SDC FormFiller",
    code: "FHIR-SDC-FormFiller",
    system: "http://hl7.org/fhir/testscript-profile-origin-types",
  },
} as const;
