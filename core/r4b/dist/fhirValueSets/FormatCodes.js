// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/formatcodes|4.3.0
/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export const FormatCodes = {
    /**
     * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:1.1
     */
    ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
    /**
     * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:2.1
     */
    ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",
    /**
     * Code: urn:hl7-org:sdwg:ccda-structuredBody:1.1
     */
    ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: "urn:hl7-org:sdwg:ccda-structuredBody:1.1",
    /**
     * Code: urn:hl7-org:sdwg:ccda-structuredBody:2.1
     */
    ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
    /**
     * Code: urn:ihe:card:CRC:2012
     */
    CardiologyCRC: "urn:ihe:card:CRC:2012",
    /**
     * Code: urn:ihe:card:EPRC-IE:2014
     */
    CardiologyEPRCIE: "urn:ihe:card:EPRC-IE:2014",
    /**
     * Code: urn:ihe:card:imaging:2011
     */
    CardiacImagingReport: "urn:ihe:card:imaging:2011",
    /**
     * Code: urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013
     */
    DentalCDA: "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
    /**
     * Code: urn:ihe:dent:PDF
     */
    DentalPDF: "urn:ihe:dent:PDF",
    /**
     * Code: urn:ihe:dent:TEXT
     */
    DentalText: "urn:ihe:dent:TEXT",
    /**
     * Code: urn:ihe:iti:appc:2016:consent
     */
    AdvancedPatientPrivacyConsents: "urn:ihe:iti:appc:2016:consent",
    /**
     * Code: urn:ihe:iti:bppc-sd:2007
     */
    BasicPatientPrivacyConsentsWithScannedDocument: "urn:ihe:iti:bppc-sd:2007",
    /**
     * Code: urn:ihe:iti:bppc:2007
     */
    BasicPatientPrivacyConsents: "urn:ihe:iti:bppc:2007",
    /**
     * Code: urn:ihe:iti:dsg:detached:2014
     */
    DSGDetachedDocument: "urn:ihe:iti:dsg:detached:2014",
    /**
     * Code: urn:ihe:iti:dsg:enveloping:2014
     */
    DSGEnvelopingDocument: "urn:ihe:iti:dsg:enveloping:2014",
    /**
     * Code: urn:ihe:iti:xds-sd:pdf:2008
     */
    PDFEmbeddedInCDAPerXDSSDProfile: "urn:ihe:iti:xds-sd:pdf:2008",
    /**
     * Code: urn:ihe:iti:xds-sd:text:2008
     */
    TextEmbeddedInCDAPerXDSSDProfile: "urn:ihe:iti:xds-sd:text:2008",
    /**
     * Code: urn:ihe:iti:xds:2017:mimeTypeSufficient
     */
    MimeTypeSufficient: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
    /**
     * Code: urn:ihe:iti:xdw:2011:workflowDoc
     */
    XDWWorkflowDocument: "urn:ihe:iti:xdw:2011:workflowDoc",
    /**
     * Code: urn:ihe:lab:xd-lab:2008
     */
    CDALaboratoryReport: "urn:ihe:lab:xd-lab:2008",
    /**
     * Code: urn:ihe:pat:apsr:all:2010
     */
    AnatomicPathologyStructuredReportAll: "urn:ihe:pat:apsr:all:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:all:2010
     */
    AnatomicPathologyStructuredReportCancerAll: "urn:ihe:pat:apsr:cancer:all:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:breast:2010
     */
    AnatomicPathologyStructuredReportCancerBreast: "urn:ihe:pat:apsr:cancer:breast:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:cervix:2010
     */
    AnatomicPathologyStructuredReportCancerCervix: "urn:ihe:pat:apsr:cancer:cervix:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:colon:2010
     */
    AnatomicPathologyStructuredReportCancerColon: "urn:ihe:pat:apsr:cancer:colon:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:endometrium:2010
     */
    AnatomicPathologyStructuredReportCancerEndometrium: "urn:ihe:pat:apsr:cancer:endometrium:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:esophagus:2010
     */
    AnatomicPathologyStructuredReportCancerEsophagus: "urn:ihe:pat:apsr:cancer:esophagus:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:kidney:2010
     */
    AnatomicPathologyStructuredReportCancerKidney: "urn:ihe:pat:apsr:cancer:kidney:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:larynx:2010
     */
    AnatomicPathologyStructuredReportCancerLarynx: "urn:ihe:pat:apsr:cancer:larynx:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010
     */
    AnatomicPathologyStructuredReportCancerLipOralCavity: "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:liver:2010
     */
    AnatomicPathologyStructuredReportCancerLiver: "urn:ihe:pat:apsr:cancer:liver:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:lung:2010
     */
    AnatomicPathologyStructuredReportCancerLung: "urn:ihe:pat:apsr:cancer:lung:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:ovary:2010
     */
    AnatomicPathologyStructuredReportCancerOvary: "urn:ihe:pat:apsr:cancer:ovary:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:pancreas:2010
     */
    AnatomicPathologyStructuredReportCancerPancreas: "urn:ihe:pat:apsr:cancer:pancreas:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:pharynx:2010
     */
    AnatomicPathologyStructuredReportCancerPharynx: "urn:ihe:pat:apsr:cancer:pharynx:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:prostate:2010
     */
    AnatomicPathologyStructuredReportCancerProstate: "urn:ihe:pat:apsr:cancer:prostate:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:salivary_gland:2010
     */
    AnatomicPathologyStructuredReportCancerSalivaryGland: "urn:ihe:pat:apsr:cancer:salivary_gland:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:skin:2010
     */
    AnatomicPathologyStructuredReportCancerSkin: "urn:ihe:pat:apsr:cancer:skin:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:stomach:2010
     */
    AnatomicPathologyStructuredReportCancerStomach: "urn:ihe:pat:apsr:cancer:stomach:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:testis:2010
     */
    AnatomicPathologyStructuredReportCancerTestis: "urn:ihe:pat:apsr:cancer:testis:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:thyroid:2010
     */
    AnatomicPathologyStructuredReportCancerThyroid: "urn:ihe:pat:apsr:cancer:thyroid:2010",
    /**
     * Code: urn:ihe:pat:apsr:cancer:urinary_bladder:2010
     */
    AnatomicPathologyStructuredReportCancerUrinaryBladder: "urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
    /**
     * Code: urn:ihe:pcc:apr:edu:2008
     */
    AntepartumRecordAPREducation: "urn:ihe:pcc:apr:edu:2008",
    /**
     * Code: urn:ihe:pcc:apr:handp:2008
     */
    AntepartumRecordAPRHistoryAndPhysical: "urn:ihe:pcc:apr:handp:2008",
    /**
     * Code: urn:ihe:pcc:apr:lab:2008
     */
    AntepartumRecordAPRLaboratory: "urn:ihe:pcc:apr:lab:2008",
    /**
     * Code: urn:ihe:pcc:aps:2007
     */
    IHEAntepartumSummary: "urn:ihe:pcc:aps:2007",
    /**
     * Code: urn:ihe:pcc:cm:2008
     */
    CareManagementCM: "urn:ihe:pcc:cm:2008",
    /**
     * Code: urn:ihe:pcc:crc:2008
     */
    CancerRegistryContentCRC: "urn:ihe:pcc:crc:2008",
    /**
     * Code: urn:ihe:pcc:ctn:2007
     */
    PCCCTN: "urn:ihe:pcc:ctn:2007",
    /**
     * Code: urn:ihe:pcc:edes:2007
     */
    EmergencyDepartmentEncounterSummaryEDES: "urn:ihe:pcc:edes:2007",
    /**
     * Code: urn:ihe:pcc:edpn:2007
     */
    PCCEDPN: "urn:ihe:pcc:edpn:2007",
    /**
     * Code: urn:ihe:pcc:edr:2007
     */
    EmergencyDepartmentReferralEDR: "urn:ihe:pcc:edr:2007",
    /**
     * Code: urn:ihe:pcc:ets:2011
     */
    PCCETS: "urn:ihe:pcc:ets:2011",
    /**
     * Code: urn:ihe:pcc:hp:2008
     */
    PCCHP: "urn:ihe:pcc:hp:2008",
    /**
     * Code: urn:ihe:pcc:ic:2008
     */
    ImmunizationContentIC: "urn:ihe:pcc:ic:2008",
    /**
     * Code: urn:ihe:pcc:its:2011
     */
    PCCITS: "urn:ihe:pcc:its:2011",
    /**
     * Code: urn:ihe:pcc:ldhp:2009
     */
    PCCLDHP: "urn:ihe:pcc:ldhp:2009",
    /**
     * Code: urn:ihe:pcc:lds:2009
     */
    PCCLDS: "urn:ihe:pcc:lds:2009",
    /**
     * Code: urn:ihe:pcc:mds:2009
     */
    PCCMDS: "urn:ihe:pcc:mds:2009",
    /**
     * Code: urn:ihe:pcc:nds:2010
     */
    PCCNDS: "urn:ihe:pcc:nds:2010",
    /**
     * Code: urn:ihe:pcc:nn:2007
     */
    PCCNN: "urn:ihe:pcc:nn:2007",
    /**
     * Code: urn:ihe:pcc:ppvs:2010
     */
    PCCPPVS: "urn:ihe:pcc:ppvs:2010",
    /**
     * Code: urn:ihe:pcc:ript:2017
     */
    RoutineInterfacilityPatientTransportRIPT: "urn:ihe:pcc:ript:2017",
    /**
     * Code: urn:ihe:pcc:tn:2007
     */
    PCCTN: "urn:ihe:pcc:tn:2007",
    /**
     * Code: urn:ihe:pcc:trs:2011
     */
    PCCTRS: "urn:ihe:pcc:trs:2011",
    /**
     * Code: urn:ihe:pcc:xds-ms:2007
     */
    XDSMedicalSummaries: "urn:ihe:pcc:xds-ms:2007",
    /**
     * Code: urn:ihe:pcc:xphr:2007
     */
    PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: "urn:ihe:pcc:xphr:2007",
    /**
     * Code: urn:ihe:pharm:dis:2010
     */
    PharmacyDIS: "urn:ihe:pharm:dis:2010",
    /**
     * Code: urn:ihe:pharm:padv:2010
     */
    PharmacyPADV: "urn:ihe:pharm:padv:2010",
    /**
     * Code: urn:ihe:pharm:pml:2013
     */
    PharmacyPML: "urn:ihe:pharm:pml:2013",
    /**
     * Code: urn:ihe:pharm:pre:2010
     */
    PharmacyPre: "urn:ihe:pharm:pre:2010",
    /**
     * Code: urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013
     */
    RadiologyXDSIStructuredCDA: "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
    /**
     * Code: urn:ihe:rad:PDF
     */
    RadiologyXDSIPDF: "urn:ihe:rad:PDF",
    /**
     * Code: urn:ihe:rad:TEXT
     */
    RadiologyXDSIText: "urn:ihe:rad:TEXT",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0Q29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0Zvcm1hdENvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLGdFQUFnRTtBQUVoRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRztJQUN6Qjs7T0FFRztJQUNILDZEQUE2RCxFQUFFLHNDQUFzQztJQUNyRzs7T0FFRztJQUNILDZEQUE2RCxFQUFFLHNDQUFzQztJQUNyRzs7T0FFRztJQUNILDBEQUEwRCxFQUFFLDBDQUEwQztJQUN0Rzs7T0FFRztJQUNILDBEQUEwRCxFQUFFLDBDQUEwQztJQUN0Rzs7T0FFRztJQUNILGFBQWEsRUFBRSx1QkFBdUI7SUFDdEM7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSwyQkFBMkI7SUFDN0M7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSwyQkFBMkI7SUFDakQ7O09BRUc7SUFDSCxTQUFTLEVBQUUsdURBQXVEO0lBQ2xFOztPQUVHO0lBQ0gsU0FBUyxFQUFFLGtCQUFrQjtJQUM3Qjs7T0FFRztJQUNILFVBQVUsRUFBRSxtQkFBbUI7SUFDL0I7O09BRUc7SUFDSCw4QkFBOEIsRUFBRSwrQkFBK0I7SUFDL0Q7O09BRUc7SUFDSCw4Q0FBOEMsRUFBRSwwQkFBMEI7SUFDMUU7O09BRUc7SUFDSCwyQkFBMkIsRUFBRSx1QkFBdUI7SUFDcEQ7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSwrQkFBK0I7SUFDcEQ7O09BRUc7SUFDSCxxQkFBcUIsRUFBRSxpQ0FBaUM7SUFDeEQ7O09BRUc7SUFDSCwrQkFBK0IsRUFBRSw2QkFBNkI7SUFDOUQ7O09BRUc7SUFDSCxnQ0FBZ0MsRUFBRSw4QkFBOEI7SUFDaEU7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSx5Q0FBeUM7SUFDN0Q7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSxrQ0FBa0M7SUFDdkQ7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSx5QkFBeUI7SUFDOUM7O09BRUc7SUFDSCxvQ0FBb0MsRUFBRSwyQkFBMkI7SUFDakU7O09BRUc7SUFDSCwwQ0FBMEMsRUFBRSxrQ0FBa0M7SUFDOUU7O09BRUc7SUFDSCw2Q0FBNkMsRUFBRSxxQ0FBcUM7SUFDcEY7O09BRUc7SUFDSCw2Q0FBNkMsRUFBRSxxQ0FBcUM7SUFDcEY7O09BRUc7SUFDSCw0Q0FBNEMsRUFBRSxvQ0FBb0M7SUFDbEY7O09BRUc7SUFDSCxrREFBa0QsRUFBRSwwQ0FBMEM7SUFDOUY7O09BRUc7SUFDSCxnREFBZ0QsRUFBRSx3Q0FBd0M7SUFDMUY7O09BRUc7SUFDSCw2Q0FBNkMsRUFBRSxxQ0FBcUM7SUFDcEY7O09BRUc7SUFDSCw2Q0FBNkMsRUFBRSxxQ0FBcUM7SUFDcEY7O09BRUc7SUFDSCxvREFBb0QsRUFBRSw4Q0FBOEM7SUFDcEc7O09BRUc7SUFDSCw0Q0FBNEMsRUFBRSxvQ0FBb0M7SUFDbEY7O09BRUc7SUFDSCwyQ0FBMkMsRUFBRSxtQ0FBbUM7SUFDaEY7O09BRUc7SUFDSCw0Q0FBNEMsRUFBRSxvQ0FBb0M7SUFDbEY7O09BRUc7SUFDSCwrQ0FBK0MsRUFBRSx1Q0FBdUM7SUFDeEY7O09BRUc7SUFDSCw4Q0FBOEMsRUFBRSxzQ0FBc0M7SUFDdEY7O09BRUc7SUFDSCwrQ0FBK0MsRUFBRSx1Q0FBdUM7SUFDeEY7O09BRUc7SUFDSCxvREFBb0QsRUFBRSw2Q0FBNkM7SUFDbkc7O09BRUc7SUFDSCwyQ0FBMkMsRUFBRSxtQ0FBbUM7SUFDaEY7O09BRUc7SUFDSCw4Q0FBOEMsRUFBRSxzQ0FBc0M7SUFDdEY7O09BRUc7SUFDSCw2Q0FBNkMsRUFBRSxxQ0FBcUM7SUFDcEY7O09BRUc7SUFDSCw4Q0FBOEMsRUFBRSxzQ0FBc0M7SUFDdEY7O09BRUc7SUFDSCxxREFBcUQsRUFBRSw4Q0FBOEM7SUFDckc7O09BRUc7SUFDSCw0QkFBNEIsRUFBRSwwQkFBMEI7SUFDeEQ7O09BRUc7SUFDSCxxQ0FBcUMsRUFBRSw0QkFBNEI7SUFDbkU7O09BRUc7SUFDSCw2QkFBNkIsRUFBRSwwQkFBMEI7SUFDekQ7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUM7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxxQkFBcUI7SUFDdkM7O09BRUc7SUFDSCx3QkFBd0IsRUFBRSxzQkFBc0I7SUFDaEQ7O09BRUc7SUFDSCxNQUFNLEVBQUUsc0JBQXNCO0lBQzlCOztPQUVHO0lBQ0gsdUNBQXVDLEVBQUUsdUJBQXVCO0lBQ2hFOztPQUVHO0lBQ0gsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQzs7T0FFRztJQUNILDhCQUE4QixFQUFFLHNCQUFzQjtJQUN0RDs7T0FFRztJQUNILE1BQU0sRUFBRSxzQkFBc0I7SUFDOUI7O09BRUc7SUFDSCxLQUFLLEVBQUUscUJBQXFCO0lBQzVCOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUscUJBQXFCO0lBQzVDOztPQUVHO0lBQ0gsTUFBTSxFQUFFLHNCQUFzQjtJQUM5Qjs7T0FFRztJQUNILE9BQU8sRUFBRSx1QkFBdUI7SUFDaEM7O09BRUc7SUFDSCxNQUFNLEVBQUUsc0JBQXNCO0lBQzlCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLHNCQUFzQjtJQUM5Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxzQkFBc0I7SUFDOUI7O09BRUc7SUFDSCxLQUFLLEVBQUUscUJBQXFCO0lBQzVCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQzs7T0FFRztJQUNILHdDQUF3QyxFQUFFLHVCQUF1QjtJQUNqRTs7T0FFRztJQUNILEtBQUssRUFBRSxxQkFBcUI7SUFDNUI7O09BRUc7SUFDSCxNQUFNLEVBQUUsc0JBQXNCO0lBQzlCOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUseUJBQXlCO0lBQzlDOztPQUVHO0lBQ0gsaURBQWlELEVBQUUsdUJBQXVCO0lBQzFFOztPQUVHO0lBQ0gsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQzs7T0FFRztJQUNILFlBQVksRUFBRSx5QkFBeUI7SUFDdkM7O09BRUc7SUFDSCxXQUFXLEVBQUUsd0JBQXdCO0lBQ3JDOztPQUVHO0lBQ0gsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQzs7T0FFRztJQUNILDBCQUEwQixFQUFFLHNEQUFzRDtJQUNsRjs7T0FFRztJQUNILGdCQUFnQixFQUFFLGlCQUFpQjtJQUNuQzs7T0FFRztJQUNILGlCQUFpQixFQUFFLGtCQUFrQjtDQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9mb3JtYXRjb2Rlc3w0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSB2YWx1ZSBzZXQgaXMgZGVmaW5lZCB0byBiZSB0aGUgc2V0IG9mIGZvcm1hdCBjb2RlcyBkZWZpbmVkIGJ5IHRoZSBJSEUgVGVjaG5pY2FsIEZyYW1ld29yaywgYW5kIGFsc28gaW5jbHVkaW5nIGFkZGl0aW9uYWwgZm9ybWF0IGNvZGVzIGRlZmluZWQgYnkgdGhlICAgIEhMNy4gVGhlIHZhbHVlIHNldCBpcyBsaXN0ZWQgaW4gSElUU1AgQzgwIFRhYmxlIDItMTUzIEZvcm1hdCBDb2RlIFZhbHVlIFNldCBEZWZpbml0aW9uLCAgICB3aXRoIGFkZGl0aW9ucyBwdWJsaXNoZWQgbGF0ZXIgYnkgSUhFIGFzIHB1Ymxpc2hlZCAgICBhdCBodHRwOi8vd2lraS5paGUubmV0L2luZGV4LnBocD90aXRsZT1JSEVfRm9ybWF0X0NvZGVzICAgYW5kIHdpdGggYWRkaXRpb25zIHB1Ymxpc2hlZCBsYXRlciBieSBITDcgYXMgcHVibGlzaGVkIGF0IGh0dHBzOi8vY29uZmx1ZW5jZS5obDcub3JnL2Rpc3BsYXkvU0QvRm9ybWF0K0NvZGVzK2ZvcitJSEUrWERTLiAgIFRoaXMgaXMgdGhlIGNvZGUgc3BlY2lmeWluZyB0aGUgdGVjaG5pY2FsIGZvcm1hdCBvZiB0aGUgZG9jdW1lbnQuIEFsb25nIHdpdGggdGhlIHR5cGVDb2RlLCAgICBpdCBzaG91bGQgcHJvdmlkZSBzdWZmaWNpZW50IGluZm9ybWF0aW9uIHRvIGFsbG93IGFueSBwb3RlbnRpYWwgZG9jdW1lbnQgY29uc3VtZXIgdG8ga25vdyAgICBpZiBpdCB3aWxsIGJlIGFibGUgdG8gcHJvY2VzcyB0aGUgZG9jdW1lbnQuIFRoZSBjb2RlIHNoYWxsIGJlIHN1ZmZpY2llbnRseSBzcGVjaWZpYyB0byAgICBlbnN1cmUgcHJvY2Vzc2luZy9kaXNwbGF5IGJ5IGlkZW50aWZ5aW5nIGEgZG9jdW1lbnQgZW5jb2RpbmcsIHN0cnVjdHVyZSBhbmQgdGVtcGxhdGUuIFRoZSBhY3R1YWwgbGlzdCBvZiBjb2RlcyBoZXJlIGlzIGluY29tcGxldGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBGb3JtYXRDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aGw3LW9yZzpzZHdnOmNjZGEtbm9uWE1MQm9keToxLjFcclxuICAgKi9cclxuICBGb3JEb2N1bWVudHNGb2xsb3dpbmdDQ0RBMTFDb25zdHJhaW50c1VzaW5nQU5vblN0cnVjdHVyZWRCb2R5OiBcInVybjpobDctb3JnOnNkd2c6Y2NkYS1ub25YTUxCb2R5OjEuMVwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjpobDctb3JnOnNkd2c6Y2NkYS1ub25YTUxCb2R5OjIuMVxyXG4gICAqL1xyXG4gIEZvckRvY3VtZW50c0ZvbGxvd2luZ0NDREEyMUNvbnN0cmFpbnRzVXNpbmdBTm9uU3RydWN0dXJlZEJvZHk6IFwidXJuOmhsNy1vcmc6c2R3ZzpjY2RhLW5vblhNTEJvZHk6Mi4xXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmhsNy1vcmc6c2R3ZzpjY2RhLXN0cnVjdHVyZWRCb2R5OjEuMVxyXG4gICAqL1xyXG4gIEZvckRvY3VtZW50c0ZvbGxvd2luZ0NDREExMUNvbnN0cmFpbnRzVXNpbmdBU3RydWN0dXJlZEJvZHk6IFwidXJuOmhsNy1vcmc6c2R3ZzpjY2RhLXN0cnVjdHVyZWRCb2R5OjEuMVwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjpobDctb3JnOnNkd2c6Y2NkYS1zdHJ1Y3R1cmVkQm9keToyLjFcclxuICAgKi9cclxuICBGb3JEb2N1bWVudHNGb2xsb3dpbmdDQ0RBMjFDb25zdHJhaW50c1VzaW5nQVN0cnVjdHVyZWRCb2R5OiBcInVybjpobDctb3JnOnNkd2c6Y2NkYS1zdHJ1Y3R1cmVkQm9keToyLjFcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOmNhcmQ6Q1JDOjIwMTJcclxuICAgKi9cclxuICBDYXJkaW9sb2d5Q1JDOiBcInVybjppaGU6Y2FyZDpDUkM6MjAxMlwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6Y2FyZDpFUFJDLUlFOjIwMTRcclxuICAgKi9cclxuICBDYXJkaW9sb2d5RVBSQ0lFOiBcInVybjppaGU6Y2FyZDpFUFJDLUlFOjIwMTRcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOmNhcmQ6aW1hZ2luZzoyMDExXHJcbiAgICovXHJcbiAgQ2FyZGlhY0ltYWdpbmdSZXBvcnQ6IFwidXJuOmloZTpjYXJkOmltYWdpbmc6MjAxMVwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6ZGVudDpDREE6SW1hZ2luZ1JlcG9ydFN0cnVjdHVyZWRIZWFkaW5nczoyMDEzXHJcbiAgICovXHJcbiAgRGVudGFsQ0RBOiBcInVybjppaGU6ZGVudDpDREE6SW1hZ2luZ1JlcG9ydFN0cnVjdHVyZWRIZWFkaW5nczoyMDEzXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpkZW50OlBERlxyXG4gICAqL1xyXG4gIERlbnRhbFBERjogXCJ1cm46aWhlOmRlbnQ6UERGXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpkZW50OlRFWFRcclxuICAgKi9cclxuICBEZW50YWxUZXh0OiBcInVybjppaGU6ZGVudDpURVhUXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTppdGk6YXBwYzoyMDE2OmNvbnNlbnRcclxuICAgKi9cclxuICBBZHZhbmNlZFBhdGllbnRQcml2YWN5Q29uc2VudHM6IFwidXJuOmloZTppdGk6YXBwYzoyMDE2OmNvbnNlbnRcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOml0aTpicHBjLXNkOjIwMDdcclxuICAgKi9cclxuICBCYXNpY1BhdGllbnRQcml2YWN5Q29uc2VudHNXaXRoU2Nhbm5lZERvY3VtZW50OiBcInVybjppaGU6aXRpOmJwcGMtc2Q6MjAwN1wiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6aXRpOmJwcGM6MjAwN1xyXG4gICAqL1xyXG4gIEJhc2ljUGF0aWVudFByaXZhY3lDb25zZW50czogXCJ1cm46aWhlOml0aTpicHBjOjIwMDdcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOml0aTpkc2c6ZGV0YWNoZWQ6MjAxNFxyXG4gICAqL1xyXG4gIERTR0RldGFjaGVkRG9jdW1lbnQ6IFwidXJuOmloZTppdGk6ZHNnOmRldGFjaGVkOjIwMTRcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOml0aTpkc2c6ZW52ZWxvcGluZzoyMDE0XHJcbiAgICovXHJcbiAgRFNHRW52ZWxvcGluZ0RvY3VtZW50OiBcInVybjppaGU6aXRpOmRzZzplbnZlbG9waW5nOjIwMTRcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOml0aTp4ZHMtc2Q6cGRmOjIwMDhcclxuICAgKi9cclxuICBQREZFbWJlZGRlZEluQ0RBUGVyWERTU0RQcm9maWxlOiBcInVybjppaGU6aXRpOnhkcy1zZDpwZGY6MjAwOFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6aXRpOnhkcy1zZDp0ZXh0OjIwMDhcclxuICAgKi9cclxuICBUZXh0RW1iZWRkZWRJbkNEQVBlclhEU1NEUHJvZmlsZTogXCJ1cm46aWhlOml0aTp4ZHMtc2Q6dGV4dDoyMDA4XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTppdGk6eGRzOjIwMTc6bWltZVR5cGVTdWZmaWNpZW50XHJcbiAgICovXHJcbiAgTWltZVR5cGVTdWZmaWNpZW50OiBcInVybjppaGU6aXRpOnhkczoyMDE3Om1pbWVUeXBlU3VmZmljaWVudFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6aXRpOnhkdzoyMDExOndvcmtmbG93RG9jXHJcbiAgICovXHJcbiAgWERXV29ya2Zsb3dEb2N1bWVudDogXCJ1cm46aWhlOml0aTp4ZHc6MjAxMTp3b3JrZmxvd0RvY1wiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6bGFiOnhkLWxhYjoyMDA4XHJcbiAgICovXHJcbiAgQ0RBTGFib3JhdG9yeVJlcG9ydDogXCJ1cm46aWhlOmxhYjp4ZC1sYWI6MjAwOFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGF0OmFwc3I6YWxsOjIwMTBcclxuICAgKi9cclxuICBBbmF0b21pY1BhdGhvbG9neVN0cnVjdHVyZWRSZXBvcnRBbGw6IFwidXJuOmloZTpwYXQ6YXBzcjphbGw6MjAxMFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOmFsbDoyMDEwXHJcbiAgICovXHJcbiAgQW5hdG9taWNQYXRob2xvZ3lTdHJ1Y3R1cmVkUmVwb3J0Q2FuY2VyQWxsOiBcInVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOmFsbDoyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6YnJlYXN0OjIwMTBcclxuICAgKi9cclxuICBBbmF0b21pY1BhdGhvbG9neVN0cnVjdHVyZWRSZXBvcnRDYW5jZXJCcmVhc3Q6IFwidXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6YnJlYXN0OjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpjZXJ2aXg6MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlckNlcnZpeDogXCJ1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpjZXJ2aXg6MjAxMFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOmNvbG9uOjIwMTBcclxuICAgKi9cclxuICBBbmF0b21pY1BhdGhvbG9neVN0cnVjdHVyZWRSZXBvcnRDYW5jZXJDb2xvbjogXCJ1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpjb2xvbjoyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6ZW5kb21ldHJpdW06MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlckVuZG9tZXRyaXVtOiBcInVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOmVuZG9tZXRyaXVtOjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBhdDphcHNyOmNhbmNlcjplc29waGFndXM6MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlckVzb3BoYWd1czogXCJ1cm46aWhlOnBhdDphcHNyOmNhbmNlcjplc29waGFndXM6MjAxMFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOmtpZG5leToyMDEwXHJcbiAgICovXHJcbiAgQW5hdG9taWNQYXRob2xvZ3lTdHJ1Y3R1cmVkUmVwb3J0Q2FuY2VyS2lkbmV5OiBcInVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOmtpZG5leToyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6bGFyeW54OjIwMTBcclxuICAgKi9cclxuICBBbmF0b21pY1BhdGhvbG9neVN0cnVjdHVyZWRSZXBvcnRDYW5jZXJMYXJ5bng6IFwidXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6bGFyeW54OjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpsaXBfb3JhbF9jYXZpdHk6MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlckxpcE9yYWxDYXZpdHk6IFwidXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6bGlwX29yYWxfY2F2aXR5OjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpsaXZlcjoyMDEwXHJcbiAgICovXHJcbiAgQW5hdG9taWNQYXRob2xvZ3lTdHJ1Y3R1cmVkUmVwb3J0Q2FuY2VyTGl2ZXI6IFwidXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6bGl2ZXI6MjAxMFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOmx1bmc6MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlckx1bmc6IFwidXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6bHVuZzoyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6b3Zhcnk6MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlck92YXJ5OiBcInVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOm92YXJ5OjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpwYW5jcmVhczoyMDEwXHJcbiAgICovXHJcbiAgQW5hdG9taWNQYXRob2xvZ3lTdHJ1Y3R1cmVkUmVwb3J0Q2FuY2VyUGFuY3JlYXM6IFwidXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6cGFuY3JlYXM6MjAxMFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOnBoYXJ5bng6MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlclBoYXJ5bng6IFwidXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6cGhhcnlueDoyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6cHJvc3RhdGU6MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlclByb3N0YXRlOiBcInVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOnByb3N0YXRlOjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpzYWxpdmFyeV9nbGFuZDoyMDEwXHJcbiAgICovXHJcbiAgQW5hdG9taWNQYXRob2xvZ3lTdHJ1Y3R1cmVkUmVwb3J0Q2FuY2VyU2FsaXZhcnlHbGFuZDogXCJ1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpzYWxpdmFyeV9nbGFuZDoyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6c2tpbjoyMDEwXHJcbiAgICovXHJcbiAgQW5hdG9taWNQYXRob2xvZ3lTdHJ1Y3R1cmVkUmVwb3J0Q2FuY2VyU2tpbjogXCJ1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpza2luOjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBhdDphcHNyOmNhbmNlcjpzdG9tYWNoOjIwMTBcclxuICAgKi9cclxuICBBbmF0b21pY1BhdGhvbG9neVN0cnVjdHVyZWRSZXBvcnRDYW5jZXJTdG9tYWNoOiBcInVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOnN0b21hY2g6MjAxMFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOnRlc3RpczoyMDEwXHJcbiAgICovXHJcbiAgQW5hdG9taWNQYXRob2xvZ3lTdHJ1Y3R1cmVkUmVwb3J0Q2FuY2VyVGVzdGlzOiBcInVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOnRlc3RpczoyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwYXQ6YXBzcjpjYW5jZXI6dGh5cm9pZDoyMDEwXHJcbiAgICovXHJcbiAgQW5hdG9taWNQYXRob2xvZ3lTdHJ1Y3R1cmVkUmVwb3J0Q2FuY2VyVGh5cm9pZDogXCJ1cm46aWhlOnBhdDphcHNyOmNhbmNlcjp0aHlyb2lkOjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBhdDphcHNyOmNhbmNlcjp1cmluYXJ5X2JsYWRkZXI6MjAxMFxyXG4gICAqL1xyXG4gIEFuYXRvbWljUGF0aG9sb2d5U3RydWN0dXJlZFJlcG9ydENhbmNlclVyaW5hcnlCbGFkZGVyOiBcInVybjppaGU6cGF0OmFwc3I6Y2FuY2VyOnVyaW5hcnlfYmxhZGRlcjoyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwY2M6YXByOmVkdToyMDA4XHJcbiAgICovXHJcbiAgQW50ZXBhcnR1bVJlY29yZEFQUkVkdWNhdGlvbjogXCJ1cm46aWhlOnBjYzphcHI6ZWR1OjIwMDhcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzphcHI6aGFuZHA6MjAwOFxyXG4gICAqL1xyXG4gIEFudGVwYXJ0dW1SZWNvcmRBUFJIaXN0b3J5QW5kUGh5c2ljYWw6IFwidXJuOmloZTpwY2M6YXByOmhhbmRwOjIwMDhcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzphcHI6bGFiOjIwMDhcclxuICAgKi9cclxuICBBbnRlcGFydHVtUmVjb3JkQVBSTGFib3JhdG9yeTogXCJ1cm46aWhlOnBjYzphcHI6bGFiOjIwMDhcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzphcHM6MjAwN1xyXG4gICAqL1xyXG4gIElIRUFudGVwYXJ0dW1TdW1tYXJ5OiBcInVybjppaGU6cGNjOmFwczoyMDA3XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwY2M6Y206MjAwOFxyXG4gICAqL1xyXG4gIENhcmVNYW5hZ2VtZW50Q006IFwidXJuOmloZTpwY2M6Y206MjAwOFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGNjOmNyYzoyMDA4XHJcbiAgICovXHJcbiAgQ2FuY2VyUmVnaXN0cnlDb250ZW50Q1JDOiBcInVybjppaGU6cGNjOmNyYzoyMDA4XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwY2M6Y3RuOjIwMDdcclxuICAgKi9cclxuICBQQ0NDVE46IFwidXJuOmloZTpwY2M6Y3RuOjIwMDdcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzplZGVzOjIwMDdcclxuICAgKi9cclxuICBFbWVyZ2VuY3lEZXBhcnRtZW50RW5jb3VudGVyU3VtbWFyeUVERVM6IFwidXJuOmloZTpwY2M6ZWRlczoyMDA3XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwY2M6ZWRwbjoyMDA3XHJcbiAgICovXHJcbiAgUENDRURQTjogXCJ1cm46aWhlOnBjYzplZHBuOjIwMDdcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzplZHI6MjAwN1xyXG4gICAqL1xyXG4gIEVtZXJnZW5jeURlcGFydG1lbnRSZWZlcnJhbEVEUjogXCJ1cm46aWhlOnBjYzplZHI6MjAwN1wiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGNjOmV0czoyMDExXHJcbiAgICovXHJcbiAgUENDRVRTOiBcInVybjppaGU6cGNjOmV0czoyMDExXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwY2M6aHA6MjAwOFxyXG4gICAqL1xyXG4gIFBDQ0hQOiBcInVybjppaGU6cGNjOmhwOjIwMDhcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzppYzoyMDA4XHJcbiAgICovXHJcbiAgSW1tdW5pemF0aW9uQ29udGVudElDOiBcInVybjppaGU6cGNjOmljOjIwMDhcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzppdHM6MjAxMVxyXG4gICAqL1xyXG4gIFBDQ0lUUzogXCJ1cm46aWhlOnBjYzppdHM6MjAxMVwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGNjOmxkaHA6MjAwOVxyXG4gICAqL1xyXG4gIFBDQ0xESFA6IFwidXJuOmloZTpwY2M6bGRocDoyMDA5XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwY2M6bGRzOjIwMDlcclxuICAgKi9cclxuICBQQ0NMRFM6IFwidXJuOmloZTpwY2M6bGRzOjIwMDlcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzptZHM6MjAwOVxyXG4gICAqL1xyXG4gIFBDQ01EUzogXCJ1cm46aWhlOnBjYzptZHM6MjAwOVwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGNjOm5kczoyMDEwXHJcbiAgICovXHJcbiAgUENDTkRTOiBcInVybjppaGU6cGNjOm5kczoyMDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwY2M6bm46MjAwN1xyXG4gICAqL1xyXG4gIFBDQ05OOiBcInVybjppaGU6cGNjOm5uOjIwMDdcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzpwcHZzOjIwMTBcclxuICAgKi9cclxuICBQQ0NQUFZTOiBcInVybjppaGU6cGNjOnBwdnM6MjAxMFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGNjOnJpcHQ6MjAxN1xyXG4gICAqL1xyXG4gIFJvdXRpbmVJbnRlcmZhY2lsaXR5UGF0aWVudFRyYW5zcG9ydFJJUFQ6IFwidXJuOmloZTpwY2M6cmlwdDoyMDE3XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwY2M6dG46MjAwN1xyXG4gICAqL1xyXG4gIFBDQ1ROOiBcInVybjppaGU6cGNjOnRuOjIwMDdcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBjYzp0cnM6MjAxMVxyXG4gICAqL1xyXG4gIFBDQ1RSUzogXCJ1cm46aWhlOnBjYzp0cnM6MjAxMVwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGNjOnhkcy1tczoyMDA3XHJcbiAgICovXHJcbiAgWERTTWVkaWNhbFN1bW1hcmllczogXCJ1cm46aWhlOnBjYzp4ZHMtbXM6MjAwN1wiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGNjOnhwaHI6MjAwN1xyXG4gICAqL1xyXG4gIFBlcnNvbmFsSGVhbHRoUmVjb3Jkc0Fsc29Lbm93bkFzSEw3Q0NEQW5kSElUU1BDMzI6IFwidXJuOmloZTpwY2M6eHBocjoyMDA3XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwaGFybTpkaXM6MjAxMFxyXG4gICAqL1xyXG4gIFBoYXJtYWN5RElTOiBcInVybjppaGU6cGhhcm06ZGlzOjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnBoYXJtOnBhZHY6MjAxMFxyXG4gICAqL1xyXG4gIFBoYXJtYWN5UEFEVjogXCJ1cm46aWhlOnBoYXJtOnBhZHY6MjAxMFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cGhhcm06cG1sOjIwMTNcclxuICAgKi9cclxuICBQaGFybWFjeVBNTDogXCJ1cm46aWhlOnBoYXJtOnBtbDoyMDEzXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpwaGFybTpwcmU6MjAxMFxyXG4gICAqL1xyXG4gIFBoYXJtYWN5UHJlOiBcInVybjppaGU6cGhhcm06cHJlOjIwMTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiB1cm46aWhlOnJhZDpDREE6SW1hZ2luZ1JlcG9ydFN0cnVjdHVyZWRIZWFkaW5nczoyMDEzXHJcbiAgICovXHJcbiAgUmFkaW9sb2d5WERTSVN0cnVjdHVyZWRDREE6IFwidXJuOmloZTpyYWQ6Q0RBOkltYWdpbmdSZXBvcnRTdHJ1Y3R1cmVkSGVhZGluZ3M6MjAxM1wiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHVybjppaGU6cmFkOlBERlxyXG4gICAqL1xyXG4gIFJhZGlvbG9neVhEU0lQREY6IFwidXJuOmloZTpyYWQ6UERGXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogdXJuOmloZTpyYWQ6VEVYVFxyXG4gICAqL1xyXG4gIFJhZGlvbG9neVhEU0lUZXh0OiBcInVybjppaGU6cmFkOlRFWFRcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdmFsdWUgc2V0IGlzIGRlZmluZWQgdG8gYmUgdGhlIHNldCBvZiBmb3JtYXQgY29kZXMgZGVmaW5lZCBieSB0aGUgSUhFIFRlY2huaWNhbCBGcmFtZXdvcmssIGFuZCBhbHNvIGluY2x1ZGluZyBhZGRpdGlvbmFsIGZvcm1hdCBjb2RlcyBkZWZpbmVkIGJ5IHRoZSAgICBITDcuIFRoZSB2YWx1ZSBzZXQgaXMgbGlzdGVkIGluIEhJVFNQIEM4MCBUYWJsZSAyLTE1MyBGb3JtYXQgQ29kZSBWYWx1ZSBTZXQgRGVmaW5pdGlvbiwgICAgd2l0aCBhZGRpdGlvbnMgcHVibGlzaGVkIGxhdGVyIGJ5IElIRSBhcyBwdWJsaXNoZWQgICAgYXQgaHR0cDovL3dpa2kuaWhlLm5ldC9pbmRleC5waHA/dGl0bGU9SUhFX0Zvcm1hdF9Db2RlcyAgIGFuZCB3aXRoIGFkZGl0aW9ucyBwdWJsaXNoZWQgbGF0ZXIgYnkgSEw3IGFzIHB1Ymxpc2hlZCBhdCBodHRwczovL2NvbmZsdWVuY2UuaGw3Lm9yZy9kaXNwbGF5L1NEL0Zvcm1hdCtDb2Rlcytmb3IrSUhFK1hEUy4gICBUaGlzIGlzIHRoZSBjb2RlIHNwZWNpZnlpbmcgdGhlIHRlY2huaWNhbCBmb3JtYXQgb2YgdGhlIGRvY3VtZW50LiBBbG9uZyB3aXRoIHRoZSB0eXBlQ29kZSwgICAgaXQgc2hvdWxkIHByb3ZpZGUgc3VmZmljaWVudCBpbmZvcm1hdGlvbiB0byBhbGxvdyBhbnkgcG90ZW50aWFsIGRvY3VtZW50IGNvbnN1bWVyIHRvIGtub3cgICAgaWYgaXQgd2lsbCBiZSBhYmxlIHRvIHByb2Nlc3MgdGhlIGRvY3VtZW50LiBUaGUgY29kZSBzaGFsbCBiZSBzdWZmaWNpZW50bHkgc3BlY2lmaWMgdG8gICAgZW5zdXJlIHByb2Nlc3NpbmcvZGlzcGxheSBieSBpZGVudGlmeWluZyBhIGRvY3VtZW50IGVuY29kaW5nLCBzdHJ1Y3R1cmUgYW5kIHRlbXBsYXRlLiBUaGUgYWN0dWFsIGxpc3Qgb2YgY29kZXMgaGVyZSBpcyBpbmNvbXBsZXRlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGb3JtYXRDb2RlVHlwZSA9IHR5cGVvZiBGb3JtYXRDb2Rlc1trZXlvZiB0eXBlb2YgRm9ybWF0Q29kZXNdO1xyXG4iXX0=