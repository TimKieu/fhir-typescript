// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/provenance-entity-role|1.0.2
/**
 * How an entity was used in an activity.
 */
export const ProvenanceEntityRoleCodings = {
    /**
     * derivation: A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a preexisting entity.
     */
    Derivation: {
        display: "Derivation",
        code: "derivation",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
    /**
     * quotation: The repeat of (some or all of) an entity, such as text or image, by someone who may or may not be its original author.
     */
    Quotation: {
        display: "Quotation",
        code: "quotation",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
    /**
     * revision: A derivation for which the resulting entity is a revised version of some original.
     */
    Revision: {
        display: "Revision",
        code: "revision",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
    /**
     * source: A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.
     */
    Source: {
        display: "Source",
        code: "source",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmVuYW5jZUVudGl0eVJvbGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Qcm92ZW5hbmNlRW50aXR5Um9sZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBMEIzRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFrQztJQUN4RTs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHJvdmVuYW5jZS1lbnRpdHktcm9sZXwxLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEhvdyBhbiBlbnRpdHkgd2FzIHVzZWQgaW4gYW4gYWN0aXZpdHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQcm92ZW5hbmNlRW50aXR5Um9sZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZGVyaXZhdGlvbjogQSB0cmFuc2Zvcm1hdGlvbiBvZiBhbiBlbnRpdHkgaW50byBhbm90aGVyLCBhbiB1cGRhdGUgb2YgYW4gZW50aXR5IHJlc3VsdGluZyBpbiBhIG5ldyBvbmUsIG9yIHRoZSBjb25zdHJ1Y3Rpb24gb2YgYSBuZXcgZW50aXR5IGJhc2VkIG9uIGEgcHJlZXhpc3RpbmcgZW50aXR5LlxyXG4gICAqL1xyXG4gIERlcml2YXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcXVvdGF0aW9uOiBUaGUgcmVwZWF0IG9mIChzb21lIG9yIGFsbCBvZikgYW4gZW50aXR5LCBzdWNoIGFzIHRleHQgb3IgaW1hZ2UsIGJ5IHNvbWVvbmUgd2hvIG1heSBvciBtYXkgbm90IGJlIGl0cyBvcmlnaW5hbCBhdXRob3IuXHJcbiAgICovXHJcbiAgUXVvdGF0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJldmlzaW9uOiBBIGRlcml2YXRpb24gZm9yIHdoaWNoIHRoZSByZXN1bHRpbmcgZW50aXR5IGlzIGEgcmV2aXNlZCB2ZXJzaW9uIG9mIHNvbWUgb3JpZ2luYWwuXHJcbiAgICovXHJcbiAgUmV2aXNpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc291cmNlOiBBIHByaW1hcnkgc291cmNlIGZvciBhIHRvcGljIHJlZmVycyB0byBzb21ldGhpbmcgcHJvZHVjZWQgYnkgc29tZSBhZ2VudCB3aXRoIGRpcmVjdCBleHBlcmllbmNlIGFuZCBrbm93bGVkZ2UgYWJvdXQgdGhlIHRvcGljLCBhdCB0aGUgdGltZSBvZiB0aGUgdG9waWMncyBzdHVkeSwgd2l0aG91dCBiZW5lZml0IGZyb20gaGluZHNpZ2h0LlxyXG4gICAqL1xyXG4gIFNvdXJjZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEhvdyBhbiBlbnRpdHkgd2FzIHVzZWQgaW4gYW4gYWN0aXZpdHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUHJvdmVuYW5jZUVudGl0eVJvbGVDb2RpbmdzOlByb3ZlbmFuY2VFbnRpdHlSb2xlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBkZXJpdmF0aW9uOiBBIHRyYW5zZm9ybWF0aW9uIG9mIGFuIGVudGl0eSBpbnRvIGFub3RoZXIsIGFuIHVwZGF0ZSBvZiBhbiBlbnRpdHkgcmVzdWx0aW5nIGluIGEgbmV3IG9uZSwgb3IgdGhlIGNvbnN0cnVjdGlvbiBvZiBhIG5ldyBlbnRpdHkgYmFzZWQgb24gYSBwcmVleGlzdGluZyBlbnRpdHkuXHJcbiAgICovXHJcbiAgRGVyaXZhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJEZXJpdmF0aW9uXCIsXHJcbiAgICBjb2RlOiBcImRlcml2YXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Byb3ZlbmFuY2UtZW50aXR5LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHF1b3RhdGlvbjogVGhlIHJlcGVhdCBvZiAoc29tZSBvciBhbGwgb2YpIGFuIGVudGl0eSwgc3VjaCBhcyB0ZXh0IG9yIGltYWdlLCBieSBzb21lb25lIHdobyBtYXkgb3IgbWF5IG5vdCBiZSBpdHMgb3JpZ2luYWwgYXV0aG9yLlxyXG4gICAqL1xyXG4gIFF1b3RhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJRdW90YXRpb25cIixcclxuICAgIGNvZGU6IFwicXVvdGF0aW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9wcm92ZW5hbmNlLWVudGl0eS1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZXZpc2lvbjogQSBkZXJpdmF0aW9uIGZvciB3aGljaCB0aGUgcmVzdWx0aW5nIGVudGl0eSBpcyBhIHJldmlzZWQgdmVyc2lvbiBvZiBzb21lIG9yaWdpbmFsLlxyXG4gICAqL1xyXG4gIFJldmlzaW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJldmlzaW9uXCIsXHJcbiAgICBjb2RlOiBcInJldmlzaW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9wcm92ZW5hbmNlLWVudGl0eS1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzb3VyY2U6IEEgcHJpbWFyeSBzb3VyY2UgZm9yIGEgdG9waWMgcmVmZXJzIHRvIHNvbWV0aGluZyBwcm9kdWNlZCBieSBzb21lIGFnZW50IHdpdGggZGlyZWN0IGV4cGVyaWVuY2UgYW5kIGtub3dsZWRnZSBhYm91dCB0aGUgdG9waWMsIGF0IHRoZSB0aW1lIG9mIHRoZSB0b3BpYydzIHN0dWR5LCB3aXRob3V0IGJlbmVmaXQgZnJvbSBoaW5kc2lnaHQuXHJcbiAgICovXHJcbiAgU291cmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlNvdXJjZVwiLFxyXG4gICAgY29kZTogXCJzb3VyY2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Byb3ZlbmFuY2UtZW50aXR5LXJvbGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=