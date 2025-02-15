// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-data-meaning|4.3.0
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export const ConsentDataMeaningCodings = {
    /**
     * authoredby: The consent applies to instances of resources that are authored by.
     */
    AuthoredBy: {
        display: "AuthoredBy",
        code: "authoredby",
        system: "http://hl7.org/fhir/consent-data-meaning",
    },
    /**
     * dependents: The consent applies directly to the instance of the resource and instances that refer to it.
     */
    Dependents: {
        display: "Dependents",
        code: "dependents",
        system: "http://hl7.org/fhir/consent-data-meaning",
    },
    /**
     * instance: The consent applies directly to the instance of the resource.
     */
    Instance: {
        display: "Instance",
        code: "instance",
        system: "http://hl7.org/fhir/consent-data-meaning",
    },
    /**
     * related: The consent applies directly to the instance of the resource and instances it refers to.
     */
    Related: {
        display: "Related",
        code: "related",
        system: "http://hl7.org/fhir/consent-data-meaning",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc2VudERhdGFNZWFuaW5nQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ29uc2VudERhdGFNZWFuaW5nQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx5RUFBeUU7QUEwQnpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWdDO0lBQ3BFOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29uc2VudC1kYXRhLW1lYW5pbmd8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBIb3cgYSByZXNvdXJjZSByZWZlcmVuY2UgaXMgaW50ZXJwcmV0ZWQgd2hlbiB0ZXN0aW5nIGNvbnNlbnQgcmVzdHJpY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29uc2VudERhdGFNZWFuaW5nQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhdXRob3JlZGJ5OiBUaGUgY29uc2VudCBhcHBsaWVzIHRvIGluc3RhbmNlcyBvZiByZXNvdXJjZXMgdGhhdCBhcmUgYXV0aG9yZWQgYnkuXHJcbiAgICovXHJcbiAgQXV0aG9yZWRCeTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkZXBlbmRlbnRzOiBUaGUgY29uc2VudCBhcHBsaWVzIGRpcmVjdGx5IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgcmVzb3VyY2UgYW5kIGluc3RhbmNlcyB0aGF0IHJlZmVyIHRvIGl0LlxyXG4gICAqL1xyXG4gIERlcGVuZGVudHM6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW5zdGFuY2U6IFRoZSBjb25zZW50IGFwcGxpZXMgZGlyZWN0bHkgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBJbnN0YW5jZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWxhdGVkOiBUaGUgY29uc2VudCBhcHBsaWVzIGRpcmVjdGx5IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgcmVzb3VyY2UgYW5kIGluc3RhbmNlcyBpdCByZWZlcnMgdG8uXHJcbiAgICovXHJcbiAgUmVsYXRlZDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEhvdyBhIHJlc291cmNlIHJlZmVyZW5jZSBpcyBpbnRlcnByZXRlZCB3aGVuIHRlc3RpbmcgY29uc2VudCByZXN0cmljdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uc2VudERhdGFNZWFuaW5nQ29kaW5nczpDb25zZW50RGF0YU1lYW5pbmdDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGF1dGhvcmVkYnk6IFRoZSBjb25zZW50IGFwcGxpZXMgdG8gaW5zdGFuY2VzIG9mIHJlc291cmNlcyB0aGF0IGFyZSBhdXRob3JlZCBieS5cclxuICAgKi9cclxuICBBdXRob3JlZEJ5OiB7XHJcbiAgICBkaXNwbGF5OiBcIkF1dGhvcmVkQnlcIixcclxuICAgIGNvZGU6IFwiYXV0aG9yZWRieVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29uc2VudC1kYXRhLW1lYW5pbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRlcGVuZGVudHM6IFRoZSBjb25zZW50IGFwcGxpZXMgZGlyZWN0bHkgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSByZXNvdXJjZSBhbmQgaW5zdGFuY2VzIHRoYXQgcmVmZXIgdG8gaXQuXHJcbiAgICovXHJcbiAgRGVwZW5kZW50czoge1xyXG4gICAgZGlzcGxheTogXCJEZXBlbmRlbnRzXCIsXHJcbiAgICBjb2RlOiBcImRlcGVuZGVudHNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnNlbnQtZGF0YS1tZWFuaW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbnN0YW5jZTogVGhlIGNvbnNlbnQgYXBwbGllcyBkaXJlY3RseSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIEluc3RhbmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluc3RhbmNlXCIsXHJcbiAgICBjb2RlOiBcImluc3RhbmNlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25zZW50LWRhdGEtbWVhbmluZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVsYXRlZDogVGhlIGNvbnNlbnQgYXBwbGllcyBkaXJlY3RseSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIHJlc291cmNlIGFuZCBpbnN0YW5jZXMgaXQgcmVmZXJzIHRvLlxyXG4gICAqL1xyXG4gIFJlbGF0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVsYXRlZFwiLFxyXG4gICAgY29kZTogXCJyZWxhdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25zZW50LWRhdGEtbWVhbmluZ1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==