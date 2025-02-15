// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality|1.0.2
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified Substance.
 */
export const AllergyIntoleranceCriticalityCodings = {
    /**
     * CRITH: The potential clinical impact of a future reaction is estimated as high risk: exposure to substance may result in a life threatening or organ system threatening outcome. Future exposure to the Substance may be considered an absolute contra-indication.
     */
    HighRisk: {
        display: "High Risk",
        code: "CRITH",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
    },
    /**
     * CRITL: The potential clinical impact of a future reaction is estimated as low risk: exposure to substance is unlikely to result in a life threatening or organ system threatening outcome. Future exposure to the Substance is considered a relative contra-indication.
     */
    LowRisk: {
        display: "Low Risk",
        code: "CRITL",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
    },
    /**
     * CRITU: Unable to assess the potential clinical impact with the information available.
     */
    UnableToDetermine: {
        display: "Unable to determine",
        code: "CRITU",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsZXJneUludG9sZXJhbmNlQ3JpdGljYWxpdHlDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BbGxlcmd5SW50b2xlcmFuY2VDcml0aWNhbGl0eUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0ZBQW9GO0FBc0JwRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUEyQztJQUMxRjs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLHFEQUFxRDtLQUM5RDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUscURBQXFEO0tBQzlEO0lBQ0Q7O09BRUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLHFEQUFxRDtLQUM5RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWxsZXJneS1pbnRvbGVyYW5jZS1jcml0aWNhbGl0eXwxLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEVzdGltYXRlIG9mIHRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaGFybSwgb3Igc2VyaW91c25lc3MsIG9mIGEgcmVhY3Rpb24gdG8gYW4gaWRlbnRpZmllZCBTdWJzdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbGxlcmd5SW50b2xlcmFuY2VDcml0aWNhbGl0eUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogQ1JJVEg6IFRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaW1wYWN0IG9mIGEgZnV0dXJlIHJlYWN0aW9uIGlzIGVzdGltYXRlZCBhcyBoaWdoIHJpc2s6IGV4cG9zdXJlIHRvIHN1YnN0YW5jZSBtYXkgcmVzdWx0IGluIGEgbGlmZSB0aHJlYXRlbmluZyBvciBvcmdhbiBzeXN0ZW0gdGhyZWF0ZW5pbmcgb3V0Y29tZS4gRnV0dXJlIGV4cG9zdXJlIHRvIHRoZSBTdWJzdGFuY2UgbWF5IGJlIGNvbnNpZGVyZWQgYW4gYWJzb2x1dGUgY29udHJhLWluZGljYXRpb24uXHJcbiAgICovXHJcbiAgSGlnaFJpc2s6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ1JJVEw6IFRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaW1wYWN0IG9mIGEgZnV0dXJlIHJlYWN0aW9uIGlzIGVzdGltYXRlZCBhcyBsb3cgcmlzazogZXhwb3N1cmUgdG8gc3Vic3RhbmNlIGlzIHVubGlrZWx5IHRvIHJlc3VsdCBpbiBhIGxpZmUgdGhyZWF0ZW5pbmcgb3Igb3JnYW4gc3lzdGVtIHRocmVhdGVuaW5nIG91dGNvbWUuIEZ1dHVyZSBleHBvc3VyZSB0byB0aGUgU3Vic3RhbmNlIGlzIGNvbnNpZGVyZWQgYSByZWxhdGl2ZSBjb250cmEtaW5kaWNhdGlvbi5cclxuICAgKi9cclxuICBMb3dSaXNrOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENSSVRVOiBVbmFibGUgdG8gYXNzZXNzIHRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaW1wYWN0IHdpdGggdGhlIGluZm9ybWF0aW9uIGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBVbmFibGVUb0RldGVybWluZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEVzdGltYXRlIG9mIHRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaGFybSwgb3Igc2VyaW91c25lc3MsIG9mIGEgcmVhY3Rpb24gdG8gYW4gaWRlbnRpZmllZCBTdWJzdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWxsZXJneUludG9sZXJhbmNlQ3JpdGljYWxpdHlDb2RpbmdzOkFsbGVyZ3lJbnRvbGVyYW5jZUNyaXRpY2FsaXR5Q29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBDUklUSDogVGhlIHBvdGVudGlhbCBjbGluaWNhbCBpbXBhY3Qgb2YgYSBmdXR1cmUgcmVhY3Rpb24gaXMgZXN0aW1hdGVkIGFzIGhpZ2ggcmlzazogZXhwb3N1cmUgdG8gc3Vic3RhbmNlIG1heSByZXN1bHQgaW4gYSBsaWZlIHRocmVhdGVuaW5nIG9yIG9yZ2FuIHN5c3RlbSB0aHJlYXRlbmluZyBvdXRjb21lLiBGdXR1cmUgZXhwb3N1cmUgdG8gdGhlIFN1YnN0YW5jZSBtYXkgYmUgY29uc2lkZXJlZCBhbiBhYnNvbHV0ZSBjb250cmEtaW5kaWNhdGlvbi5cclxuICAgKi9cclxuICBIaWdoUmlzazoge1xyXG4gICAgZGlzcGxheTogXCJIaWdoIFJpc2tcIixcclxuICAgIGNvZGU6IFwiQ1JJVEhcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FsbGVyZ3ktaW50b2xlcmFuY2UtY3JpdGljYWxpdHlcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENSSVRMOiBUaGUgcG90ZW50aWFsIGNsaW5pY2FsIGltcGFjdCBvZiBhIGZ1dHVyZSByZWFjdGlvbiBpcyBlc3RpbWF0ZWQgYXMgbG93IHJpc2s6IGV4cG9zdXJlIHRvIHN1YnN0YW5jZSBpcyB1bmxpa2VseSB0byByZXN1bHQgaW4gYSBsaWZlIHRocmVhdGVuaW5nIG9yIG9yZ2FuIHN5c3RlbSB0aHJlYXRlbmluZyBvdXRjb21lLiBGdXR1cmUgZXhwb3N1cmUgdG8gdGhlIFN1YnN0YW5jZSBpcyBjb25zaWRlcmVkIGEgcmVsYXRpdmUgY29udHJhLWluZGljYXRpb24uXHJcbiAgICovXHJcbiAgTG93Umlzazoge1xyXG4gICAgZGlzcGxheTogXCJMb3cgUmlza1wiLFxyXG4gICAgY29kZTogXCJDUklUTFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWxsZXJneS1pbnRvbGVyYW5jZS1jcml0aWNhbGl0eVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ1JJVFU6IFVuYWJsZSB0byBhc3Nlc3MgdGhlIHBvdGVudGlhbCBjbGluaWNhbCBpbXBhY3Qgd2l0aCB0aGUgaW5mb3JtYXRpb24gYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIFVuYWJsZVRvRGV0ZXJtaW5lOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVuYWJsZSB0byBkZXRlcm1pbmVcIixcclxuICAgIGNvZGU6IFwiQ1JJVFVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FsbGVyZ3ktaW50b2xlcmFuY2UtY3JpdGljYWxpdHlcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=