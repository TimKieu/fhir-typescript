// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-admin-status|3.0.2
/**
 * A set of codes indicating the current status of a MedicationAdministration.
 */
export const MedicationAdminStatusCodings = {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/medication-admin-status",
    },
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/medication-admin-status",
    },
    /**
     * in-progress: The administration has started but has not yet completed.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/medication-admin-status",
    },
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/medication-admin-status",
    },
    /**
     * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    Stopped: {
        display: "Stopped",
        code: "stopped",
        system: "http://hl7.org/fhir/medication-admin-status",
    },
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: {
        display: "Unknown",
        code: "unknown",
        system: "http://hl7.org/fhir/medication-admin-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbkFkbWluU3RhdHVzQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvbkFkbWluU3RhdHVzQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0RUFBNEU7QUFrQzVFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQW1DO0lBQzFFOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDZDQUE2QztLQUN0RDtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDZDQUE2QztLQUN0RDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsNkNBQTZDO0tBQ3REO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21lZGljYXRpb24tYWRtaW4tc3RhdHVzfDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBzZXQgb2YgY29kZXMgaW5kaWNhdGluZyB0aGUgY3VycmVudCBzdGF0dXMgb2YgYSBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZWRpY2F0aW9uQWRtaW5TdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogQWxsIGFjdGlvbnMgdGhhdCBhcmUgaW1wbGllZCBieSB0aGUgYWRtaW5pc3RyYXRpb24gaGF2ZSBvY2N1cnJlZC5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIGFkbWluaXN0cmF0aW9uIHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB0aGVyZWZvcmUgbnVsbGlmaWVkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGUgYWRtaW5pc3RyYXRpb24gaGFzIHN0YXJ0ZWQgYnV0IGhhcyBub3QgeWV0IGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgYWRtaW5pc3RyYXRpb24gaGF2ZSBiZWVuIHRlbXBvcmFyaWx5IGhhbHRlZCwgYnV0IGFyZSBleHBlY3RlZCB0byBjb250aW51ZSBsYXRlci4gTWF5IGFsc28gYmUgY2FsbGVkIFwic3VzcGVuZGVkXCIuXHJcbiAgICovXHJcbiAgT25Ib2xkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHN0b3BwZWQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgYWRtaW5pc3RyYXRpb24gaGF2ZSBiZWVuIHBlcm1hbmVudGx5IGhhbHRlZCwgYmVmb3JlIGFsbCBvZiB0aGVtIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIFN0b3BwZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZyBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyByZXF1ZXN0LiBOb3RlOiBUaGlzIGNvbmNlcHQgaXMgbm90IHRvIGJlIHVzZWQgZm9yIFwib3RoZXJcIiAtIG9uZSBvZiB0aGUgbGlzdGVkIHN0YXR1c2VzIGlzIHByZXN1bWVkIHRvIGFwcGx5LCBpdCdzIGp1c3Qgbm90IGtub3duIHdoaWNoIG9uZS5cclxuICAgKi9cclxuICBVbmtub3duOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzZXQgb2YgY29kZXMgaW5kaWNhdGluZyB0aGUgY3VycmVudCBzdGF0dXMgb2YgYSBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVkaWNhdGlvbkFkbWluU3RhdHVzQ29kaW5nczpNZWRpY2F0aW9uQWRtaW5TdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogQWxsIGFjdGlvbnMgdGhhdCBhcmUgaW1wbGllZCBieSB0aGUgYWRtaW5pc3RyYXRpb24gaGF2ZSBvY2N1cnJlZC5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBjb2RlOiBcImNvbXBsZXRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1hZG1pbi1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBhZG1pbmlzdHJhdGlvbiB3YXMgZW50ZXJlZCBpbiBlcnJvciBhbmQgdGhlcmVmb3JlIG51bGxpZmllZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIGluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lZGljYXRpb24tYWRtaW4tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbi1wcm9ncmVzczogVGhlIGFkbWluaXN0cmF0aW9uIGhhcyBzdGFydGVkIGJ1dCBoYXMgbm90IHlldCBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgSW5Qcm9ncmVzczoge1xyXG4gICAgZGlzcGxheTogXCJJbiBQcm9ncmVzc1wiLFxyXG4gICAgY29kZTogXCJpbi1wcm9ncmVzc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1hZG1pbi1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgYWRtaW5pc3RyYXRpb24gaGF2ZSBiZWVuIHRlbXBvcmFyaWx5IGhhbHRlZCwgYnV0IGFyZSBleHBlY3RlZCB0byBjb250aW51ZSBsYXRlci4gTWF5IGFsc28gYmUgY2FsbGVkIFwic3VzcGVuZGVkXCIuXHJcbiAgICovXHJcbiAgT25Ib2xkOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9uIEhvbGRcIixcclxuICAgIGNvZGU6IFwib24taG9sZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1hZG1pbi1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN0b3BwZWQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgYWRtaW5pc3RyYXRpb24gaGF2ZSBiZWVuIHBlcm1hbmVudGx5IGhhbHRlZCwgYmVmb3JlIGFsbCBvZiB0aGVtIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIFN0b3BwZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiU3RvcHBlZFwiLFxyXG4gICAgY29kZTogXCJzdG9wcGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tZWRpY2F0aW9uLWFkbWluLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZyBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyByZXF1ZXN0LiBOb3RlOiBUaGlzIGNvbmNlcHQgaXMgbm90IHRvIGJlIHVzZWQgZm9yIFwib3RoZXJcIiAtIG9uZSBvZiB0aGUgbGlzdGVkIHN0YXR1c2VzIGlzIHByZXN1bWVkIHRvIGFwcGx5LCBpdCdzIGp1c3Qgbm90IGtub3duIHdoaWNoIG9uZS5cclxuICAgKi9cclxuICBVbmtub3duOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVua25vd25cIixcclxuICAgIGNvZGU6IFwidW5rbm93blwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1hZG1pbi1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=