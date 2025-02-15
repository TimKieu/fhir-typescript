// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-participant-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export type EncounterParticipantTypeCodingType = {
  /**
   * Code: ADM
   */
  Admitter: CodingArgs;
  /**
   * Code: ATND
   */
  Attender: CodingArgs;
  /**
   * Code: CALLBCK
   */
  CallbackContact: CodingArgs;
  /**
   * Code: CON
   */
  Consultant: CodingArgs;
  /**
   * Code: DIS
   */
  Discharger: CodingArgs;
  /**
   * emergency: A person to be contacted in case of an emergency during the encounter.
   */
  Emergency: CodingArgs;
  /**
   * Code: ESC
   */
  Escort: CodingArgs;
  /**
   * Code: PART
   */
  PART: CodingArgs;
  /**
   * Code: PPRF
   */
  PPRF: CodingArgs;
  /**
   * Code: REF
   */
  Referrer: CodingArgs;
  /**
   * Code: SPRF
   */
  SPRF: CodingArgs;
  /**
   * translator: A translator who is facilitating communication with the patient during the encounter.
   */
  Translator: CodingArgs;
}

/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export const EncounterParticipantTypeCodings:EncounterParticipantTypeCodingType = {
  /**
   * Code: ADM
   */
  Admitter: {
    display: "admitter",
    code: "ADM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: ATND
   */
  Attender: {
    display: "attender",
    code: "ATND",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: CALLBCK
   */
  CallbackContact: {
    display: "callback contact",
    code: "CALLBCK",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: CON
   */
  Consultant: {
    display: "consultant",
    code: "CON",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: DIS
   */
  Discharger: {
    display: "discharger",
    code: "DIS",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * emergency: A person to be contacted in case of an emergency during the encounter.
   */
  Emergency: {
    display: "Emergency",
    code: "emergency",
    system: "http://terminology.hl7.org/CodeSystem/participant-type",
  },
  /**
   * Code: ESC
   */
  Escort: {
    display: "escort",
    code: "ESC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: PART
   */
  PART: {
    code: "PART",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: PPRF
   */
  PPRF: {
    code: "PPRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: REF
   */
  Referrer: {
    display: "referrer",
    code: "REF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: SPRF
   */
  SPRF: {
    code: "SPRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * translator: A translator who is facilitating communication with the patient during the encounter.
   */
  Translator: {
    display: "Translator",
    code: "translator",
    system: "http://terminology.hl7.org/CodeSystem/participant-type",
  },
} as const;
