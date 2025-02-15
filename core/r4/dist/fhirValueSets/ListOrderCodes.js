// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/list-order|4.0.1
/**
 * Base values for the order of the items in a list resource.
 */
export const ListOrderCodes = {
    /**
     * alphabetic: The list is sorted alphabetically by an unspecified property of the items in the list.
     */
    SortedAlphabetically: "alphabetic",
    /**
     * category: The list is sorted categorically by an unspecified property of the items in the list.
     */
    SortedByCategory: "category",
    /**
     * entry-date: The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
     */
    SortedByItemDate: "entry-date",
    /**
     * event-date: The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
     */
    SortedByEventDate: "event-date",
    /**
     * patient: The list is sorted by patient, with items for each patient grouped together.
     */
    SortedByPatient: "patient",
    /**
     * priority: The list is sorted by priority. The exact method in which priority has been determined is not specified.
     */
    SortedByPriority: "priority",
    /**
     * system: The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
     */
    SortedBySystem: "system",
    /**
     * user: The list was sorted by a user. The criteria the user used are not specified.
     */
    SortedByUser: "user",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdE9yZGVyQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0xpc3RPcmRlckNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLCtEQUErRDtBQUUvRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRztJQUM1Qjs7T0FFRztJQUNILG9CQUFvQixFQUFFLFlBQVk7SUFDbEM7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxVQUFVO0lBQzVCOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUUsWUFBWTtJQUM5Qjs7T0FFRztJQUNILGlCQUFpQixFQUFFLFlBQVk7SUFDL0I7O09BRUc7SUFDSCxlQUFlLEVBQUUsU0FBUztJQUMxQjs7T0FFRztJQUNILGdCQUFnQixFQUFFLFVBQVU7SUFDNUI7O09BRUc7SUFDSCxjQUFjLEVBQUUsUUFBUTtJQUN4Qjs7T0FFRztJQUNILFlBQVksRUFBRSxNQUFNO0NBQ1osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9saXN0LW9yZGVyfDQuMC4xXHJcblxyXG4vKipcclxuICogQmFzZSB2YWx1ZXMgZm9yIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gYSBsaXN0IHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IExpc3RPcmRlckNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFscGhhYmV0aWM6IFRoZSBsaXN0IGlzIHNvcnRlZCBhbHBoYWJldGljYWxseSBieSBhbiB1bnNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgaXRlbXMgaW4gdGhlIGxpc3QuXHJcbiAgICovXHJcbiAgU29ydGVkQWxwaGFiZXRpY2FsbHk6IFwiYWxwaGFiZXRpY1wiLFxyXG4gIC8qKlxyXG4gICAqIGNhdGVnb3J5OiBUaGUgbGlzdCBpcyBzb3J0ZWQgY2F0ZWdvcmljYWxseSBieSBhbiB1bnNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgaXRlbXMgaW4gdGhlIGxpc3QuXHJcbiAgICovXHJcbiAgU29ydGVkQnlDYXRlZ29yeTogXCJjYXRlZ29yeVwiLFxyXG4gIC8qKlxyXG4gICAqIGVudHJ5LWRhdGU6IFRoZSBsaXN0IGlzIHNvcnRlZCBieSB0aGUgZGF0ZSB0aGUgaXRlbSB3YXMgYWRkZWQgdG8gdGhlIGxpc3QuIE5vdGUgdGhhdCB0aGUgZGF0ZSBhZGRlZCB0byB0aGUgbGlzdCBpcyBub3QgZXhwbGljaXQgaW4gdGhlIGxpc3QgaXRzZWxmLlxyXG4gICAqL1xyXG4gIFNvcnRlZEJ5SXRlbURhdGU6IFwiZW50cnktZGF0ZVwiLFxyXG4gIC8qKlxyXG4gICAqIGV2ZW50LWRhdGU6IFRoZSBsaXN0IGlzIHNvcnRlZCBieSB0aGUgZGF0YSBvZiB0aGUgZXZlbnQuIFRoaXMgY2FuIGJlIHVzZWQgd2hlbiB0aGUgbGlzdCBoYXMgaXRlbXMgd2hpY2ggYXJlIGRhdGVzIHdpdGggcGFzdCBvciBmdXR1cmUgZXZlbnRzLlxyXG4gICAqL1xyXG4gIFNvcnRlZEJ5RXZlbnREYXRlOiBcImV2ZW50LWRhdGVcIixcclxuICAvKipcclxuICAgKiBwYXRpZW50OiBUaGUgbGlzdCBpcyBzb3J0ZWQgYnkgcGF0aWVudCwgd2l0aCBpdGVtcyBmb3IgZWFjaCBwYXRpZW50IGdyb3VwZWQgdG9nZXRoZXIuXHJcbiAgICovXHJcbiAgU29ydGVkQnlQYXRpZW50OiBcInBhdGllbnRcIixcclxuICAvKipcclxuICAgKiBwcmlvcml0eTogVGhlIGxpc3QgaXMgc29ydGVkIGJ5IHByaW9yaXR5LiBUaGUgZXhhY3QgbWV0aG9kIGluIHdoaWNoIHByaW9yaXR5IGhhcyBiZWVuIGRldGVybWluZWQgaXMgbm90IHNwZWNpZmllZC5cclxuICAgKi9cclxuICBTb3J0ZWRCeVByaW9yaXR5OiBcInByaW9yaXR5XCIsXHJcbiAgLyoqXHJcbiAgICogc3lzdGVtOiBUaGUgbGlzdCB3YXMgc29ydGVkIGJ5IHRoZSBzeXN0ZW0uIFRoZSBjcml0ZXJpYSB0aGUgdXNlciB1c2VkIGFyZSBub3Qgc3BlY2lmaWVkOyBkZWZpbmUgYWRkaXRpb25hbCBjb2RlcyB0byBzcGVjaWZ5IGEgcGFydGljdWxhciBvcmRlciAob3IgdXNlIG90aGVyIGRlZmluZWQgY29kZXMpLlxyXG4gICAqL1xyXG4gIFNvcnRlZEJ5U3lzdGVtOiBcInN5c3RlbVwiLFxyXG4gIC8qKlxyXG4gICAqIHVzZXI6IFRoZSBsaXN0IHdhcyBzb3J0ZWQgYnkgYSB1c2VyLiBUaGUgY3JpdGVyaWEgdGhlIHVzZXIgdXNlZCBhcmUgbm90IHNwZWNpZmllZC5cclxuICAgKi9cclxuICBTb3J0ZWRCeVVzZXI6IFwidXNlclwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgdmFsdWVzIGZvciB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIGEgbGlzdCByZXNvdXJjZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIExpc3RPcmRlckNvZGVUeXBlID0gdHlwZW9mIExpc3RPcmRlckNvZGVzW2tleW9mIHR5cGVvZiBMaXN0T3JkZXJDb2Rlc107XHJcbiJdfQ==