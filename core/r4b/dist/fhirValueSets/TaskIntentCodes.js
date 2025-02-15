// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-intent|4.3.0
/**
 * Distinguishes whether the task is a proposal, plan or full order.
 */
export const TaskIntentCodes = {
    /**
     * filler-order: The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    FillerOrder: "filler-order",
    /**
     * instance-order: An order created in fulfillment of a broader order that represents the authorization for a single activity occurrence.  E.g. The administration of a single dose of a drug.
     */
    InstanceOrder: "instance-order",
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    Option: "option",
    /**
     * order: The request represents a request/demand and authorization for action by a Practitioner.
     */
    Order: "order",
    /**
     * original-order: The request represents an original authorization for action.
     */
    OriginalOrder: "original-order",
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    Plan: "plan",
    /**
     * proposal: The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    Proposal: "proposal",
    /**
     * reflex-order: The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization.
     */
    ReflexOrder: "reflex-order",
    /**
     * unknown: The intent is not known.  When dealing with Task, it's not always known (or relevant) how the task was initiated - i.e. whether it was proposed, planned, ordered or just done spontaneously.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza0ludGVudENvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9UYXNrSW50ZW50Q29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsZ0VBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGNBQWM7SUFDM0I7O09BRUc7SUFDSCxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9COztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFdBQVcsRUFBRSxjQUFjO0lBQzNCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC90YXNrLWludGVudHw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIERpc3Rpbmd1aXNoZXMgd2hldGhlciB0aGUgdGFzayBpcyBhIHByb3Bvc2FsLCBwbGFuIG9yIGZ1bGwgb3JkZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGFza0ludGVudENvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGZpbGxlci1vcmRlcjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyB0aGUgdmlldyBvZiBhbiBhdXRob3JpemF0aW9uIGluc3RhbnRpYXRlZCBieSBhIGZ1bGZpbGxpbmcgc3lzdGVtIHJlcHJlc2VudGluZyB0aGUgZGV0YWlscyBvZiB0aGUgZnVsZmlsbGVyJ3MgaW50ZW50aW9uIHRvIGFjdCB1cG9uIGEgc3VibWl0dGVkIG9yZGVyLlxyXG4gICAqL1xyXG4gIEZpbGxlck9yZGVyOiBcImZpbGxlci1vcmRlclwiLFxyXG4gIC8qKlxyXG4gICAqIGluc3RhbmNlLW9yZGVyOiBBbiBvcmRlciBjcmVhdGVkIGluIGZ1bGZpbGxtZW50IG9mIGEgYnJvYWRlciBvcmRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGF1dGhvcml6YXRpb24gZm9yIGEgc2luZ2xlIGFjdGl2aXR5IG9jY3VycmVuY2UuICBFLmcuIFRoZSBhZG1pbmlzdHJhdGlvbiBvZiBhIHNpbmdsZSBkb3NlIG9mIGEgZHJ1Zy5cclxuICAgKi9cclxuICBJbnN0YW5jZU9yZGVyOiBcImluc3RhbmNlLW9yZGVyXCIsXHJcbiAgLyoqXHJcbiAgICogb3B0aW9uOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGEgY29tcG9uZW50IG9yIG9wdGlvbiBmb3IgYSBSZXF1ZXN0R3JvdXAgdGhhdCBlc3RhYmxpc2hlcyB0aW1pbmcsIGNvbmRpdGlvbmFsaXR5IGFuZC9vciBvdGhlciBjb25zdHJhaW50cyBhbW9uZyBhIHNldCBvZiByZXF1ZXN0cy4gIFJlZmVyIHRvIFtbW1JlcXVlc3RHcm91cF1dXSBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBvbiBob3cgdGhpcyBzdGF0dXMgaXMgdXNlZC5cclxuICAgKi9cclxuICBPcHRpb246IFwib3B0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogb3JkZXI6IFRoZSByZXF1ZXN0IHJlcHJlc2VudHMgYSByZXF1ZXN0L2RlbWFuZCBhbmQgYXV0aG9yaXphdGlvbiBmb3IgYWN0aW9uIGJ5IGEgUHJhY3RpdGlvbmVyLlxyXG4gICAqL1xyXG4gIE9yZGVyOiBcIm9yZGVyXCIsXHJcbiAgLyoqXHJcbiAgICogb3JpZ2luYWwtb3JkZXI6IFRoZSByZXF1ZXN0IHJlcHJlc2VudHMgYW4gb3JpZ2luYWwgYXV0aG9yaXphdGlvbiBmb3IgYWN0aW9uLlxyXG4gICAqL1xyXG4gIE9yaWdpbmFsT3JkZXI6IFwib3JpZ2luYWwtb3JkZXJcIixcclxuICAvKipcclxuICAgKiBwbGFuOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGFuIGludGVudGlvbiB0byBlbnN1cmUgc29tZXRoaW5nIG9jY3VycyB3aXRob3V0IHByb3ZpZGluZyBhbiBhdXRob3JpemF0aW9uIGZvciBvdGhlcnMgdG8gYWN0LlxyXG4gICAqL1xyXG4gIFBsYW46IFwicGxhblwiLFxyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2FsOiBUaGUgcmVxdWVzdCBpcyBhIHN1Z2dlc3Rpb24gbWFkZSBieSBzb21lb25lL3NvbWV0aGluZyB0aGF0IGRvZXMgbm90IGhhdmUgYW4gaW50ZW50aW9uIHRvIGVuc3VyZSBpdCBvY2N1cnMgYW5kIHdpdGhvdXQgcHJvdmlkaW5nIGFuIGF1dGhvcml6YXRpb24gdG8gYWN0LlxyXG4gICAqL1xyXG4gIFByb3Bvc2FsOiBcInByb3Bvc2FsXCIsXHJcbiAgLyoqXHJcbiAgICogcmVmbGV4LW9yZGVyOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGFuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIHN1cHBsZW1lbnRhbCBhdXRob3JpemF0aW9uIGZvciBhY3Rpb24gYmFzZWQgb24gYSBwYXJlbnQgYXV0aG9yaXphdGlvbiB0b2dldGhlciB3aXRoIGluaXRpYWwgcmVzdWx0cyBvZiB0aGUgYWN0aW9uIHRha2VuIGFnYWluc3QgdGhhdCBwYXJlbnQgYXV0aG9yaXphdGlvbi5cclxuICAgKi9cclxuICBSZWZsZXhPcmRlcjogXCJyZWZsZXgtb3JkZXJcIixcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgaW50ZW50IGlzIG5vdCBrbm93bi4gIFdoZW4gZGVhbGluZyB3aXRoIFRhc2ssIGl0J3Mgbm90IGFsd2F5cyBrbm93biAob3IgcmVsZXZhbnQpIGhvdyB0aGUgdGFzayB3YXMgaW5pdGlhdGVkIC0gaS5lLiB3aGV0aGVyIGl0IHdhcyBwcm9wb3NlZCwgcGxhbm5lZCwgb3JkZXJlZCBvciBqdXN0IGRvbmUgc3BvbnRhbmVvdXNseS5cclxuICAgKi9cclxuICBVbmtub3duOiBcInVua25vd25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBEaXN0aW5ndWlzaGVzIHdoZXRoZXIgdGhlIHRhc2sgaXMgYSBwcm9wb3NhbCwgcGxhbiBvciBmdWxsIG9yZGVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGFza0ludGVudENvZGVUeXBlID0gdHlwZW9mIFRhc2tJbnRlbnRDb2Rlc1trZXlvZiB0eXBlb2YgVGFza0ludGVudENvZGVzXTtcclxuIl19