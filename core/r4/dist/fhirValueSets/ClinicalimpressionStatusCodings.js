// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/clinicalimpression-status|4.0.1
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export const ClinicalimpressionStatusCodings = {
    /**
     * completed: The event has now concluded.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/event-status",
    },
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/event-status",
    },
    /**
     * in-progress: The event is currently occurring.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/event-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpbmljYWxpbXByZXNzaW9uU3RhdHVzQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ2xpbmljYWxpbXByZXNzaW9uU3RhdHVzQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw4RUFBOEU7QUFzQjlFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQXNDO0lBQ2hGOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSxrQ0FBa0M7S0FDM0M7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxrQ0FBa0M7S0FDM0M7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NsaW5pY2FsaW1wcmVzc2lvbi1zdGF0dXN8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyB0aGF0IHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBjbGluaWNhbCBpbXByZXNzaW9uIHdpdGhpbiBpdHMgb3ZlcmFsbCBsaWZlY3ljbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDbGluaWNhbGltcHJlc3Npb25TdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIGV2ZW50IGhhcyBub3cgY29uY2x1ZGVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIGVsZWN0cm9uaWMgcmVjb3JkIHNob3VsZCBuZXZlciBoYXZlIGV4aXN0ZWQsIHRob3VnaCBpdCBpcyBwb3NzaWJsZSB0aGF0IHJlYWwtd29ybGQgZGVjaXNpb25zIHdlcmUgYmFzZWQgb24gaXQuICAoSWYgcmVhbC13b3JsZCBhY3Rpdml0eSBoYXMgb2NjdXJyZWQsIHRoZSBzdGF0dXMgc2hvdWxkIGJlIFwic3RvcHBlZFwiIHJhdGhlciB0aGFuIFwiZW50ZXJlZC1pbi1lcnJvclwiLikuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBldmVudCBpcyBjdXJyZW50bHkgb2NjdXJyaW5nLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2RlcyB0aGF0IHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBjbGluaWNhbCBpbXByZXNzaW9uIHdpdGhpbiBpdHMgb3ZlcmFsbCBsaWZlY3ljbGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ2xpbmljYWxpbXByZXNzaW9uU3RhdHVzQ29kaW5nczpDbGluaWNhbGltcHJlc3Npb25TdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIGV2ZW50IGhhcyBub3cgY29uY2x1ZGVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDoge1xyXG4gICAgZGlzcGxheTogXCJDb21wbGV0ZWRcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ldmVudC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoaXMgZWxlY3Ryb25pYyByZWNvcmQgc2hvdWxkIG5ldmVyIGhhdmUgZXhpc3RlZCwgdGhvdWdoIGl0IGlzIHBvc3NpYmxlIHRoYXQgcmVhbC13b3JsZCBkZWNpc2lvbnMgd2VyZSBiYXNlZCBvbiBpdC4gIChJZiByZWFsLXdvcmxkIGFjdGl2aXR5IGhhcyBvY2N1cnJlZCwgdGhlIHN0YXR1cyBzaG91bGQgYmUgXCJzdG9wcGVkXCIgcmF0aGVyIHRoYW4gXCJlbnRlcmVkLWluLWVycm9yXCIuKS5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIGluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2V2ZW50LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBldmVudCBpcyBjdXJyZW50bHkgb2NjdXJyaW5nLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IHtcclxuICAgIGRpc3BsYXk6IFwiSW4gUHJvZ3Jlc3NcIixcclxuICAgIGNvZGU6IFwiaW4tcHJvZ3Jlc3NcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2V2ZW50LXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==