import * as fhir from '../fhir.js';
import { MedicationRequestStatusCodeType } from '../fhirValueSets/MedicationRequestStatusCodes.js';
import { MedicationRequestIntentCodeType } from '../fhirValueSets/MedicationRequestIntentCodes.js';
import { MedicationRequestPriorityCodeType } from '../fhirValueSets/MedicationRequestPriorityCodes.js';
/**
 * Valid arguments for the MedicationRequestRequester type.
 */
export interface MedicationRequestRequesterArgs extends fhir.BackboneElementArgs {
    /**
     * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
     */
    agent: fhir.ReferenceArgs | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
}
/**
 * The individual, organization or device that initiated the request and has responsibility for its activation.
 */
export declare class MedicationRequestRequester extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicationRequestRequester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationRequestRequesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationRequestDispenseRequest type.
 */
export interface MedicationRequestDispenseRequestArgs extends fhir.BackboneElementArgs {
    /**
     * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
     */
    validityPeriod?: fhir.PeriodArgs | undefined;
    /**
     * If displaying "number of authorized fills", add 1 to this number.
     */
    numberOfRepeatsAllowed?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.dispenseRequest.numberOfRepeatsAllowed
     */
    _numberOfRepeatsAllowed?: fhir.FhirElementArgs;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage) When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
     */
    expectedSupplyDuration?: fhir.DurationArgs | undefined;
    /**
     * Indicates the intended dispensing Organization specified by the prescriber.
     */
    performer?: fhir.ReferenceArgs | undefined;
}
/**
 * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export declare class MedicationRequestDispenseRequest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * If displaying "number of authorized fills", add 1 to this number.
     */
    numberOfRepeatsAllowed?: fhir.FhirPositiveInt | undefined;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage) When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
     */
    expectedSupplyDuration?: fhir.Duration | undefined;
    /**
     * Indicates the intended dispensing Organization specified by the prescriber.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicationRequestDispenseRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationRequestDispenseRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationRequestSubstitution type.
 */
export interface MedicationRequestSubstitutionArgs extends fhir.BackboneElementArgs {
    /**
     * This element is labeled as a modifer because whether substitution is allow or not cannot be ignored.
     */
    allowed: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.substitution.allowed
     */
    _allowed?: fhir.FhirElementArgs;
    /**
     * Indicates the reason for the substitution, or why substitution must or must not be performed.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export declare class MedicationRequestSubstitution extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This element is labeled as a modifer because whether substitution is allow or not cannot be ignored.
     */
    allowed: fhir.FhirBoolean | null;
    /**
     * Indicates the reason for the substitution, or why substitution must or must not be performed.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationRequestSubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationRequestSubstitutionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationRequest type.
 */
export interface MedicationRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationRequest" | undefined;
    /**
     * This records identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. For example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records must be tracked through an entire system.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Protocol or definition followed by this request.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * A plan or request that is fulfilled in whole or in part by this medication request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<MedicationRequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
     * An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<MedicationRequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * Indicates the type of medication order and where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates how quickly the Medication Request should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<MedicationRequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource. .
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource. .
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource. .
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * SubstanceAdministration-&gt;component-&gt;EncounterEvent.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
     */
    supportingInformation?: fhir.ReferenceArgs[] | undefined;
    /**
     * The date (and perhaps time) when the prescription was initially written or authored on.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MedicationRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * The individual, organization or device that initiated the request and has responsibility for its activation.
     */
    requester?: fhir.MedicationRequestRequesterArgs | undefined;
    /**
     * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
     */
    recorder?: fhir.ReferenceArgs | undefined;
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine® (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient's condition at the time the dose is needed.
     */
    dosageInstruction?: fhir.DosageArgs[] | undefined;
    /**
     * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: fhir.MedicationRequestDispenseRequestArgs | undefined;
    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: fhir.MedicationRequestSubstitutionArgs | undefined;
    /**
     * A link to a resource representing an earlier order related order or prescription.
     */
    priorPrescription?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
     */
    detectedIssue?: fhir.ReferenceArgs[] | undefined;
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory?: fhir.ReferenceArgs[] | undefined;
}
/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export declare class MedicationRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicationRequest";
    /**
     * This records identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. For example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records must be tracked through an entire system.
     */
    identifier: fhir.Identifier[];
    /**
     * Protocol or definition followed by this request.
     */
    definition: fhir.Reference[];
    /**
     * A plan or request that is fulfilled in whole or in part by this medication request.
     */
    basedOn: fhir.Reference[];
    /**
     * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<MedicationRequestStatusCodeType> | undefined;
    /**
     * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
     * An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<MedicationRequestIntentCodeType> | null;
    /**
     * Indicates the type of medication order and where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Indicates how quickly the Medication Request should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<MedicationRequestPriorityCodeType> | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource. .
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationRequest.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
     */
    subject: fhir.Reference | null;
    /**
     * SubstanceAdministration-&gt;component-&gt;EncounterEvent.
     */
    context?: fhir.Reference | undefined;
    /**
     * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
     */
    supportingInformation: fhir.Reference[];
    /**
     * The date (and perhaps time) when the prescription was initially written or authored on.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * The individual, organization or device that initiated the request and has responsibility for its activation.
     */
    requester?: fhir.MedicationRequestRequester | undefined;
    /**
     * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
     */
    reasonReference: fhir.Reference[];
    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note: fhir.Annotation[];
    /**
     * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine® (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient's condition at the time the dose is needed.
     */
    dosageInstruction: fhir.Dosage[];
    /**
     * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: fhir.MedicationRequestDispenseRequest | undefined;
    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: fhir.MedicationRequestSubstitution | undefined;
    /**
     * A link to a resource representing an earlier order related order or prescription.
     */
    priorPrescription?: fhir.Reference | undefined;
    /**
     * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
     */
    detectedIssue: fhir.Reference[];
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory: fhir.Reference[];
    /**
     * Default constructor for MedicationRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicationRequest.d.ts.map