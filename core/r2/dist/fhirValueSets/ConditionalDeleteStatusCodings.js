// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conditional-delete-status|1.0.2
/**
 * A code that indicates how the server supports conditional delete.
 */
export const ConditionalDeleteStatusCodings = {
    /**
     * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
     */
    MultipleDeletesSupported: {
        display: "Multiple Deletes Supported",
        code: "multiple",
        system: "http://hl7.org/fhir/conditional-delete-status",
    },
    /**
     * not-supported: No support for conditional deletes.
     */
    NotSupported: {
        display: "Not Supported",
        code: "not-supported",
        system: "http://hl7.org/fhir/conditional-delete-status",
    },
    /**
     * single: Conditional deletes are supported, but only single resources at a time.
     */
    SingleDeletesSupported: {
        display: "Single Deletes Supported",
        code: "single",
        system: "http://hl7.org/fhir/conditional-delete-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uYWxEZWxldGVTdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Db25kaXRpb25hbERlbGV0ZVN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBc0I5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFxQztJQUM5RTs7T0FFRztJQUNILHdCQUF3QixFQUFFO1FBQ3hCLE9BQU8sRUFBRSw0QkFBNEI7UUFDckMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsc0JBQXNCLEVBQUU7UUFDdEIsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbmRpdGlvbmFsLWRlbGV0ZS1zdGF0dXN8MS4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgdGhhdCBpbmRpY2F0ZXMgaG93IHRoZSBzZXJ2ZXIgc3VwcG9ydHMgY29uZGl0aW9uYWwgZGVsZXRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29uZGl0aW9uYWxEZWxldGVTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIG11bHRpcGxlOiBDb25kaXRpb25hbCBkZWxldGVzIGFyZSBzdXBwb3J0ZWQsIGFuZCBtdWx0aXBsZSByZXNvdXJjZXMgY2FuIGJlIGRlbGV0ZWQgaW4gYSBzaW5nbGUgaW50ZXJhY3Rpb24uXHJcbiAgICovXHJcbiAgTXVsdGlwbGVEZWxldGVzU3VwcG9ydGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG5vdC1zdXBwb3J0ZWQ6IE5vIHN1cHBvcnQgZm9yIGNvbmRpdGlvbmFsIGRlbGV0ZXMuXHJcbiAgICovXHJcbiAgTm90U3VwcG9ydGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHNpbmdsZTogQ29uZGl0aW9uYWwgZGVsZXRlcyBhcmUgc3VwcG9ydGVkLCBidXQgb25seSBzaW5nbGUgcmVzb3VyY2VzIGF0IGEgdGltZS5cclxuICAgKi9cclxuICBTaW5nbGVEZWxldGVzU3VwcG9ydGVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb2RlIHRoYXQgaW5kaWNhdGVzIGhvdyB0aGUgc2VydmVyIHN1cHBvcnRzIGNvbmRpdGlvbmFsIGRlbGV0ZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25kaXRpb25hbERlbGV0ZVN0YXR1c0NvZGluZ3M6Q29uZGl0aW9uYWxEZWxldGVTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIG11bHRpcGxlOiBDb25kaXRpb25hbCBkZWxldGVzIGFyZSBzdXBwb3J0ZWQsIGFuZCBtdWx0aXBsZSByZXNvdXJjZXMgY2FuIGJlIGRlbGV0ZWQgaW4gYSBzaW5nbGUgaW50ZXJhY3Rpb24uXHJcbiAgICovXHJcbiAgTXVsdGlwbGVEZWxldGVzU3VwcG9ydGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIk11bHRpcGxlIERlbGV0ZXMgU3VwcG9ydGVkXCIsXHJcbiAgICBjb2RlOiBcIm11bHRpcGxlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25kaXRpb25hbC1kZWxldGUtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBub3Qtc3VwcG9ydGVkOiBObyBzdXBwb3J0IGZvciBjb25kaXRpb25hbCBkZWxldGVzLlxyXG4gICAqL1xyXG4gIE5vdFN1cHBvcnRlZDoge1xyXG4gICAgZGlzcGxheTogXCJOb3QgU3VwcG9ydGVkXCIsXHJcbiAgICBjb2RlOiBcIm5vdC1zdXBwb3J0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbmRpdGlvbmFsLWRlbGV0ZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHNpbmdsZTogQ29uZGl0aW9uYWwgZGVsZXRlcyBhcmUgc3VwcG9ydGVkLCBidXQgb25seSBzaW5nbGUgcmVzb3VyY2VzIGF0IGEgdGltZS5cclxuICAgKi9cclxuICBTaW5nbGVEZWxldGVzU3VwcG9ydGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlNpbmdsZSBEZWxldGVzIFN1cHBvcnRlZFwiLFxyXG4gICAgY29kZTogXCJzaW5nbGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbmRpdGlvbmFsLWRlbGV0ZS1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=