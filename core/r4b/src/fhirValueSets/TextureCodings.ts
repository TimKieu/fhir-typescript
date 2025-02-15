// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/texture-code|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * TextureModifier: Codes for food consistency types or texture modifications to apply to foods. This value set is composed of SNOMED CT (US Extension and Core) Concepts from SCTID 229961002 Food consistency types (substance) hierarchy and is provided as a suggestive example.
 */
export type TextureCodingType = {
  /**
   * Code: 228049004
   */
  ChoppedFood: CodingArgs;
  /**
   * Code: 228053002
   */
  CutUpFood: CodingArgs;
  /**
   * Code: 228055009
   */
  LiquidizedFood: CodingArgs;
  /**
   * Code: 228056005
   */
  LumpyFood: CodingArgs;
  /**
   * Code: 228057001
   */
  SemiSolidFood: CodingArgs;
  /**
   * Code: 228058006
   */
  SingleTextureFood: CodingArgs;
  /**
   * Code: 228059003
   */
  SoftFood: CodingArgs;
  /**
   * Code: 228060008
   */
  SolidFood: CodingArgs;
  /**
   * Code: 439091000124107
   */
  EasyToChewFood: CodingArgs;
  /**
   * Code: 441751000124100
   */
  MashedFood: CodingArgs;
  /**
   * Code: 441761000124103
   */
  MincedFood: CodingArgs;
  /**
   * Code: 441771000124105
   */
  MoistFood: CodingArgs;
  /**
   * Code: 441791000124106
   */
  StrainedFood: CodingArgs;
  /**
   * Code: 441881000124103
   */
  GroundFood: CodingArgs;
}

/**
 * TextureModifier: Codes for food consistency types or texture modifications to apply to foods. This value set is composed of SNOMED CT (US Extension and Core) Concepts from SCTID 229961002 Food consistency types (substance) hierarchy and is provided as a suggestive example.
 */
export const TextureCodings:TextureCodingType = {
  /**
   * Code: 228049004
   */
  ChoppedFood: {
    display: "Chopped food",
    code: "228049004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 228053002
   */
  CutUpFood: {
    display: "Cut-up food",
    code: "228053002",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 228055009
   */
  LiquidizedFood: {
    display: "Liquidized food",
    code: "228055009",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 228056005
   */
  LumpyFood: {
    display: "Lumpy food",
    code: "228056005",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 228057001
   */
  SemiSolidFood: {
    display: "Semi-solid food",
    code: "228057001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 228058006
   */
  SingleTextureFood: {
    display: "Single texture food",
    code: "228058006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 228059003
   */
  SoftFood: {
    display: "Soft food",
    code: "228059003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 228060008
   */
  SolidFood: {
    display: "Solid food",
    code: "228060008",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 439091000124107
   */
  EasyToChewFood: {
    display: "Easy to chew food",
    code: "439091000124107",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 441751000124100
   */
  MashedFood: {
    display: "Mashed food",
    code: "441751000124100",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 441761000124103
   */
  MincedFood: {
    display: "Minced food",
    code: "441761000124103",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 441771000124105
   */
  MoistFood: {
    display: "Moist food",
    code: "441771000124105",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 441791000124106
   */
  StrainedFood: {
    display: "Strained food",
    code: "441791000124106",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 441881000124103
   */
  GroundFood: {
    display: "Ground food",
    code: "441881000124103",
    system: "http://snomed.info/sct",
  },
} as const;
