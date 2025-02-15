// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/chargeitem-status|3.0.2
/**
 * Codes identifying the stage lifecycle stage of a ChargeItem
 */
export const ChargeitemStatusCodes = {
    /**
     * aborted: The processing of the charge was aborted
     */
    Aborted: "aborted",
    /**
     * billable: The charge item is ready for billing
     */
    Billable: "billable",
    /**
     * billed: The charge item has been billed (e.g. a billing engine has generated financial transactions by applying the associated ruled for the charge item to the context of the Encounter, and placed them into Claims/Invoices
     */
    Billed: "billed",
    /**
     * entered-in-error: The charge item has been entered in error and should not be processed for billing
     */
    EnteredInError: "entered-in-error",
    /**
     * not-billable: The charge item has been determined to be not billable (e.g. due to rules associated with the billing code)
     */
    NotBillable: "not-billable",
    /**
     * planned: The charge item has been entered, but the charged service is not  yet complete, so it shall not be billed yet but might be used in the context of pre-authorization
     */
    Planned: "planned",
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this charge item  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmdlaXRlbVN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9DaGFyZ2VpdGVtU3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsc0VBQXNFO0FBRXRFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUc7SUFDbkM7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGNBQWM7SUFDM0I7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jaGFyZ2VpdGVtLXN0YXR1c3wzLjAuMlxyXG5cclxuLyoqXHJcbiAqIENvZGVzIGlkZW50aWZ5aW5nIHRoZSBzdGFnZSBsaWZlY3ljbGUgc3RhZ2Ugb2YgYSBDaGFyZ2VJdGVtXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ2hhcmdlaXRlbVN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFib3J0ZWQ6IFRoZSBwcm9jZXNzaW5nIG9mIHRoZSBjaGFyZ2Ugd2FzIGFib3J0ZWRcclxuICAgKi9cclxuICBBYm9ydGVkOiBcImFib3J0ZWRcIixcclxuICAvKipcclxuICAgKiBiaWxsYWJsZTogVGhlIGNoYXJnZSBpdGVtIGlzIHJlYWR5IGZvciBiaWxsaW5nXHJcbiAgICovXHJcbiAgQmlsbGFibGU6IFwiYmlsbGFibGVcIixcclxuICAvKipcclxuICAgKiBiaWxsZWQ6IFRoZSBjaGFyZ2UgaXRlbSBoYXMgYmVlbiBiaWxsZWQgKGUuZy4gYSBiaWxsaW5nIGVuZ2luZSBoYXMgZ2VuZXJhdGVkIGZpbmFuY2lhbCB0cmFuc2FjdGlvbnMgYnkgYXBwbHlpbmcgdGhlIGFzc29jaWF0ZWQgcnVsZWQgZm9yIHRoZSBjaGFyZ2UgaXRlbSB0byB0aGUgY29udGV4dCBvZiB0aGUgRW5jb3VudGVyLCBhbmQgcGxhY2VkIHRoZW0gaW50byBDbGFpbXMvSW52b2ljZXNcclxuICAgKi9cclxuICBCaWxsZWQ6IFwiYmlsbGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIGNoYXJnZSBpdGVtIGhhcyBiZWVuIGVudGVyZWQgaW4gZXJyb3IgYW5kIHNob3VsZCBub3QgYmUgcHJvY2Vzc2VkIGZvciBiaWxsaW5nXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC1iaWxsYWJsZTogVGhlIGNoYXJnZSBpdGVtIGhhcyBiZWVuIGRldGVybWluZWQgdG8gYmUgbm90IGJpbGxhYmxlIChlLmcuIGR1ZSB0byBydWxlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGJpbGxpbmcgY29kZSlcclxuICAgKi9cclxuICBOb3RCaWxsYWJsZTogXCJub3QtYmlsbGFibGVcIixcclxuICAvKipcclxuICAgKiBwbGFubmVkOiBUaGUgY2hhcmdlIGl0ZW0gaGFzIGJlZW4gZW50ZXJlZCwgYnV0IHRoZSBjaGFyZ2VkIHNlcnZpY2UgaXMgbm90ICB5ZXQgY29tcGxldGUsIHNvIGl0IHNoYWxsIG5vdCBiZSBiaWxsZWQgeWV0IGJ1dCBtaWdodCBiZSB1c2VkIGluIHRoZSBjb250ZXh0IG9mIHByZS1hdXRob3JpemF0aW9uXHJcbiAgICovXHJcbiAgUGxhbm5lZDogXCJwbGFubmVkXCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZyBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyBjaGFyZ2UgaXRlbSAgTm90ZTogVGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciBcIm90aGVyXCIgLSBvbmUgb2YgdGhlIGxpc3RlZCBzdGF0dXNlcyBpcyBwcmVzdW1lZCB0byBhcHBseSwgaXQncyBqdXN0IG5vdCBrbm93biB3aGljaCBvbmUuXHJcbiAgICovXHJcbiAgVW5rbm93bjogXCJ1bmtub3duXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQ29kZXMgaWRlbnRpZnlpbmcgdGhlIHN0YWdlIGxpZmVjeWNsZSBzdGFnZSBvZiBhIENoYXJnZUl0ZW1cclxuICovXHJcbmV4cG9ydCB0eXBlIENoYXJnZWl0ZW1TdGF0dXNDb2RlVHlwZSA9IHR5cGVvZiBDaGFyZ2VpdGVtU3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIENoYXJnZWl0ZW1TdGF0dXNDb2Rlc107XHJcbiJdfQ==