// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identity-assuranceLevel|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export type IdentityAssuranceLevelCodingType = {
  /**
   * level1: Little or no confidence in the asserted identity's accuracy.
   */
  Level1: CodingArgs;
  /**
   * level2: Some confidence in the asserted identity's accuracy.
   */
  Level2: CodingArgs;
  /**
   * level3: High confidence in the asserted identity's accuracy.
   */
  Level3: CodingArgs;
  /**
   * level4: Very high confidence in the asserted identity's accuracy.
   */
  Level4: CodingArgs;
}

/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export const IdentityAssuranceLevelCodings:IdentityAssuranceLevelCodingType = {
  /**
   * level1: Little or no confidence in the asserted identity's accuracy.
   */
  Level1: {
    display: "Level 1",
    code: "level1",
    system: "http://hl7.org/fhir/identity-assuranceLevel",
  },
  /**
   * level2: Some confidence in the asserted identity's accuracy.
   */
  Level2: {
    display: "Level 2",
    code: "level2",
    system: "http://hl7.org/fhir/identity-assuranceLevel",
  },
  /**
   * level3: High confidence in the asserted identity's accuracy.
   */
  Level3: {
    display: "Level 3",
    code: "level3",
    system: "http://hl7.org/fhir/identity-assuranceLevel",
  },
  /**
   * level4: Very high confidence in the asserted identity's accuracy.
   */
  Level4: {
    display: "Level 4",
    code: "level4",
    system: "http://hl7.org/fhir/identity-assuranceLevel",
  },
} as const;
