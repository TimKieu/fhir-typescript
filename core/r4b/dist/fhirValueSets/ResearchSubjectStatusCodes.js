// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-subject-status|4.3.0
/**
 * Indicates the progression of a study subject through a study.
 */
export const ResearchSubjectStatusCodes = {
    /**
     * candidate: An identified person that can be considered for inclusion in a study.
     */
    Candidate: "candidate",
    /**
     * eligible: A person that has met the eligibility criteria for inclusion in a study.
     */
    Eligible: "eligible",
    /**
     * follow-up: A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.
     */
    FollowUp: "follow-up",
    /**
     * ineligible: A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or
     * is ineligible for the study.
     */
    Ineligible: "ineligible",
    /**
     * not-registered: A person for whom registration was not completed.
     */
    NotRegistered: "not-registered",
    /**
     * off-study: A person that has ended their participation on a study either because their treatment/observation is complete or through not
     * responding, withdrawal, non-compliance and/or adverse event.
     */
    OffStudy: "off-study",
    /**
     * on-study: A person that is enrolled or registered on a study.
     */
    OnStudy: "on-study",
    /**
     * on-study-intervention: The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.
     */
    OnStudyIntervention: "on-study-intervention",
    /**
     * on-study-observation: The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".
     */
    OnStudyObservation: "on-study-observation",
    /**
     * pending-on-study: A person is pre-registered for a study.
     */
    PendingOnStudy: "pending-on-study",
    /**
     * potential-candidate: A person that is potentially eligible for participation in the study.
     */
    PotentialCandidate: "potential-candidate",
    /**
     * screening: A person who is being evaluated for eligibility for a study.
     */
    Screening: "screening",
    /**
     * withdrawn: The person has withdrawn their participation in the study before registration.
     */
    Withdrawn: "withdrawn",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzZWFyY2hTdWJqZWN0U3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1Jlc2VhcmNoU3ViamVjdFN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFFBQVEsRUFBRSxXQUFXO0lBQ3JCOzs7T0FHRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQjs7O09BR0c7SUFDSCxRQUFRLEVBQUUsV0FBVztJQUNyQjs7T0FFRztJQUNILE9BQU8sRUFBRSxVQUFVO0lBQ25COztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsdUJBQXVCO0lBQzVDOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsc0JBQXNCO0lBQzFDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILGtCQUFrQixFQUFFLHFCQUFxQjtJQUN6Qzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7Q0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXNlYXJjaC1zdWJqZWN0LXN0YXR1c3w0LjMuMFxyXG5cclxuLyoqXHJcbiAqIEluZGljYXRlcyB0aGUgcHJvZ3Jlc3Npb24gb2YgYSBzdHVkeSBzdWJqZWN0IHRocm91Z2ggYSBzdHVkeS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBSZXNlYXJjaFN1YmplY3RTdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBjYW5kaWRhdGU6IEFuIGlkZW50aWZpZWQgcGVyc29uIHRoYXQgY2FuIGJlIGNvbnNpZGVyZWQgZm9yIGluY2x1c2lvbiBpbiBhIHN0dWR5LlxyXG4gICAqL1xyXG4gIENhbmRpZGF0ZTogXCJjYW5kaWRhdGVcIixcclxuICAvKipcclxuICAgKiBlbGlnaWJsZTogQSBwZXJzb24gdGhhdCBoYXMgbWV0IHRoZSBlbGlnaWJpbGl0eSBjcml0ZXJpYSBmb3IgaW5jbHVzaW9uIGluIGEgc3R1ZHkuXHJcbiAgICovXHJcbiAgRWxpZ2libGU6IFwiZWxpZ2libGVcIixcclxuICAvKipcclxuICAgKiBmb2xsb3ctdXA6IEEgcGVyc29uIGlzIG5vIGxvbmdlciByZWNlaXZpbmcgc3R1ZHkgaW50ZXJ2ZW50aW9uIGFuZC9vciBiZWluZyBldmFsdWF0ZWQgd2l0aCB0ZXN0cyBhbmQgcHJvY2VkdXJlcyBhY2NvcmRpbmcgdG8gdGhlIHByb3RvY29sLCBidXQgdGhleSBhcmUgYmVpbmcgbW9uaXRvcmVkIG9uIGEgcHJvdG9jb2wtcHJlc2NyaWJlZCBzY2hlZHVsZS5cclxuICAgKi9cclxuICBGb2xsb3dVcDogXCJmb2xsb3ctdXBcIixcclxuICAvKipcclxuICAgKiBpbmVsaWdpYmxlOiBBIHBlcnNvbiB3aG8gZGlkIG5vdCBtZWV0IG9uZSBvciBtb3JlIGNyaXRlcmlhIHJlcXVpcmVkIGZvciBwYXJ0aWNpcGF0aW9uIGluIGEgc3R1ZHkgaXMgY29uc2lkZXJlZCB0byBoYXZlIGZhaWxlZCBzY3JlZW5pbmcgb3JcclxuICAgKiBpcyBpbmVsaWdpYmxlIGZvciB0aGUgc3R1ZHkuXHJcbiAgICovXHJcbiAgSW5lbGlnaWJsZTogXCJpbmVsaWdpYmxlXCIsXHJcbiAgLyoqXHJcbiAgICogbm90LXJlZ2lzdGVyZWQ6IEEgcGVyc29uIGZvciB3aG9tIHJlZ2lzdHJhdGlvbiB3YXMgbm90IGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBOb3RSZWdpc3RlcmVkOiBcIm5vdC1yZWdpc3RlcmVkXCIsXHJcbiAgLyoqXHJcbiAgICogb2ZmLXN0dWR5OiBBIHBlcnNvbiB0aGF0IGhhcyBlbmRlZCB0aGVpciBwYXJ0aWNpcGF0aW9uIG9uIGEgc3R1ZHkgZWl0aGVyIGJlY2F1c2UgdGhlaXIgdHJlYXRtZW50L29ic2VydmF0aW9uIGlzIGNvbXBsZXRlIG9yIHRocm91Z2ggbm90XHJcbiAgICogcmVzcG9uZGluZywgd2l0aGRyYXdhbCwgbm9uLWNvbXBsaWFuY2UgYW5kL29yIGFkdmVyc2UgZXZlbnQuXHJcbiAgICovXHJcbiAgT2ZmU3R1ZHk6IFwib2ZmLXN0dWR5XCIsXHJcbiAgLyoqXHJcbiAgICogb24tc3R1ZHk6IEEgcGVyc29uIHRoYXQgaXMgZW5yb2xsZWQgb3IgcmVnaXN0ZXJlZCBvbiBhIHN0dWR5LlxyXG4gICAqL1xyXG4gIE9uU3R1ZHk6IFwib24tc3R1ZHlcIixcclxuICAvKipcclxuICAgKiBvbi1zdHVkeS1pbnRlcnZlbnRpb246IFRoZSBwZXJzb24gaXMgcmVjZWl2aW5nIHRoZSB0cmVhdG1lbnQgb3IgcGFydGljaXBhdGluZyBpbiBhbiBhY3Rpdml0eSAoZS5nLiB5b2dhLCBkaWV0LCBldGMuKSB0aGF0IHRoZSBzdHVkeSBpcyBldmFsdWF0aW5nLlxyXG4gICAqL1xyXG4gIE9uU3R1ZHlJbnRlcnZlbnRpb246IFwib24tc3R1ZHktaW50ZXJ2ZW50aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogb24tc3R1ZHktb2JzZXJ2YXRpb246IFRoZSBzdWJqZWN0IGlzIGJlaW5nIGV2YWx1YXRlZCB2aWEgdGVzdHMgYW5kIGFzc2Vzc21lbnRzIGFjY29yZGluZyB0byB0aGUgc3R1ZHkgY2FsZW5kYXIsIGJ1dCBpcyBub3QgcmVjZWl2aW5nIGFueSBpbnRlcnZlbnRpb24uIE5vdGUgdGhhdCB0aGlzIHN0YXRlIGlzIHN0dWR5LWRlcGVuZGVudCBhbmQgbWlnaHQgbm90IGV4aXN0IGluIGFsbCBzdHVkaWVzLiAgQSBzeW5vbnltIGZvciB0aGlzIGlzIFwic2hvcnQtdGVybSBmb2xsb3ctdXBcIi5cclxuICAgKi9cclxuICBPblN0dWR5T2JzZXJ2YXRpb246IFwib24tc3R1ZHktb2JzZXJ2YXRpb25cIixcclxuICAvKipcclxuICAgKiBwZW5kaW5nLW9uLXN0dWR5OiBBIHBlcnNvbiBpcyBwcmUtcmVnaXN0ZXJlZCBmb3IgYSBzdHVkeS5cclxuICAgKi9cclxuICBQZW5kaW5nT25TdHVkeTogXCJwZW5kaW5nLW9uLXN0dWR5XCIsXHJcbiAgLyoqXHJcbiAgICogcG90ZW50aWFsLWNhbmRpZGF0ZTogQSBwZXJzb24gdGhhdCBpcyBwb3RlbnRpYWxseSBlbGlnaWJsZSBmb3IgcGFydGljaXBhdGlvbiBpbiB0aGUgc3R1ZHkuXHJcbiAgICovXHJcbiAgUG90ZW50aWFsQ2FuZGlkYXRlOiBcInBvdGVudGlhbC1jYW5kaWRhdGVcIixcclxuICAvKipcclxuICAgKiBzY3JlZW5pbmc6IEEgcGVyc29uIHdobyBpcyBiZWluZyBldmFsdWF0ZWQgZm9yIGVsaWdpYmlsaXR5IGZvciBhIHN0dWR5LlxyXG4gICAqL1xyXG4gIFNjcmVlbmluZzogXCJzY3JlZW5pbmdcIixcclxuICAvKipcclxuICAgKiB3aXRoZHJhd246IFRoZSBwZXJzb24gaGFzIHdpdGhkcmF3biB0aGVpciBwYXJ0aWNpcGF0aW9uIGluIHRoZSBzdHVkeSBiZWZvcmUgcmVnaXN0cmF0aW9uLlxyXG4gICAqL1xyXG4gIFdpdGhkcmF3bjogXCJ3aXRoZHJhd25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0ZXMgdGhlIHByb2dyZXNzaW9uIG9mIGEgc3R1ZHkgc3ViamVjdCB0aHJvdWdoIGEgc3R1ZHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNlYXJjaFN1YmplY3RTdGF0dXNDb2RlVHlwZSA9IHR5cGVvZiBSZXNlYXJjaFN1YmplY3RTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgUmVzZWFyY2hTdWJqZWN0U3RhdHVzQ29kZXNdO1xyXG4iXX0=