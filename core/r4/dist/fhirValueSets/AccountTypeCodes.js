// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/account-type|4.0.1
/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export const AccountTypeCodes = {
    /**
     * _ActAccountCode: An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
     */
    ActAccountCode: "_ActAccountCode",
    /**
     * ACCTRECEIVABLE: An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
     */
    AccountReceivable: "ACCTRECEIVABLE",
    /**
     * AE: American Express
     */
    AmericanExpress: "AE",
    /**
     * CASH: Cash
     */
    Cash: "CASH",
    /**
     * CC: Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
     */
    CreditCard: "CC",
    /**
     * DN: Diner's Club
     */
    DinerQuoteSClub: "DN",
    /**
     * DV: Discover Card
     */
    DiscoverCard: "DV",
    /**
     * MC: Master Card
     */
    MasterCard: "MC",
    /**
     * PBILLACCT: An account representing charges and credits (financial transactions) for a patient's encounter.
     */
    PatientBillingAccount: "PBILLACCT",
    /**
     * V: Visa
     */
    Visa: "V",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQWNjb3VudFR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxpRUFBaUU7QUFFakU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxpQkFBaUI7SUFDakM7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxnQkFBZ0I7SUFDbkM7O09BRUc7SUFDSCxlQUFlLEVBQUUsSUFBSTtJQUNyQjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxVQUFVLEVBQUUsSUFBSTtJQUNoQjs7T0FFRztJQUNILGVBQWUsRUFBRSxJQUFJO0lBQ3JCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLElBQUk7SUFDbEI7O09BRUc7SUFDSCxVQUFVLEVBQUUsSUFBSTtJQUNoQjs7T0FFRztJQUNILHFCQUFxQixFQUFFLFdBQVc7SUFDbEM7O09BRUc7SUFDSCxJQUFJLEVBQUUsR0FBRztDQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWNjb3VudC10eXBlfDQuMC4xXHJcblxyXG4vKipcclxuICogVGhpcyBleGFtcGxlcyB2YWx1ZSBzZXQgZGVmaW5lcyB0aGUgc2V0IG9mIGNvZGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSB0eXBlIG9mIGFuIGFjY291bnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWNjb3VudFR5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBfQWN0QWNjb3VudENvZGU6IEFuIGFjY291bnQgcmVwcmVzZW50cyBhIGdyb3VwaW5nIG9mIGZpbmFuY2lhbCB0cmFuc2FjdGlvbnMgdGhhdCBhcmUgdHJhY2tlZCBhbmQgcmVwb3J0ZWQgdG9nZXRoZXIgd2l0aCBhIHNpbmdsZSBiYWxhbmNlLiBcdCBcdEV4YW1wbGVzIG9mIGFjY291bnQgY29kZXMgKHR5cGVzKSBhcmUgUGF0aWVudCBiaWxsaW5nIGFjY291bnRzIChjb2xsZWN0aW9uIG9mIGNoYXJnZXMpLCBDb3N0IGNlbnRlcnM7IENhc2guXHJcbiAgICovXHJcbiAgQWN0QWNjb3VudENvZGU6IFwiX0FjdEFjY291bnRDb2RlXCIsXHJcbiAgLyoqXHJcbiAgICogQUNDVFJFQ0VJVkFCTEU6IEFuIGFjY291bnQgZm9yIGNvbGxlY3RpbmcgY2hhcmdlcywgcmV2ZXJzYWxzLCBhZGp1c3RtZW50cyBhbmQgcGF5bWVudHMsIGluY2x1ZGluZyBkZWR1Y3RpYmxlcywgY29wYXltZW50cywgY29pbnN1cmFuY2UgKGZpbmFuY2lhbCB0cmFuc2FjdGlvbnMpIGNyZWRpdGVkIG9yIGRlYml0ZWQgdG8gdGhlIGFjY291bnQgcmVjZWl2YWJsZSBhY2NvdW50IGZvciBhIHBhdGllbnQncyBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgQWNjb3VudFJlY2VpdmFibGU6IFwiQUNDVFJFQ0VJVkFCTEVcIixcclxuICAvKipcclxuICAgKiBBRTogQW1lcmljYW4gRXhwcmVzc1xyXG4gICAqL1xyXG4gIEFtZXJpY2FuRXhwcmVzczogXCJBRVwiLFxyXG4gIC8qKlxyXG4gICAqIENBU0g6IENhc2hcclxuICAgKi9cclxuICBDYXNoOiBcIkNBU0hcIixcclxuICAvKipcclxuICAgKiBDQzogRGVzY3JpcHRpb246IFR5cGVzIG9mIGFkdmFuY2UgcGF5bWVudCB0byBiZSBtYWRlIG9uIGEgcGxhc3RpYyBjYXJkIHVzdWFsbHkgaXNzdWVkIGJ5IGEgZmluYW5jaWFsIGluc3RpdHV0aW9uIHVzZWQgb2YgcHVyY2hhc2luZyBzZXJ2aWNlcyBhbmQvb3IgcHJvZHVjdHMuXHJcbiAgICovXHJcbiAgQ3JlZGl0Q2FyZDogXCJDQ1wiLFxyXG4gIC8qKlxyXG4gICAqIEROOiBEaW5lcidzIENsdWJcclxuICAgKi9cclxuICBEaW5lclF1b3RlU0NsdWI6IFwiRE5cIixcclxuICAvKipcclxuICAgKiBEVjogRGlzY292ZXIgQ2FyZFxyXG4gICAqL1xyXG4gIERpc2NvdmVyQ2FyZDogXCJEVlwiLFxyXG4gIC8qKlxyXG4gICAqIE1DOiBNYXN0ZXIgQ2FyZFxyXG4gICAqL1xyXG4gIE1hc3RlckNhcmQ6IFwiTUNcIixcclxuICAvKipcclxuICAgKiBQQklMTEFDQ1Q6IEFuIGFjY291bnQgcmVwcmVzZW50aW5nIGNoYXJnZXMgYW5kIGNyZWRpdHMgKGZpbmFuY2lhbCB0cmFuc2FjdGlvbnMpIGZvciBhIHBhdGllbnQncyBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgUGF0aWVudEJpbGxpbmdBY2NvdW50OiBcIlBCSUxMQUNDVFwiLFxyXG4gIC8qKlxyXG4gICAqIFY6IFZpc2FcclxuICAgKi9cclxuICBWaXNhOiBcIlZcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4YW1wbGVzIHZhbHVlIHNldCBkZWZpbmVzIHRoZSBzZXQgb2YgY29kZXMgdGhhdCBjYW4gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIHR5cGUgb2YgYW4gYWNjb3VudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFjY291bnRUeXBlQ29kZVR5cGUgPSB0eXBlb2YgQWNjb3VudFR5cGVDb2Rlc1trZXlvZiB0eXBlb2YgQWNjb3VudFR5cGVDb2Rlc107XHJcbiJdfQ==