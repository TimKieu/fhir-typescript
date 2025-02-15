// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 */
export type CarePlanStatusCodingType = {
  /**
   * active: The plan is intended to be followed and used as part of patient care.
   */
  Active: CodingArgs;
  /**
   * cancelled: The plan has been terminated prior to reaching completion (though it may have been replaced by a new plan).
   */
  Cancelled: CodingArgs;
  /**
   * completed: The plan is no longer in use and is not expected to be followed or used in patient care.
   */
  Completed: CodingArgs;
  /**
   * draft: The plan is in development or awaiting use but is not yet intended to be acted upon.
   */
  Pending: CodingArgs;
  /**
   * proposed: The plan has been suggested but no commitment to it has yet been made.
   */
  Proposed: CodingArgs;
}

/**
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 */
export const CarePlanStatusCodings:CarePlanStatusCodingType = {
  /**
   * active: The plan is intended to be followed and used as part of patient care.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/care-plan-status",
  },
  /**
   * cancelled: The plan has been terminated prior to reaching completion (though it may have been replaced by a new plan).
   */
  Cancelled: {
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/care-plan-status",
  },
  /**
   * completed: The plan is no longer in use and is not expected to be followed or used in patient care.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/care-plan-status",
  },
  /**
   * draft: The plan is in development or awaiting use but is not yet intended to be acted upon.
   */
  Pending: {
    display: "Pending",
    code: "draft",
    system: "http://hl7.org/fhir/care-plan-status",
  },
  /**
   * proposed: The plan has been suggested but no commitment to it has yet been made.
   */
  Proposed: {
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/care-plan-status",
  },
} as const;
