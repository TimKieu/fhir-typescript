// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication|3.0.2
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export const AdjudicationCodes = {
    /**
     * benefit: Amount payable under the coverage
     */
    BenefitAmount: "benefit",
    /**
     * copay: Patient Co-Payment
     */
    CoPay: "copay",
    /**
     * deductible: Amount deducted from the eligible amount prior to adjudication
     */
    Deductable: "deductible",
    /**
     * eligible: Amount of the change which is considered for adjudication
     */
    EligibleAmount: "eligible",
    /**
     * eligpercent: Eligible Percentage
     */
    EligiblePercent: "eligpercent",
    /**
     * tax: Emergency Department
     */
    EmergencyDepartment: "tax",
    /**
     * total: Total submitted
     */
    Total: "total",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRqdWRpY2F0aW9uQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0FkanVkaWNhdGlvbkNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGlFQUFpRTtBQUVqRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9COztPQUVHO0lBQ0gsYUFBYSxFQUFFLFNBQVM7SUFDeEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsVUFBVTtJQUMxQjs7T0FFRztJQUNILGVBQWUsRUFBRSxhQUFhO0lBQzlCOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0NBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hZGp1ZGljYXRpb258My4wLjJcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBhIHNtYXR0ZXJpbmcgb2YgQWRqdWRpY2F0aW9uIFZhbHVlIGNvZGVzIHdoaWNoIGluY2x1ZGVzIGNvZGVzIHRvIGluZGljYXRlIHRoZSBhbW91bnRzIGVsaWdpYmxlIHVuZGVyIHRoZSBwbGFuLCB0aGUgYW1vdW50IG9mIGJlbmVmaXQsIGNvcGF5cyBldGMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWRqdWRpY2F0aW9uQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYmVuZWZpdDogQW1vdW50IHBheWFibGUgdW5kZXIgdGhlIGNvdmVyYWdlXHJcbiAgICovXHJcbiAgQmVuZWZpdEFtb3VudDogXCJiZW5lZml0XCIsXHJcbiAgLyoqXHJcbiAgICogY29wYXk6IFBhdGllbnQgQ28tUGF5bWVudFxyXG4gICAqL1xyXG4gIENvUGF5OiBcImNvcGF5XCIsXHJcbiAgLyoqXHJcbiAgICogZGVkdWN0aWJsZTogQW1vdW50IGRlZHVjdGVkIGZyb20gdGhlIGVsaWdpYmxlIGFtb3VudCBwcmlvciB0byBhZGp1ZGljYXRpb25cclxuICAgKi9cclxuICBEZWR1Y3RhYmxlOiBcImRlZHVjdGlibGVcIixcclxuICAvKipcclxuICAgKiBlbGlnaWJsZTogQW1vdW50IG9mIHRoZSBjaGFuZ2Ugd2hpY2ggaXMgY29uc2lkZXJlZCBmb3IgYWRqdWRpY2F0aW9uXHJcbiAgICovXHJcbiAgRWxpZ2libGVBbW91bnQ6IFwiZWxpZ2libGVcIixcclxuICAvKipcclxuICAgKiBlbGlncGVyY2VudDogRWxpZ2libGUgUGVyY2VudGFnZVxyXG4gICAqL1xyXG4gIEVsaWdpYmxlUGVyY2VudDogXCJlbGlncGVyY2VudFwiLFxyXG4gIC8qKlxyXG4gICAqIHRheDogRW1lcmdlbmN5IERlcGFydG1lbnRcclxuICAgKi9cclxuICBFbWVyZ2VuY3lEZXBhcnRtZW50OiBcInRheFwiLFxyXG4gIC8qKlxyXG4gICAqIHRvdGFsOiBUb3RhbCBzdWJtaXR0ZWRcclxuICAgKi9cclxuICBUb3RhbDogXCJ0b3RhbFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIGEgc21hdHRlcmluZyBvZiBBZGp1ZGljYXRpb24gVmFsdWUgY29kZXMgd2hpY2ggaW5jbHVkZXMgY29kZXMgdG8gaW5kaWNhdGUgdGhlIGFtb3VudHMgZWxpZ2libGUgdW5kZXIgdGhlIHBsYW4sIHRoZSBhbW91bnQgb2YgYmVuZWZpdCwgY29wYXlzIGV0Yy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFkanVkaWNhdGlvbkNvZGVUeXBlID0gdHlwZW9mIEFkanVkaWNhdGlvbkNvZGVzW2tleW9mIHR5cGVvZiBBZGp1ZGljYXRpb25Db2Rlc107XHJcbiJdfQ==