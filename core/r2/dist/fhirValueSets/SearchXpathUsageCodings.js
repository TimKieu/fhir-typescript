// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-xpath-usage|1.0.2
/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export const SearchXpathUsageCodings = {
    /**
     * distance: The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
     */
    Distance: {
        display: "Distance",
        code: "distance",
        system: "http://hl7.org/fhir/search-xpath-usage",
    },
    /**
     * nearby: The search parameter is based on a spatial transform of the selected nodes.
     */
    Nearby: {
        display: "Nearby",
        code: "nearby",
        system: "http://hl7.org/fhir/search-xpath-usage",
    },
    /**
     * normal: The search parameter is derived directly from the selected nodes based on the type definitions.
     */
    Normal: {
        display: "Normal",
        code: "normal",
        system: "http://hl7.org/fhir/search-xpath-usage",
    },
    /**
     * other: The interpretation of the xpath statement is unknown (and can't be automated).
     */
    Other: {
        display: "Other",
        code: "other",
        system: "http://hl7.org/fhir/search-xpath-usage",
    },
    /**
     * phonetic: The search parameter is derived by a phonetic transform from the selected nodes.
     */
    Phonetic: {
        display: "Phonetic",
        code: "phonetic",
        system: "http://hl7.org/fhir/search-xpath-usage",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoWHBhdGhVc2FnZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1NlYXJjaFhwYXRoVXNhZ2VDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHVFQUF1RTtBQThCdkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBOEI7SUFDaEU7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zZWFyY2gteHBhdGgtdXNhZ2V8MS4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBIb3cgYSBzZWFyY2ggcGFyYW1ldGVyIHJlbGF0ZXMgdG8gdGhlIHNldCBvZiBlbGVtZW50cyByZXR1cm5lZCBieSBldmFsdWF0aW5nIGl0cyB4cGF0aCBxdWVyeS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNlYXJjaFhwYXRoVXNhZ2VDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGRpc3RhbmNlOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBiYXNlZCBvbiBhIHNwYXRpYWwgdHJhbnNmb3JtIG9mIHRoZSBzZWxlY3RlZCBub2RlcywgdXNpbmcgcGh5c2ljYWwgZGlzdGFuY2UgZnJvbSB0aGUgbWlkZGxlLlxyXG4gICAqL1xyXG4gIERpc3RhbmNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG5lYXJieTogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgYmFzZWQgb24gYSBzcGF0aWFsIHRyYW5zZm9ybSBvZiB0aGUgc2VsZWN0ZWQgbm9kZXMuXHJcbiAgICovXHJcbiAgTmVhcmJ5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG5vcm1hbDogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgZGVyaXZlZCBkaXJlY3RseSBmcm9tIHRoZSBzZWxlY3RlZCBub2RlcyBiYXNlZCBvbiB0aGUgdHlwZSBkZWZpbml0aW9ucy5cclxuICAgKi9cclxuICBOb3JtYWw6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb3RoZXI6IFRoZSBpbnRlcnByZXRhdGlvbiBvZiB0aGUgeHBhdGggc3RhdGVtZW50IGlzIHVua25vd24gKGFuZCBjYW4ndCBiZSBhdXRvbWF0ZWQpLlxyXG4gICAqL1xyXG4gIE90aGVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBob25ldGljOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBkZXJpdmVkIGJ5IGEgcGhvbmV0aWMgdHJhbnNmb3JtIGZyb20gdGhlIHNlbGVjdGVkIG5vZGVzLlxyXG4gICAqL1xyXG4gIFBob25ldGljOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogSG93IGEgc2VhcmNoIHBhcmFtZXRlciByZWxhdGVzIHRvIHRoZSBzZXQgb2YgZWxlbWVudHMgcmV0dXJuZWQgYnkgZXZhbHVhdGluZyBpdHMgeHBhdGggcXVlcnkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2VhcmNoWHBhdGhVc2FnZUNvZGluZ3M6U2VhcmNoWHBhdGhVc2FnZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZGlzdGFuY2U6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGlzIGJhc2VkIG9uIGEgc3BhdGlhbCB0cmFuc2Zvcm0gb2YgdGhlIHNlbGVjdGVkIG5vZGVzLCB1c2luZyBwaHlzaWNhbCBkaXN0YW5jZSBmcm9tIHRoZSBtaWRkbGUuXHJcbiAgICovXHJcbiAgRGlzdGFuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiRGlzdGFuY2VcIixcclxuICAgIGNvZGU6IFwiZGlzdGFuY2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC14cGF0aC11c2FnZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbmVhcmJ5OiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBiYXNlZCBvbiBhIHNwYXRpYWwgdHJhbnNmb3JtIG9mIHRoZSBzZWxlY3RlZCBub2Rlcy5cclxuICAgKi9cclxuICBOZWFyYnk6IHtcclxuICAgIGRpc3BsYXk6IFwiTmVhcmJ5XCIsXHJcbiAgICBjb2RlOiBcIm5lYXJieVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLXhwYXRoLXVzYWdlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBub3JtYWw6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGlzIGRlcml2ZWQgZGlyZWN0bHkgZnJvbSB0aGUgc2VsZWN0ZWQgbm9kZXMgYmFzZWQgb24gdGhlIHR5cGUgZGVmaW5pdGlvbnMuXHJcbiAgICovXHJcbiAgTm9ybWFsOiB7XHJcbiAgICBkaXNwbGF5OiBcIk5vcm1hbFwiLFxyXG4gICAgY29kZTogXCJub3JtYWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC14cGF0aC11c2FnZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb3RoZXI6IFRoZSBpbnRlcnByZXRhdGlvbiBvZiB0aGUgeHBhdGggc3RhdGVtZW50IGlzIHVua25vd24gKGFuZCBjYW4ndCBiZSBhdXRvbWF0ZWQpLlxyXG4gICAqL1xyXG4gIE90aGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcIk90aGVyXCIsXHJcbiAgICBjb2RlOiBcIm90aGVyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gteHBhdGgtdXNhZ2VcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBob25ldGljOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBkZXJpdmVkIGJ5IGEgcGhvbmV0aWMgdHJhbnNmb3JtIGZyb20gdGhlIHNlbGVjdGVkIG5vZGVzLlxyXG4gICAqL1xyXG4gIFBob25ldGljOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBob25ldGljXCIsXHJcbiAgICBjb2RlOiBcInBob25ldGljXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gteHBhdGgtdXNhZ2VcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=