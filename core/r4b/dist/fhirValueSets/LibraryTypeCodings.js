// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/library-type|4.3.0
/**
 * The type of knowledge asset this library contains.
 */
export const LibraryTypeCodings = {
    /**
     * asset-collection: The resource is a collection of knowledge assets.
     */
    AssetCollection: {
        display: "Asset Collection",
        code: "asset-collection",
        system: "http://terminology.hl7.org/CodeSystem/library-type",
    },
    /**
     * logic-library: The resource is a shareable library of formalized knowledge.
     */
    LogicLibrary: {
        display: "Logic Library",
        code: "logic-library",
        system: "http://terminology.hl7.org/CodeSystem/library-type",
    },
    /**
     * model-definition: The resource is a definition of an information model.
     */
    ModelDefinition: {
        display: "Model Definition",
        code: "model-definition",
        system: "http://terminology.hl7.org/CodeSystem/library-type",
    },
    /**
     * module-definition: The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.
     */
    ModuleDefinition: {
        display: "Module Definition",
        code: "module-definition",
        system: "http://terminology.hl7.org/CodeSystem/library-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlicmFyeVR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9MaWJyYXJ5VHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUVBQWlFO0FBMEJqRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUF5QjtJQUN0RDs7T0FFRztJQUNILGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsb0RBQW9EO0tBQzdEO0lBQ0Q7O09BRUc7SUFDSCxZQUFZLEVBQUU7UUFDWixPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsb0RBQW9EO0tBQzdEO0lBQ0Q7O09BRUc7SUFDSCxlQUFlLEVBQUU7UUFDZixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsTUFBTSxFQUFFLG9EQUFvRDtLQUM3RDtJQUNEOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUU7UUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLE1BQU0sRUFBRSxvREFBb0Q7S0FDN0Q7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9saWJyYXJ5LXR5cGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBrbm93bGVkZ2UgYXNzZXQgdGhpcyBsaWJyYXJ5IGNvbnRhaW5zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGlicmFyeVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFzc2V0LWNvbGxlY3Rpb246IFRoZSByZXNvdXJjZSBpcyBhIGNvbGxlY3Rpb24gb2Yga25vd2xlZGdlIGFzc2V0cy5cclxuICAgKi9cclxuICBBc3NldENvbGxlY3Rpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbG9naWMtbGlicmFyeTogVGhlIHJlc291cmNlIGlzIGEgc2hhcmVhYmxlIGxpYnJhcnkgb2YgZm9ybWFsaXplZCBrbm93bGVkZ2UuXHJcbiAgICovXHJcbiAgTG9naWNMaWJyYXJ5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG1vZGVsLWRlZmluaXRpb246IFRoZSByZXNvdXJjZSBpcyBhIGRlZmluaXRpb24gb2YgYW4gaW5mb3JtYXRpb24gbW9kZWwuXHJcbiAgICovXHJcbiAgTW9kZWxEZWZpbml0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG1vZHVsZS1kZWZpbml0aW9uOiBUaGUgcmVzb3VyY2UgZGVmaW5lcyB0aGUgZGVwZW5kZW5jaWVzLCBwYXJhbWV0ZXJzLCBhbmQgZGF0YSByZXF1aXJlbWVudHMgZm9yIGEgcGFydGljdWxhciBtb2R1bGUgb3IgZXZhbHVhdGlvbiBjb250ZXh0LlxyXG4gICAqL1xyXG4gIE1vZHVsZURlZmluaXRpb246IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBrbm93bGVkZ2UgYXNzZXQgdGhpcyBsaWJyYXJ5IGNvbnRhaW5zLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IExpYnJhcnlUeXBlQ29kaW5nczpMaWJyYXJ5VHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYXNzZXQtY29sbGVjdGlvbjogVGhlIHJlc291cmNlIGlzIGEgY29sbGVjdGlvbiBvZiBrbm93bGVkZ2UgYXNzZXRzLlxyXG4gICAqL1xyXG4gIEFzc2V0Q29sbGVjdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJBc3NldCBDb2xsZWN0aW9uXCIsXHJcbiAgICBjb2RlOiBcImFzc2V0LWNvbGxlY3Rpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2xpYnJhcnktdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbG9naWMtbGlicmFyeTogVGhlIHJlc291cmNlIGlzIGEgc2hhcmVhYmxlIGxpYnJhcnkgb2YgZm9ybWFsaXplZCBrbm93bGVkZ2UuXHJcbiAgICovXHJcbiAgTG9naWNMaWJyYXJ5OiB7XHJcbiAgICBkaXNwbGF5OiBcIkxvZ2ljIExpYnJhcnlcIixcclxuICAgIGNvZGU6IFwibG9naWMtbGlicmFyeVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbGlicmFyeS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBtb2RlbC1kZWZpbml0aW9uOiBUaGUgcmVzb3VyY2UgaXMgYSBkZWZpbml0aW9uIG9mIGFuIGluZm9ybWF0aW9uIG1vZGVsLlxyXG4gICAqL1xyXG4gIE1vZGVsRGVmaW5pdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJNb2RlbCBEZWZpbml0aW9uXCIsXHJcbiAgICBjb2RlOiBcIm1vZGVsLWRlZmluaXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2xpYnJhcnktdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbW9kdWxlLWRlZmluaXRpb246IFRoZSByZXNvdXJjZSBkZWZpbmVzIHRoZSBkZXBlbmRlbmNpZXMsIHBhcmFtZXRlcnMsIGFuZCBkYXRhIHJlcXVpcmVtZW50cyBmb3IgYSBwYXJ0aWN1bGFyIG1vZHVsZSBvciBldmFsdWF0aW9uIGNvbnRleHQuXHJcbiAgICovXHJcbiAgTW9kdWxlRGVmaW5pdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJNb2R1bGUgRGVmaW5pdGlvblwiLFxyXG4gICAgY29kZTogXCJtb2R1bGUtZGVmaW5pdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbGlicmFyeS10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19