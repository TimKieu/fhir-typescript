// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/object-role|4.3.0
/**
 * Code representing the role the entity played in the audit event.
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
     * 22: (Deprecated).
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
     * 7: (deprecated).
     */
    List: "7",
    /**
     * 8: Typically, a licensed person who is providing or performing care related to the event, generally a physician.   The key distinction between doctor and practitioner is with regards to their role, not the licensing.  The doctor is the human who actually performed the work.  The practitioner is the human or organization that is responsible for the work.
     */
    Doctor: "8",
    /**
     * 9: A person or system that is being notified as part of the event.  This is relevant in situations where automated systems provide notifications to other parties when an event took place.
     */
    Subscriber: "9",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0Um9sZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9PYmplY3RSb2xlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsZ0VBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLEdBQUc7SUFDWjs7T0FFRztJQUNILFNBQVMsRUFBRSxJQUFJO0lBQ2Y7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsSUFBSTtJQUN2Qjs7T0FFRztJQUNILGdCQUFnQixFQUFFLElBQUk7SUFDdEI7O09BRUc7SUFDSCw2QkFBNkIsRUFBRSxJQUFJO0lBQ25DOztPQUVHO0lBQ0gsWUFBWSxFQUFFLElBQUk7SUFDbEI7O09BRUc7SUFDSCxlQUFlLEVBQUUsSUFBSTtJQUNyQjs7T0FFRztJQUNILGNBQWMsRUFBRSxJQUFJO0lBQ3BCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLElBQUk7SUFDZDs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJO0lBQ2Q7O09BRUc7SUFDSCxRQUFRLEVBQUUsR0FBRztJQUNiOztPQUVHO0lBQ0gsR0FBRyxFQUFFLElBQUk7SUFDVDs7T0FFRztJQUNILFNBQVMsRUFBRSxJQUFJO0lBQ2Y7O09BRUc7SUFDSCxLQUFLLEVBQUUsSUFBSTtJQUNYOztPQUVHO0lBQ0gsZUFBZSxFQUFFLElBQUk7SUFDckI7O09BRUc7SUFDSCxLQUFLLEVBQUUsSUFBSTtJQUNYOztPQUVHO0lBQ0gsTUFBTSxFQUFFLEdBQUc7SUFDWDs7T0FFRztJQUNILGNBQWMsRUFBRSxHQUFHO0lBQ25COztPQUVHO0lBQ0gsVUFBVSxFQUFFLEdBQUc7SUFDZjs7T0FFRztJQUNILElBQUksRUFBRSxHQUFHO0lBQ1Q7O09BRUc7SUFDSCxJQUFJLEVBQUUsR0FBRztJQUNUOztPQUVHO0lBQ0gsTUFBTSxFQUFFLEdBQUc7SUFDWDs7T0FFRztJQUNILFVBQVUsRUFBRSxHQUFHO0NBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvb2JqZWN0LXJvbGV8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBDb2RlIHJlcHJlc2VudGluZyB0aGUgcm9sZSB0aGUgZW50aXR5IHBsYXllZCBpbiB0aGUgYXVkaXQgZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT2JqZWN0Um9sZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIDE6IFRoaXMgb2JqZWN0IGlzIHRoZSBwYXRpZW50IHRoYXQgaXMgdGhlIHN1YmplY3Qgb2YgY2FyZSByZWxhdGVkIHRvIHRoaXMgZXZlbnQuICBJdCBpcyBpZGVudGlmaWFibGUgYnkgcGF0aWVudCBJRCBvciBlcXVpdmFsZW50LiAgVGhlIHBhdGllbnQgbWF5IGJlIGVpdGhlciBodW1hbiBvciBhbmltYWwuXHJcbiAgICovXHJcbiAgUGF0aWVudDogXCIxXCIsXHJcbiAgLyoqXHJcbiAgICogMTA6IEluc3VyYW5jZSBjb21wYW55LCBvciBhbnkgb3RoZXIgb3JnYW5pemF0aW9uIHdobyBhY2NlcHRzIHJlc3BvbnNpYmlsaXR5IGZvciBwYXlpbmcgZm9yIHRoZSBoZWFsdGhjYXJlIGV2ZW50LlxyXG4gICAqL1xyXG4gIEd1YXJhbnRvcjogXCIxMFwiLFxyXG4gIC8qKlxyXG4gICAqIDExOiBBIHBlcnNvbiBvciBhY3RpdmUgc3lzdGVtIG9iamVjdCBpbnZvbHZlZCBpbiB0aGUgZXZlbnQgd2l0aCBhIHNlY3VyaXR5IHJvbGUuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlVc2VyRW50aXR5OiBcIjExXCIsXHJcbiAgLyoqXHJcbiAgICogMTI6IEEgcGVyc29uIG9yIHN5c3RlbSBvYmplY3QgaW52b2x2ZWQgaW4gdGhlIGV2ZW50IHdpdGggdGhlIGF1dGhvcml0eSB0byBtb2RpZnkgc2VjdXJpdHkgcm9sZXMgb2Ygb3RoZXIgb2JqZWN0cy5cclxuICAgKi9cclxuICBTZWN1cml0eVVzZXJHcm91cDogXCIxMlwiLFxyXG4gIC8qKlxyXG4gICAqIDEzOiBBIHBhc3NpdmUgb2JqZWN0LCBzdWNoIGFzIGEgcm9sZSB0YWJsZSwgdGhhdCBpcyByZWxldmFudCB0byB0aGUgZXZlbnQuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlSZXNvdXJjZTogXCIxM1wiLFxyXG4gIC8qKlxyXG4gICAqIDE0OiAoZGVwcmVjYXRlZCkgIFJlbGV2YW50IHRvIGNlcnRhaW4gUkJBQyBzZWN1cml0eSBtZXRob2RvbG9naWVzLlxyXG4gICAqL1xyXG4gIFNlY3VyaXR5R3JhbnVsYXJpdHlEZWZpbml0aW9uOiBcIjE0XCIsXHJcbiAgLyoqXHJcbiAgICogMTU6IEFueSBwZXJzb24gb3Igb3JnYW5pemF0aW9uIHJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgY2FyZS4gIFRoaXMgZW5jb21wYXNzZXMgYWxsIGZvcm1zIG9mIGNhcmUsIGxpY2Vuc2VkIG9yIG90aGVyd2lzZSwgYW5kIGFsbCBzb3J0cyBvZiB0ZWFtcyBhbmQgY2FyZSBncm91cHMuIE5vdGUgdGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gcHJhY3RpdGlvbmVyIGFuZCB0aGUgZG9jdG9yIHRoYXQgYWN0dWFsbHkgcHJvdmlkZWQgdGhlIGNhcmUgdG8gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgUHJhY3RpdGlvbmVyOiBcIjE1XCIsXHJcbiAgLyoqXHJcbiAgICogMTY6IFRoZSBzb3VyY2Ugb3IgZGVzdGluYXRpb24gZm9yIGRhdGEgdHJhbnNmZXIsIHdoZW4gaXQgZG9lcyBub3QgbWF0Y2ggc29tZSBvdGhlciByb2xlLlxyXG4gICAqL1xyXG4gIERhdGFEZXN0aW5hdGlvbjogXCIxNlwiLFxyXG4gIC8qKlxyXG4gICAqIDE3OiBBIHNvdXJjZSBvciBkZXN0aW5hdGlvbiBmb3IgZGF0YSB0cmFuc2ZlciB0aGF0IGFjdHMgYXMgYW4gYXJjaGl2ZSwgZGF0YWJhc2UsIG9yIHNpbWlsYXIgcm9sZS5cclxuICAgKi9cclxuICBEYXRhUmVwb3NpdG9yeTogXCIxN1wiLFxyXG4gIC8qKlxyXG4gICAqIDE4OiBBbiBvYmplY3QgdGhhdCBob2xkcyBzY2hlZHVsZSBpbmZvcm1hdGlvbi4gIFRoaXMgY291bGQgYmUgYW4gYXBwb2ludG1lbnQgYm9vaywgYXZhaWxhYmlsaXR5IGluZm9ybWF0aW9uLCBldGMuXHJcbiAgICovXHJcbiAgU2NoZWR1bGU6IFwiMThcIixcclxuICAvKipcclxuICAgKiAxOTogQW4gb3JnYW5pemF0aW9uIG9yIHBlcnNvbiB0aGF0IGlzIHRoZSByZWNpcGllbnQgb2Ygc2VydmljZXMuICBUaGlzIGNvdWxkIGJlIGFuIG9yZ2FuaXphdGlvbiB0aGF0IGlzIGJ1eWluZyBzZXJ2aWNlcyBmb3IgYSBwYXRpZW50LCBvciBhIHBlcnNvbiB0aGF0IGlzIGJ1eWluZyBzZXJ2aWNlcyBmb3IgYW4gYW5pbWFsLlxyXG4gICAqL1xyXG4gIEN1c3RvbWVyOiBcIjE5XCIsXHJcbiAgLyoqXHJcbiAgICogMjogVGhpcyBpcyBhIGxvY2F0aW9uIGlkZW50aWZpZWQgYXMgcmVsYXRlZCB0byB0aGUgZXZlbnQuICBUaGlzIGlzIHVzdWFsbHkgdGhlIGxvY2F0aW9uIHdoZXJlIHRoZSBldmVudCB0b29rIHBsYWNlLiAgTm90ZSB0aGF0IGZvciBzaGlwcGluZywgdGhlIHVzdWFsIGV2ZW50cyBhcmUgYXJyaXZhbCBhdCBhIGxvY2F0aW9uIG9yIGRlcGFydHVyZSBmcm9tIGEgbG9jYXRpb24uXHJcbiAgICovXHJcbiAgTG9jYXRpb246IFwiMlwiLFxyXG4gIC8qKlxyXG4gICAqIDIwOiBBbiBvcmRlciwgdGFzaywgd29yayBpdGVtLCBwcm9jZWR1cmUgc3RlcCwgb3Igb3RoZXIgZGVzY3JpcHRpb24gb2Ygd29yayB0byBiZSBwZXJmb3JtZWQ7IGUuZy4gYSBwYXJ0aWN1bGFyIGluc3RhbmNlIG9mIGFuIE1QUFMuXHJcbiAgICovXHJcbiAgSm9iOiBcIjIwXCIsXHJcbiAgLyoqXHJcbiAgICogMjE6IEEgbGlzdCBvZiBqb2JzIG9yIGEgc3lzdGVtIHRoYXQgcHJvdmlkZXMgbGlzdHMgb2Ygam9iczsgZS5nLiBhbiBNV0wgU0NQLlxyXG4gICAqL1xyXG4gIEpvYlN0cmVhbTogXCIyMVwiLFxyXG4gIC8qKlxyXG4gICAqIDIyOiAoRGVwcmVjYXRlZCkuXHJcbiAgICovXHJcbiAgVGFibGU6IFwiMjJcIixcclxuICAvKipcclxuICAgKiAyMzogQW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIG9yIGNvbnRyb2xzIHRoZSByb3V0aW5nIG9yIGRlbGl2ZXJ5IG9mIGl0ZW1zLiAgRm9yIGV4YW1wbGUsIGEgZGlzdHJpYnV0aW9uIGxpc3QgaXMgdGhlIHJvdXRpbmcgY3JpdGVyaWEgZm9yIG1haWwuICBUaGUgaXRlbXMgZGVsaXZlcmVkIG1heSBiZSBkb2N1bWVudHMsIGpvYnMsIG9yIG90aGVyIG9iamVjdHMuXHJcbiAgICovXHJcbiAgUm91dGluZ0NyaXRlcmlhOiBcIjIzXCIsXHJcbiAgLyoqXHJcbiAgICogMjQ6IFRoZSBjb250ZW50cyBvZiBhIHF1ZXJ5LiAgVGhpcyBpcyB1c2VkIHRvIGNhcHR1cmUgdGhlIGNvbnRlbnRzIG9mIGFueSBraW5kIG9mIHF1ZXJ5LiAgRm9yIHNlY3VyaXR5IHN1cnZlaWxsYW5jZSBwdXJwb3NlcyBrbm93aW5nIHRoZSBxdWVyaWVzIGJlaW5nIG1hZGUgaXMgdmVyeSBpbXBvcnRhbnQuXHJcbiAgICovXHJcbiAgUXVlcnk6IFwiMjRcIixcclxuICAvKipcclxuICAgKiAzOiBUaGlzIG9iamVjdCBpcyBhbnkga2luZCBvZiBwZXJzaXN0ZW50IGRvY3VtZW50IGNyZWF0ZWQgYXMgYSByZXN1bHQgb2YgdGhlIGV2ZW50LiAgVGhpcyBjb3VsZCBiZSBhIHBhcGVyIHJlcG9ydCwgZmlsbSwgZWxlY3Ryb25pYyByZXBvcnQsIERJQ09NIFN0dWR5LCBldGMuICBJc3N1ZXMgcmVsYXRlZCB0byBtZWRpY2FsIHJlY29yZHMgbGlmZSBjeWNsZSBtYW5hZ2VtZW50IGFyZSBjb252ZXllZCBlbHNld2hlcmUuXHJcbiAgICovXHJcbiAgUmVwb3J0OiBcIjNcIixcclxuICAvKipcclxuICAgKiA0OiBBIGxvZ2ljYWwgb2JqZWN0IHJlbGF0ZWQgdG8gYSBoZWFsdGggcmVjb3JkIGV2ZW50LiAgVGhpcyBpcyBhbnkgaGVhbHRoY2FyZSAgc3BlY2lmaWMgcmVzb3VyY2UgKG9iamVjdCkgbm90IHJlc3RyaWN0ZWQgdG8gRkhJUiBkZWZpbmVkIFJlc291cmNlcy5cclxuICAgKi9cclxuICBEb21haW5SZXNvdXJjZTogXCI0XCIsXHJcbiAgLyoqXHJcbiAgICogNTogVGhpcyBpcyBhbnkgY29uZmlndXJhYmxlIGZpbGUgdXNlZCB0byBjb250cm9sIGNyZWF0aW9uIG9mIGRvY3VtZW50cy4gIEV4YW1wbGVzIGluY2x1ZGUgdGhlIG9iamVjdHMgbWFpbnRhaW5lZCBieSB0aGUgSEw3IE1hc3RlciBGaWxlIHRyYW5zYWN0aW9ucywgVmFsdWUgU2V0cywgZXRjLlxyXG4gICAqL1xyXG4gIE1hc3RlckZpbGU6IFwiNVwiLFxyXG4gIC8qKlxyXG4gICAqIDY6IEEgaHVtYW4gcGFydGljaXBhbnQgbm90IG90aGVyd2lzZSBpZGVudGlmaWVkIGJ5IHNvbWUgb3RoZXIgY2F0ZWdvcnkuXHJcbiAgICovXHJcbiAgVXNlcjogXCI2XCIsXHJcbiAgLyoqXHJcbiAgICogNzogKGRlcHJlY2F0ZWQpLlxyXG4gICAqL1xyXG4gIExpc3Q6IFwiN1wiLFxyXG4gIC8qKlxyXG4gICAqIDg6IFR5cGljYWxseSwgYSBsaWNlbnNlZCBwZXJzb24gd2hvIGlzIHByb3ZpZGluZyBvciBwZXJmb3JtaW5nIGNhcmUgcmVsYXRlZCB0byB0aGUgZXZlbnQsIGdlbmVyYWxseSBhIHBoeXNpY2lhbi4gICBUaGUga2V5IGRpc3RpbmN0aW9uIGJldHdlZW4gZG9jdG9yIGFuZCBwcmFjdGl0aW9uZXIgaXMgd2l0aCByZWdhcmRzIHRvIHRoZWlyIHJvbGUsIG5vdCB0aGUgbGljZW5zaW5nLiAgVGhlIGRvY3RvciBpcyB0aGUgaHVtYW4gd2hvIGFjdHVhbGx5IHBlcmZvcm1lZCB0aGUgd29yay4gIFRoZSBwcmFjdGl0aW9uZXIgaXMgdGhlIGh1bWFuIG9yIG9yZ2FuaXphdGlvbiB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgd29yay5cclxuICAgKi9cclxuICBEb2N0b3I6IFwiOFwiLFxyXG4gIC8qKlxyXG4gICAqIDk6IEEgcGVyc29uIG9yIHN5c3RlbSB0aGF0IGlzIGJlaW5nIG5vdGlmaWVkIGFzIHBhcnQgb2YgdGhlIGV2ZW50LiAgVGhpcyBpcyByZWxldmFudCBpbiBzaXR1YXRpb25zIHdoZXJlIGF1dG9tYXRlZCBzeXN0ZW1zIHByb3ZpZGUgbm90aWZpY2F0aW9ucyB0byBvdGhlciBwYXJ0aWVzIHdoZW4gYW4gZXZlbnQgdG9vayBwbGFjZS5cclxuICAgKi9cclxuICBTdWJzY3JpYmVyOiBcIjlcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBDb2RlIHJlcHJlc2VudGluZyB0aGUgcm9sZSB0aGUgZW50aXR5IHBsYXllZCBpbiB0aGUgYXVkaXQgZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBPYmplY3RSb2xlQ29kZVR5cGUgPSB0eXBlb2YgT2JqZWN0Um9sZUNvZGVzW2tleW9mIHR5cGVvZiBPYmplY3RSb2xlQ29kZXNdO1xyXG4iXX0=