// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/v3-ActPharmacySupplyType|2014-03-26

import { CodingArgs } from '../fhir/Coding.js'

/**
 *  Identifies types of dispensing events
 */
export type V3ActPharmacySupplyTypeCodingType = {
  /**
   * DF: A fill providing sufficient supply for one day
   */
  DailyFill: CodingArgs;
  /**
   * EM: A supply action where there is no 'valid' order for the supplied medication.  E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)
   */
  EmergencySupply: CodingArgs;
  /**
   * FF: The initial fill against an order.  (This includes initial fills against refill orders.)
   */
  FirstFill: CodingArgs;
  /**
   * FFC: A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets).
   */
  FirstFillComplete: CodingArgs;
  /**
   * FFP: A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
   */
  FirstFillPartFill: CodingArgs;
  /**
   * FFSS: A first fill where the strength supplied is less than the ordered strength. (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  FirstFillPartialStrength: CodingArgs;
  /**
   * FS: A supply action to restock a smaller more local dispensary.
   */
  FloorStock: CodingArgs;
  /**
   * MS: A supply of a manufacturer sample
   */
  ManufacturerSample: CodingArgs;
  /**
   * RF: A fill against an order that has already been filled (or partially filled) at least once.
   */
  Refill: CodingArgs;
  /**
   * RFC: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.)
   */
  RefillComplete: CodingArgs;
  /**
   * RFCS: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  RefillCompletePartialStrength: CodingArgs;
  /**
   * RFF: The first fill against an order that has already been filled at least once at another facility.
   */
  RefillFirstFillThisFacility: CodingArgs;
  /**
   * RFFS: The first fill against an order that has already been filled at least once at another facility and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  RefillPartialStrengthFirstFillThisFacility: CodingArgs;
  /**
   * RFP: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
   */
  RefillPartFill: CodingArgs;
  /**
   * RFPS: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  RefillPartFillPartialStrength: CodingArgs;
  /**
   * RFS: A fill against an order that has already been filled (or partially filled) at least once and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  RefillPartialStrength: CodingArgs;
  /**
   * SO: An emergency supply where the expectation is that a formal order authorizing the supply will be provided at a later date.
   */
  ScriptOwing: CodingArgs;
  /**
   * TB: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided.
   */
  TrialBalance: CodingArgs;
  /**
   * TBS: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  TrialBalancePartialStrength: CodingArgs;
  /**
   * TF: A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance.
   */
  TrialFill: CodingArgs;
  /**
   * UD: A supply action that provides sufficient material for a single dose.
   */
  UnitDose: CodingArgs;
  /**
   * UDE: A supply action that provides sufficient material for a single dose via multiple products.  E.g. 2 50mg tablets for a 100mg unit dose.
   */
  UnitDoseEquivalent: CodingArgs;
}

/**
 *  Identifies types of dispensing events
 */
export const V3ActPharmacySupplyTypeCodings:V3ActPharmacySupplyTypeCodingType = {
  /**
   * DF: A fill providing sufficient supply for one day
   */
  DailyFill: {
    display: "Daily Fill",
    code: "DF",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * EM: A supply action where there is no 'valid' order for the supplied medication.  E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)
   */
  EmergencySupply: {
    display: "Emergency Supply",
    code: "EM",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * FF: The initial fill against an order.  (This includes initial fills against refill orders.)
   */
  FirstFill: {
    display: "First Fill",
    code: "FF",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * FFC: A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets).
   */
  FirstFillComplete: {
    display: "First Fill - Complete",
    code: "FFC",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * FFP: A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
   */
  FirstFillPartFill: {
    display: "First Fill - Part Fill",
    code: "FFP",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * FFSS: A first fill where the strength supplied is less than the ordered strength. (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  FirstFillPartialStrength: {
    display: "first fill, partial strength",
    code: "FFSS",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * FS: A supply action to restock a smaller more local dispensary.
   */
  FloorStock: {
    display: "Floor stock",
    code: "FS",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * MS: A supply of a manufacturer sample
   */
  ManufacturerSample: {
    display: "Manufacturer Sample",
    code: "MS",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * RF: A fill against an order that has already been filled (or partially filled) at least once.
   */
  Refill: {
    display: "Refill",
    code: "RF",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * RFC: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.)
   */
  RefillComplete: {
    display: "Refill - Complete",
    code: "RFC",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * RFCS: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  RefillCompletePartialStrength: {
    display: "refill complete partial strength",
    code: "RFCS",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * RFF: The first fill against an order that has already been filled at least once at another facility.
   */
  RefillFirstFillThisFacility: {
    display: "Refill (First fill this facility)",
    code: "RFF",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * RFFS: The first fill against an order that has already been filled at least once at another facility and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  RefillPartialStrengthFirstFillThisFacility: {
    display: "refill partial strength (first fill this facility)",
    code: "RFFS",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * RFP: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
   */
  RefillPartFill: {
    display: "Refill - Part Fill",
    code: "RFP",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * RFPS: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  RefillPartFillPartialStrength: {
    display: "refill part fill partial strength",
    code: "RFPS",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * RFS: A fill against an order that has already been filled (or partially filled) at least once and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  RefillPartialStrength: {
    display: "refill partial strength",
    code: "RFS",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * SO: An emergency supply where the expectation is that a formal order authorizing the supply will be provided at a later date.
   */
  ScriptOwing: {
    display: "Script Owing",
    code: "SO",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * TB: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided.
   */
  TrialBalance: {
    display: "Trial Balance",
    code: "TB",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * TBS: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
   */
  TrialBalancePartialStrength: {
    display: "trial balance partial strength",
    code: "TBS",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * TF: A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance.
   */
  TrialFill: {
    display: "Trial Fill",
    code: "TF",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * UD: A supply action that provides sufficient material for a single dose.
   */
  UnitDose: {
    display: "Unit Dose",
    code: "UD",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * UDE: A supply action that provides sufficient material for a single dose via multiple products.  E.g. 2 50mg tablets for a 100mg unit dose.
   */
  UnitDoseEquivalent: {
    display: "unit dose equivalent",
    code: "UDE",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
} as const;
