// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActIncidentCode|2014-03-26

import { CodingArgs } from '../fhir/Coding.js'

/**
 *  Set of codes indicating the type of incident or accident.
 */
export type V3ActIncidentCodingType = {
  /**
   * MVA: Incident or accident as the result of a motor vehicle accident
   */
  MotorVehicleAccident: CodingArgs;
  /**
   * SCHOOL: Incident or accident is the result of a school place accident.
   */
  SchoolAccident: CodingArgs;
  /**
   * SPT: Incident or accident is the result of a sporting accident.
   */
  SportingAccident: CodingArgs;
  /**
   * WPA: Incident or accident is the result of a work place accident
   */
  WorkplaceAccident: CodingArgs;
}

/**
 *  Set of codes indicating the type of incident or accident.
 */
export const V3ActIncidentCodings:V3ActIncidentCodingType = {
  /**
   * MVA: Incident or accident as the result of a motor vehicle accident
   */
  MotorVehicleAccident: {
    display: "Motor vehicle accident",
    code: "MVA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * SCHOOL: Incident or accident is the result of a school place accident.
   */
  SchoolAccident: {
    display: "School Accident",
    code: "SCHOOL",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * SPT: Incident or accident is the result of a sporting accident.
   */
  SportingAccident: {
    display: "Sporting Accident",
    code: "SPT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * WPA: Incident or accident is the result of a work place accident
   */
  WorkplaceAccident: {
    display: "Workplace accident",
    code: "WPA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
} as const;
