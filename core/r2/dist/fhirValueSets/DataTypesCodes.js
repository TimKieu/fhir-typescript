// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/data-types|1.0.2
/**
 * The type of an element - one of the FHIR data types.
 */
export const DataTypesCodes = {
    /**
     * Address: There is a variety of postal address formats defined around the world. This format defines a superset that is the basis for all addresses around the world.
     */
    Address: "Address",
    /**
     * Code: Age
     */
    Age: "Age",
    /**
     * Annotation: A  text note which also  contains information about who made the statement and when.
     */
    Annotation: "Annotation",
    /**
     * Attachment: For referring to data content defined in other formats.
     */
    Attachment: "Attachment",
    /**
     * BackboneElement: Base definition for all elements that are defined inside a resource - but not those in a data type.
     */
    BackboneElement: "BackboneElement",
    /**
     * base64Binary: A stream of bytes
     */
    Base64Binary: "base64Binary",
    /**
     * boolean: Value of "true" or "false"
     */
    VALBoolean: "boolean",
    /**
     * code: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
     */
    Code: "code",
    /**
     * CodeableConcept: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
     */
    CodeableConcept: "CodeableConcept",
    /**
     * Coding: A reference to a code defined by a terminology system.
     */
    Coding: "Coding",
    /**
     * ContactPoint: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
     */
    ContactPoint: "ContactPoint",
    /**
     * Code: Count
     */
    Count: "Count",
    /**
     * date: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
     */
    Date: "date",
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
     */
    DateTime: "dateTime",
    /**
     * decimal: A rational number with implicit precision
     */
    Decimal: "decimal",
    /**
     * Code: Distance
     */
    Distance: "Distance",
    /**
     * Code: Duration
     */
    Duration: "Duration",
    /**
     * Element: Base definition for all elements in a resource.
     */
    VALElement: "Element",
    /**
     * ElementDefinition: Captures constraints on each element within the resource, profile, or extension.
     */
    ElementDefinition: "ElementDefinition",
    /**
     * Extension: Optional Extensions Element - found in all resources.
     */
    Extension: "Extension",
    /**
     * HumanName: A human's name with the ability to identify parts and usage.
     */
    HumanName: "HumanName",
    /**
     * id: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
     */
    Id: "id",
    /**
     * Identifier: A technical identifier - identifies some entity uniquely and unambiguously.
     */
    Identifier: "Identifier",
    /**
     * instant: An instant in time - known at least to the second
     */
    Instant: "instant",
    /**
     * integer: A whole number
     */
    Integer: "integer",
    /**
     * markdown: A string that may contain markdown syntax for optional processing by a mark down presentation engine
     */
    Markdown: "markdown",
    /**
     * Meta: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */
    Meta: "Meta",
    /**
     * Code: Money
     */
    Money: "Money",
    /**
     * Narrative: A human-readable formatted text, including images.
     */
    Narrative: "Narrative",
    /**
     * oid: An oid represented as a URI
     */
    Oid: "oid",
    /**
     * Period: A time period defined by a start and end date and optionally time.
     */
    Period: "Period",
    /**
     * positiveInt: An integer with a value that is positive (e.g. &gt;0)
     */
    PositiveInt: "positiveInt",
    /**
     * Quantity: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
     */
    Quantity: "Quantity",
    /**
     * Range: A set of ordered Quantities defined by a low and high limit.
     */
    Range: "Range",
    /**
     * Ratio: A relationship of two Quantity values - expressed as a numerator and a denominator.
     */
    Ratio: "Ratio",
    /**
     * Reference: A reference from one resource to another.
     */
    Reference: "Reference",
    /**
     * SampledData: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
     */
    SampledData: "SampledData",
    /**
     * Signature: A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different Signature approaches have different utilities.
     */
    Signature: "Signature",
    /**
     * Code: SimpleQuantity
     */
    SimpleQuantity: "SimpleQuantity",
    /**
     * string: A sequence of Unicode characters
     */
    VALString: "string",
    /**
     * time: A time during the day, with no date specified
     */
    Time: "time",
    /**
     * Timing: Specifies an event that may occur multiple times. Timing schedules are used to record when things are expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds.
     */
    Timing: "Timing",
    /**
     * unsignedInt: An integer with a value that is not negative (e.g. &gt;= 0)
     */
    UnsignedInt: "unsignedInt",
    /**
     * uri: String of characters used to identify a name or a resource
     */
    Uri: "uri",
    /**
     * uuid: A UUID, represented as a URI
     */
    Uuid: "uuid",
    /**
     * xhtml: XHTML format, as defined by W3C, but restricted usage (mainly, no active content)
     */
    XHTML: "xhtml",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVR5cGVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0RhdGFUeXBlc0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLCtEQUErRDtBQUUvRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRztJQUM1Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsR0FBRyxFQUFFLEtBQUs7SUFDVjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDOztPQUVHO0lBQ0gsWUFBWSxFQUFFLGNBQWM7SUFDNUI7O09BRUc7SUFDSCxVQUFVLEVBQUUsU0FBUztJQUNyQjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxZQUFZLEVBQUUsY0FBYztJQUM1Qjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtJQUNaOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxVQUFVLEVBQUUsU0FBUztJQUNyQjs7T0FFRztJQUNILGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0Qzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxFQUFFLEVBQUUsSUFBSTtJQUNSOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtJQUNaOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsR0FBRyxFQUFFLEtBQUs7SUFDVjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGFBQWE7SUFDMUI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQzs7T0FFRztJQUNILFNBQVMsRUFBRSxRQUFRO0lBQ25COztPQUVHO0lBQ0gsSUFBSSxFQUFFLE1BQU07SUFDWjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGFBQWE7SUFDMUI7O09BRUc7SUFDSCxHQUFHLEVBQUUsS0FBSztJQUNWOztPQUVHO0lBQ0gsSUFBSSxFQUFFLE1BQU07SUFDWjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0NBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9kYXRhLXR5cGVzfDEuMC4yXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgYW4gZWxlbWVudCAtIG9uZSBvZiB0aGUgRkhJUiBkYXRhIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERhdGFUeXBlc0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEFkZHJlc3M6IFRoZXJlIGlzIGEgdmFyaWV0eSBvZiBwb3N0YWwgYWRkcmVzcyBmb3JtYXRzIGRlZmluZWQgYXJvdW5kIHRoZSB3b3JsZC4gVGhpcyBmb3JtYXQgZGVmaW5lcyBhIHN1cGVyc2V0IHRoYXQgaXMgdGhlIGJhc2lzIGZvciBhbGwgYWRkcmVzc2VzIGFyb3VuZCB0aGUgd29ybGQuXHJcbiAgICovXHJcbiAgQWRkcmVzczogXCJBZGRyZXNzXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogQWdlXHJcbiAgICovXHJcbiAgQWdlOiBcIkFnZVwiLFxyXG4gIC8qKlxyXG4gICAqIEFubm90YXRpb246IEEgIHRleHQgbm90ZSB3aGljaCBhbHNvICBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB3aG8gbWFkZSB0aGUgc3RhdGVtZW50IGFuZCB3aGVuLlxyXG4gICAqL1xyXG4gIEFubm90YXRpb246IFwiQW5ub3RhdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaG1lbnQ6IEZvciByZWZlcnJpbmcgdG8gZGF0YSBjb250ZW50IGRlZmluZWQgaW4gb3RoZXIgZm9ybWF0cy5cclxuICAgKi9cclxuICBBdHRhY2htZW50OiBcIkF0dGFjaG1lbnRcIixcclxuICAvKipcclxuICAgKiBCYWNrYm9uZUVsZW1lbnQ6IEJhc2UgZGVmaW5pdGlvbiBmb3IgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW5zaWRlIGEgcmVzb3VyY2UgLSBidXQgbm90IHRob3NlIGluIGEgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIEJhY2tib25lRWxlbWVudDogXCJCYWNrYm9uZUVsZW1lbnRcIixcclxuICAvKipcclxuICAgKiBiYXNlNjRCaW5hcnk6IEEgc3RyZWFtIG9mIGJ5dGVzXHJcbiAgICovXHJcbiAgQmFzZTY0QmluYXJ5OiBcImJhc2U2NEJpbmFyeVwiLFxyXG4gIC8qKlxyXG4gICAqIGJvb2xlYW46IFZhbHVlIG9mIFwidHJ1ZVwiIG9yIFwiZmFsc2VcIlxyXG4gICAqL1xyXG4gIFZBTEJvb2xlYW46IFwiYm9vbGVhblwiLFxyXG4gIC8qKlxyXG4gICAqIGNvZGU6IEEgc3RyaW5nIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFuZCBubyBsZWFkaW5nIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHdoZXJlIHRoZXJlIGlzIG5vIHdoaXRlc3BhY2Ugb3RoZXIgdGhhbiBzaW5nbGUgc3BhY2VzIGluIHRoZSBjb250ZW50c1xyXG4gICAqL1xyXG4gIENvZGU6IFwiY29kZVwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGVhYmxlQ29uY2VwdDogQSBjb25jZXB0IHRoYXQgbWF5IGJlIGRlZmluZWQgYnkgYSBmb3JtYWwgcmVmZXJlbmNlIHRvIGEgdGVybWlub2xvZ3kgb3Igb250b2xvZ3kgb3IgbWF5IGJlIHByb3ZpZGVkIGJ5IHRleHQuXHJcbiAgICovXHJcbiAgQ29kZWFibGVDb25jZXB0OiBcIkNvZGVhYmxlQ29uY2VwdFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGluZzogQSByZWZlcmVuY2UgdG8gYSBjb2RlIGRlZmluZWQgYnkgYSB0ZXJtaW5vbG9neSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgQ29kaW5nOiBcIkNvZGluZ1wiLFxyXG4gIC8qKlxyXG4gICAqIENvbnRhY3RQb2ludDogRGV0YWlscyBmb3IgYWxsIGtpbmRzIG9mIHRlY2hub2xvZ3kgbWVkaWF0ZWQgY29udGFjdCBwb2ludHMgZm9yIGEgcGVyc29uIG9yIG9yZ2FuaXphdGlvbiwgaW5jbHVkaW5nIHRlbGVwaG9uZSwgZW1haWwsIGV0Yy5cclxuICAgKi9cclxuICBDb250YWN0UG9pbnQ6IFwiQ29udGFjdFBvaW50XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogQ291bnRcclxuICAgKi9cclxuICBDb3VudDogXCJDb3VudFwiLFxyXG4gIC8qKlxyXG4gICAqIGRhdGU6IEEgZGF0ZSBvciBwYXJ0aWFsIGRhdGUgKGUuZy4ganVzdCB5ZWFyIG9yIHllYXIgKyBtb250aCkuIFRoZXJlIGlzIG5vIHRpbWUgem9uZS4gVGhlIGZvcm1hdCBpcyBhIHVuaW9uIG9mIHRoZSBzY2hlbWEgdHlwZXMgZ1llYXIsIGdZZWFyTW9udGggYW5kIGRhdGUuICBEYXRlcyBTSEFMTCBiZSB2YWxpZCBkYXRlcy5cclxuICAgKi9cclxuICBEYXRlOiBcImRhdGVcIixcclxuICAvKipcclxuICAgKiBkYXRlVGltZTogQSBkYXRlLCBkYXRlLXRpbWUgb3IgcGFydGlhbCBkYXRlIChlLmcuIGp1c3QgeWVhciBvciB5ZWFyICsgbW9udGgpLiAgSWYgaG91cnMgYW5kIG1pbnV0ZXMgYXJlIHNwZWNpZmllZCwgYSB0aW1lIHpvbmUgU0hBTEwgYmUgcG9wdWxhdGVkLiBUaGUgZm9ybWF0IGlzIGEgdW5pb24gb2YgdGhlIHNjaGVtYSB0eXBlcyBnWWVhciwgZ1llYXJNb250aCwgZGF0ZSBhbmQgZGF0ZVRpbWUuIFNlY29uZHMgbXVzdCBiZSBwcm92aWRlZCBkdWUgdG8gc2NoZW1hIHR5cGUgY29uc3RyYWludHMgYnV0IG1heSBiZSB6ZXJvLWZpbGxlZCBhbmQgbWF5IGJlIGlnbm9yZWQuICAgICAgICAgICAgICAgICBEYXRlcyBTSEFMTCBiZSB2YWxpZCBkYXRlcy5cclxuICAgKi9cclxuICBEYXRlVGltZTogXCJkYXRlVGltZVwiLFxyXG4gIC8qKlxyXG4gICAqIGRlY2ltYWw6IEEgcmF0aW9uYWwgbnVtYmVyIHdpdGggaW1wbGljaXQgcHJlY2lzaW9uXHJcbiAgICovXHJcbiAgRGVjaW1hbDogXCJkZWNpbWFsXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogRGlzdGFuY2VcclxuICAgKi9cclxuICBEaXN0YW5jZTogXCJEaXN0YW5jZVwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IER1cmF0aW9uXHJcbiAgICovXHJcbiAgRHVyYXRpb246IFwiRHVyYXRpb25cIixcclxuICAvKipcclxuICAgKiBFbGVtZW50OiBCYXNlIGRlZmluaXRpb24gZm9yIGFsbCBlbGVtZW50cyBpbiBhIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIFZBTEVsZW1lbnQ6IFwiRWxlbWVudFwiLFxyXG4gIC8qKlxyXG4gICAqIEVsZW1lbnREZWZpbml0aW9uOiBDYXB0dXJlcyBjb25zdHJhaW50cyBvbiBlYWNoIGVsZW1lbnQgd2l0aGluIHRoZSByZXNvdXJjZSwgcHJvZmlsZSwgb3IgZXh0ZW5zaW9uLlxyXG4gICAqL1xyXG4gIEVsZW1lbnREZWZpbml0aW9uOiBcIkVsZW1lbnREZWZpbml0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogRXh0ZW5zaW9uOiBPcHRpb25hbCBFeHRlbnNpb25zIEVsZW1lbnQgLSBmb3VuZCBpbiBhbGwgcmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIEV4dGVuc2lvbjogXCJFeHRlbnNpb25cIixcclxuICAvKipcclxuICAgKiBIdW1hbk5hbWU6IEEgaHVtYW4ncyBuYW1lIHdpdGggdGhlIGFiaWxpdHkgdG8gaWRlbnRpZnkgcGFydHMgYW5kIHVzYWdlLlxyXG4gICAqL1xyXG4gIEh1bWFuTmFtZTogXCJIdW1hbk5hbWVcIixcclxuICAvKipcclxuICAgKiBpZDogQW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIG51bWVyYWxzLCBcIi1cIiBhbmQgXCIuXCIsIHdpdGggYSBsZW5ndGggbGltaXQgb2YgNjQgY2hhcmFjdGVycy4gIChUaGlzIG1pZ2h0IGJlIGFuIGludGVnZXIsIGFuIHVucHJlZml4ZWQgT0lELCBVVUlEIG9yIGFueSBvdGhlciBpZGVudGlmaWVyIHBhdHRlcm4gdGhhdCBtZWV0cyB0aGVzZSBjb25zdHJhaW50cy4pICBJZHMgYXJlIGNhc2UtaW5zZW5zaXRpdmUuXHJcbiAgICovXHJcbiAgSWQ6IFwiaWRcIixcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyOiBBIHRlY2huaWNhbCBpZGVudGlmaWVyIC0gaWRlbnRpZmllcyBzb21lIGVudGl0eSB1bmlxdWVseSBhbmQgdW5hbWJpZ3VvdXNseS5cclxuICAgKi9cclxuICBJZGVudGlmaWVyOiBcIklkZW50aWZpZXJcIixcclxuICAvKipcclxuICAgKiBpbnN0YW50OiBBbiBpbnN0YW50IGluIHRpbWUgLSBrbm93biBhdCBsZWFzdCB0byB0aGUgc2Vjb25kXHJcbiAgICovXHJcbiAgSW5zdGFudDogXCJpbnN0YW50XCIsXHJcbiAgLyoqXHJcbiAgICogaW50ZWdlcjogQSB3aG9sZSBudW1iZXJcclxuICAgKi9cclxuICBJbnRlZ2VyOiBcImludGVnZXJcIixcclxuICAvKipcclxuICAgKiBtYXJrZG93bjogQSBzdHJpbmcgdGhhdCBtYXkgY29udGFpbiBtYXJrZG93biBzeW50YXggZm9yIG9wdGlvbmFsIHByb2Nlc3NpbmcgYnkgYSBtYXJrIGRvd24gcHJlc2VudGF0aW9uIGVuZ2luZVxyXG4gICAqL1xyXG4gIE1hcmtkb3duOiBcIm1hcmtkb3duXCIsXHJcbiAgLyoqXHJcbiAgICogTWV0YTogVGhlIG1ldGFkYXRhIGFib3V0IGEgcmVzb3VyY2UuIFRoaXMgaXMgY29udGVudCBpbiB0aGUgcmVzb3VyY2UgdGhhdCBpcyBtYWludGFpbmVkIGJ5IHRoZSBpbmZyYXN0cnVjdHVyZS4gQ2hhbmdlcyB0byB0aGUgY29udGVudCBtYXkgbm90IGFsd2F5cyBiZSBhc3NvY2lhdGVkIHdpdGggdmVyc2lvbiBjaGFuZ2VzIHRvIHRoZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBNZXRhOiBcIk1ldGFcIixcclxuICAvKipcclxuICAgKiBDb2RlOiBNb25leVxyXG4gICAqL1xyXG4gIE1vbmV5OiBcIk1vbmV5XCIsXHJcbiAgLyoqXHJcbiAgICogTmFycmF0aXZlOiBBIGh1bWFuLXJlYWRhYmxlIGZvcm1hdHRlZCB0ZXh0LCBpbmNsdWRpbmcgaW1hZ2VzLlxyXG4gICAqL1xyXG4gIE5hcnJhdGl2ZTogXCJOYXJyYXRpdmVcIixcclxuICAvKipcclxuICAgKiBvaWQ6IEFuIG9pZCByZXByZXNlbnRlZCBhcyBhIFVSSVxyXG4gICAqL1xyXG4gIE9pZDogXCJvaWRcIixcclxuICAvKipcclxuICAgKiBQZXJpb2Q6IEEgdGltZSBwZXJpb2QgZGVmaW5lZCBieSBhIHN0YXJ0IGFuZCBlbmQgZGF0ZSBhbmQgb3B0aW9uYWxseSB0aW1lLlxyXG4gICAqL1xyXG4gIFBlcmlvZDogXCJQZXJpb2RcIixcclxuICAvKipcclxuICAgKiBwb3NpdGl2ZUludDogQW4gaW50ZWdlciB3aXRoIGEgdmFsdWUgdGhhdCBpcyBwb3NpdGl2ZSAoZS5nLiAmZ3Q7MClcclxuICAgKi9cclxuICBQb3NpdGl2ZUludDogXCJwb3NpdGl2ZUludFwiLFxyXG4gIC8qKlxyXG4gICAqIFF1YW50aXR5OiBBIG1lYXN1cmVkIGFtb3VudCAob3IgYW4gYW1vdW50IHRoYXQgY2FuIHBvdGVudGlhbGx5IGJlIG1lYXN1cmVkKS4gTm90ZSB0aGF0IG1lYXN1cmVkIGFtb3VudHMgaW5jbHVkZSBhbW91bnRzIHRoYXQgYXJlIG5vdCBwcmVjaXNlbHkgcXVhbnRpZmllZCwgaW5jbHVkaW5nIGFtb3VudHMgaW52b2x2aW5nIGFyYml0cmFyeSB1bml0cyBhbmQgZmxvYXRpbmcgY3VycmVuY2llcy5cclxuICAgKi9cclxuICBRdWFudGl0eTogXCJRdWFudGl0eVwiLFxyXG4gIC8qKlxyXG4gICAqIFJhbmdlOiBBIHNldCBvZiBvcmRlcmVkIFF1YW50aXRpZXMgZGVmaW5lZCBieSBhIGxvdyBhbmQgaGlnaCBsaW1pdC5cclxuICAgKi9cclxuICBSYW5nZTogXCJSYW5nZVwiLFxyXG4gIC8qKlxyXG4gICAqIFJhdGlvOiBBIHJlbGF0aW9uc2hpcCBvZiB0d28gUXVhbnRpdHkgdmFsdWVzIC0gZXhwcmVzc2VkIGFzIGEgbnVtZXJhdG9yIGFuZCBhIGRlbm9taW5hdG9yLlxyXG4gICAqL1xyXG4gIFJhdGlvOiBcIlJhdGlvXCIsXHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlOiBBIHJlZmVyZW5jZSBmcm9tIG9uZSByZXNvdXJjZSB0byBhbm90aGVyLlxyXG4gICAqL1xyXG4gIFJlZmVyZW5jZTogXCJSZWZlcmVuY2VcIixcclxuICAvKipcclxuICAgKiBTYW1wbGVkRGF0YTogQSBzZXJpZXMgb2YgbWVhc3VyZW1lbnRzIHRha2VuIGJ5IGEgZGV2aWNlLCB3aXRoIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuIFRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lIGRpbWVuc2lvbiBpbiB0aGUgZGF0YS5cclxuICAgKi9cclxuICBTYW1wbGVkRGF0YTogXCJTYW1wbGVkRGF0YVwiLFxyXG4gIC8qKlxyXG4gICAqIFNpZ25hdHVyZTogQSBkaWdpdGFsIHNpZ25hdHVyZSBhbG9uZyB3aXRoIHN1cHBvcnRpbmcgY29udGV4dC4gVGhlIHNpZ25hdHVyZSBtYXkgYmUgZWxlY3Ryb25pYy9jcnlwdG9ncmFwaGljIGluIG5hdHVyZSwgb3IgYSBncmFwaGljYWwgaW1hZ2UgcmVwcmVzZW50aW5nIGEgaGFuZC13cml0dGVuIHNpZ25hdHVyZSwgb3IgYSBzaWduYXR1cmUgcHJvY2Vzcy4gRGlmZmVyZW50IFNpZ25hdHVyZSBhcHByb2FjaGVzIGhhdmUgZGlmZmVyZW50IHV0aWxpdGllcy5cclxuICAgKi9cclxuICBTaWduYXR1cmU6IFwiU2lnbmF0dXJlXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogU2ltcGxlUXVhbnRpdHlcclxuICAgKi9cclxuICBTaW1wbGVRdWFudGl0eTogXCJTaW1wbGVRdWFudGl0eVwiLFxyXG4gIC8qKlxyXG4gICAqIHN0cmluZzogQSBzZXF1ZW5jZSBvZiBVbmljb2RlIGNoYXJhY3RlcnNcclxuICAgKi9cclxuICBWQUxTdHJpbmc6IFwic3RyaW5nXCIsXHJcbiAgLyoqXHJcbiAgICogdGltZTogQSB0aW1lIGR1cmluZyB0aGUgZGF5LCB3aXRoIG5vIGRhdGUgc3BlY2lmaWVkXHJcbiAgICovXHJcbiAgVGltZTogXCJ0aW1lXCIsXHJcbiAgLyoqXHJcbiAgICogVGltaW5nOiBTcGVjaWZpZXMgYW4gZXZlbnQgdGhhdCBtYXkgb2NjdXIgbXVsdGlwbGUgdGltZXMuIFRpbWluZyBzY2hlZHVsZXMgYXJlIHVzZWQgdG8gcmVjb3JkIHdoZW4gdGhpbmdzIGFyZSBleHBlY3RlZCBvciByZXF1ZXN0ZWQgdG8gb2NjdXIuIFRoZSBtb3N0IGNvbW1vbiB1c2FnZSBpcyBpbiBkb3NhZ2UgaW5zdHJ1Y3Rpb25zIGZvciBtZWRpY2F0aW9ucy4gVGhleSBhcmUgYWxzbyB1c2VkIHdoZW4gcGxhbm5pbmcgY2FyZSBvZiB2YXJpb3VzIGtpbmRzLlxyXG4gICAqL1xyXG4gIFRpbWluZzogXCJUaW1pbmdcIixcclxuICAvKipcclxuICAgKiB1bnNpZ25lZEludDogQW4gaW50ZWdlciB3aXRoIGEgdmFsdWUgdGhhdCBpcyBub3QgbmVnYXRpdmUgKGUuZy4gJmd0Oz0gMClcclxuICAgKi9cclxuICBVbnNpZ25lZEludDogXCJ1bnNpZ25lZEludFwiLFxyXG4gIC8qKlxyXG4gICAqIHVyaTogU3RyaW5nIG9mIGNoYXJhY3RlcnMgdXNlZCB0byBpZGVudGlmeSBhIG5hbWUgb3IgYSByZXNvdXJjZVxyXG4gICAqL1xyXG4gIFVyaTogXCJ1cmlcIixcclxuICAvKipcclxuICAgKiB1dWlkOiBBIFVVSUQsIHJlcHJlc2VudGVkIGFzIGEgVVJJXHJcbiAgICovXHJcbiAgVXVpZDogXCJ1dWlkXCIsXHJcbiAgLyoqXHJcbiAgICogeGh0bWw6IFhIVE1MIGZvcm1hdCwgYXMgZGVmaW5lZCBieSBXM0MsIGJ1dCByZXN0cmljdGVkIHVzYWdlIChtYWlubHksIG5vIGFjdGl2ZSBjb250ZW50KVxyXG4gICAqL1xyXG4gIFhIVE1MOiBcInhodG1sXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgYW4gZWxlbWVudCAtIG9uZSBvZiB0aGUgRkhJUiBkYXRhIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRGF0YVR5cGVzQ29kZVR5cGUgPSB0eXBlb2YgRGF0YVR5cGVzQ29kZXNba2V5b2YgdHlwZW9mIERhdGFUeXBlc0NvZGVzXTtcclxuIl19