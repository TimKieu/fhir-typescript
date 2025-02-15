// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/versioning-policy|4.3.0
/**
 * How the system supports versioning for a resource.
 */
export const VersioningPolicyCodings = {
    /**
     * no-version: VersionId meta-property is not supported (server) or used (client).
     */
    NoVersionIdSupport: {
        display: "No VersionId Support",
        code: "no-version",
        system: "http://hl7.org/fhir/versioning-policy",
    },
    /**
     * versioned: VersionId meta-property is supported (server) or used (client).
     */
    Versioned: {
        display: "Versioned",
        code: "versioned",
        system: "http://hl7.org/fhir/versioning-policy",
    },
    /**
     * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    VersionIdTrackedFully: {
        display: "VersionId tracked fully",
        code: "versioned-update",
        system: "http://hl7.org/fhir/versioning-policy",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyc2lvbmluZ1BvbGljeUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1ZlcnNpb25pbmdQb2xpY3lDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQXNCdEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBOEI7SUFDaEU7O09BRUc7SUFDSCxrQkFBa0IsRUFBRTtRQUNsQixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILHFCQUFxQixFQUFFO1FBQ3JCLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdmVyc2lvbmluZy1wb2xpY3l8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBIb3cgdGhlIHN5c3RlbSBzdXBwb3J0cyB2ZXJzaW9uaW5nIGZvciBhIHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVmVyc2lvbmluZ1BvbGljeUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogbm8tdmVyc2lvbjogVmVyc2lvbklkIG1ldGEtcHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCAoc2VydmVyKSBvciB1c2VkIChjbGllbnQpLlxyXG4gICAqL1xyXG4gIE5vVmVyc2lvbklkU3VwcG9ydDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB2ZXJzaW9uZWQ6IFZlcnNpb25JZCBtZXRhLXByb3BlcnR5IGlzIHN1cHBvcnRlZCAoc2VydmVyKSBvciB1c2VkIChjbGllbnQpLlxyXG4gICAqL1xyXG4gIFZlcnNpb25lZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB2ZXJzaW9uZWQtdXBkYXRlOiBWZXJzaW9uSWQgbXVzdCBiZSBjb3JyZWN0IGZvciB1cGRhdGVzIChzZXJ2ZXIpIG9yIHdpbGwgYmUgc3BlY2lmaWVkIChJZi1tYXRjaCBoZWFkZXIpIGZvciB1cGRhdGVzIChjbGllbnQpLlxyXG4gICAqL1xyXG4gIFZlcnNpb25JZFRyYWNrZWRGdWxseTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEhvdyB0aGUgc3lzdGVtIHN1cHBvcnRzIHZlcnNpb25pbmcgZm9yIGEgcmVzb3VyY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVmVyc2lvbmluZ1BvbGljeUNvZGluZ3M6VmVyc2lvbmluZ1BvbGljeUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogbm8tdmVyc2lvbjogVmVyc2lvbklkIG1ldGEtcHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCAoc2VydmVyKSBvciB1c2VkIChjbGllbnQpLlxyXG4gICAqL1xyXG4gIE5vVmVyc2lvbklkU3VwcG9ydDoge1xyXG4gICAgZGlzcGxheTogXCJObyBWZXJzaW9uSWQgU3VwcG9ydFwiLFxyXG4gICAgY29kZTogXCJuby12ZXJzaW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92ZXJzaW9uaW5nLXBvbGljeVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdmVyc2lvbmVkOiBWZXJzaW9uSWQgbWV0YS1wcm9wZXJ0eSBpcyBzdXBwb3J0ZWQgKHNlcnZlcikgb3IgdXNlZCAoY2xpZW50KS5cclxuICAgKi9cclxuICBWZXJzaW9uZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiVmVyc2lvbmVkXCIsXHJcbiAgICBjb2RlOiBcInZlcnNpb25lZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdmVyc2lvbmluZy1wb2xpY3lcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHZlcnNpb25lZC11cGRhdGU6IFZlcnNpb25JZCBtdXN0IGJlIGNvcnJlY3QgZm9yIHVwZGF0ZXMgKHNlcnZlcikgb3Igd2lsbCBiZSBzcGVjaWZpZWQgKElmLW1hdGNoIGhlYWRlcikgZm9yIHVwZGF0ZXMgKGNsaWVudCkuXHJcbiAgICovXHJcbiAgVmVyc2lvbklkVHJhY2tlZEZ1bGx5OiB7XHJcbiAgICBkaXNwbGF5OiBcIlZlcnNpb25JZCB0cmFja2VkIGZ1bGx5XCIsXHJcbiAgICBjb2RlOiBcInZlcnNpb25lZC11cGRhdGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3ZlcnNpb25pbmctcG9saWN5XCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19