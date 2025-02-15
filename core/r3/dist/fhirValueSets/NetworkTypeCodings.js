// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/network-type|3.0.2
/**
 * The type of network access point of this agent in the audit event
 */
export const NetworkTypeCodings = {
    /**
     * 1: The machine name, including DNS name.
     */
    MachineName: {
        display: "Machine Name",
        code: "1",
        system: "http://hl7.org/fhir/network-type",
    },
    /**
     * 2: The assigned Internet Protocol (IP) address.
     */
    IPAddress: {
        display: "IP Address",
        code: "2",
        system: "http://hl7.org/fhir/network-type",
    },
    /**
     * 3: The assigned telephone number.
     */
    TelephoneNumber: {
        display: "Telephone Number",
        code: "3",
        system: "http://hl7.org/fhir/network-type",
    },
    /**
     * 4: The assigned email address.
     */
    EmailAddress: {
        display: "Email address",
        code: "4",
        system: "http://hl7.org/fhir/network-type",
    },
    /**
     * 5: URI (User directory, HTTP-PUT, ftp, etc.).
     */
    URI: {
        display: "URI",
        code: "5",
        system: "http://hl7.org/fhir/network-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV0d29ya1R5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9OZXR3b3JrVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUVBQWlFO0FBOEJqRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUF5QjtJQUN0RDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsa0NBQWtDO0tBQzNDO0lBQ0Q7O09BRUc7SUFDSCxlQUFlLEVBQUU7UUFDZixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsa0NBQWtDO0tBQzNDO0lBQ0Q7O09BRUc7SUFDSCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbmV0d29yay10eXBlfDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgbmV0d29yayBhY2Nlc3MgcG9pbnQgb2YgdGhpcyBhZ2VudCBpbiB0aGUgYXVkaXQgZXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIE5ldHdvcmtUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiAxOiBUaGUgbWFjaGluZSBuYW1lLCBpbmNsdWRpbmcgRE5TIG5hbWUuXHJcbiAgICovXHJcbiAgTWFjaGluZU5hbWU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMjogVGhlIGFzc2lnbmVkIEludGVybmV0IFByb3RvY29sIChJUCkgYWRkcmVzcy5cclxuICAgKi9cclxuICBJUEFkZHJlc3M6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMzogVGhlIGFzc2lnbmVkIHRlbGVwaG9uZSBudW1iZXIuXHJcbiAgICovXHJcbiAgVGVsZXBob25lTnVtYmVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDQ6IFRoZSBhc3NpZ25lZCBlbWFpbCBhZGRyZXNzLlxyXG4gICAqL1xyXG4gIEVtYWlsQWRkcmVzczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiA1OiBVUkkgKFVzZXIgZGlyZWN0b3J5LCBIVFRQLVBVVCwgZnRwLCBldGMuKS5cclxuICAgKi9cclxuICBVUkk6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBuZXR3b3JrIGFjY2VzcyBwb2ludCBvZiB0aGlzIGFnZW50IGluIHRoZSBhdWRpdCBldmVudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE5ldHdvcmtUeXBlQ29kaW5nczpOZXR3b3JrVHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogMTogVGhlIG1hY2hpbmUgbmFtZSwgaW5jbHVkaW5nIEROUyBuYW1lLlxyXG4gICAqL1xyXG4gIE1hY2hpbmVOYW1lOiB7XHJcbiAgICBkaXNwbGF5OiBcIk1hY2hpbmUgTmFtZVwiLFxyXG4gICAgY29kZTogXCIxXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9uZXR3b3JrLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDI6IFRoZSBhc3NpZ25lZCBJbnRlcm5ldCBQcm90b2NvbCAoSVApIGFkZHJlc3MuXHJcbiAgICovXHJcbiAgSVBBZGRyZXNzOiB7XHJcbiAgICBkaXNwbGF5OiBcIklQIEFkZHJlc3NcIixcclxuICAgIGNvZGU6IFwiMlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbmV0d29yay10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAzOiBUaGUgYXNzaWduZWQgdGVsZXBob25lIG51bWJlci5cclxuICAgKi9cclxuICBUZWxlcGhvbmVOdW1iZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiVGVsZXBob25lIE51bWJlclwiLFxyXG4gICAgY29kZTogXCIzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9uZXR3b3JrLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDQ6IFRoZSBhc3NpZ25lZCBlbWFpbCBhZGRyZXNzLlxyXG4gICAqL1xyXG4gIEVtYWlsQWRkcmVzczoge1xyXG4gICAgZGlzcGxheTogXCJFbWFpbCBhZGRyZXNzXCIsXHJcbiAgICBjb2RlOiBcIjRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL25ldHdvcmstdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogNTogVVJJIChVc2VyIGRpcmVjdG9yeSwgSFRUUC1QVVQsIGZ0cCwgZXRjLikuXHJcbiAgICovXHJcbiAgVVJJOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVSSVwiLFxyXG4gICAgY29kZTogXCI1XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9uZXR3b3JrLXR5cGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=