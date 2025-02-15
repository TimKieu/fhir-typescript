// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/episode-of-care-status|1.0.2

/**
 * The status of the encounter.
 */
export const EpisodeOfCareStatusCodes = {
  /**
   * active: This episode of care is current.
   */
  Active: "active",
  /**
   * cancelled: The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.
   */
  Cancelled: "cancelled",
  /**
   * finished: This episode of care is finished at the organization is not expecting to be providing care to the patient. Can also be known as "closed", "completed" or other similar terms.
   */
  Finished: "finished",
  /**
   * onhold: This episode of care is on hold, the organization has limited responsibility for the patient (such as while on respite).
   */
  OnHold: "onhold",
  /**
   * planned: This episode of care is planned to start at the date specified in the period.start. During this status an organization may perform assessments to determine if they are eligible to receive services, or be organizing to make resources available to provide care services.
   */
  Planned: "planned",
  /**
   * waitlist: This episode has been placed on a waitlist, pending the episode being made active (or cancelled).
   */
  Waitlist: "waitlist",
} as const;

/**
 * The status of the encounter.
 */
export type EpisodeOfCareStatusCodeType = typeof EpisodeOfCareStatusCodes[keyof typeof EpisodeOfCareStatusCodes];
