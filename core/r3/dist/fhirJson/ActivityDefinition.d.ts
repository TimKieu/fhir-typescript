import * as fhir from '../fhirJson.js';
/**
 * Indicates who should participate in performing the action described.
 */
export interface ActivityDefinitionParticipant extends fhir.BackboneElement {
    /**
     * The type of participant in the action.
     */
    type: 'patient' | 'practitioner' | 'related-person' | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.participant.type
     */
    _type?: fhir.FhirElement;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.CodeableConcept | undefined;
}
/**
 * Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.
 */
export interface ActivityDefinitionDynamicValue extends fhir.BackboneElement {
    /**
     * A brief, natural language description of the intended semantics of the dynamic value.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.description
     */
    _description?: fhir.FhirElement;
    /**
     * The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.path
     */
    _path?: fhir.FhirElement;
    /**
     * The media type of the language for the expression.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.language
     */
    _language?: fhir.FhirElement;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.expression
     */
    _expression?: fhir.FhirElement;
}
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export interface ActivityDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ActivityDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the activity definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of activity definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired activity definition without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of activity definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental activity definition in production.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * This element does not describe the usage of the activity definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A detailed description of how the asset is used from a clinical perspective.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
     */
    topic?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A contributor to the content of the asset, including authors, editors, reviewers, and endorsers.
     */
    contributor?: (fhir.Contributor | null)[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the asset.
     */
    library?: (fhir.Reference | null)[] | undefined;
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: 'Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.timing[x]
     */
    _timingDateTime?: fhir.FhirElement;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingRange?: fhir.Range | undefined;
    /**
     * May reference a specific clinical location or may just identify a type of location.
     */
    location?: fhir.Reference | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: (fhir.ActivityDefinitionParticipant | null)[] | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productReference?: fhir.Reference | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If a dosage instruction is used, the definition should not specify timing or quantity.
     */
    dosage?: (fhir.Dosage | null)[] | undefined;
    /**
     * Only used if not implicit in the code found in ProcedureRequest.type.
     */
    bodySite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
     */
    transform?: fhir.Reference | undefined;
    /**
     * Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.
     */
    dynamicValue?: (fhir.ActivityDefinitionDynamicValue | null)[] | undefined;
}
//# sourceMappingURL=ActivityDefinition.d.ts.map