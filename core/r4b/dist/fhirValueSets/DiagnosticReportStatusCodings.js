// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/diagnostic-report-status|4.3.0
/**
 * The status of the diagnostic report.
 */
export const DiagnosticReportStatusCodings = {
    /**
     * amended: Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.
     */
    Amended: {
        display: "Amended",
        code: "amended",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * appended: Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.
     */
    Appended: {
        display: "Appended",
        code: "appended",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * corrected: Subsequent to being final, the report has been modified  to correct an error in the report or referenced results.
     */
    Corrected: {
        display: "Corrected",
        code: "corrected",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * entered-in-error: The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * final: The report is complete and verified by an authorized person.
     */
    Final: {
        display: "Final",
        code: "final",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
     */
    Partial: {
        display: "Partial",
        code: "partial",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * preliminary: Verified early results are available, but not all  results are final.
     */
    Preliminary: {
        display: "Preliminary",
        code: "preliminary",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * registered: The existence of the report is registered, but there is nothing yet available.
     */
    Registered: {
        display: "Registered",
        code: "registered",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    Unknown: {
        display: "Unknown",
        code: "unknown",
        system: "http://hl7.org/fhir/diagnostic-report-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhZ25vc3RpY1JlcG9ydFN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0RpYWdub3N0aWNSZXBvcnRTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQWtEN0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBb0M7SUFDNUU7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZGlhZ25vc3RpYy1yZXBvcnQtc3RhdHVzfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiB0aGUgZGlhZ25vc3RpYyByZXBvcnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEaWFnbm9zdGljUmVwb3J0U3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhbWVuZGVkOiBTdWJzZXF1ZW50IHRvIGJlaW5nIGZpbmFsLCB0aGUgcmVwb3J0IGhhcyBiZWVuIG1vZGlmaWVkLiAgVGhpcyBpbmNsdWRlcyBhbnkgY2hhbmdlIGluIHRoZSByZXN1bHRzLCBkaWFnbm9zaXMsIG5hcnJhdGl2ZSB0ZXh0LCBvciBvdGhlciBjb250ZW50IG9mIGEgcmVwb3J0IHRoYXQgaGFzIGJlZW4gaXNzdWVkLlxyXG4gICAqL1xyXG4gIEFtZW5kZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogYXBwZW5kZWQ6IFN1YnNlcXVlbnQgdG8gYmVpbmcgZmluYWwsIHRoZSByZXBvcnQgaGFzIGJlZW4gbW9kaWZpZWQgYnkgYWRkaW5nIG5ldyBjb250ZW50LiBUaGUgZXhpc3RpbmcgY29udGVudCBpcyB1bmNoYW5nZWQuXHJcbiAgICovXHJcbiAgQXBwZW5kZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgcmVwb3J0IGlzIHVuYXZhaWxhYmxlIGJlY2F1c2UgdGhlIG1lYXN1cmVtZW50IHdhcyBub3Qgc3RhcnRlZCBvciBub3QgY29tcGxldGVkIChhbHNvIHNvbWV0aW1lcyBjYWxsZWQgXCJhYm9ydGVkXCIpLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjb3JyZWN0ZWQ6IFN1YnNlcXVlbnQgdG8gYmVpbmcgZmluYWwsIHRoZSByZXBvcnQgaGFzIGJlZW4gbW9kaWZpZWQgIHRvIGNvcnJlY3QgYW4gZXJyb3IgaW4gdGhlIHJlcG9ydCBvciByZWZlcmVuY2VkIHJlc3VsdHMuXHJcbiAgICovXHJcbiAgQ29ycmVjdGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSByZXBvcnQgaGFzIGJlZW4gd2l0aGRyYXduIGZvbGxvd2luZyBhIHByZXZpb3VzIGZpbmFsIHJlbGVhc2UuICBUaGlzIGVsZWN0cm9uaWMgcmVjb3JkIHNob3VsZCBuZXZlciBoYXZlIGV4aXN0ZWQsIHRob3VnaCBpdCBpcyBwb3NzaWJsZSB0aGF0IHJlYWwtd29ybGQgZGVjaXNpb25zIHdlcmUgYmFzZWQgb24gaXQuIChJZiByZWFsLXdvcmxkIGFjdGl2aXR5IGhhcyBvY2N1cnJlZCwgdGhlIHN0YXR1cyBzaG91bGQgYmUgXCJjYW5jZWxsZWRcIiByYXRoZXIgdGhhbiBcImVudGVyZWQtaW4tZXJyb3JcIi4pLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGZpbmFsOiBUaGUgcmVwb3J0IGlzIGNvbXBsZXRlIGFuZCB2ZXJpZmllZCBieSBhbiBhdXRob3JpemVkIHBlcnNvbi5cclxuICAgKi9cclxuICBGaW5hbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwYXJ0aWFsOiBUaGlzIGlzIGEgcGFydGlhbCAoZS5nLiBpbml0aWFsLCBpbnRlcmltIG9yIHByZWxpbWluYXJ5KSByZXBvcnQ6IGRhdGEgaW4gdGhlIHJlcG9ydCBtYXkgYmUgaW5jb21wbGV0ZSBvciB1bnZlcmlmaWVkLlxyXG4gICAqL1xyXG4gIFBhcnRpYWw6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcHJlbGltaW5hcnk6IFZlcmlmaWVkIGVhcmx5IHJlc3VsdHMgYXJlIGF2YWlsYWJsZSwgYnV0IG5vdCBhbGwgIHJlc3VsdHMgYXJlIGZpbmFsLlxyXG4gICAqL1xyXG4gIFByZWxpbWluYXJ5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlZ2lzdGVyZWQ6IFRoZSBleGlzdGVuY2Ugb2YgdGhlIHJlcG9ydCBpcyByZWdpc3RlcmVkLCBidXQgdGhlcmUgaXMgbm90aGluZyB5ZXQgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIFJlZ2lzdGVyZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZy9zb3VyY2Ugc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2ggb2YgdGhlIHN0YXR1cyB2YWx1ZXMgY3VycmVudGx5IGFwcGxpZXMgZm9yIHRoaXMgb2JzZXJ2YXRpb24uIE5vdGU6IFRoaXMgY29uY2VwdCBpcyBub3QgdG8gYmUgdXNlZCBmb3IgXCJvdGhlclwiIC0gb25lIG9mIHRoZSBsaXN0ZWQgc3RhdHVzZXMgaXMgcHJlc3VtZWQgdG8gYXBwbHksIGJ1dCB0aGUgYXV0aG9yaW5nL3NvdXJjZSBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaC5cclxuICAgKi9cclxuICBVbmtub3duOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiB0aGUgZGlhZ25vc3RpYyByZXBvcnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRGlhZ25vc3RpY1JlcG9ydFN0YXR1c0NvZGluZ3M6RGlhZ25vc3RpY1JlcG9ydFN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYW1lbmRlZDogU3Vic2VxdWVudCB0byBiZWluZyBmaW5hbCwgdGhlIHJlcG9ydCBoYXMgYmVlbiBtb2RpZmllZC4gIFRoaXMgaW5jbHVkZXMgYW55IGNoYW5nZSBpbiB0aGUgcmVzdWx0cywgZGlhZ25vc2lzLCBuYXJyYXRpdmUgdGV4dCwgb3Igb3RoZXIgY29udGVudCBvZiBhIHJlcG9ydCB0aGF0IGhhcyBiZWVuIGlzc3VlZC5cclxuICAgKi9cclxuICBBbWVuZGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFtZW5kZWRcIixcclxuICAgIGNvZGU6IFwiYW1lbmRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZGlhZ25vc3RpYy1yZXBvcnQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBhcHBlbmRlZDogU3Vic2VxdWVudCB0byBiZWluZyBmaW5hbCwgdGhlIHJlcG9ydCBoYXMgYmVlbiBtb2RpZmllZCBieSBhZGRpbmcgbmV3IGNvbnRlbnQuIFRoZSBleGlzdGluZyBjb250ZW50IGlzIHVuY2hhbmdlZC5cclxuICAgKi9cclxuICBBcHBlbmRlZDoge1xyXG4gICAgZGlzcGxheTogXCJBcHBlbmRlZFwiLFxyXG4gICAgY29kZTogXCJhcHBlbmRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZGlhZ25vc3RpYy1yZXBvcnQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSByZXBvcnQgaXMgdW5hdmFpbGFibGUgYmVjYXVzZSB0aGUgbWVhc3VyZW1lbnQgd2FzIG5vdCBzdGFydGVkIG9yIG5vdCBjb21wbGV0ZWQgKGFsc28gc29tZXRpbWVzIGNhbGxlZCBcImFib3J0ZWRcIikuXHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNhbmNlbGxlZFwiLFxyXG4gICAgY29kZTogXCJjYW5jZWxsZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2RpYWdub3N0aWMtcmVwb3J0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29ycmVjdGVkOiBTdWJzZXF1ZW50IHRvIGJlaW5nIGZpbmFsLCB0aGUgcmVwb3J0IGhhcyBiZWVuIG1vZGlmaWVkICB0byBjb3JyZWN0IGFuIGVycm9yIGluIHRoZSByZXBvcnQgb3IgcmVmZXJlbmNlZCByZXN1bHRzLlxyXG4gICAqL1xyXG4gIENvcnJlY3RlZDoge1xyXG4gICAgZGlzcGxheTogXCJDb3JyZWN0ZWRcIixcclxuICAgIGNvZGU6IFwiY29ycmVjdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9kaWFnbm9zdGljLXJlcG9ydC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSByZXBvcnQgaGFzIGJlZW4gd2l0aGRyYXduIGZvbGxvd2luZyBhIHByZXZpb3VzIGZpbmFsIHJlbGVhc2UuICBUaGlzIGVsZWN0cm9uaWMgcmVjb3JkIHNob3VsZCBuZXZlciBoYXZlIGV4aXN0ZWQsIHRob3VnaCBpdCBpcyBwb3NzaWJsZSB0aGF0IHJlYWwtd29ybGQgZGVjaXNpb25zIHdlcmUgYmFzZWQgb24gaXQuIChJZiByZWFsLXdvcmxkIGFjdGl2aXR5IGhhcyBvY2N1cnJlZCwgdGhlIHN0YXR1cyBzaG91bGQgYmUgXCJjYW5jZWxsZWRcIiByYXRoZXIgdGhhbiBcImVudGVyZWQtaW4tZXJyb3JcIi4pLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgaW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZGlhZ25vc3RpYy1yZXBvcnQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBmaW5hbDogVGhlIHJlcG9ydCBpcyBjb21wbGV0ZSBhbmQgdmVyaWZpZWQgYnkgYW4gYXV0aG9yaXplZCBwZXJzb24uXHJcbiAgICovXHJcbiAgRmluYWw6IHtcclxuICAgIGRpc3BsYXk6IFwiRmluYWxcIixcclxuICAgIGNvZGU6IFwiZmluYWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2RpYWdub3N0aWMtcmVwb3J0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcGFydGlhbDogVGhpcyBpcyBhIHBhcnRpYWwgKGUuZy4gaW5pdGlhbCwgaW50ZXJpbSBvciBwcmVsaW1pbmFyeSkgcmVwb3J0OiBkYXRhIGluIHRoZSByZXBvcnQgbWF5IGJlIGluY29tcGxldGUgb3IgdW52ZXJpZmllZC5cclxuICAgKi9cclxuICBQYXJ0aWFsOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBhcnRpYWxcIixcclxuICAgIGNvZGU6IFwicGFydGlhbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZGlhZ25vc3RpYy1yZXBvcnQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcmVsaW1pbmFyeTogVmVyaWZpZWQgZWFybHkgcmVzdWx0cyBhcmUgYXZhaWxhYmxlLCBidXQgbm90IGFsbCAgcmVzdWx0cyBhcmUgZmluYWwuXHJcbiAgICovXHJcbiAgUHJlbGltaW5hcnk6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJlbGltaW5hcnlcIixcclxuICAgIGNvZGU6IFwicHJlbGltaW5hcnlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2RpYWdub3N0aWMtcmVwb3J0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVnaXN0ZXJlZDogVGhlIGV4aXN0ZW5jZSBvZiB0aGUgcmVwb3J0IGlzIHJlZ2lzdGVyZWQsIGJ1dCB0aGVyZSBpcyBub3RoaW5nIHlldCBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgUmVnaXN0ZXJlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZWdpc3RlcmVkXCIsXHJcbiAgICBjb2RlOiBcInJlZ2lzdGVyZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2RpYWdub3N0aWMtcmVwb3J0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZy9zb3VyY2Ugc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2ggb2YgdGhlIHN0YXR1cyB2YWx1ZXMgY3VycmVudGx5IGFwcGxpZXMgZm9yIHRoaXMgb2JzZXJ2YXRpb24uIE5vdGU6IFRoaXMgY29uY2VwdCBpcyBub3QgdG8gYmUgdXNlZCBmb3IgXCJvdGhlclwiIC0gb25lIG9mIHRoZSBsaXN0ZWQgc3RhdHVzZXMgaXMgcHJlc3VtZWQgdG8gYXBwbHksIGJ1dCB0aGUgYXV0aG9yaW5nL3NvdXJjZSBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaC5cclxuICAgKi9cclxuICBVbmtub3duOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVua25vd25cIixcclxuICAgIGNvZGU6IFwidW5rbm93blwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZGlhZ25vc3RpYy1yZXBvcnQtc3RhdHVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19