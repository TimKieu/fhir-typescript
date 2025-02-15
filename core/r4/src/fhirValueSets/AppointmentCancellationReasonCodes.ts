// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/appointment-cancellation-reason|4.0.1

/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export const AppointmentCancellationReasonCodes = {
  /**
   * Code: maint
   */
  EquipmentMaintenanceRepair: "maint",
  /**
   * Code: meds-inc
   */
  PrepMedIncomplete: "meds-inc",
  /**
   * Code: oth-cms
   */
  OtherCMSTherapyCapServiceNotAuthorized: "oth-cms",
  /**
   * Code: oth-err
   */
  OtherError: "oth-err",
  /**
   * Code: oth-fin
   */
  OtherFinancial: "oth-fin",
  /**
   * Code: oth-int
   */
  OtherNoInterpreterAvailable: "oth-int",
  /**
   * Code: oth-iv
   */
  OtherImproperIVAccessInfiltrateIV: "oth-iv",
  /**
   * Code: oth-mu
   */
  OtherPrepMedResultsUnavailable: "oth-mu",
  /**
   * Code: oth-oerr
   */
  OtherScheduleOrderError: "oth-oerr",
  /**
   * Code: oth-room
   */
  OtherRoomResourceMaintenance: "oth-room",
  /**
   * Code: oth-swie
   */
  OtherSilentWalkInError: "oth-swie",
  /**
   * Code: oth-weath
   */
  OtherWeather: "oth-weath",
  /**
   * Code: other
   */
  Other: "other",
  /**
   * Code: pat
   */
  Patient: "pat",
  /**
   * Code: pat-cpp
   */
  PatientCanceledViaPatientPortal: "pat-cpp",
  /**
   * Code: pat-crs
   */
  PatientCanceledViaAutomatedReminderSystem: "pat-crs",
  /**
   * Code: pat-dec
   */
  PatientDeceased: "pat-dec",
  /**
   * Code: pat-fb
   */
  PatientFeelingBetter: "pat-fb",
  /**
   * Code: pat-lt
   */
  PatientLackOfTransportation: "pat-lt",
  /**
   * Code: pat-mt
   */
  PatientMemberTerminated: "pat-mt",
  /**
   * Code: pat-mv
   */
  PatientMoved: "pat-mv",
  /**
   * Code: pat-preg
   */
  PatientPregnant: "pat-preg",
  /**
   * Code: pat-swl
   */
  PatientScheduledFromWaitList: "pat-swl",
  /**
   * Code: pat-ucp
   */
  PatientUnhappyChangedProvider: "pat-ucp",
  /**
   * Code: prov
   */
  Provider: "prov",
  /**
   * Code: prov-dch
   */
  ProviderDischarged: "prov-dch",
  /**
   * Code: prov-edu
   */
  ProviderEduMeeting: "prov-edu",
  /**
   * Code: prov-hosp
   */
  ProviderHospitalized: "prov-hosp",
  /**
   * Code: prov-labs
   */
  ProviderLabsOutOfAcceptableRange: "prov-labs",
  /**
   * Code: prov-mri
   */
  ProviderMRIScreeningFormMarkedDoNotProceed: "prov-mri",
  /**
   * Code: prov-onc
   */
  ProviderOncologyTreatmentPlanChanges: "prov-onc",
  /**
   * Code: prov-pers
   */
  ProviderPersonal: "prov-pers",
} as const;

/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export type AppointmentCancellationReasonCodeType = typeof AppointmentCancellationReasonCodes[keyof typeof AppointmentCancellationReasonCodes];
