// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-event-type|4.3.0
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export const AuditEventTypeCodes = {
    /**
     * 110100: Audit event: Application Activity has taken place
     */
    ApplicationActivity: "110100",
    /**
     * 110101: Audit event: Audit Log has been used
     */
    AuditLogUsed: "110101",
    /**
     * 110102: Audit event: Storage of DICOM Instances has begun
     */
    BeginTransferringDICOMInstances: "110102",
    /**
     * 110103: Audit event: DICOM Instances have been created, read, updated, or deleted
     */
    DICOMInstancesAccessed: "110103",
    /**
     * 110104: Audit event: Storage of DICOM Instances has been completed
     */
    DICOMInstancesTransferred: "110104",
    /**
     * 110105: Audit event: Entire Study has been deleted
     */
    DICOMStudyDeleted: "110105",
    /**
     * 110106: Audit event: Data has been exported out of the system
     */
    Export: "110106",
    /**
     * 110107: Audit event: Data has been imported into the system
     */
    Import: "110107",
    /**
     * 110108: Audit event: System has joined or left network
     */
    NetworkEntry: "110108",
    /**
     * 110109: Audit event: Order has been created, read, updated or deleted
     */
    OrderRecord: "110109",
    /**
     * 110110: Audit event: Patient Record has been created, read, updated, or deleted
     */
    PatientRecord: "110110",
    /**
     * 110111: Audit event: Procedure Record has been created, read, updated, or deleted
     */
    ProcedureRecord: "110111",
    /**
     * 110112: Audit event: Query has been made
     */
    Query: "110112",
    /**
     * 110113: Audit event: Security Alert has been raised
     */
    SecurityAlert: "110113",
    /**
     * 110114: Audit event: User Authentication has been attempted
     */
    UserAuthentication: "110114",
    /**
     * access: Occurs when an agent causes the system to obtain and open a record entry for inspection or review.
     */
    AccessViewRecordLifecycleEvent: "access",
    /**
     * amend: Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).
     */
    AmendUpdateRecordLifecycleEvent: "amend",
    /**
     * archive: Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.
     */
    ArchiveRecordLifecycleEvent: "archive",
    /**
     * attest: Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.
     */
    AttestRecordLifecycleEvent: "attest",
    /**
     * decrypt: Occurs when an agent causes the system to decode record entry content from a cipher.
     */
    DecryptRecordLifecycleEvent: "decrypt",
    /**
     * deidentify: Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.
     */
    DeIdentifyAnononymizeRecordLifecycleEvent: "deidentify",
    /**
     * deprecate: Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.
     */
    DeprecateRecordLifecycleEvent: "deprecate",
    /**
     * destroy: Occurs when an agent causes the system to permanently erase record entry content from the system.
     */
    DestroyDeleteRecordLifecycleEvent: "destroy",
    /**
     * disclose: Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.
     */
    DiscloseRecordLifecycleEvent: "disclose",
    /**
     * encrypt: Occurs when an agent causes the system to encode record entry content in a cipher.
     */
    EncryptRecordLifecycleEvent: "encrypt",
    /**
     * extract: Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.
     */
    ExtractRecordLifecycleEvent: "extract",
    /**
     * hold: Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    AddLegalHoldRecordLifecycleEvent: "hold",
    /**
     * link: Occurs when an agent causes the system to connect related record entries.
     */
    LinkRecordLifecycleEvent: "link",
    /**
     * merge: Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.
     */
    MergeRecordLifecycleEvent: "merge",
    /**
     * originate: Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    OriginateRetainRecordLifecycleEvent: "originate",
    /**
     * pseudonymize: Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.
     */
    PseudonymizeRecordLifecycleEvent: "pseudonymize",
    /**
     * reactivate: Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.
     */
    ReActivateRecordLifecycleEvent: "reactivate",
    /**
     * receive: Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    ReceiveRetainRecordLifecycleEvent: "receive",
    /**
     * reidentify: Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.
     */
    ReIdentifyRecordLifecycleEvent: "reidentify",
    /**
     * report: Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.
     */
    ReportOutputRecordLifecycleEvent: "report",
    /**
     * rest: Audit Event: Execution of a RESTful operation as defined by FHIR.
     */
    RESTfulOperation: "rest",
    /**
     * restore: Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.
     */
    RestoreRecordLifecycleEvent: "restore",
    /**
     * transform: Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.
     */
    TransformTranslateRecordLifecycleEvent: "transform",
    /**
     * transmit: Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.
     */
    TransmitRecordLifecycleEvent: "transmit",
    /**
     * unhold: Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    RemoveLegalHoldRecordLifecycleEvent: "unhold",
    /**
     * unlink: Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.
     */
    UnlinkRecordLifecycleEvent: "unlink",
    /**
     * unmerge: Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.
     */
    UnmergeRecordLifecycleEvent: "unmerge",
    /**
     * verify: Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.
     */
    VerifyRecordLifecycleEvent: "verify",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRFdmVudFR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQXVkaXRFdmVudFR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxxRUFBcUU7QUFFckU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQzs7T0FFRztJQUNILG1CQUFtQixFQUFFLFFBQVE7SUFDN0I7O09BRUc7SUFDSCxZQUFZLEVBQUUsUUFBUTtJQUN0Qjs7T0FFRztJQUNILCtCQUErQixFQUFFLFFBQVE7SUFDekM7O09BRUc7SUFDSCxzQkFBc0IsRUFBRSxRQUFRO0lBQ2hDOztPQUVHO0lBQ0gseUJBQXlCLEVBQUUsUUFBUTtJQUNuQzs7T0FFRztJQUNILGlCQUFpQixFQUFFLFFBQVE7SUFDM0I7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLFFBQVE7SUFDdEI7O09BRUc7SUFDSCxXQUFXLEVBQUUsUUFBUTtJQUNyQjs7T0FFRztJQUNILGFBQWEsRUFBRSxRQUFRO0lBQ3ZCOztPQUVHO0lBQ0gsZUFBZSxFQUFFLFFBQVE7SUFDekI7O09BRUc7SUFDSCxLQUFLLEVBQUUsUUFBUTtJQUNmOztPQUVHO0lBQ0gsYUFBYSxFQUFFLFFBQVE7SUFDdkI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxRQUFRO0lBQzVCOztPQUVHO0lBQ0gsOEJBQThCLEVBQUUsUUFBUTtJQUN4Qzs7T0FFRztJQUNILCtCQUErQixFQUFFLE9BQU87SUFDeEM7O09BRUc7SUFDSCwyQkFBMkIsRUFBRSxTQUFTO0lBQ3RDOztPQUVHO0lBQ0gsMEJBQTBCLEVBQUUsUUFBUTtJQUNwQzs7T0FFRztJQUNILDJCQUEyQixFQUFFLFNBQVM7SUFDdEM7O09BRUc7SUFDSCx5Q0FBeUMsRUFBRSxZQUFZO0lBQ3ZEOztPQUVHO0lBQ0gsNkJBQTZCLEVBQUUsV0FBVztJQUMxQzs7T0FFRztJQUNILGlDQUFpQyxFQUFFLFNBQVM7SUFDNUM7O09BRUc7SUFDSCw0QkFBNEIsRUFBRSxVQUFVO0lBQ3hDOztPQUVHO0lBQ0gsMkJBQTJCLEVBQUUsU0FBUztJQUN0Qzs7T0FFRztJQUNILDJCQUEyQixFQUFFLFNBQVM7SUFDdEM7O09BRUc7SUFDSCxnQ0FBZ0MsRUFBRSxNQUFNO0lBQ3hDOztPQUVHO0lBQ0gsd0JBQXdCLEVBQUUsTUFBTTtJQUNoQzs7T0FFRztJQUNILHlCQUF5QixFQUFFLE9BQU87SUFDbEM7O09BRUc7SUFDSCxtQ0FBbUMsRUFBRSxXQUFXO0lBQ2hEOztPQUVHO0lBQ0gsZ0NBQWdDLEVBQUUsY0FBYztJQUNoRDs7T0FFRztJQUNILDhCQUE4QixFQUFFLFlBQVk7SUFDNUM7O09BRUc7SUFDSCxpQ0FBaUMsRUFBRSxTQUFTO0lBQzVDOztPQUVHO0lBQ0gsOEJBQThCLEVBQUUsWUFBWTtJQUM1Qzs7T0FFRztJQUNILGdDQUFnQyxFQUFFLFFBQVE7SUFDMUM7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCOztPQUVHO0lBQ0gsMkJBQTJCLEVBQUUsU0FBUztJQUN0Qzs7T0FFRztJQUNILHNDQUFzQyxFQUFFLFdBQVc7SUFDbkQ7O09BRUc7SUFDSCw0QkFBNEIsRUFBRSxVQUFVO0lBQ3hDOztPQUVHO0lBQ0gsbUNBQW1DLEVBQUUsUUFBUTtJQUM3Qzs7T0FFRztJQUNILDBCQUEwQixFQUFFLFFBQVE7SUFDcEM7O09BRUc7SUFDSCwyQkFBMkIsRUFBRSxTQUFTO0lBQ3RDOztPQUVHO0lBQ0gsMEJBQTBCLEVBQUUsUUFBUTtDQUM1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hdWRpdC1ldmVudC10eXBlfDQuMy4wXHJcblxyXG4vKipcclxuICogRXZlbnQgVHlwZXMgZm9yIEF1ZGl0IEV2ZW50cyAtIGRlZmluZWQgYnkgRElDT00gd2l0aCBzb21lIEZISVIgc3BlY2lmaWMgYWRkaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEF1ZGl0RXZlbnRUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogMTEwMTAwOiBBdWRpdCBldmVudDogQXBwbGljYXRpb24gQWN0aXZpdHkgaGFzIHRha2VuIHBsYWNlXHJcbiAgICovXHJcbiAgQXBwbGljYXRpb25BY3Rpdml0eTogXCIxMTAxMDBcIixcclxuICAvKipcclxuICAgKiAxMTAxMDE6IEF1ZGl0IGV2ZW50OiBBdWRpdCBMb2cgaGFzIGJlZW4gdXNlZFxyXG4gICAqL1xyXG4gIEF1ZGl0TG9nVXNlZDogXCIxMTAxMDFcIixcclxuICAvKipcclxuICAgKiAxMTAxMDI6IEF1ZGl0IGV2ZW50OiBTdG9yYWdlIG9mIERJQ09NIEluc3RhbmNlcyBoYXMgYmVndW5cclxuICAgKi9cclxuICBCZWdpblRyYW5zZmVycmluZ0RJQ09NSW5zdGFuY2VzOiBcIjExMDEwMlwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDEwMzogQXVkaXQgZXZlbnQ6IERJQ09NIEluc3RhbmNlcyBoYXZlIGJlZW4gY3JlYXRlZCwgcmVhZCwgdXBkYXRlZCwgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIERJQ09NSW5zdGFuY2VzQWNjZXNzZWQ6IFwiMTEwMTAzXCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTA0OiBBdWRpdCBldmVudDogU3RvcmFnZSBvZiBESUNPTSBJbnN0YW5jZXMgaGFzIGJlZW4gY29tcGxldGVkXHJcbiAgICovXHJcbiAgRElDT01JbnN0YW5jZXNUcmFuc2ZlcnJlZDogXCIxMTAxMDRcIixcclxuICAvKipcclxuICAgKiAxMTAxMDU6IEF1ZGl0IGV2ZW50OiBFbnRpcmUgU3R1ZHkgaGFzIGJlZW4gZGVsZXRlZFxyXG4gICAqL1xyXG4gIERJQ09NU3R1ZHlEZWxldGVkOiBcIjExMDEwNVwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDEwNjogQXVkaXQgZXZlbnQ6IERhdGEgaGFzIGJlZW4gZXhwb3J0ZWQgb3V0IG9mIHRoZSBzeXN0ZW1cclxuICAgKi9cclxuICBFeHBvcnQ6IFwiMTEwMTA2XCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTA3OiBBdWRpdCBldmVudDogRGF0YSBoYXMgYmVlbiBpbXBvcnRlZCBpbnRvIHRoZSBzeXN0ZW1cclxuICAgKi9cclxuICBJbXBvcnQ6IFwiMTEwMTA3XCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTA4OiBBdWRpdCBldmVudDogU3lzdGVtIGhhcyBqb2luZWQgb3IgbGVmdCBuZXR3b3JrXHJcbiAgICovXHJcbiAgTmV0d29ya0VudHJ5OiBcIjExMDEwOFwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDEwOTogQXVkaXQgZXZlbnQ6IE9yZGVyIGhhcyBiZWVuIGNyZWF0ZWQsIHJlYWQsIHVwZGF0ZWQgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIE9yZGVyUmVjb3JkOiBcIjExMDEwOVwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDExMDogQXVkaXQgZXZlbnQ6IFBhdGllbnQgUmVjb3JkIGhhcyBiZWVuIGNyZWF0ZWQsIHJlYWQsIHVwZGF0ZWQsIG9yIGRlbGV0ZWRcclxuICAgKi9cclxuICBQYXRpZW50UmVjb3JkOiBcIjExMDExMFwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDExMTogQXVkaXQgZXZlbnQ6IFByb2NlZHVyZSBSZWNvcmQgaGFzIGJlZW4gY3JlYXRlZCwgcmVhZCwgdXBkYXRlZCwgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIFByb2NlZHVyZVJlY29yZDogXCIxMTAxMTFcIixcclxuICAvKipcclxuICAgKiAxMTAxMTI6IEF1ZGl0IGV2ZW50OiBRdWVyeSBoYXMgYmVlbiBtYWRlXHJcbiAgICovXHJcbiAgUXVlcnk6IFwiMTEwMTEyXCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTEzOiBBdWRpdCBldmVudDogU2VjdXJpdHkgQWxlcnQgaGFzIGJlZW4gcmFpc2VkXHJcbiAgICovXHJcbiAgU2VjdXJpdHlBbGVydDogXCIxMTAxMTNcIixcclxuICAvKipcclxuICAgKiAxMTAxMTQ6IEF1ZGl0IGV2ZW50OiBVc2VyIEF1dGhlbnRpY2F0aW9uIGhhcyBiZWVuIGF0dGVtcHRlZFxyXG4gICAqL1xyXG4gIFVzZXJBdXRoZW50aWNhdGlvbjogXCIxMTAxMTRcIixcclxuICAvKipcclxuICAgKiBhY2Nlc3M6IE9jY3VycyB3aGVuIGFuIGFnZW50IGNhdXNlcyB0aGUgc3lzdGVtIHRvIG9idGFpbiBhbmQgb3BlbiBhIHJlY29yZCBlbnRyeSBmb3IgaW5zcGVjdGlvbiBvciByZXZpZXcuXHJcbiAgICovXHJcbiAgQWNjZXNzVmlld1JlY29yZExpZmVjeWNsZUV2ZW50OiBcImFjY2Vzc1wiLFxyXG4gIC8qKlxyXG4gICAqIGFtZW5kOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBtYWtlcyBhbnkgY2hhbmdlIHRvIHJlY29yZCBlbnRyeSBjb250ZW50IGN1cnJlbnRseSByZXNpZGluZyBpbiBzdG9yYWdlIGNvbnNpZGVyZWQgcGVybWFuZW50IChwZXJzaXN0ZW50KS5cclxuICAgKi9cclxuICBBbWVuZFVwZGF0ZVJlY29yZExpZmVjeWNsZUV2ZW50OiBcImFtZW5kXCIsXHJcbiAgLyoqXHJcbiAgICogYXJjaGl2ZTogT2NjdXJzIHdoZW4gYW4gYWdlbnQgY2F1c2VzIHRoZSBzeXN0ZW0gdG8gY3JlYXRlIGFuZCBtb3ZlIGFyY2hpdmUgYXJ0aWZhY3RzIGNvbnRhaW5pbmcgcmVjb3JkIGVudHJ5IGNvbnRlbnQsIHR5cGljYWxseSB0byBsb25nLXRlcm0gb2ZmbGluZSBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIEFyY2hpdmVSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJhcmNoaXZlXCIsXHJcbiAgLyoqXHJcbiAgICogYXR0ZXN0OiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byBjYXB0dXJlIHRoZSBhZ2VudOKAmXMgZGlnaXRhbCBzaWduYXR1cmUgKG9yIGVxdWl2YWxlbnQgaW5kaWNhdGlvbikgZHVyaW5nIGZvcm1hbCB2YWxpZGF0aW9uIG9mIHJlY29yZCBlbnRyeSBjb250ZW50LlxyXG4gICAqL1xyXG4gIEF0dGVzdFJlY29yZExpZmVjeWNsZUV2ZW50OiBcImF0dGVzdFwiLFxyXG4gIC8qKlxyXG4gICAqIGRlY3J5cHQ6IE9jY3VycyB3aGVuIGFuIGFnZW50IGNhdXNlcyB0aGUgc3lzdGVtIHRvIGRlY29kZSByZWNvcmQgZW50cnkgY29udGVudCBmcm9tIGEgY2lwaGVyLlxyXG4gICAqL1xyXG4gIERlY3J5cHRSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJkZWNyeXB0XCIsXHJcbiAgLyoqXHJcbiAgICogZGVpZGVudGlmeTogT2NjdXJzIHdoZW4gYW4gYWdlbnQgY2F1c2VzIHRoZSBzeXN0ZW0gdG8gc2NydWIgcmVjb3JkIGVudHJ5IGNvbnRlbnQgdG8gcmVkdWNlIHRoZSBhc3NvY2lhdGlvbiBiZXR3ZWVuIGEgc2V0IG9mIGlkZW50aWZ5aW5nIGRhdGEgYW5kIHRoZSBkYXRhIHN1YmplY3QgaW4gYSB3YXkgdGhhdCBtaWdodCBvciBtaWdodCBub3QgYmUgcmV2ZXJzaWJsZS5cclxuICAgKi9cclxuICBEZUlkZW50aWZ5QW5vbm9ueW1pemVSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJkZWlkZW50aWZ5XCIsXHJcbiAgLyoqXHJcbiAgICogZGVwcmVjYXRlOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byB0YWcgcmVjb3JkIGVudHJ5KGllcykgYXMgb2Jzb2xldGUsIGVycm9uZW91cyBvciB1bnRydXN0d29ydGh5LCB0byB3YXJuIGFnYWluc3QgaXRzIGZ1dHVyZSB1c2UuXHJcbiAgICovXHJcbiAgRGVwcmVjYXRlUmVjb3JkTGlmZWN5Y2xlRXZlbnQ6IFwiZGVwcmVjYXRlXCIsXHJcbiAgLyoqXHJcbiAgICogZGVzdHJveTogT2NjdXJzIHdoZW4gYW4gYWdlbnQgY2F1c2VzIHRoZSBzeXN0ZW0gdG8gcGVybWFuZW50bHkgZXJhc2UgcmVjb3JkIGVudHJ5IGNvbnRlbnQgZnJvbSB0aGUgc3lzdGVtLlxyXG4gICAqL1xyXG4gIERlc3Ryb3lEZWxldGVSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJkZXN0cm95XCIsXHJcbiAgLyoqXHJcbiAgICogZGlzY2xvc2U6IE9jY3VycyB3aGVuIGFuIGFnZW50IGNhdXNlcyB0aGUgc3lzdGVtIHRvIHJlbGVhc2UsIHRyYW5zZmVyLCBwcm92aXNpb24gYWNjZXNzIHRvLCBvciBvdGhlcndpc2UgZGl2dWxnZSByZWNvcmQgZW50cnkgY29udGVudC5cclxuICAgKi9cclxuICBEaXNjbG9zZVJlY29yZExpZmVjeWNsZUV2ZW50OiBcImRpc2Nsb3NlXCIsXHJcbiAgLyoqXHJcbiAgICogZW5jcnlwdDogT2NjdXJzIHdoZW4gYW4gYWdlbnQgY2F1c2VzIHRoZSBzeXN0ZW0gdG8gZW5jb2RlIHJlY29yZCBlbnRyeSBjb250ZW50IGluIGEgY2lwaGVyLlxyXG4gICAqL1xyXG4gIEVuY3J5cHRSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJlbmNyeXB0XCIsXHJcbiAgLyoqXHJcbiAgICogZXh0cmFjdDogT2NjdXJzIHdoZW4gYW4gYWdlbnQgY2F1c2VzIHRoZSBzeXN0ZW0gdG8gc2VsZWN0aXZlbHkgcHVsbCBvdXQgYSBzdWJzZXQgb2YgcmVjb3JkIGVudHJ5IGNvbnRlbnQsIGJhc2VkIG9uIGV4cGxpY2l0IGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIEV4dHJhY3RSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJleHRyYWN0XCIsXHJcbiAgLyoqXHJcbiAgICogaG9sZDogT2NjdXJzIHdoZW4gYW4gYWdlbnQgY2F1c2VzIHRoZSBzeXN0ZW0gdG8gdGFnIG9yIG90aGVyd2lzZSBpbmRpY2F0ZSBzcGVjaWFsIGFjY2VzcyBtYW5hZ2VtZW50IGFuZCBzdXNwZW5zaW9uIG9mIHJlY29yZCBlbnRyeSBkZWxldGlvbi9kZXN0cnVjdGlvbiwgaWYgZGVlbWVkIHJlbGV2YW50IHRvIGEgbGF3c3VpdCBvciB3aGljaCBhcmUgcmVhc29uYWJseSBhbnRpY2lwYXRlZCB0byBiZSByZWxldmFudCBvciB0byBmdWxmaWxsIG9yZ2FuaXphdGlvbmFsIHBvbGljeSB1bmRlciB0aGUgbGVnYWwgZG9jdHJpbmUgb2Yg4oCcZHV0eSB0byBwcmVzZXJ2ZeKAnS5cclxuICAgKi9cclxuICBBZGRMZWdhbEhvbGRSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJob2xkXCIsXHJcbiAgLyoqXHJcbiAgICogbGluazogT2NjdXJzIHdoZW4gYW4gYWdlbnQgY2F1c2VzIHRoZSBzeXN0ZW0gdG8gY29ubmVjdCByZWxhdGVkIHJlY29yZCBlbnRyaWVzLlxyXG4gICAqL1xyXG4gIExpbmtSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJsaW5rXCIsXHJcbiAgLyoqXHJcbiAgICogbWVyZ2U6IE9jY3VycyB3aGVuIGFuIGFnZW50IGNhdXNlcyB0aGUgc3lzdGVtIHRvIGNvbWJpbmUgb3Igam9pbiBjb250ZW50IGZyb20gdHdvIG9yIG1vcmUgcmVjb3JkIGVudHJpZXMsIHJlc3VsdGluZyBpbiBhIHNpbmdsZSBsb2dpY2FsIHJlY29yZCBlbnRyeS5cclxuICAgKi9cclxuICBNZXJnZVJlY29yZExpZmVjeWNsZUV2ZW50OiBcIm1lcmdlXCIsXHJcbiAgLyoqXHJcbiAgICogb3JpZ2luYXRlOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0bzogYSkgaW5pdGlhdGUgY2FwdHVyZSBvZiBwb3RlbnRpYWwgcmVjb3JkIGNvbnRlbnQsIGFuZCBiKSBpbmNvcnBvcmF0ZSB0aGF0IGNvbnRlbnQgaW50byB0aGUgc3RvcmFnZSBjb25zaWRlcmVkIGEgcGVybWFuZW50IHBhcnQgb2YgdGhlIGhlYWx0aCByZWNvcmQuXHJcbiAgICovXHJcbiAgT3JpZ2luYXRlUmV0YWluUmVjb3JkTGlmZWN5Y2xlRXZlbnQ6IFwib3JpZ2luYXRlXCIsXHJcbiAgLyoqXHJcbiAgICogcHNldWRvbnltaXplOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byByZW1vdmUgcmVjb3JkIGVudHJ5IGNvbnRlbnQgdG8gcmVkdWNlIHRoZSBhc3NvY2lhdGlvbiBiZXR3ZWVuIGEgc2V0IG9mIGlkZW50aWZ5aW5nIGRhdGEgYW5kIHRoZSBkYXRhIHN1YmplY3QgaW4gYSB3YXkgdGhhdCBtYXkgYmUgcmV2ZXJzaWJsZS5cclxuICAgKi9cclxuICBQc2V1ZG9ueW1pemVSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJwc2V1ZG9ueW1pemVcIixcclxuICAvKipcclxuICAgKiByZWFjdGl2YXRlOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byByZWNyZWF0ZSBvciByZXN0b3JlIGZ1bGwgc3RhdHVzIHRvIHJlY29yZCBlbnRyaWVzIHByZXZpb3VzbHkgZGVsZXRlZCBvciBkZXByZWNhdGVkLlxyXG4gICAqL1xyXG4gIFJlQWN0aXZhdGVSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJyZWFjdGl2YXRlXCIsXHJcbiAgLyoqXHJcbiAgICogcmVjZWl2ZTogT2NjdXJzIHdoZW4gYW4gYWdlbnQgY2F1c2VzIHRoZSBzeXN0ZW0gdG8gYSkgaW5pdGlhdGUgY2FwdHVyZSBvZiBkYXRhIGNvbnRlbnQgZnJvbSBlbHNld2hlcmUsIGFuZCBiKSBpbmNvcnBvcmF0ZSB0aGF0IGNvbnRlbnQgaW50byB0aGUgc3RvcmFnZSBjb25zaWRlcmVkIGEgcGVybWFuZW50IHBhcnQgb2YgdGhlIGhlYWx0aCByZWNvcmQuXHJcbiAgICovXHJcbiAgUmVjZWl2ZVJldGFpblJlY29yZExpZmVjeWNsZUV2ZW50OiBcInJlY2VpdmVcIixcclxuICAvKipcclxuICAgKiByZWlkZW50aWZ5OiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byByZXN0b3JlIGluZm9ybWF0aW9uIHRvIGRhdGEgdGhhdCBhbGxvd3MgaWRlbnRpZmljYXRpb24gb2YgaW5mb3JtYXRpb24gc291cmNlIGFuZC9vciBpbmZvcm1hdGlvbiBzdWJqZWN0LlxyXG4gICAqL1xyXG4gIFJlSWRlbnRpZnlSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJyZWlkZW50aWZ5XCIsXHJcbiAgLyoqXHJcbiAgICogcmVwb3J0OiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byBwcm9kdWNlIGFuZCBkZWxpdmVyIHJlY29yZCBlbnRyeSBjb250ZW50IGluIGEgcGFydGljdWxhciBmb3JtIGFuZCBtYW5uZXIuXHJcbiAgICovXHJcbiAgUmVwb3J0T3V0cHV0UmVjb3JkTGlmZWN5Y2xlRXZlbnQ6IFwicmVwb3J0XCIsXHJcbiAgLyoqXHJcbiAgICogcmVzdDogQXVkaXQgRXZlbnQ6IEV4ZWN1dGlvbiBvZiBhIFJFU1RmdWwgb3BlcmF0aW9uIGFzIGRlZmluZWQgYnkgRkhJUi5cclxuICAgKi9cclxuICBSRVNUZnVsT3BlcmF0aW9uOiBcInJlc3RcIixcclxuICAvKipcclxuICAgKiByZXN0b3JlOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byByZWNyZWF0ZSByZWNvcmQgZW50cmllcyBhbmQgdGhlaXIgY29udGVudCBmcm9tIGEgcHJldmlvdXMgY3JlYXRlZCBhcmNoaXZlIGFydGVmYWN0LlxyXG4gICAqL1xyXG4gIFJlc3RvcmVSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJyZXN0b3JlXCIsXHJcbiAgLyoqXHJcbiAgICogdHJhbnNmb3JtOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byBjaGFuZ2UgdGhlIGZvcm0sIGxhbmd1YWdlIG9yIGNvZGUgc3lzdGVtIHVzZWQgdG8gcmVwcmVzZW50IHJlY29yZCBlbnRyeSBjb250ZW50LlxyXG4gICAqL1xyXG4gIFRyYW5zZm9ybVRyYW5zbGF0ZVJlY29yZExpZmVjeWNsZUV2ZW50OiBcInRyYW5zZm9ybVwiLFxyXG4gIC8qKlxyXG4gICAqIHRyYW5zbWl0OiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byBzZW5kIHJlY29yZCBlbnRyeSBjb250ZW50IGZyb20gb25lIChFSFIvUEhSL290aGVyKSBzeXN0ZW0gdG8gYW5vdGhlci5cclxuICAgKi9cclxuICBUcmFuc21pdFJlY29yZExpZmVjeWNsZUV2ZW50OiBcInRyYW5zbWl0XCIsXHJcbiAgLyoqXHJcbiAgICogdW5ob2xkOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byByZW1vdmUgYSB0YWcgb3Igb3RoZXIgY3VlcyBmb3Igc3BlY2lhbCBhY2Nlc3MgbWFuYWdlbWVudCBoYWQgcmVxdWlyZWQgdG8gZnVsZmlsbCBvcmdhbml6YXRpb25hbCBwb2xpY3kgdW5kZXIgdGhlIGxlZ2FsIGRvY3RyaW5lIG9mIOKAnGR1dHkgdG8gcHJlc2VydmXigJ0uXHJcbiAgICovXHJcbiAgUmVtb3ZlTGVnYWxIb2xkUmVjb3JkTGlmZWN5Y2xlRXZlbnQ6IFwidW5ob2xkXCIsXHJcbiAgLyoqXHJcbiAgICogdW5saW5rOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byBkaXNjb25uZWN0IHR3byBvciBtb3JlIHJlY29yZCBlbnRyaWVzIHByZXZpb3VzbHkgY29ubmVjdGVkLCByZW5kZXJpbmcgdGhlbSBzZXBhcmF0ZSAoZGlzY29ubmVjdGVkKSBhZ2Fpbi5cclxuICAgKi9cclxuICBVbmxpbmtSZWNvcmRMaWZlY3ljbGVFdmVudDogXCJ1bmxpbmtcIixcclxuICAvKipcclxuICAgKiB1bm1lcmdlOiBPY2N1cnMgd2hlbiBhbiBhZ2VudCBjYXVzZXMgdGhlIHN5c3RlbSB0byByZXZlcnNlIGEgcHJldmlvdXMgcmVjb3JkIGVudHJ5IG1lcmdlIG9wZXJhdGlvbiwgcmVuZGVyaW5nIHRoZW0gc2VwYXJhdGUgYWdhaW4uXHJcbiAgICovXHJcbiAgVW5tZXJnZVJlY29yZExpZmVjeWNsZUV2ZW50OiBcInVubWVyZ2VcIixcclxuICAvKipcclxuICAgKiB2ZXJpZnk6IE9jY3VycyB3aGVuIGFuIGFnZW50IGNhdXNlcyB0aGUgc3lzdGVtIHRvIGNvbmZpcm0gY29tcGxpYW5jZSBvZiBkYXRhIG9yIGRhdGEgb2JqZWN0cyB3aXRoIHJlZ3VsYXRpb25zLCByZXF1aXJlbWVudHMsIHNwZWNpZmljYXRpb25zLCBvciBvdGhlciBpbXBvc2VkIGNvbmRpdGlvbnMgYmFzZWQgb24gb3JnYW5pemF0aW9uYWwgcG9saWN5LlxyXG4gICAqL1xyXG4gIFZlcmlmeVJlY29yZExpZmVjeWNsZUV2ZW50OiBcInZlcmlmeVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIEV2ZW50IFR5cGVzIGZvciBBdWRpdCBFdmVudHMgLSBkZWZpbmVkIGJ5IERJQ09NIHdpdGggc29tZSBGSElSIHNwZWNpZmljIGFkZGl0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEF1ZGl0RXZlbnRUeXBlQ29kZVR5cGUgPSB0eXBlb2YgQXVkaXRFdmVudFR5cGVDb2Rlc1trZXlvZiB0eXBlb2YgQXVkaXRFdmVudFR5cGVDb2Rlc107XHJcbiJdfQ==