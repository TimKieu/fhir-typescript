// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/object-role|3.0.2
/**
 * Code representing the role the entity played in the audit event
 */
export const ObjectRoleCodes = {
    /**
     * 1: This object is the patient that is the subject of care related to this event.  It is identifiable by patient ID or equivalent.  The patient may be either human or animal.
     */
    Patient: "1",
    /**
     * 10: Insurance company, or any other organization who accepts responsibility for paying for the healthcare event.
     */
    Guarantor: "10",
    /**
     * 11: A person or active system object involved in the event with a security role.
     */
    SecurityUserEntity: "11",
    /**
     * 12: A person or system object involved in the event with the authority to modify security roles of other objects.
     */
    SecurityUserGroup: "12",
    /**
     * 13: A passive object, such as a role table, that is relevant to the event.
     */
    SecurityResource: "13",
    /**
     * 14: (deprecated)  Relevant to certain RBAC security methodologies.
     */
    SecurityGranularityDefinition: "14",
    /**
     * 15: Any person or organization responsible for providing care.  This encompasses all forms of care, licensed or otherwise, and all sorts of teams and care groups. Note the distinction between practitioner and the doctor that actually provided the care to the patient.
     */
    Practitioner: "15",
    /**
     * 16: The source or destination for data transfer, when it does not match some other role.
     */
    DataDestination: "16",
    /**
     * 17: A source or destination for data transfer that acts as an archive, database, or similar role.
     */
    DataRepository: "17",
    /**
     * 18: An object that holds schedule information.  This could be an appointment book, availability information, etc.
     */
    Schedule: "18",
    /**
     * 19: An organization or person that is the recipient of services.  This could be an organization that is buying services for a patient, or a person that is buying services for an animal.
     */
    Customer: "19",
    /**
     * 2: This is a location identified as related to the event.  This is usually the location where the event took place.  Note that for shipping, the usual events are arrival at a location or departure from a location.
     */
    Location: "2",
    /**
     * 20: An order, task, work item, procedure step, or other description of work to be performed; e.g. a particular instance of an MPPS.
     */
    Job: "20",
    /**
     * 21: A list of jobs or a system that provides lists of jobs; e.g. an MWL SCP.
     */
    JobStream: "21",
    /**
     * 22: (Deprecated)
     */
    Table: "22",
    /**
     * 23: An object that specifies or controls the routing or delivery of items.  For example, a distribution list is the routing criteria for mail.  The items delivered may be documents, jobs, or other objects.
     */
    RoutingCriteria: "23",
    /**
     * 24: The contents of a query.  This is used to capture the contents of any kind of query.  For security surveillance purposes knowing the queries being made is very important.
     */
    Query: "24",
    /**
     * 3: This object is any kind of persistent document created as a result of the event.  This could be a paper report, film, electronic report, DICOM Study, etc.  Issues related to medical records life cycle management are conveyed elsewhere.
     */
    Report: "3",
    /**
     * 4: A logical object related to a health record event.  This is any healthcare  specific resource (object) not restricted to FHIR defined Resources.
     */
    DomainResource: "4",
    /**
     * 5: This is any configurable file used to control creation of documents.  Examples include the objects maintained by the HL7 Master File transactions, Value Sets, etc.
     */
    MasterFile: "5",
    /**
     * 6: A human participant not otherwise identified by some other category.
     */
    User: "6",
    /**
     * 7: (deprecated)
     */
    List: "7",
    /**
     * 8: Typically a licensed person who is providing or performing care related to the event, generally a physician.   The key distinction between doctor and practitioner is with regards to their role, not the licensing.  The doctor is the human who actually performed the work.  The practitioner is the human or organization that is responsible for the work.
     */
    Doctor: "8",
    /**
     * 9: A person or system that is being notified as part of the event.  This is relevant in situations where automated systems provide notifications to other parties when an event took place.
     */
    Subscriber: "9",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0Um9sZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9PYmplY3RSb2xlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsZ0VBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLEdBQUc7SUFDWjs7T0FFRztJQUNILFNBQVMsRUFBRSxJQUFJO0lBQ2Y7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsSUFBSTtJQUN2Qjs7T0FFRztJQUNILGdCQUFnQixFQUFFLElBQUk7SUFDdEI7O09BRUc7SUFDSCw2QkFBNkIsRUFBRSxJQUFJO0lBQ25DOztPQUVHO0lBQ0gsWUFBWSxFQUFFLElBQUk7SUFDbEI7O09BRUc7SUFDSCxlQUFlLEVBQUUsSUFBSTtJQUNyQjs7T0FFRztJQUNILGNBQWMsRUFBRSxJQUFJO0lBQ3BCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLElBQUk7SUFDZDs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJO0lBQ2Q7O09BRUc7SUFDSCxRQUFRLEVBQUUsR0FBRztJQUNiOztPQUVHO0lBQ0gsR0FBRyxFQUFFLElBQUk7SUFDVDs7T0FFRztJQUNILFNBQVMsRUFBRSxJQUFJO0lBQ2Y7O09BRUc7SUFDSCxLQUFLLEVBQUUsSUFBSTtJQUNYOztPQUVHO0lBQ0gsZUFBZSxFQUFFLElBQUk7SUFDckI7O09BRUc7SUFDSCxLQUFLLEVBQUUsSUFBSTtJQUNYOztPQUVHO0lBQ0gsTUFBTSxFQUFFLEdBQUc7SUFDWDs7T0FFRztJQUNILGNBQWMsRUFBRSxHQUFHO0lBQ25COztPQUVHO0lBQ0gsVUFBVSxFQUFFLEdBQUc7SUFDZjs7T0FFRztJQUNILElBQUksRUFBRSxHQUFHO0lBQ1Q7O09BRUc7SUFDSCxJQUFJLEVBQUUsR0FBRztJQUNUOztPQUVHO0lBQ0gsTUFBTSxFQUFFLEdBQUc7SUFDWDs7T0FFRztJQUNILFVBQVUsRUFBRSxHQUFHO0NBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9vYmplY3Qtcm9sZXwzLjAuMlxyXG5cclxuLyoqXHJcbiAqIENvZGUgcmVwcmVzZW50aW5nIHRoZSByb2xlIHRoZSBlbnRpdHkgcGxheWVkIGluIHRoZSBhdWRpdCBldmVudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9iamVjdFJvbGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiAxOiBUaGlzIG9iamVjdCBpcyB0aGUgcGF0aWVudCB0aGF0IGlzIHRoZSBzdWJqZWN0IG9mIGNhcmUgcmVsYXRlZCB0byB0aGlzIGV2ZW50LiAgSXQgaXMgaWRlbnRpZmlhYmxlIGJ5IHBhdGllbnQgSUQgb3IgZXF1aXZhbGVudC4gIFRoZSBwYXRpZW50IG1heSBiZSBlaXRoZXIgaHVtYW4gb3IgYW5pbWFsLlxyXG4gICAqL1xyXG4gIFBhdGllbnQ6IFwiMVwiLFxyXG4gIC8qKlxyXG4gICAqIDEwOiBJbnN1cmFuY2UgY29tcGFueSwgb3IgYW55IG90aGVyIG9yZ2FuaXphdGlvbiB3aG8gYWNjZXB0cyByZXNwb25zaWJpbGl0eSBmb3IgcGF5aW5nIGZvciB0aGUgaGVhbHRoY2FyZSBldmVudC5cclxuICAgKi9cclxuICBHdWFyYW50b3I6IFwiMTBcIixcclxuICAvKipcclxuICAgKiAxMTogQSBwZXJzb24gb3IgYWN0aXZlIHN5c3RlbSBvYmplY3QgaW52b2x2ZWQgaW4gdGhlIGV2ZW50IHdpdGggYSBzZWN1cml0eSByb2xlLlxyXG4gICAqL1xyXG4gIFNlY3VyaXR5VXNlckVudGl0eTogXCIxMVwiLFxyXG4gIC8qKlxyXG4gICAqIDEyOiBBIHBlcnNvbiBvciBzeXN0ZW0gb2JqZWN0IGludm9sdmVkIGluIHRoZSBldmVudCB3aXRoIHRoZSBhdXRob3JpdHkgdG8gbW9kaWZ5IHNlY3VyaXR5IHJvbGVzIG9mIG90aGVyIG9iamVjdHMuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlVc2VyR3JvdXA6IFwiMTJcIixcclxuICAvKipcclxuICAgKiAxMzogQSBwYXNzaXZlIG9iamVjdCwgc3VjaCBhcyBhIHJvbGUgdGFibGUsIHRoYXQgaXMgcmVsZXZhbnQgdG8gdGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIFNlY3VyaXR5UmVzb3VyY2U6IFwiMTNcIixcclxuICAvKipcclxuICAgKiAxNDogKGRlcHJlY2F0ZWQpICBSZWxldmFudCB0byBjZXJ0YWluIFJCQUMgc2VjdXJpdHkgbWV0aG9kb2xvZ2llcy5cclxuICAgKi9cclxuICBTZWN1cml0eUdyYW51bGFyaXR5RGVmaW5pdGlvbjogXCIxNFwiLFxyXG4gIC8qKlxyXG4gICAqIDE1OiBBbnkgcGVyc29uIG9yIG9yZ2FuaXphdGlvbiByZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIGNhcmUuICBUaGlzIGVuY29tcGFzc2VzIGFsbCBmb3JtcyBvZiBjYXJlLCBsaWNlbnNlZCBvciBvdGhlcndpc2UsIGFuZCBhbGwgc29ydHMgb2YgdGVhbXMgYW5kIGNhcmUgZ3JvdXBzLiBOb3RlIHRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIHByYWN0aXRpb25lciBhbmQgdGhlIGRvY3RvciB0aGF0IGFjdHVhbGx5IHByb3ZpZGVkIHRoZSBjYXJlIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIFByYWN0aXRpb25lcjogXCIxNVwiLFxyXG4gIC8qKlxyXG4gICAqIDE2OiBUaGUgc291cmNlIG9yIGRlc3RpbmF0aW9uIGZvciBkYXRhIHRyYW5zZmVyLCB3aGVuIGl0IGRvZXMgbm90IG1hdGNoIHNvbWUgb3RoZXIgcm9sZS5cclxuICAgKi9cclxuICBEYXRhRGVzdGluYXRpb246IFwiMTZcIixcclxuICAvKipcclxuICAgKiAxNzogQSBzb3VyY2Ugb3IgZGVzdGluYXRpb24gZm9yIGRhdGEgdHJhbnNmZXIgdGhhdCBhY3RzIGFzIGFuIGFyY2hpdmUsIGRhdGFiYXNlLCBvciBzaW1pbGFyIHJvbGUuXHJcbiAgICovXHJcbiAgRGF0YVJlcG9zaXRvcnk6IFwiMTdcIixcclxuICAvKipcclxuICAgKiAxODogQW4gb2JqZWN0IHRoYXQgaG9sZHMgc2NoZWR1bGUgaW5mb3JtYXRpb24uICBUaGlzIGNvdWxkIGJlIGFuIGFwcG9pbnRtZW50IGJvb2ssIGF2YWlsYWJpbGl0eSBpbmZvcm1hdGlvbiwgZXRjLlxyXG4gICAqL1xyXG4gIFNjaGVkdWxlOiBcIjE4XCIsXHJcbiAgLyoqXHJcbiAgICogMTk6IEFuIG9yZ2FuaXphdGlvbiBvciBwZXJzb24gdGhhdCBpcyB0aGUgcmVjaXBpZW50IG9mIHNlcnZpY2VzLiAgVGhpcyBjb3VsZCBiZSBhbiBvcmdhbml6YXRpb24gdGhhdCBpcyBidXlpbmcgc2VydmljZXMgZm9yIGEgcGF0aWVudCwgb3IgYSBwZXJzb24gdGhhdCBpcyBidXlpbmcgc2VydmljZXMgZm9yIGFuIGFuaW1hbC5cclxuICAgKi9cclxuICBDdXN0b21lcjogXCIxOVwiLFxyXG4gIC8qKlxyXG4gICAqIDI6IFRoaXMgaXMgYSBsb2NhdGlvbiBpZGVudGlmaWVkIGFzIHJlbGF0ZWQgdG8gdGhlIGV2ZW50LiAgVGhpcyBpcyB1c3VhbGx5IHRoZSBsb2NhdGlvbiB3aGVyZSB0aGUgZXZlbnQgdG9vayBwbGFjZS4gIE5vdGUgdGhhdCBmb3Igc2hpcHBpbmcsIHRoZSB1c3VhbCBldmVudHMgYXJlIGFycml2YWwgYXQgYSBsb2NhdGlvbiBvciBkZXBhcnR1cmUgZnJvbSBhIGxvY2F0aW9uLlxyXG4gICAqL1xyXG4gIExvY2F0aW9uOiBcIjJcIixcclxuICAvKipcclxuICAgKiAyMDogQW4gb3JkZXIsIHRhc2ssIHdvcmsgaXRlbSwgcHJvY2VkdXJlIHN0ZXAsIG9yIG90aGVyIGRlc2NyaXB0aW9uIG9mIHdvcmsgdG8gYmUgcGVyZm9ybWVkOyBlLmcuIGEgcGFydGljdWxhciBpbnN0YW5jZSBvZiBhbiBNUFBTLlxyXG4gICAqL1xyXG4gIEpvYjogXCIyMFwiLFxyXG4gIC8qKlxyXG4gICAqIDIxOiBBIGxpc3Qgb2Ygam9icyBvciBhIHN5c3RlbSB0aGF0IHByb3ZpZGVzIGxpc3RzIG9mIGpvYnM7IGUuZy4gYW4gTVdMIFNDUC5cclxuICAgKi9cclxuICBKb2JTdHJlYW06IFwiMjFcIixcclxuICAvKipcclxuICAgKiAyMjogKERlcHJlY2F0ZWQpXHJcbiAgICovXHJcbiAgVGFibGU6IFwiMjJcIixcclxuICAvKipcclxuICAgKiAyMzogQW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIG9yIGNvbnRyb2xzIHRoZSByb3V0aW5nIG9yIGRlbGl2ZXJ5IG9mIGl0ZW1zLiAgRm9yIGV4YW1wbGUsIGEgZGlzdHJpYnV0aW9uIGxpc3QgaXMgdGhlIHJvdXRpbmcgY3JpdGVyaWEgZm9yIG1haWwuICBUaGUgaXRlbXMgZGVsaXZlcmVkIG1heSBiZSBkb2N1bWVudHMsIGpvYnMsIG9yIG90aGVyIG9iamVjdHMuXHJcbiAgICovXHJcbiAgUm91dGluZ0NyaXRlcmlhOiBcIjIzXCIsXHJcbiAgLyoqXHJcbiAgICogMjQ6IFRoZSBjb250ZW50cyBvZiBhIHF1ZXJ5LiAgVGhpcyBpcyB1c2VkIHRvIGNhcHR1cmUgdGhlIGNvbnRlbnRzIG9mIGFueSBraW5kIG9mIHF1ZXJ5LiAgRm9yIHNlY3VyaXR5IHN1cnZlaWxsYW5jZSBwdXJwb3NlcyBrbm93aW5nIHRoZSBxdWVyaWVzIGJlaW5nIG1hZGUgaXMgdmVyeSBpbXBvcnRhbnQuXHJcbiAgICovXHJcbiAgUXVlcnk6IFwiMjRcIixcclxuICAvKipcclxuICAgKiAzOiBUaGlzIG9iamVjdCBpcyBhbnkga2luZCBvZiBwZXJzaXN0ZW50IGRvY3VtZW50IGNyZWF0ZWQgYXMgYSByZXN1bHQgb2YgdGhlIGV2ZW50LiAgVGhpcyBjb3VsZCBiZSBhIHBhcGVyIHJlcG9ydCwgZmlsbSwgZWxlY3Ryb25pYyByZXBvcnQsIERJQ09NIFN0dWR5LCBldGMuICBJc3N1ZXMgcmVsYXRlZCB0byBtZWRpY2FsIHJlY29yZHMgbGlmZSBjeWNsZSBtYW5hZ2VtZW50IGFyZSBjb252ZXllZCBlbHNld2hlcmUuXHJcbiAgICovXHJcbiAgUmVwb3J0OiBcIjNcIixcclxuICAvKipcclxuICAgKiA0OiBBIGxvZ2ljYWwgb2JqZWN0IHJlbGF0ZWQgdG8gYSBoZWFsdGggcmVjb3JkIGV2ZW50LiAgVGhpcyBpcyBhbnkgaGVhbHRoY2FyZSAgc3BlY2lmaWMgcmVzb3VyY2UgKG9iamVjdCkgbm90IHJlc3RyaWN0ZWQgdG8gRkhJUiBkZWZpbmVkIFJlc291cmNlcy5cclxuICAgKi9cclxuICBEb21haW5SZXNvdXJjZTogXCI0XCIsXHJcbiAgLyoqXHJcbiAgICogNTogVGhpcyBpcyBhbnkgY29uZmlndXJhYmxlIGZpbGUgdXNlZCB0byBjb250cm9sIGNyZWF0aW9uIG9mIGRvY3VtZW50cy4gIEV4YW1wbGVzIGluY2x1ZGUgdGhlIG9iamVjdHMgbWFpbnRhaW5lZCBieSB0aGUgSEw3IE1hc3RlciBGaWxlIHRyYW5zYWN0aW9ucywgVmFsdWUgU2V0cywgZXRjLlxyXG4gICAqL1xyXG4gIE1hc3RlckZpbGU6IFwiNVwiLFxyXG4gIC8qKlxyXG4gICAqIDY6IEEgaHVtYW4gcGFydGljaXBhbnQgbm90IG90aGVyd2lzZSBpZGVudGlmaWVkIGJ5IHNvbWUgb3RoZXIgY2F0ZWdvcnkuXHJcbiAgICovXHJcbiAgVXNlcjogXCI2XCIsXHJcbiAgLyoqXHJcbiAgICogNzogKGRlcHJlY2F0ZWQpXHJcbiAgICovXHJcbiAgTGlzdDogXCI3XCIsXHJcbiAgLyoqXHJcbiAgICogODogVHlwaWNhbGx5IGEgbGljZW5zZWQgcGVyc29uIHdobyBpcyBwcm92aWRpbmcgb3IgcGVyZm9ybWluZyBjYXJlIHJlbGF0ZWQgdG8gdGhlIGV2ZW50LCBnZW5lcmFsbHkgYSBwaHlzaWNpYW4uICAgVGhlIGtleSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGRvY3RvciBhbmQgcHJhY3RpdGlvbmVyIGlzIHdpdGggcmVnYXJkcyB0byB0aGVpciByb2xlLCBub3QgdGhlIGxpY2Vuc2luZy4gIFRoZSBkb2N0b3IgaXMgdGhlIGh1bWFuIHdobyBhY3R1YWxseSBwZXJmb3JtZWQgdGhlIHdvcmsuICBUaGUgcHJhY3RpdGlvbmVyIGlzIHRoZSBodW1hbiBvciBvcmdhbml6YXRpb24gdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHdvcmsuXHJcbiAgICovXHJcbiAgRG9jdG9yOiBcIjhcIixcclxuICAvKipcclxuICAgKiA5OiBBIHBlcnNvbiBvciBzeXN0ZW0gdGhhdCBpcyBiZWluZyBub3RpZmllZCBhcyBwYXJ0IG9mIHRoZSBldmVudC4gIFRoaXMgaXMgcmVsZXZhbnQgaW4gc2l0dWF0aW9ucyB3aGVyZSBhdXRvbWF0ZWQgc3lzdGVtcyBwcm92aWRlIG5vdGlmaWNhdGlvbnMgdG8gb3RoZXIgcGFydGllcyB3aGVuIGFuIGV2ZW50IHRvb2sgcGxhY2UuXHJcbiAgICovXHJcbiAgU3Vic2NyaWJlcjogXCI5XCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQ29kZSByZXByZXNlbnRpbmcgdGhlIHJvbGUgdGhlIGVudGl0eSBwbGF5ZWQgaW4gdGhlIGF1ZGl0IGV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBPYmplY3RSb2xlQ29kZVR5cGUgPSB0eXBlb2YgT2JqZWN0Um9sZUNvZGVzW2tleW9mIHR5cGVvZiBPYmplY3RSb2xlQ29kZXNdO1xyXG4iXX0=