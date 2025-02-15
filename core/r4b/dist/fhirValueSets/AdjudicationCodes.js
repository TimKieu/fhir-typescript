// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication|4.3.0
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
     * deductible: Amount deducted from the eligible amount prior to adjudication.
     */
    Deductible: "deductible",
    /**
     * eligible: Amount of the change which is considered for adjudication.
     */
    EligibleAmount: "eligible",
    /**
     * eligpercent: Eligible Percentage.
     */
    EligiblePercent: "eligpercent",
    /**
     * submitted: The total submitted amount for the claim or group or line item.
     */
    SubmittedAmount: "submitted",
    /**
     * tax: The amount of tax.
     */
    Tax: "tax",
    /**
     * unallocdeduct: The amount of deductible which could not allocated to other line items.
     */
    UnallocatedDeductible: "unallocdeduct",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRqdWRpY2F0aW9uQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0FkanVkaWNhdGlvbkNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLGlFQUFpRTtBQUVqRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9COztPQUVHO0lBQ0gsYUFBYSxFQUFFLFNBQVM7SUFDeEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsVUFBVTtJQUMxQjs7T0FFRztJQUNILGVBQWUsRUFBRSxhQUFhO0lBQzlCOztPQUVHO0lBQ0gsZUFBZSxFQUFFLFdBQVc7SUFDNUI7O09BRUc7SUFDSCxHQUFHLEVBQUUsS0FBSztJQUNWOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsZUFBZTtDQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hZGp1ZGljYXRpb258NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBhIHNtYXR0ZXJpbmcgb2YgQWRqdWRpY2F0aW9uIFZhbHVlIGNvZGVzIHdoaWNoIGluY2x1ZGVzIGNvZGVzIHRvIGluZGljYXRlIHRoZSBhbW91bnRzIGVsaWdpYmxlIHVuZGVyIHRoZSBwbGFuLCB0aGUgYW1vdW50IG9mIGJlbmVmaXQsIGNvcGF5cyBldGMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWRqdWRpY2F0aW9uQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYmVuZWZpdDogQW1vdW50IHBheWFibGUgdW5kZXIgdGhlIGNvdmVyYWdlXHJcbiAgICovXHJcbiAgQmVuZWZpdEFtb3VudDogXCJiZW5lZml0XCIsXHJcbiAgLyoqXHJcbiAgICogY29wYXk6IFBhdGllbnQgQ28tUGF5bWVudFxyXG4gICAqL1xyXG4gIENvUGF5OiBcImNvcGF5XCIsXHJcbiAgLyoqXHJcbiAgICogZGVkdWN0aWJsZTogQW1vdW50IGRlZHVjdGVkIGZyb20gdGhlIGVsaWdpYmxlIGFtb3VudCBwcmlvciB0byBhZGp1ZGljYXRpb24uXHJcbiAgICovXHJcbiAgRGVkdWN0aWJsZTogXCJkZWR1Y3RpYmxlXCIsXHJcbiAgLyoqXHJcbiAgICogZWxpZ2libGU6IEFtb3VudCBvZiB0aGUgY2hhbmdlIHdoaWNoIGlzIGNvbnNpZGVyZWQgZm9yIGFkanVkaWNhdGlvbi5cclxuICAgKi9cclxuICBFbGlnaWJsZUFtb3VudDogXCJlbGlnaWJsZVwiLFxyXG4gIC8qKlxyXG4gICAqIGVsaWdwZXJjZW50OiBFbGlnaWJsZSBQZXJjZW50YWdlLlxyXG4gICAqL1xyXG4gIEVsaWdpYmxlUGVyY2VudDogXCJlbGlncGVyY2VudFwiLFxyXG4gIC8qKlxyXG4gICAqIHN1Ym1pdHRlZDogVGhlIHRvdGFsIHN1Ym1pdHRlZCBhbW91bnQgZm9yIHRoZSBjbGFpbSBvciBncm91cCBvciBsaW5lIGl0ZW0uXHJcbiAgICovXHJcbiAgU3VibWl0dGVkQW1vdW50OiBcInN1Ym1pdHRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHRheDogVGhlIGFtb3VudCBvZiB0YXguXHJcbiAgICovXHJcbiAgVGF4OiBcInRheFwiLFxyXG4gIC8qKlxyXG4gICAqIHVuYWxsb2NkZWR1Y3Q6IFRoZSBhbW91bnQgb2YgZGVkdWN0aWJsZSB3aGljaCBjb3VsZCBub3QgYWxsb2NhdGVkIHRvIG90aGVyIGxpbmUgaXRlbXMuXHJcbiAgICovXHJcbiAgVW5hbGxvY2F0ZWREZWR1Y3RpYmxlOiBcInVuYWxsb2NkZWR1Y3RcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBhIHNtYXR0ZXJpbmcgb2YgQWRqdWRpY2F0aW9uIFZhbHVlIGNvZGVzIHdoaWNoIGluY2x1ZGVzIGNvZGVzIHRvIGluZGljYXRlIHRoZSBhbW91bnRzIGVsaWdpYmxlIHVuZGVyIHRoZSBwbGFuLCB0aGUgYW1vdW50IG9mIGJlbmVmaXQsIGNvcGF5cyBldGMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBZGp1ZGljYXRpb25Db2RlVHlwZSA9IHR5cGVvZiBBZGp1ZGljYXRpb25Db2Rlc1trZXlvZiB0eXBlb2YgQWRqdWRpY2F0aW9uQ29kZXNdO1xyXG4iXX0=