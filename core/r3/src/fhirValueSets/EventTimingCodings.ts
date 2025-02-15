// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-timing|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Real world event relating to the schedule.
 */
export type EventTimingCodingType = {
  /**
   * AC: before meal (from lat. ante cibus)
   */
  AC: CodingArgs;
  /**
   * ACD: before lunch (from lat. ante cibus diurnus)
   */
  ACD: CodingArgs;
  /**
   * ACM: before breakfast (from lat. ante cibus matutinus)
   */
  ACM: CodingArgs;
  /**
   * ACV: before dinner (from lat. ante cibus vespertinus)
   */
  ACV: CodingArgs;
  /**
   * AFT: event occurs during the afternoon
   */
  Afternoon: CodingArgs;
  /**
   * C: Description: meal (from lat. ante cibus)
   */
  C: CodingArgs;
  /**
   * CD: Description: lunch (from lat. cibus diurnus)
   */
  CD: CodingArgs;
  /**
   * CM: Description: breakfast (from lat. cibus matutinus)
   */
  CM: CodingArgs;
  /**
   * CV: Description: dinner (from lat. cibus vespertinus)
   */
  CV: CodingArgs;
  /**
   * EVE: event occurs during the evening
   */
  Evening: CodingArgs;
  /**
   * HS: Description: Prior to beginning a regular period of extended sleep (this would exclude naps).  Note that this might occur at different times of day depending on a person's regular sleep schedule.
   */
  HS: CodingArgs;
  /**
   * MORN: event occurs during the morning
   */
  Morning: CodingArgs;
  /**
   * NIGHT: event occurs during the night
   */
  Night: CodingArgs;
  /**
   * PC: after meal (from lat. post cibus)
   */
  PC: CodingArgs;
  /**
   * PCD: after lunch (from lat. post cibus diurnus)
   */
  PCD: CodingArgs;
  /**
   * PCM: after breakfast (from lat. post cibus matutinus)
   */
  PCM: CodingArgs;
  /**
   * PCV: after dinner (from lat. post cibus vespertinus)
   */
  PCV: CodingArgs;
  /**
   * PHS: event occurs [offset] after subject goes to sleep
   */
  AfterSleep: CodingArgs;
  /**
   * WAKE: Description: Upon waking up from a regular period of sleep, in order to start regular activities (this would exclude waking up from a nap or temporarily waking up during a period of sleep)
   * 
   *                         
   *                            Usage Notes: e.g.
   * 
   *                         Take pulse rate on waking in management of thyrotoxicosis.
   * 
   *                         Take BP on waking in management of hypertension
   * 
   *                         Take basal body temperature on waking in establishing date of ovulation
   */
  WAKE: CodingArgs;
}

/**
 * Real world event relating to the schedule.
 */
export const EventTimingCodings:EventTimingCodingType = {
  /**
   * AC: before meal (from lat. ante cibus)
   */
  AC: {
    display: "AC",
    code: "AC",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * ACD: before lunch (from lat. ante cibus diurnus)
   */
  ACD: {
    display: "ACD",
    code: "ACD",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * ACM: before breakfast (from lat. ante cibus matutinus)
   */
  ACM: {
    display: "ACM",
    code: "ACM",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * ACV: before dinner (from lat. ante cibus vespertinus)
   */
  ACV: {
    display: "ACV",
    code: "ACV",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * AFT: event occurs during the afternoon
   */
  Afternoon: {
    display: "Afternoon",
    code: "AFT",
    system: "http://hl7.org/fhir/event-timing",
  },
  /**
   * C: Description: meal (from lat. ante cibus)
   */
  C: {
    display: "C",
    code: "C",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * CD: Description: lunch (from lat. cibus diurnus)
   */
  CD: {
    display: "CD",
    code: "CD",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * CM: Description: breakfast (from lat. cibus matutinus)
   */
  CM: {
    display: "CM",
    code: "CM",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * CV: Description: dinner (from lat. cibus vespertinus)
   */
  CV: {
    display: "CV",
    code: "CV",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * EVE: event occurs during the evening
   */
  Evening: {
    display: "Evening",
    code: "EVE",
    system: "http://hl7.org/fhir/event-timing",
  },
  /**
   * HS: Description: Prior to beginning a regular period of extended sleep (this would exclude naps).  Note that this might occur at different times of day depending on a person's regular sleep schedule.
   */
  HS: {
    display: "HS",
    code: "HS",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * MORN: event occurs during the morning
   */
  Morning: {
    display: "Morning",
    code: "MORN",
    system: "http://hl7.org/fhir/event-timing",
  },
  /**
   * NIGHT: event occurs during the night
   */
  Night: {
    display: "Night",
    code: "NIGHT",
    system: "http://hl7.org/fhir/event-timing",
  },
  /**
   * PC: after meal (from lat. post cibus)
   */
  PC: {
    display: "PC",
    code: "PC",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * PCD: after lunch (from lat. post cibus diurnus)
   */
  PCD: {
    display: "PCD",
    code: "PCD",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * PCM: after breakfast (from lat. post cibus matutinus)
   */
  PCM: {
    display: "PCM",
    code: "PCM",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * PCV: after dinner (from lat. post cibus vespertinus)
   */
  PCV: {
    display: "PCV",
    code: "PCV",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
  /**
   * PHS: event occurs [offset] after subject goes to sleep
   */
  AfterSleep: {
    display: "After Sleep",
    code: "PHS",
    system: "http://hl7.org/fhir/event-timing",
  },
  /**
   * WAKE: Description: Upon waking up from a regular period of sleep, in order to start regular activities (this would exclude waking up from a nap or temporarily waking up during a period of sleep)
   * 
   *                         
   *                            Usage Notes: e.g.
   * 
   *                         Take pulse rate on waking in management of thyrotoxicosis.
   * 
   *                         Take BP on waking in management of hypertension
   * 
   *                         Take basal body temperature on waking in establishing date of ovulation
   */
  WAKE: {
    display: "WAKE",
    code: "WAKE",
    system: "http://hl7.org/fhir/v3/TimingEvent",
  },
} as const;
