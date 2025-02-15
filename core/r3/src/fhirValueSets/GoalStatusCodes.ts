// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-status|3.0.2

/**
 * Indicates whether the goal has been met and is still being targeted
 */
export const GoalStatusCodes = {
  /**
   * accepted: A proposed goal was accepted or acknowledged
   */
  Accepted: "accepted",
  /**
   * achieved: The goal has been met and no further action is needed
   */
  Achieved: "achieved",
  /**
   * ahead-of-target: The goal is ahead of the planned timelines
   */
  AheadOfTarget: "ahead-of-target",
  /**
   * behind-target: The goal is behind the planned timelines
   */
  BehindTarget: "behind-target",
  /**
   * cancelled: The previously accepted goal is no longer being sought
   */
  Cancelled: "cancelled",
  /**
   * entered-in-error: The goal was entered in error and voided.
   */
  EnteredInError: "entered-in-error",
  /**
   * in-progress: The goal is being sought but has not yet been reached.  (Also applies if goal was reached in the past but there has been regression and goal is being sought again)
   */
  InProgress: "in-progress",
  /**
   * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
   */
  OnHold: "on-hold",
  /**
   * on-target: The goal is on schedule for the planned timelines
   */
  OnTarget: "on-target",
  /**
   * planned: A goal is planned for this patient
   */
  Planned: "planned",
  /**
   * proposed: A goal is proposed for this patient
   */
  Proposed: "proposed",
  /**
   * rejected: A proposed goal was rejected
   */
  Rejected: "rejected",
  /**
   * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective
   */
  Sustaining: "sustaining",
} as const;

/**
 * Indicates whether the goal has been met and is still being targeted
 */
export type GoalStatusCodeType = typeof GoalStatusCodes[keyof typeof GoalStatusCodes];
