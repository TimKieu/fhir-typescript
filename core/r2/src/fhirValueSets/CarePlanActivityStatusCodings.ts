// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indicates where the activity is at in its overall life cycle.
 */
export type CarePlanActivityStatusCodingType = {
  /**
   * cancelled: The activities have been ended prior to completion (perhaps even before they were started).
   */
  Cancelled: CodingArgs;
  /**
   * completed: The activities have been completed (more or less) as planned.
   */
  Completed: CodingArgs;
  /**
   * in-progress: Activity has been started but is not yet complete.
   */
  InProgress: CodingArgs;
  /**
   * not-started: Activity is planned but no action has yet been taken.
   */
  NotStarted: CodingArgs;
  /**
   * on-hold: Activity was started but has temporarily ceased with an expectation of resumption at a future time.
   */
  OnHold: CodingArgs;
  /**
   * scheduled: Appointment or other booking has occurred but activity has not yet begun.
   */
  Scheduled: CodingArgs;
}

/**
 * Indicates where the activity is at in its overall life cycle.
 */
export const CarePlanActivityStatusCodings:CarePlanActivityStatusCodingType = {
  /**
   * cancelled: The activities have been ended prior to completion (perhaps even before they were started).
   */
  Cancelled: {
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/care-plan-activity-status",
  },
  /**
   * completed: The activities have been completed (more or less) as planned.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/care-plan-activity-status",
  },
  /**
   * in-progress: Activity has been started but is not yet complete.
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/care-plan-activity-status",
  },
  /**
   * not-started: Activity is planned but no action has yet been taken.
   */
  NotStarted: {
    display: "Not Started",
    code: "not-started",
    system: "http://hl7.org/fhir/care-plan-activity-status",
  },
  /**
   * on-hold: Activity was started but has temporarily ceased with an expectation of resumption at a future time.
   */
  OnHold: {
    display: "On Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/care-plan-activity-status",
  },
  /**
   * scheduled: Appointment or other booking has occurred but activity has not yet begun.
   */
  Scheduled: {
    display: "Scheduled",
    code: "scheduled",
    system: "http://hl7.org/fhir/care-plan-activity-status",
  },
} as const;
