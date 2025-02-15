// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/formatcodes|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export type FormatCodingType = {
  /**
   * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:1.1
   */
  ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: CodingArgs;
  /**
   * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:2.1
   */
  ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: CodingArgs;
  /**
   * Code: urn:hl7-org:sdwg:ccda-structuredBody:1.1
   */
  ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: CodingArgs;
  /**
   * Code: urn:hl7-org:sdwg:ccda-structuredBody:2.1
   */
  ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: CodingArgs;
  /**
   * Code: urn:ihe:card:CRC:2012
   */
  CardiologyCRC: CodingArgs;
  /**
   * Code: urn:ihe:card:EPRC-IE:2014
   */
  CardiologyEPRCIE: CodingArgs;
  /**
   * Code: urn:ihe:card:imaging:2011
   */
  CardiacImagingReport: CodingArgs;
  /**
   * Code: urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013
   */
  DentalCDA: CodingArgs;
  /**
   * Code: urn:ihe:dent:PDF
   */
  DentalPDF: CodingArgs;
  /**
   * Code: urn:ihe:dent:TEXT
   */
  DentalText: CodingArgs;
  /**
   * Code: urn:ihe:iti:appc:2016:consent
   */
  AdvancedPatientPrivacyConsents: CodingArgs;
  /**
   * Code: urn:ihe:iti:bppc-sd:2007
   */
  BasicPatientPrivacyConsentsWithScannedDocument: CodingArgs;
  /**
   * Code: urn:ihe:iti:bppc:2007
   */
  BasicPatientPrivacyConsents: CodingArgs;
  /**
   * Code: urn:ihe:iti:dsg:detached:2014
   */
  DSGDetachedDocument: CodingArgs;
  /**
   * Code: urn:ihe:iti:dsg:enveloping:2014
   */
  DSGEnvelopingDocument: CodingArgs;
  /**
   * Code: urn:ihe:iti:xds-sd:pdf:2008
   */
  PDFEmbeddedInCDAPerXDSSDProfile: CodingArgs;
  /**
   * Code: urn:ihe:iti:xds-sd:text:2008
   */
  TextEmbeddedInCDAPerXDSSDProfile: CodingArgs;
  /**
   * Code: urn:ihe:iti:xds:2017:mimeTypeSufficient
   */
  MimeTypeSufficient: CodingArgs;
  /**
   * Code: urn:ihe:iti:xdw:2011:workflowDoc
   */
  XDWWorkflowDocument: CodingArgs;
  /**
   * Code: urn:ihe:lab:xd-lab:2008
   */
  CDALaboratoryReport: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:all:2010
   */
  AnatomicPathologyStructuredReportAll: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:all:2010
   */
  AnatomicPathologyStructuredReportCancerAll: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:breast:2010
   */
  AnatomicPathologyStructuredReportCancerBreast: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:cervix:2010
   */
  AnatomicPathologyStructuredReportCancerCervix: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:colon:2010
   */
  AnatomicPathologyStructuredReportCancerColon: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:endometrium:2010
   */
  AnatomicPathologyStructuredReportCancerEndometrium: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:esophagus:2010
   */
  AnatomicPathologyStructuredReportCancerEsophagus: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:kidney:2010
   */
  AnatomicPathologyStructuredReportCancerKidney: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:larynx:2010
   */
  AnatomicPathologyStructuredReportCancerLarynx: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010
   */
  AnatomicPathologyStructuredReportCancerLipOralCavity: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:liver:2010
   */
  AnatomicPathologyStructuredReportCancerLiver: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:lung:2010
   */
  AnatomicPathologyStructuredReportCancerLung: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:ovary:2010
   */
  AnatomicPathologyStructuredReportCancerOvary: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:pancreas:2010
   */
  AnatomicPathologyStructuredReportCancerPancreas: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:pharynx:2010
   */
  AnatomicPathologyStructuredReportCancerPharynx: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:prostate:2010
   */
  AnatomicPathologyStructuredReportCancerProstate: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:salivary_gland:2010
   */
  AnatomicPathologyStructuredReportCancerSalivaryGland: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:skin:2010
   */
  AnatomicPathologyStructuredReportCancerSkin: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:stomach:2010
   */
  AnatomicPathologyStructuredReportCancerStomach: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:testis:2010
   */
  AnatomicPathologyStructuredReportCancerTestis: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:thyroid:2010
   */
  AnatomicPathologyStructuredReportCancerThyroid: CodingArgs;
  /**
   * Code: urn:ihe:pat:apsr:cancer:urinary_bladder:2010
   */
  AnatomicPathologyStructuredReportCancerUrinaryBladder: CodingArgs;
  /**
   * Code: urn:ihe:pcc:apr:edu:2008
   */
  AntepartumRecordAPREducation: CodingArgs;
  /**
   * Code: urn:ihe:pcc:apr:handp:2008
   */
  AntepartumRecordAPRHistoryAndPhysical: CodingArgs;
  /**
   * Code: urn:ihe:pcc:apr:lab:2008
   */
  AntepartumRecordAPRLaboratory: CodingArgs;
  /**
   * Code: urn:ihe:pcc:aps:2007
   */
  IHEAntepartumSummary: CodingArgs;
  /**
   * Code: urn:ihe:pcc:cm:2008
   */
  CareManagementCM: CodingArgs;
  /**
   * Code: urn:ihe:pcc:crc:2008
   */
  CancerRegistryContentCRC: CodingArgs;
  /**
   * Code: urn:ihe:pcc:ctn:2007
   */
  PCCCTN: CodingArgs;
  /**
   * Code: urn:ihe:pcc:edes:2007
   */
  EmergencyDepartmentEncounterSummaryEDES: CodingArgs;
  /**
   * Code: urn:ihe:pcc:edpn:2007
   */
  PCCEDPN: CodingArgs;
  /**
   * Code: urn:ihe:pcc:edr:2007
   */
  EmergencyDepartmentReferralEDR: CodingArgs;
  /**
   * Code: urn:ihe:pcc:ets:2011
   */
  PCCETS: CodingArgs;
  /**
   * Code: urn:ihe:pcc:hp:2008
   */
  PCCHP: CodingArgs;
  /**
   * Code: urn:ihe:pcc:ic:2008
   */
  ImmunizationContentIC: CodingArgs;
  /**
   * Code: urn:ihe:pcc:its:2011
   */
  PCCITS: CodingArgs;
  /**
   * Code: urn:ihe:pcc:ldhp:2009
   */
  PCCLDHP: CodingArgs;
  /**
   * Code: urn:ihe:pcc:lds:2009
   */
  PCCLDS: CodingArgs;
  /**
   * Code: urn:ihe:pcc:mds:2009
   */
  PCCMDS: CodingArgs;
  /**
   * Code: urn:ihe:pcc:nds:2010
   */
  PCCNDS: CodingArgs;
  /**
   * Code: urn:ihe:pcc:nn:2007
   */
  PCCNN: CodingArgs;
  /**
   * Code: urn:ihe:pcc:ppvs:2010
   */
  PCCPPVS: CodingArgs;
  /**
   * Code: urn:ihe:pcc:ript:2017
   */
  RoutineInterfacilityPatientTransportRIPT: CodingArgs;
  /**
   * Code: urn:ihe:pcc:tn:2007
   */
  PCCTN: CodingArgs;
  /**
   * Code: urn:ihe:pcc:trs:2011
   */
  PCCTRS: CodingArgs;
  /**
   * Code: urn:ihe:pcc:xds-ms:2007
   */
  XDSMedicalSummaries: CodingArgs;
  /**
   * Code: urn:ihe:pcc:xphr:2007
   */
  PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: CodingArgs;
  /**
   * Code: urn:ihe:pharm:dis:2010
   */
  PharmacyDIS: CodingArgs;
  /**
   * Code: urn:ihe:pharm:padv:2010
   */
  PharmacyPADV: CodingArgs;
  /**
   * Code: urn:ihe:pharm:pml:2013
   */
  PharmacyPML: CodingArgs;
  /**
   * Code: urn:ihe:pharm:pre:2010
   */
  PharmacyPre: CodingArgs;
  /**
   * Code: urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013
   */
  RadiologyXDSIStructuredCDA: CodingArgs;
  /**
   * Code: urn:ihe:rad:PDF
   */
  RadiologyXDSIPDF: CodingArgs;
  /**
   * Code: urn:ihe:rad:TEXT
   */
  RadiologyXDSIText: CodingArgs;
}

/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export const FormatCodings:FormatCodingType = {
  /**
   * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:1.1
   */
  ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: {
    display: "For documents following C-CDA 1.1 constraints using a non structured body.",
    code: "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:2.1
   */
  ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: {
    display: "For documents following C-CDA 2.1 constraints using a non structured body.",
    code: "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:hl7-org:sdwg:ccda-structuredBody:1.1
   */
  ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: {
    display: "For documents following C-CDA 1.1 constraints using a structured body.",
    code: "urn:hl7-org:sdwg:ccda-structuredBody:1.1",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:hl7-org:sdwg:ccda-structuredBody:2.1
   */
  ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: {
    display: "For documents following C-CDA 2.1 constraints using a structured body.",
    code: "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:card:CRC:2012
   */
  CardiologyCRC: {
    display: "Cardiology CRC",
    code: "urn:ihe:card:CRC:2012",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:card:EPRC-IE:2014
   */
  CardiologyEPRCIE: {
    display: "Cardiology EPRC-IE",
    code: "urn:ihe:card:EPRC-IE:2014",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:card:imaging:2011
   */
  CardiacImagingReport: {
    display: "Cardiac Imaging Report",
    code: "urn:ihe:card:imaging:2011",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013
   */
  DentalCDA: {
    display: "Dental CDA",
    code: "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:dent:PDF
   */
  DentalPDF: {
    display: "Dental PDF",
    code: "urn:ihe:dent:PDF",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:dent:TEXT
   */
  DentalText: {
    display: "Dental Text",
    code: "urn:ihe:dent:TEXT",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:appc:2016:consent
   */
  AdvancedPatientPrivacyConsents: {
    display: "Advanced Patient Privacy Consents",
    code: "urn:ihe:iti:appc:2016:consent",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:bppc-sd:2007
   */
  BasicPatientPrivacyConsentsWithScannedDocument: {
    display: "Basic Patient Privacy Consents with Scanned Document",
    code: "urn:ihe:iti:bppc-sd:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:bppc:2007
   */
  BasicPatientPrivacyConsents: {
    display: "Basic Patient Privacy Consents",
    code: "urn:ihe:iti:bppc:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:dsg:detached:2014
   */
  DSGDetachedDocument: {
    display: "DSG Detached Document",
    code: "urn:ihe:iti:dsg:detached:2014",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:dsg:enveloping:2014
   */
  DSGEnvelopingDocument: {
    display: "DSG Enveloping Document",
    code: "urn:ihe:iti:dsg:enveloping:2014",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:xds-sd:pdf:2008
   */
  PDFEmbeddedInCDAPerXDSSDProfile: {
    display: "PDF embedded in CDA per XDS-SD profile",
    code: "urn:ihe:iti:xds-sd:pdf:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:xds-sd:text:2008
   */
  TextEmbeddedInCDAPerXDSSDProfile: {
    display: "Text embedded in CDA per XDS-SD profile",
    code: "urn:ihe:iti:xds-sd:text:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:xds:2017:mimeTypeSufficient
   */
  MimeTypeSufficient: {
    display: "mimeType Sufficient",
    code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:iti:xdw:2011:workflowDoc
   */
  XDWWorkflowDocument: {
    display: "XDW Workflow Document",
    code: "urn:ihe:iti:xdw:2011:workflowDoc",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:lab:xd-lab:2008
   */
  CDALaboratoryReport: {
    display: "CDA Laboratory Report",
    code: "urn:ihe:lab:xd-lab:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:all:2010
   */
  AnatomicPathologyStructuredReportAll: {
    display: "Anatomic Pathology Structured Report All",
    code: "urn:ihe:pat:apsr:all:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:all:2010
   */
  AnatomicPathologyStructuredReportCancerAll: {
    display: "Anatomic Pathology Structured Report Cancer All",
    code: "urn:ihe:pat:apsr:cancer:all:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:breast:2010
   */
  AnatomicPathologyStructuredReportCancerBreast: {
    display: "Anatomic Pathology Structured Report Cancer Breast",
    code: "urn:ihe:pat:apsr:cancer:breast:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:cervix:2010
   */
  AnatomicPathologyStructuredReportCancerCervix: {
    display: "Anatomic Pathology Structured Report Cancer Cervix",
    code: "urn:ihe:pat:apsr:cancer:cervix:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:colon:2010
   */
  AnatomicPathologyStructuredReportCancerColon: {
    display: "Anatomic Pathology Structured Report Cancer Colon",
    code: "urn:ihe:pat:apsr:cancer:colon:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:endometrium:2010
   */
  AnatomicPathologyStructuredReportCancerEndometrium: {
    display: "Anatomic Pathology Structured Report Cancer Endometrium",
    code: "urn:ihe:pat:apsr:cancer:endometrium:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:esophagus:2010
   */
  AnatomicPathologyStructuredReportCancerEsophagus: {
    display: "Anatomic Pathology Structured Report Cancer Esophagus",
    code: "urn:ihe:pat:apsr:cancer:esophagus:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:kidney:2010
   */
  AnatomicPathologyStructuredReportCancerKidney: {
    display: "Anatomic Pathology Structured Report Cancer Kidney",
    code: "urn:ihe:pat:apsr:cancer:kidney:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:larynx:2010
   */
  AnatomicPathologyStructuredReportCancerLarynx: {
    display: "Anatomic Pathology Structured Report Cancer Larynx",
    code: "urn:ihe:pat:apsr:cancer:larynx:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010
   */
  AnatomicPathologyStructuredReportCancerLipOralCavity: {
    display: "Anatomic Pathology Structured Report Cancer Lip Oral Cavity",
    code: "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:liver:2010
   */
  AnatomicPathologyStructuredReportCancerLiver: {
    display: "Anatomic Pathology Structured Report Cancer Liver",
    code: "urn:ihe:pat:apsr:cancer:liver:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:lung:2010
   */
  AnatomicPathologyStructuredReportCancerLung: {
    display: "Anatomic Pathology Structured Report Cancer Lung",
    code: "urn:ihe:pat:apsr:cancer:lung:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:ovary:2010
   */
  AnatomicPathologyStructuredReportCancerOvary: {
    display: "Anatomic Pathology Structured Report Cancer Ovary",
    code: "urn:ihe:pat:apsr:cancer:ovary:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:pancreas:2010
   */
  AnatomicPathologyStructuredReportCancerPancreas: {
    display: "Anatomic Pathology Structured Report Cancer Pancreas",
    code: "urn:ihe:pat:apsr:cancer:pancreas:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:pharynx:2010
   */
  AnatomicPathologyStructuredReportCancerPharynx: {
    display: "Anatomic Pathology Structured Report Cancer Pharynx",
    code: "urn:ihe:pat:apsr:cancer:pharynx:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:prostate:2010
   */
  AnatomicPathologyStructuredReportCancerProstate: {
    display: "Anatomic Pathology Structured Report Cancer Prostate",
    code: "urn:ihe:pat:apsr:cancer:prostate:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:salivary_gland:2010
   */
  AnatomicPathologyStructuredReportCancerSalivaryGland: {
    display: "Anatomic Pathology Structured Report Cancer Salivary Gland",
    code: "urn:ihe:pat:apsr:cancer:salivary_gland:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:skin:2010
   */
  AnatomicPathologyStructuredReportCancerSkin: {
    display: "Anatomic Pathology Structured Report Cancer Skin",
    code: "urn:ihe:pat:apsr:cancer:skin:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:stomach:2010
   */
  AnatomicPathologyStructuredReportCancerStomach: {
    display: "Anatomic Pathology Structured Report Cancer Stomach",
    code: "urn:ihe:pat:apsr:cancer:stomach:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:testis:2010
   */
  AnatomicPathologyStructuredReportCancerTestis: {
    display: "Anatomic Pathology Structured Report Cancer Testis",
    code: "urn:ihe:pat:apsr:cancer:testis:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:thyroid:2010
   */
  AnatomicPathologyStructuredReportCancerThyroid: {
    display: "Anatomic Pathology Structured Report Cancer Thyroid",
    code: "urn:ihe:pat:apsr:cancer:thyroid:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pat:apsr:cancer:urinary_bladder:2010
   */
  AnatomicPathologyStructuredReportCancerUrinaryBladder: {
    display: "Anatomic Pathology Structured Report Cancer Urinary Bladder",
    code: "urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:apr:edu:2008
   */
  AntepartumRecordAPREducation: {
    display: "Antepartum Record (APR) - Education",
    code: "urn:ihe:pcc:apr:edu:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:apr:handp:2008
   */
  AntepartumRecordAPRHistoryAndPhysical: {
    display: "Antepartum Record (APR) - History and Physical",
    code: "urn:ihe:pcc:apr:handp:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:apr:lab:2008
   */
  AntepartumRecordAPRLaboratory: {
    display: "Antepartum Record (APR) - Laboratory",
    code: "urn:ihe:pcc:apr:lab:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:aps:2007
   */
  IHEAntepartumSummary: {
    display: "IHE Antepartum Summary",
    code: "urn:ihe:pcc:aps:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:cm:2008
   */
  CareManagementCM: {
    display: "Care Management (CM)",
    code: "urn:ihe:pcc:cm:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:crc:2008
   */
  CancerRegistryContentCRC: {
    display: "Cancer Registry Content (CRC)",
    code: "urn:ihe:pcc:crc:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:ctn:2007
   */
  PCCCTN: {
    display: "PCC CTN",
    code: "urn:ihe:pcc:ctn:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:edes:2007
   */
  EmergencyDepartmentEncounterSummaryEDES: {
    display: "Emergency Department Encounter Summary (EDES)",
    code: "urn:ihe:pcc:edes:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:edpn:2007
   */
  PCCEDPN: {
    display: "PCC EDPN",
    code: "urn:ihe:pcc:edpn:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:edr:2007
   */
  EmergencyDepartmentReferralEDR: {
    display: "Emergency Department Referral (EDR)",
    code: "urn:ihe:pcc:edr:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:ets:2011
   */
  PCCETS: {
    display: "PCC ETS",
    code: "urn:ihe:pcc:ets:2011",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:hp:2008
   */
  PCCHP: {
    display: "PCC HP",
    code: "urn:ihe:pcc:hp:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:ic:2008
   */
  ImmunizationContentIC: {
    display: "Immunization Content (IC)",
    code: "urn:ihe:pcc:ic:2008",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:its:2011
   */
  PCCITS: {
    display: "PCC ITS",
    code: "urn:ihe:pcc:its:2011",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:ldhp:2009
   */
  PCCLDHP: {
    display: "PCC LDHP",
    code: "urn:ihe:pcc:ldhp:2009",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:lds:2009
   */
  PCCLDS: {
    display: "PCC LDS",
    code: "urn:ihe:pcc:lds:2009",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:mds:2009
   */
  PCCMDS: {
    display: "PCC MDS",
    code: "urn:ihe:pcc:mds:2009",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:nds:2010
   */
  PCCNDS: {
    display: "PCC NDS",
    code: "urn:ihe:pcc:nds:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:nn:2007
   */
  PCCNN: {
    display: "PCC NN",
    code: "urn:ihe:pcc:nn:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:ppvs:2010
   */
  PCCPPVS: {
    display: "PCC PPVS",
    code: "urn:ihe:pcc:ppvs:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:ript:2017
   */
  RoutineInterfacilityPatientTransportRIPT: {
    display: "Routine Interfacility Patient Transport (RIPT)",
    code: "urn:ihe:pcc:ript:2017",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:tn:2007
   */
  PCCTN: {
    display: "PCC TN",
    code: "urn:ihe:pcc:tn:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:trs:2011
   */
  PCCTRS: {
    display: "PCC TRS",
    code: "urn:ihe:pcc:trs:2011",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:xds-ms:2007
   */
  XDSMedicalSummaries: {
    display: "XDS Medical Summaries",
    code: "urn:ihe:pcc:xds-ms:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pcc:xphr:2007
   */
  PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: {
    display: "Personal Health Records. Also known as HL7 CCD and HITSP C32",
    code: "urn:ihe:pcc:xphr:2007",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pharm:dis:2010
   */
  PharmacyDIS: {
    display: "Pharmacy DIS",
    code: "urn:ihe:pharm:dis:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pharm:padv:2010
   */
  PharmacyPADV: {
    display: "Pharmacy PADV",
    code: "urn:ihe:pharm:padv:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pharm:pml:2013
   */
  PharmacyPML: {
    display: "Pharmacy PML",
    code: "urn:ihe:pharm:pml:2013",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:pharm:pre:2010
   */
  PharmacyPre: {
    display: "Pharmacy Pre",
    code: "urn:ihe:pharm:pre:2010",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013
   */
  RadiologyXDSIStructuredCDA: {
    display: "Radiology XDS-I Structured CDA",
    code: "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:rad:PDF
   */
  RadiologyXDSIPDF: {
    display: "Radiology XDS-I PDF",
    code: "urn:ihe:rad:PDF",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
  /**
   * Code: urn:ihe:rad:TEXT
   */
  RadiologyXDSIText: {
    display: "Radiology XDS-I Text",
    code: "urn:ihe:rad:TEXT",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
  },
} as const;
