import { CodingArgs } from '../fhir/Coding.js';
/**
 * A single value set for all security labels defined by FHIR.
 */
export declare type SecurityLabelsCodingType = {
    /**
     * _ActUSPrivacyLaw: Definition: A jurisdictional mandate in the U.S. relating to privacy.
     *
     *
     *                            Usage Note: ActPrivacyLaw codes may be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.  May be used to further specify rationale for assignment of other ActPrivacyPolicy codes in the US realm, e.g., ETH and 42CFRPart2 can be differentiated from ETH and Title38Part1.
     */
    ActUSPrivacyLaw: CodingArgs;
    /**
     * 42CFRPart2: 42 CFR Part 2 stipulates the right of an individual who has applied for or been given diagnosis or treatment for alcohol or drug abuse at a federally assisted program.
     *
     *
     *                            Definition: Non-disclosure of health information relating to health care paid for by a federally assisted substance abuse program without patient consent.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    VAL42CFRPart2: CodingArgs;
    /**
     * ABSTRED: Security metadata observation values used to indicate the use of a more abstract version of the content, e.g., replacing exact value of an age or date field with a range, or remove the left digits of a credit card number or SSN.
     */
    Abstracted: CodingArgs;
    /**
     * ADOL: Policy for handling information related to an adolescent, which will be afforded heightened confidentiality per applicable organizational or jurisdictional policy.  An enterprise may have a policy that requires that adolescent patient information be provided heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note: For use within an enterprise in which an adolescent is the information subject.  If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    AdolescentInformationSensitivity: CodingArgs;
    /**
     * AGGRED: Security metadata observation values used to indicate the use of an algorithmic combination of actual values with the result of an aggregate function, e.g., average, sum, or count in order to limit disclosure of an IT resource (data, information object, service, or system capability) to the minimum necessary.
     */
    Aggregated: CodingArgs;
    /**
     * ANONY: Custodian system must remove any information that could result in identifying the information subject.
     */
    Anonymize: CodingArgs;
    /**
     * ANONYED: Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability) by used to indicate the mechanism by which software systems can strip portions of the resource that could allow the identification of the source of the information or the information subject.  No key to relink the data is retained.
     */
    Anonymized: CodingArgs;
    /**
     * AOD: Custodian system must make available to an information subject upon request an accounting of certain disclosures of the individualâ€™s protected health information over a period of time.  Policy may dictate that the accounting include information about the information disclosed,  the date of disclosure, the identification of the receiver, the purpose of the disclosure, the time in which the disclosing entity must provide a response and the time period for which accountings of disclosure can be requested.
     */
    AccountingOfDisclosure: CodingArgs;
    /**
     * AUDIT: Custodian system must monitor systems to ensure that all users are authorized to operate on information objects.
     */
    Audit: CodingArgs;
    /**
     * AUDTR: Custodian system must monitor and maintain retrievable log for each user and operation on information.
     */
    AuditTrail: CodingArgs;
    /**
     * B: Policy for handling trade secrets such as financial information or intellectual property, which will be afforded heightened confidentiality.  Description:  Since the service class can represent knowledge structures that may be considered a trade or business secret, there is sometimes (though rarely) the need to flag those items as of business level confidentiality.
     *
     *
     *                            Usage Notes: No patient related information may ever be of this confidentiality level.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    BusinessInformationSensitivity: CodingArgs;
    /**
     * CAREMGT: To perform one or more operations on information for provision of health care coordination.
     */
    CareManagement: CodingArgs;
    /**
     * CEL: Policy for handling information related to a celebrity (people of public interest (VIP), which will be afforded heightened confidentiality.  Celebrities are people of public interest (VIP) about whose information an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive may include health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note:  For use within an enterprise in which the information subject is deemed a celebrity or very important person.  If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    CelebrityInformationSensitivity: CodingArgs;
    /**
     * CLINAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a clinician.
     */
    ClinicianAsserted: CodingArgs;
    /**
     * CLINRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a clinician.
     */
    ClinicianReported: CodingArgs;
    /**
     * CLINTRCH: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge.
     */
    ClinicalTrialResearch: CodingArgs;
    /**
     * CLINTRL: To perform health care as part of the clinical trial protocol.
     */
    ClinicalTrial: CodingArgs;
    /**
     * CLMATTCH: To perform one or more operations on information for provision of additional clinical evidence in support of a request for coverage or payment for health services.
     */
    ClaimAttachment: CodingArgs;
    /**
     * CommonRule: U.S. Federal regulations governing the protection of human subjects in research (codified at Subpart A of 45 CFR part 46) that has been adopted by 15 U.S. Federal departments and agencies in an effort to promote uniformity, understanding, and compliance with human subject protections. Existing regulations governing the protection of human subjects in Food and Drug Administration (FDA)-regulated research (21 CFR parts 50, 56, 312, and 812) are separate from the Common Rule but include similar requirements.
     *
     *
     *                            Definition: U.S. federal laws governing research-related privacy policies.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.
     */
    CommonRule: CodingArgs;
    /**
     * COMPT: This is the healthcare analog to the US Intelligence Community's concept of a Special Access Program.  Compartment codes may be used in as a field value in an initiator's clearance to indicate permission to access and use an IT Resource with a security label having the same compartment value in security category label field.
     *
     *                         Map: Aligns with ISO 2382-8 definition of Compartment - "A division of data into isolated blocks with separate security controls for the purpose of reducing risk."
     */
    Compartment: CodingArgs;
    /**
     * COVAUTH: To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
     */
    CoverageAuthorization: CodingArgs;
    /**
     * COVERAGE: To perform one or more operations on information for conducting activities related to coverage under a program or policy.
     */
    CoverageUnderPolicyOrProgram: CodingArgs;
    /**
     * CPLYCC: Custodian security system must retrieve, evaluate, and comply with the information handling directions of the Confidentiality Code associated with an information target.
     */
    ComplyWithConfidentialityCode: CodingArgs;
    /**
     * CPLYCD: Custodian security system must retrieve, evaluate, and comply with applicable information subject consent directives.
     */
    ComplyWithConsentDirective: CodingArgs;
    /**
     * CPLYJPP: Custodian security system must retrieve, evaluate, and comply with applicable jurisdictional privacy policies associated with the target information.
     */
    ComplyWithJurisdictionalPrivacyPolicy: CodingArgs;
    /**
     * CPLYOPP: Custodian security system must retrieve, evaluate, and comply with applicable organizational privacy policies associated with the target information.
     */
    ComplyWithOrganizationalPrivacyPolicy: CodingArgs;
    /**
     * CPLYOSP: Custodian security system must retrieve, evaluate, and comply with the organizational security policies associated with the target information.
     */
    ComplyWithOrganizationalSecurityPolicy: CodingArgs;
    /**
     * CPLYPOL: Custodian security system must retrieve, evaluate, and comply with applicable policies associated with the target information.
     */
    ComplyWithPolicy: CodingArgs;
    /**
     * CRYTOHASH: Security metadata observation value used to indicate the mechanism by which software systems can establish that data was not modified in transit.
     *
     *
     *                            Rationale: This definition is intended to align with the ISO 22600-2 3.3.19 definition of cryptographic checkvalue: Information which is derived by performing a cryptographic transformation (see cryptography) on the data unit.  The derivation of the checkvalue may be performed in one or more steps and is a result of a mathematical function of the key and a data unit. It is usually used to check the integrity of a data unit.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            SHA-1
     *                            SHA-2 (Secure Hash Algorithm)
     */
    CryptographicHashFunction: CodingArgs;
    /**
     * DECLASSIFYLABEL: Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as unclassified in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    DeclassifySecurityLabel: CodingArgs;
    /**
     * DEID: Custodian system must strip information of data that would allow the identification of the source of the information or the information subject.
     */
    Deidentify: CodingArgs;
    /**
     * DELAU: Custodian system must remove target information from access after use.
     */
    DeleteAfterUse: CodingArgs;
    /**
     * DEMO: Policy for handling all demographic information about an information subject, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to all demographic about an information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    AllDemographicInformationSensitivity: CodingArgs;
    /**
     * DEVAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a device.
     */
    DeviceAsserted: CodingArgs;
    /**
     * DEVRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a device.
     */
    DeviceReported: CodingArgs;
    /**
     * DIA: Policy for handling information related to a diagnosis, health condition or health problem, which will be afforded heightened confidentiality.  Diagnostic, health condition or health problem related information may be deemed sensitive by organizational policy, and require heightened confidentiality.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to  diagnostic, health condition or health problem related information deemed sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    DiagnosisInformationSensitivity: CodingArgs;
    /**
     * DIGSIG: Security metadata observation value used to indicate the mechanism by which software systems use digital signature to establish that data has not been modified.
     *
     *
     *                            Rationale: This definition is intended to align with the ISO 22600-2 3.3.26 definition of digital signature:  Data appended to, or a cryptographic transformation (see cryptography) of, a data unit that allows a recipient of the data unit to prove the source and integrity of the data unit and protect against forgery e.g., by the recipient.
     */
    DigitalSignature: CodingArgs;
    /**
     * DISASTER: To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
     */
    Disaster: CodingArgs;
    /**
     * DOB: Policy for handling information related to an information subject's date of birth, which will be afforded heightened confidentiality.Policies may govern sensitivity of information related to an information subject's date of birth, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    DateOfBirthInformationSensitivity: CodingArgs;
    /**
     * DONAT: To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
     */
    Donation: CodingArgs;
    /**
     * DOWNGRDLABEL: Custodian security system must downgrade information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a less protected level in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    DowngradeSecurityLabel: CodingArgs;
    /**
     * DRGIS: Policy for handling information related to a drug, which will be afforded heightened confidentiality. Drug information may be deemed sensitive by organizational policy, and require heightened confidentiality.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to drug information deemed sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    DrugInformationSensitivity: CodingArgs;
    /**
     * DRIVLABEL: Custodian security system must assign and bind security labels derived from compilations of information by aggregation or disaggregation in order to classify information compiled in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    DeriveSecurityLabel: CodingArgs;
    /**
     * ELIGDTRM: To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
     */
    EligibilityDetermination: CodingArgs;
    /**
     * ELIGVER: To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
     */
    EligibilityVerification: CodingArgs;
    /**
     * EMP: Policy for handling information related to an employee, which will be afforded heightened confidentiality. When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note: Policy for handling information related to an employee, which will be afforded heightened confidentiality.  Description:  When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     */
    EmployeeInformationSensitivity: CodingArgs;
    /**
     * EMPL: Policy for handling information related to an employer which is deemed classified to protect an employee who is the information subject, and which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to an employer, such as law enforcement or national security, the identity of which could impact the privacy, well-being, or safety of an information subject who is an employee.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    EmployerInformationSensitivity: CodingArgs;
    /**
     * ENCRYPT: Custodian system must render information unreadable by algorithmically transforming plaintext into ciphertext.
     *
     *
     *
     *
     *                            Usage Notes: A mathematical transposition of a file or data stream so that it cannot be deciphered at the receiving end without the proper key. Encryption is a security feature that assures that only the parties who are supposed to be participating in a videoconference or data transfer are able to do so. It can include a password, public and private keys, or a complex combination of all.  (Per Infoway.)
     */
    Encrypt: CodingArgs;
    /**
     * ENCRYPTR: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext when "at rest" or in storage.
     */
    EncryptAtRest: CodingArgs;
    /**
     * ENCRYPTT: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while "in transit" or being transported by any means.
     */
    EncryptInTransit: CodingArgs;
    /**
     * ENCRYPTU: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while in use such that operations permitted on the target information are limited by the license granted to the end user.
     */
    EncryptInUse: CodingArgs;
    /**
     * ENROLLM: To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
     */
    Enrollment: CodingArgs;
    /**
     * ETH: Policy for handling alcohol or drug-abuse information, which will be afforded heightened confidentiality.  Information handling protocols based on organizational policies related to alcohol or drug-abuse information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SubstanceAbuseInformationSensitivity: CodingArgs;
    /**
     * ETREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition.
     */
    EmergencyTreatment: CodingArgs;
    /**
     * FAMRQT: To perform one or more operations on information in response to a request by a family member authorized by the patient.
     */
    FamilyRequested: CodingArgs;
    /**
     * FRAUD: To perform one or more operations on information used for fraud detection and prevention processes.
     */
    Fraud: CodingArgs;
    /**
     * GDIS: Policy for handling genetic disease information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to genetic disease information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    GeneticDiseaseInformationSensitivity: CodingArgs;
    /**
     * GENDER: Policy for handling information related to an information subject's gender and sexual orientation, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's gender and sexual orientation, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    GenderAndSexualOrientationInformationSensitivity: CodingArgs;
    /**
     * GOV: To perform one or more operations on information used within government processes.
     */
    Government: CodingArgs;
    /**
     * HACCRED: To perform one or more operations on information for conducting activities related to meeting accreditation criteria.
     */
    HealthAccreditation: CodingArgs;
    /**
     * HCOMPL: To perform one or more operations on information used for conducting activities required to meet a mandate.
     */
    HealthCompliance: CodingArgs;
    /**
     * HCPAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a healthcare professional.
     */
    HealthcareProfessionalAsserted: CodingArgs;
    /**
     * HCPRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a healthcare professional.
     */
    HealthcareProfessionalReported: CodingArgs;
    /**
     * HDECD: To perform one or more operations on information used for handling deceased patient matters.
     */
    Decedent: CodingArgs;
    /**
     * HDIRECT: To perform one or more operation operations on information used to manage a patient directory.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            facility
     *                            enterprise
     *                            payer
     *                            health information exchange patient directory
     */
    Directory: CodingArgs;
    /**
     * HIPAANOPP: The U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Part 164 Subpart E) permits access, use and disclosure of certain personal health information (PHI as defined under the law) for purposes of Treatment, Payment, and Operations, and requires that the provider ask that patients acknowledge the Provider's Notice of Privacy Practices as permitted conduct under the law.
     *
     *
     *                            Definition: Notification of HIPAA Privacy Practices.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.
     */
    HIPAANoticeOfPrivacyPractices: CodingArgs;
    /**
     * HIPAAPsyNotes: The U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Part 164 Section 164.508) requires authorization for certain uses and disclosure of psychotherapy notes.
     *
     *
     *                            Definition: Authorization that must be obtained for disclosure of psychotherapy notes.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    HIPAAPsychotherapyNotes: CodingArgs;
    /**
     * HIPAASelfPay: Section 13405(a) of the Health Information Technology for Economic and Clinical Health Act (HITECH) stipulates the right of an individual to have disclosures regarding certain health care items or services for which the individual pays out of pocket in full restricted from a health plan.
     *
     *
     *                            Definition: Non-disclosure of health information to a health plan relating to health care items or services for which an individual pays out of pocket in full.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    HIPAASelfPay: CodingArgs;
    /**
     * HIV: Policy for handling HIV or AIDS information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to HIV or AIDS information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    HIVAIDSInformationSensitivity: CodingArgs;
    /**
     * HLEGAL: To perform one or more operations on information for conducting activities required by legal proceeding.
     */
    Legal: CodingArgs;
    /**
     * HMARKT: To perform one or more operations on information for marketing services and products related to health care.
     */
    HealthcareMarketing: CodingArgs;
    /**
     * HOPERAT: To perform one or more operations on information used for conducting administrative and contractual activities related to the provision of health care.
     */
    HealthcareOperations: CodingArgs;
    /**
     * HOUTCOMS: To perform one or more operations on information used for assessing results and comparative effectiveness achieved by health care practices and interventions.
     */
    HealthOutcomeMeasure: CodingArgs;
    /**
     * HPAYMT: To perform one or more operations on information for conducting financial or contractual activities related to payment for provision of health care.
     */
    HealthcarePayment: CodingArgs;
    /**
     * HPRGRP: To perform one or more operations on information used for conducting activities to meet program accounting requirements.
     */
    HealthProgramReporting: CodingArgs;
    /**
     * HQUALIMP: To perform one or more operations on information used for conducting administrative activities to improve health care quality.
     */
    HealthQualityImprovement: CodingArgs;
    /**
     * HRCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of human resources department or workflow.
     */
    HumanResourceCompartment: CodingArgs;
    /**
     * HRELIABLE: Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be very high.
     */
    HighlyReliable: CodingArgs;
    /**
     * HRESCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.
     */
    HealthcareResearch: CodingArgs;
    /**
     * HSYSADMIN: To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
     */
    HealthSystemAdministration: CodingArgs;
    /**
     * HUAPRV: Custodian system must require human review and approval for permission requested.
     */
    HumanApproval: CodingArgs;
    /**
     * L: Definition: Privacy metadata indicating that the information has been de-identified, and there are mitigating circumstances that prevent re-identification, which minimize risk of harm from unauthorized disclosure.  The information requires protection to maintain low sensitivity.
     *
     *
     *                            Examples: Includes anonymized, pseudonymized, or non-personally identifiable information such as HIPAA limited data sets.
     *
     *
     *                            Map: No clear map to ISO 13606-4 Sensitivity Level (1) Care Management:   RECORD_COMPONENTs that might need to be accessed by a wide range of administrative staff to manage the subject of care's access to health services.
     *
     *
     *                            Usage Note: This metadata indicates the receiver may have an obligation to comply with a data use agreement.
     */
    Low: CodingArgs;
    /**
     * LABEL: Custodian security system must assign and bind security labels in order to classify information created in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the assignment and binding.
     *
     *
     *                            Usage Note: In security systems, security policy label assignments do not change, they may supersede prior assignments, and such reassignments are always tracked for auditing and other purposes.
     */
    AssignSecurityLabel: CodingArgs;
    /**
     * LIVARG: Policy for handling information related to an information subject's living arrangement, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's living arrangement, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    LivingArrangementInformationSensitivity: CodingArgs;
    /**
     * LOCIS: Policy for handling information related to the location of the information subject, which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to the location of the information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    LocationInformationSensitivity: CodingArgs;
    /**
     * M: Definition: Privacy metadata indicating moderately sensitive information, which presents moderate risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: Includes allergies of non-sensitive nature used inform food service; health information a patient authorizes to be used for marketing, released to a bank for a health credit card or savings account; or information in personal health record systems that are not governed under health privacy laws.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (2) Clinical Management:  Less sensitive RECORD_COMPONENTs that might need to be accessed by a wider range of personnel not all of whom are actively caring for the patient (e.g. radiology staff).
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with the receiver's terms of use or privacy policies.
     */
    Moderate: CodingArgs;
    /**
     * MAPPED: Security metadata observation value used to indicate that the IT resource semantic content has been transformed from one encoding to another.
     *
     *
     *                            Usage Note: "MAP" code does not indicate the semantic fidelity of the transformed content.
     *
     *                         To indicate semantic fidelity for maps of HL7 to other code systems, this security alteration integrity observation may be further specified using an Act valued with Value Set: MapRelationship (2.16.840.1.113883.1.11.11052).
     *
     *                         Semantic fidelity of the mapped IT Resource may also be indicated using a SecurityIntegrityConfidenceObservation.
     */
    Mapped: CodingArgs;
    /**
     * MARST: Policy for handling information related to an information subject's marital status, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's marital status, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    MaritalStatusInformationSensitivity: CodingArgs;
    /**
     * MASK: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext.  User may be provided a key to decrypt per license or "shared secret".
     */
    Mask: CodingArgs;
    /**
     * MASKED: Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability) by indicating the mechanism by which software systems can make data unintelligible (that is, as unreadable and unusable by algorithmically transforming plaintext into ciphertext) such that it can only be accessed or used by authorized users.  An authorized user may be provided a key to decrypt per license or "shared secret".
     *
     *
     *                            Usage Note: "MASKED" may be used, per applicable policy, as a flag to indicate to a user or receiver that some portion of an IT resource has been further encrypted, and may be accessed only by an authorized user or receiver to which a decryption key is provided.
     */
    Masked: CodingArgs;
    /**
     * MEMADMIN: To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
     */
    MemberAdministration: CodingArgs;
    /**
     * MINEC: Custodian must limit access and disclosure to the minimum information required to support an authorized user's purpose of use.
     *
     *
     *                            Usage Note: Limiting the information available for access and disclosure to that an authorized user or receiver "needs to know" in order to perform permitted workflow or purpose of use.
     */
    MinimumNecessary: CodingArgs;
    /**
     * N: Definition: Privacy metadata indicating that the information is typical, non-stigmatizing health information, which presents typical risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: In the US, this includes what HIPAA identifies as the minimum necessary protected health information (PHI) given a covered purpose of use (treatment, payment, or operations).  Includes typical, non-stigmatizing health information disclosed in an application for health, workers compensation, disability, or life insurance.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care:   Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR).   Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable jurisdictional privacy law or disclosure authorization.
     */
    Normal: CodingArgs;
    /**
     * NOAUTH: Prohibition on disclosure without information subject's authorization.
     */
    NoDisclosureWithoutSubjectAuthorization: CodingArgs;
    /**
     * NOCOLLECT: Prohibition on collection or storage of the information.
     */
    NoCollection: CodingArgs;
    /**
     * NODSCLCD: Prohibition on disclosure without organizational approved patient restriction.
     */
    NoDisclosureWithoutConsentDirective: CodingArgs;
    /**
     * NODSCLCDS: Prohibition on disclosure without a consent directive from the information subject.
     */
    NoDisclosureWithoutInformationSubjectQuoteSConsentDirective: CodingArgs;
    /**
     * NOINTEGRATE: Prohibition on Integration into other records.
     */
    NoIntegration: CodingArgs;
    /**
     * NOLIST: Prohibition on disclosure except to entities on specific access list.
     */
    NoUnlistedEntityDisclosure: CodingArgs;
    /**
     * NOMOU: Prohibition on disclosure without an interagency service agreement or memorandum of understanding (MOU).
     */
    NoDisclosureWithoutMOU: CodingArgs;
    /**
     * NOORGPOL: Prohibition on disclosure without organizational authorization.
     */
    NoDisclosureWithoutOrganizationalAuthorization: CodingArgs;
    /**
     * NOPAT: Prohibition on disclosing information to patient, family or caregivers without attending provider's authorization.
     *
     *
     *                            Usage Note: The information may be labeled with the ActInformationSensitivity TBOO code, triggering application of this RefrainPolicy code as a handling caveat controlling access.
     *
     *                         Maps to FHIR NOPAT: Typically, this is used on an Alert resource, when the alert records information on patient abuse or non-compliance.
     *
     *                         FHIR print name is "keep information from patient". Maps to the French realm - code: INVISIBLE_PATIENT.
     *
     *
     *                            displayName: Document non visible par le patient
     *                            codingScheme: 1.2.250.1.213.1.1.4.13
     *
     *                         French use case:  A label for documents that the author  chose to hide from the patient until the content can be disclose to the patient in a face to face meeting between a healthcare professional and the patient (in French law some results like cancer diagnosis or AIDS diagnosis must be announced to the patient by a healthcare professional and should not be find out by the patient alone).
     */
    NoDisclosureToPatientFamilyOrCaregiversWithoutAttendingProviderQuoteSAuthorization: CodingArgs;
    /**
     * NOPERSISTP: Prohibition on collection of the information beyond time necessary to accomplish authorized purpose of use is prohibited.
     */
    NoCollectionBeyondPurposeOfUse: CodingArgs;
    /**
     * NORDSCLCD: Prohibition on redisclosure without patient consent directive.
     */
    NoRedisclosureWithoutConsentDirective: CodingArgs;
    /**
     * NORDSCLCDS: Prohibition on redisclosure without a consent directive from the information subject.
     */
    NoRedisclosureWithoutInformationSubjectQuoteSConsentDirective: CodingArgs;
    /**
     * NORDSCLW: Prohibition on disclosure without authorization under jurisdictional law.
     */
    NoDisclosureWithoutJurisdictionalAuthorization: CodingArgs;
    /**
     * NORELINK: Prohibition on associating de-identified or pseudonymized information with other information in a manner that could or does result in disclosing information intended to be masked.
     */
    NoRelinking: CodingArgs;
    /**
     * NOREUSE: Prohibition on use of the information beyond the purpose of use initially authorized.
     */
    NoReuseBeyondPurposeOfUse: CodingArgs;
    /**
     * NOVIP: Prohibition on disclosure except to principals with access permission to specific VIP information.
     */
    NoUnauthorizedVIPDisclosure: CodingArgs;
    /**
     * ObligationPolicy: Conveys the mandated workflow action that an information custodian, receiver, or user must perform.
     *
     *
     *                            Usage Notes: Per ISO 22600-2, ObligationPolicy instances 'are event-triggered and define actions to be performed by manager agent'. Per HL7 Composite Security and Privacy Domain Analysis Model:  This value set refers to the action required to receive the permission specified in the privacy rule. Per OASIS XACML, an obligation is an operation specified in a policy or policy that is performed in conjunction with the enforcement of an access control decision.
     */
    ObligationPolicy: CodingArgs;
    /**
     * ORCON: Prohibition on disclosure except as permitted by the information originator.
     */
    NoDisclosureWithoutOriginatorAuthorization: CodingArgs;
    /**
     * PACQAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a patient acquaintance.
     */
    PatientAcquaintanceAsserted: CodingArgs;
    /**
     * PACQRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a patient acquaintance.
     */
    PatientAcquaintanceReported: CodingArgs;
    /**
     * PATADMIN: To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
     */
    PatientAdministration: CodingArgs;
    /**
     * PATAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a patient.
     */
    PatientAsserted: CodingArgs;
    /**
     * PATRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a patient.
     */
    PatientReported: CodingArgs;
    /**
     * PATRQT: To perform one or more operations on information in response to a patient's request.
     */
    PatientRequested: CodingArgs;
    /**
     * PATSFTY: To perform one or more operations on information in processes related to ensuring the safety of health care.
     */
    PatientSafety: CodingArgs;
    /**
     * PAYAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a payer.
     */
    PayerAsserted: CodingArgs;
    /**
     * PAYRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a payer.
     */
    PayerReported: CodingArgs;
    /**
     * PDS: Policy for handling information reported by the patient about another person, e.g., a family member, which will be afforded heightened confidentiality. Sensitive information reported by the patient about another person, e.g., family members may be deemed sensitive by default.  The flag may be set or cleared on patient's request.
     *
     *
     *                            Usage Note: For sensitive information relayed by or about a patient, which is deemed sensitive within the enterprise (i.e., by default regardless of whether the patient requested that the information be deemed sensitive.)   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    PatientDefaultSensitivity: CodingArgs;
    /**
     * PERFMSR: To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
     */
    PerformanceMeasure: CodingArgs;
    /**
     * PERSISTLABEL: Custodian security system must persist the binding of security labels to classify information received or imported by information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information.  The system must retain an immutable record of the assignment and binding.
     */
    PersistSecurityLabel: CodingArgs;
    /**
     * POPHLTH: To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
     */
    PopulationHealth: CodingArgs;
    /**
     * PRIVMARK: Custodian must create and/or maintain human readable security label tags as required by policy.
     *
     *                         Map:  Aligns with ISO 22600-3 Section A.3.4.3 description of privacy mark:  "If present, the privacy-mark is not used for access control. The content of the privacy-mark may be defined by the security policy in force (identified by the security-policy-identifier) which may define a list of values to be used. Alternately, the value may be determined by the originator of the security-label."
     */
    PrivacyMark: CodingArgs;
    /**
     * PROAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a professional.
     */
    ProfessionalAsserted: CodingArgs;
    /**
     * PRORPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a professional.
     */
    ProfessionalReported: CodingArgs;
    /**
     * PRS: For sensitive information relayed by or about a patient, which is deemed sensitive within the enterprise (i.e., by default regardless of whether the patient requested that the information be deemed sensitive.)   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to certain types of information designated by a patient as sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    PatientRequestedSensitivity: CodingArgs;
    /**
     * PSEUD: Custodian system must strip information of data that would allow the identification of the source of the information or the information subject.  Custodian may retain a key to relink data necessary to reidentify the information subject.
     */
    Pseudonymize: CodingArgs;
    /**
     * PSEUDED: Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability), by indicating the mechanism by which software systems can strip portions of the resource that could allow the identification of the source of the information or the information subject.  Custodian may retain a key to relink data necessary to reidentify the information subject.
     *
     *
     *                            Rationale: Personal data which has been processed to make it impossible to know whose data it is. Used particularly for secondary use of health data. In some cases, it may be possible for authorized individuals to restore the identity of the individual, e.g.,for public health case management.  Based on ISO/TS 25237:2008 Health informaticsâ€”Pseudonymization
     */
    Pseudonymized: CodingArgs;
    /**
     * PSY: Policy for handling psychiatry information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to psychiatry information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    PsychiatryInformationSensitivity: CodingArgs;
    /**
     * PUBHLTH: To perform one or more operations on information for conducting public health activities, such as the reporting of notifiable conditions.
     */
    PublicHealth: CodingArgs;
    /**
     * PurposeOfUse: Reason for performing one or more operations on information, which may be permitted by source system's security policy in accordance with one or more privacy policies and consent directives.
     *
     *
     *                            Usage Notes: The rationale or purpose for an act relating to the management of personal health information, such as collecting personal health information for research or public health purposes.
     */
    PurposeOfUse: CodingArgs;
    /**
     * PWATRNY: To perform one or more operations on information in response to a request by a person appointed as the patient's legal representative.
     */
    PowerOfAttorney: CodingArgs;
    /**
     * R: Privacy metadata indicating highly sensitive, potentially stigmatizing information, which presents a high risk to the information subject if disclosed without authorization. May be pre-empted by jurisdictional law, e.g., for public health reporting or emergency treatment.
     *
     *
     *                            Examples: Includes information that is additionally protected such as sensitive conditions mental health, HIV, substance abuse, domestic violence, child abuse, genetic disease, and reproductive health; or sensitive demographic information such as a patient's standing as an employee or a celebrity. May be used to indicate proprietary or classified information that is not related to an individual, e.g., secret ingredients in a therapeutic substance; or the name of a manufacturer.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care: Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR). Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations..
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable, prevailing (default) jurisdictional privacy law or disclosure authorization..
     */
    Restricted: CodingArgs;
    /**
     * RACE: Policy for handling information related to an information subject's race, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's race, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    RaceInformationSensitivity: CodingArgs;
    /**
     * RECORDMGT: To perform one or more operations on information used within the health records management process.
     */
    RecordsManagement: CodingArgs;
    /**
     * REDACT: Custodian system must remove information, which is not authorized to be access, used, or disclosed from records made available to otherwise authorized users.
     */
    Redact: CodingArgs;
    /**
     * REDACTED: Security metadata observation value used to indicate the mechanism by which software systems can filter an IT resource (data, information object, service, or system capability) to remove any portion of the resource that is not authorized to be access, used, or disclosed.
     *
     *
     *                            Usage Note: "REDACTED" may be used, per applicable policy, as a flag to indicate to a user or receiver that some portion of an IT resource has filtered and not included in the content accessed or received.
     */
    Redacted: CodingArgs;
    /**
     * RefrainPolicy: Conveys prohibited actions which an information custodian, receiver, or user is not permitted to perform unless otherwise authorized or permitted under specified circumstances.
     *
     *
     *
     *
     *                            Usage Notes: ISO 22600-2 species that a Refrain Policy "defines actions the subjects must refrain from performing".  Per HL7 Composite Security and Privacy Domain Analysis Model:  May be used to indicate that a specific action is prohibited based on specific access control attributes e.g., purpose of use, information type, user role, etc.
     */
    RefrainPolicy: CodingArgs;
    /**
     * REL: Policy for handling information related to an information subject's religious affiliation, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's religion, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    ReligionInformationSensitivity: CodingArgs;
    /**
     * RELIABLE: Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be adequate.
     */
    Reliable: CodingArgs;
    /**
     * REMITADV: To perform one or more operations on information about the amount remitted for a health care claim.
     */
    RemittanceAdvice: CodingArgs;
    /**
     * RESCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of a research project.
     */
    ResearchProjectCompartment: CodingArgs;
    /**
     * RMGTCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of records management department or workflow.
     */
    RecordsManagementCompartment: CodingArgs;
    /**
     * SCA: Policy for handling sickle cell disease information, which is afforded heightened confidentiality.  Information handling protocols are based on organizational policies related to sickle cell disease information, which is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then the Act valued with this ActCode should be associated with an Act valued with any applicable laws from the ActPrivacyLaw code system.
     */
    SickleCellAnemia: CodingArgs;
    /**
     * SDMAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a substitute decision maker.
     */
    SubstituteDecisionMakerAsserted: CodingArgs;
    /**
     * SDMRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a substitute decision maker.
     */
    SubstituteDecisionMakerReported: CodingArgs;
    /**
     * SDV: Policy for handling sexual assault, abuse, or domestic violence information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to sexual assault, abuse, or domestic violence information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SexualAssaultAbuseOrDomesticViolenceInformationSensitivity: CodingArgs;
    /**
     * SecurityPolicy: Types of security policies that further specify the ActClassPolicy value set.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            obligation to encrypt
     *                            refrain from redisclosure without consent
     */
    SecurityPolicy: CodingArgs;
    /**
     * SEX: Policy for handling sexuality and reproductive health information, which will be afforded heightened confidentiality.  Information handling protocols based on organizational policies related to sexuality and reproductive health information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SexualityAndReproductiveHealthInformationSensitivity: CodingArgs;
    /**
     * SICKLE: Types of sensitivity policies that apply to Acts.  Act.confidentialityCode is defined in the RIM as "constraints around appropriate disclosure of information about this Act, regardless of mood."
     *
     *
     *                            Usage Note: ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises.  Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are able to use information tagged with these sensitivity values.
     */
    SickleCell: CodingArgs;
    /**
     * SOC: Information about provision of social services.
     *
     *
     *                            Usage Note: This is a temporary addition to FHIR to be proposed in harmonization.
     */
    SocialServicesSensitivity: CodingArgs;
    /**
     * SSP: Policy for handling information related to a provider of sensitive services, which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to providers who deliver sensitive healthcare services in order to protect the privacy, well-being, and safety of the provider and of patients receiving sensitive services.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SensitiveServiceProviderInformationSensitivity: CodingArgs;
    /**
     * STD: Policy for handling sexually transmitted disease information, which will be afforded heightened confidentiality.
     *  Information handling protocols based on organizational policies related to sexually transmitted disease information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SexuallyTransmittedDiseaseInformationSensitivity: CodingArgs;
    /**
     * SUBSETTED: Metadata observation used to indicate that some information has been removed from the source object when the view this object contains was constructed because of configuration options when the view was created. The content may not be suitable for use as the basis of a record update
     *
     *
     *                            Usage Note: This is not suitable to be used when information is removed for security reasons - see the code REDACTED for this use.
     */
    Subsetted: CodingArgs;
    /**
     * SUPNWK: To perform one or more operations on information in response to a request by a person authorized by the patient.
     */
    SupportNetwork: CodingArgs;
    /**
     * SYNTAC: Security metadata observation value used to indicate that the IT resource syntax has been transformed from one syntactical representation to another.
     *
     *
     *                            Usage Note: "SYNTAC" code does not indicate the syntactical correctness of the syntactically transformed IT resource.
     */
    SyntacticTransform: CodingArgs;
    /**
     * TBOO: Policy for handling information not to be initially disclosed or discussed with patient except by a physician assigned to patient in this case. Information handling protocols based on organizational policies related to sensitive patient information that must be initially discussed with the patient by an attending physician before being disclosed to the patient.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     *
     *
     *                            Open Issue: This definition conflates a rule and a characteristic, and there may be a similar issue with ts sibling codes.
     */
    Taboo: CodingArgs;
    /**
     * THREAT: To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
     */
    Threat: CodingArgs;
    /**
     * Title38Section7332: Title 38 Part 1-protected information may only be disclosed to a third party with the special written consent of the patient except where expressly authorized by 38 USC 7332. VA may disclose this information for specific purposes to: VA employees on a need to know basis - more restrictive than Privacy Act need to know; contractors who need the information in order to perform or fulfill the duties of the contract; and researchers who provide assurances that the information will not be identified in any report.  This information may also be disclosed without consent where patient lacks decision-making capacity; in a medical emergency for the purpose of treating a condition which poses an immediate threat to the health of any individual and which requires immediate medical intervention; for eye, tissue, or organ donation purposes; and disclosure of HIV information for public health purposes.
     *
     *
     *                            Definition: Title 38 Part 1 - Â§1.462 Confidentiality restrictions.
     *
     *
     * (a) General. The patient records to which Â§Â§1.460 through 1.499 of this part apply may be disclosed or used only as permitted by these regulations and may not otherwise be disclosed or used in any civil, criminal, administrative, or legislative proceedings conducted by any Federal, State, or local authority. Any disclosure made under these regulations must be limited to that information which is necessary to carry out the purpose of the disclosure. SUBCHAPTER III--PROTECTION OF PATIENT RIGHTS Sec. 7332. Confidentiality of certain medical records (a)(1) Records of the identity, diagnosis, prognosis, or treatment of any patient or subject which are maintained in connection with the performance of any program or activity (including education, training, treatment, rehabilitation, or research) relating to drug abuse, alcoholism or alcohol abuse, infection with the human immunodeficiency virus, or sickle cell anemia which is carried out by or for the Department under this title shall, except as provided in subsections (e) and (f), be confidential, and (section 5701 of this title to the contrary notwithstanding) such records may be disclosed only for the purposes and under the circumstances expressly authorized under subsection (b).
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    Title38Section7332: CodingArgs;
    /**
     * TRAIN: To perform one or more operations on information used in training and education.
     */
    Training: CodingArgs;
    /**
     * TREAT: To perform one or more operations on information for provision of health care.
     */
    Treatment: CodingArgs;
    /**
     * TRSLT: Security metadata observation value used to indicate that the IT resource has been translated from one human language to another.
     *
     *
     *                            Usage Note: "TRSLT" does not indicate the fidelity of the translation or the languages translated.
     *
     *                         The fidelity of the IT Resource translation may be indicated using a SecurityIntegrityConfidenceObservation.
     *
     *                         To indicate languages, use the Value Set:HumanLanguage (2.16.840.1.113883.1.11.11526)
     */
    Translated: CodingArgs;
    /**
     * U: Definition: Privacy metadata indicating that the information is not classified as sensitive.
     *
     *
     *                            Examples: Includes publicly available information, e.g., business name, phone, email or physical address.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver has no obligation to consider additional policies when making access control decisions.   Note that in some jurisdictions, personally identifiable information must be protected as confidential, so it would not be appropriate to assign a confidentiality code of "unrestricted"  to that information even if it is publicly available.
     */
    Unrestricted: CodingArgs;
    /**
     * UNCERTREL: Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be uncertain.
     */
    UncertainReliability: CodingArgs;
    /**
     * UNRELIABLE: Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be inadequate.
     */
    Unreliable: CodingArgs;
    /**
     * UPGRDLABEL: Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a more protected level  in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    UpgradeSecurityLabel: CodingArgs;
    /**
     * V: . Privacy metadata indicating that the information is extremely sensitive and likely stigmatizing health information that presents a very high risk if disclosed without authorization.  This information must be kept in the highest confidence.
     *
     *
     *                            Examples:  Includes information about a victim of abuse, patient requested information sensitivity, and taboo subjects relating to health status that must be discussed with the patient by an attending provider before sharing with the patient.  May also include information held under â€œlegal lockâ€? or attorney-client privilege
     *
     *
     *                            Map:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     *
     *
     *                            Usage Note:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     */
    VeryRestricted: CodingArgs;
    /**
     * VERSIONED: Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability)  which indicates that the resource only retains versions of an IT resource  for access and use per applicable policy
     *
     *
     *                            Usage Note: When this code is used, expectation is that the system has removed historical versions of the data that falls outside the time period deemed to be the effective time of the applicable version.
     */
    Versioned: CodingArgs;
};
/**
 * A single value set for all security labels defined by FHIR.
 */
export declare const SecurityLabelsCodings: SecurityLabelsCodingType;
//# sourceMappingURL=SecurityLabelsCodings.d.ts.map