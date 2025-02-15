// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-or-request-resource-types|4.3.0

/**
 * This value set lists all the event or request resource types defined in this version of the specification.
 */
export const EventOrRequestResourceTypesCodes = {
  /**
   * Appointment: A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
   */
  Appointment: "Appointment",
  /**
   * AppointmentResponse: A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
   */
  AppointmentResponse: "AppointmentResponse",
  /**
   * CarePlan: Healthcare plan for patient or group.
   */
  CarePlan: "CarePlan",
  /**
   * ChargeItem: Item containing charge code(s) associated with the provision of healthcare provider products.
   */
  ChargeItem: "ChargeItem",
  /**
   * Claim: Claim, Pre-determination or Pre-authorization.
   */
  Claim: "Claim",
  /**
   * ClaimResponse: Remittance resource.
   */
  ClaimResponse: "ClaimResponse",
  /**
   * ClinicalImpression: A clinical assessment performed when planning treatments and management strategies for a patient.
   */
  ClinicalImpression: "ClinicalImpression",
  /**
   * Communication: A record of information transmitted from a sender to a receiver.
   */
  Communication: "Communication",
  /**
   * CommunicationRequest: A request for information to be sent to a receiver.
   */
  CommunicationRequest: "CommunicationRequest",
  /**
   * Composition: A set of resources composed into a single coherent clinical statement with clinical attestation.
   */
  Composition: "Composition",
  /**
   * Condition: Detailed information about conditions, problems or diagnoses.
   */
  Condition: "Condition",
  /**
   * Consent: A healthcare consumer's policy choices to permits or denies recipients or roles to perform actions for specific purposes and periods of time.
   */
  Consent: "Consent",
  /**
   * Contract: Legal Agreement.
   */
  Contract: "Contract",
  /**
   * Coverage: Insurance or medical plan or a payment agreement.
   */
  Coverage: "Coverage",
  /**
   * DeviceRequest: Medical device request.
   */
  DeviceRequest: "DeviceRequest",
  /**
   * DeviceUseStatement: Record of use of a device.
   */
  DeviceUseStatement: "DeviceUseStatement",
  /**
   * DiagnosticReport: A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports.
   */
  DiagnosticReport: "DiagnosticReport",
  /**
   * DocumentManifest: A list that defines a set of documents.
   */
  DocumentManifest: "DocumentManifest",
  /**
   * DocumentReference: A reference to a document.
   */
  DocumentReference: "DocumentReference",
  /**
   * Encounter: An interaction during which services are provided to the patient.
   */
  Encounter: "Encounter",
  /**
   * EnrollmentRequest: Enrollment request.
   */
  EnrollmentRequest: "EnrollmentRequest",
  /**
   * EnrollmentResponse: EnrollmentResponse resource.
   */
  EnrollmentResponse: "EnrollmentResponse",
  /**
   * EpisodeOfCare: An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility.
   */
  EpisodeOfCare: "EpisodeOfCare",
  /**
   * ExplanationOfBenefit: Explanation of Benefit resource.
   */
  ExplanationOfBenefit: "ExplanationOfBenefit",
  /**
   * FamilyMemberHistory: Information about patient's relatives, relevant for patient.
   */
  FamilyMemberHistory: "FamilyMemberHistory",
  /**
   * GuidanceResponse: The formal response to a guidance request.
   */
  GuidanceResponse: "GuidanceResponse",
  /**
   * ImagingStudy: A set of images produced in single study (one or more series of references images).
   */
  ImagingStudy: "ImagingStudy",
  /**
   * Immunization: Immunization event information.
   */
  Immunization: "Immunization",
  /**
   * ImmunizationRecommendation: Guidance or advice relating to an immunization.
   */
  ImmunizationRecommendation: "ImmunizationRecommendation",
  /**
   * MeasureReport: Results of a measure evaluation.
   */
  MeasureReport: "MeasureReport",
  /**
   * Media: A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
   */
  Media: "Media",
  /**
   * MedicationAdministration: Administration of medication to a patient.
   */
  MedicationAdministration: "MedicationAdministration",
  /**
   * MedicationDispense: Dispensing a medication to a named patient.
   */
  MedicationDispense: "MedicationDispense",
  /**
   * MedicationRequest: Ordering of medication for patient or group.
   */
  MedicationRequest: "MedicationRequest",
  /**
   * MedicationStatement: Record of medication being taken by a patient.
   */
  MedicationStatement: "MedicationStatement",
  /**
   * NutritionOrder: Diet, formula or nutritional supplement request.
   */
  NutritionOrder: "NutritionOrder",
  /**
   * Observation: Measurements and simple assertions.
   */
  Observation: "Observation",
  /**
   * PaymentNotice: PaymentNotice request.
   */
  PaymentNotice: "PaymentNotice",
  /**
   * PaymentReconciliation: PaymentReconciliation resource.
   */
  PaymentReconciliation: "PaymentReconciliation",
  /**
   * Procedure: An action that is being or was performed on a patient.
   */
  Procedure: "Procedure",
  /**
   * ProcessResponse: ProcessResponse resource.
   */
  ProcessResponse: "ProcessResponse",
  /**
   * QuestionnaireResponse: A structured set of questions and their answers.
   */
  QuestionnaireResponse: "QuestionnaireResponse",
  /**
   * RiskAssessment: Potential outcomes for a subject with likelihood.
   */
  RiskAssessment: "RiskAssessment",
  /**
   * ServiceRequest: A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
   */
  ServiceRequest: "ServiceRequest",
  /**
   * SupplyDelivery: Delivery of bulk Supplies.
   */
  SupplyDelivery: "SupplyDelivery",
  /**
   * SupplyRequest: Request for a medication, substance or device.
   */
  SupplyRequest: "SupplyRequest",
  /**
   * Task: A task to be performed.
   */
  Task: "Task",
  /**
   * Task: A task to be performed.
   */
  TaskTask: "Task",
  /**
   * VisionPrescription: Prescription for vision correction products for a patient.
   */
  VisionPrescription: "VisionPrescription",
} as const;

/**
 * This value set lists all the event or request resource types defined in this version of the specification.
 */
export type EventOrRequestResourceTypesCodeType = typeof EventOrRequestResourceTypesCodes[keyof typeof EventOrRequestResourceTypesCodes];
