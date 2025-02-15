// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contact-point-use|1.0.2
/**
 * Use of contact point
 */
export const ContactPointUseCodes = {
    /**
     * home: A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.
     */
    Home: "home",
    /**
     * mobile: A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.
     */
    Mobile: "mobile",
    /**
     * old: This contact point is no longer in use (or was never correct, but retained for records).
     */
    Old: "old",
    /**
     * temp: A temporary contact point. The period can provide more detailed information.
     */
    Temp: "temp",
    /**
     * work: An office contact point. First choice for business related contacts during business hours.
     */
    Work: "work",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBvaW50VXNlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbnRhY3RQb2ludFVzZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQUV0RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsSUFBSSxFQUFFLE1BQU07SUFDWjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsR0FBRyxFQUFFLEtBQUs7SUFDVjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29udGFjdC1wb2ludC11c2V8MS4wLjJcclxuXHJcbi8qKlxyXG4gKiBVc2Ugb2YgY29udGFjdCBwb2ludFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnRhY3RQb2ludFVzZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGhvbWU6IEEgY29tbXVuaWNhdGlvbiBjb250YWN0IHBvaW50IGF0IGEgaG9tZTsgYXR0ZW1wdGVkIGNvbnRhY3RzIGZvciBidXNpbmVzcyBwdXJwb3NlcyBtaWdodCBpbnRydWRlIHByaXZhY3kgYW5kIGNoYW5jZXMgYXJlIG9uZSB3aWxsIGNvbnRhY3QgZmFtaWx5IG9yIG90aGVyIGhvdXNlaG9sZCBtZW1iZXJzIGluc3RlYWQgb2YgdGhlIHBlcnNvbiBvbmUgd2lzaGVzIHRvIGNhbGwuIFR5cGljYWxseSB1c2VkIHdpdGggdXJnZW50IGNhc2VzLCBvciBpZiBubyBvdGhlciBjb250YWN0cyBhcmUgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIEhvbWU6IFwiaG9tZVwiLFxyXG4gIC8qKlxyXG4gICAqIG1vYmlsZTogQSB0ZWxlY29tbXVuaWNhdGlvbiBkZXZpY2UgdGhhdCBtb3ZlcyBhbmQgc3RheXMgd2l0aCBpdHMgb3duZXIuIE1heSBoYXZlIGNoYXJhY3RlcmlzdGljcyBvZiBhbGwgb3RoZXIgdXNlIGNvZGVzLCBzdWl0YWJsZSBmb3IgdXJnZW50IG1hdHRlcnMsIG5vdCB0aGUgZmlyc3QgY2hvaWNlIGZvciByb3V0aW5lIGJ1c2luZXNzLlxyXG4gICAqL1xyXG4gIE1vYmlsZTogXCJtb2JpbGVcIixcclxuICAvKipcclxuICAgKiBvbGQ6IFRoaXMgY29udGFjdCBwb2ludCBpcyBubyBsb25nZXIgaW4gdXNlIChvciB3YXMgbmV2ZXIgY29ycmVjdCwgYnV0IHJldGFpbmVkIGZvciByZWNvcmRzKS5cclxuICAgKi9cclxuICBPbGQ6IFwib2xkXCIsXHJcbiAgLyoqXHJcbiAgICogdGVtcDogQSB0ZW1wb3JhcnkgY29udGFjdCBwb2ludC4gVGhlIHBlcmlvZCBjYW4gcHJvdmlkZSBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIFRlbXA6IFwidGVtcFwiLFxyXG4gIC8qKlxyXG4gICAqIHdvcms6IEFuIG9mZmljZSBjb250YWN0IHBvaW50LiBGaXJzdCBjaG9pY2UgZm9yIGJ1c2luZXNzIHJlbGF0ZWQgY29udGFjdHMgZHVyaW5nIGJ1c2luZXNzIGhvdXJzLlxyXG4gICAqL1xyXG4gIFdvcms6IFwid29ya1wiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFVzZSBvZiBjb250YWN0IHBvaW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb250YWN0UG9pbnRVc2VDb2RlVHlwZSA9IHR5cGVvZiBDb250YWN0UG9pbnRVc2VDb2Rlc1trZXlvZiB0eXBlb2YgQ29udGFjdFBvaW50VXNlQ29kZXNdO1xyXG4iXX0=