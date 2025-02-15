// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/observation-status|1.0.2
/**
 * Codes providing the status of an observation.
 */
export const ObservationStatusCodes = {
    /**
     * amended: The observation has been modified subsequent to being Final, and is complete and verified by an authorized person.
     */
    Amended: "amended",
    /**
     * cancelled: The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    Cancelled: "cancelled",
    /**
     * entered-in-error: The observation has been withdrawn following previous final release.
     */
    EnteredInError: "entered-in-error",
    /**
     * final: The observation is complete and verified by an authorized person.
     */
    Final: "final",
    /**
     * preliminary: This is an initial or interim observation: data may be incomplete or unverified.
     */
    Preliminary: "preliminary",
    /**
     * registered: The existence of the observation is registered, but there is no result yet available.
     */
    Registered: "registered",
    /**
     * unknown: The observation status is unknown.  Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    UnknownStatus: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YXRpb25TdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvT2JzZXJ2YXRpb25TdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx1RUFBdUU7QUFFdkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILFdBQVcsRUFBRSxhQUFhO0lBQzFCOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxhQUFhLEVBQUUsU0FBUztDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L29ic2VydmF0aW9uLXN0YXR1c3wxLjAuMlxyXG5cclxuLyoqXHJcbiAqIENvZGVzIHByb3ZpZGluZyB0aGUgc3RhdHVzIG9mIGFuIG9ic2VydmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9ic2VydmF0aW9uU3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYW1lbmRlZDogVGhlIG9ic2VydmF0aW9uIGhhcyBiZWVuIG1vZGlmaWVkIHN1YnNlcXVlbnQgdG8gYmVpbmcgRmluYWwsIGFuZCBpcyBjb21wbGV0ZSBhbmQgdmVyaWZpZWQgYnkgYW4gYXV0aG9yaXplZCBwZXJzb24uXHJcbiAgICovXHJcbiAgQW1lbmRlZDogXCJhbWVuZGVkXCIsXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgb2JzZXJ2YXRpb24gaXMgdW5hdmFpbGFibGUgYmVjYXVzZSB0aGUgbWVhc3VyZW1lbnQgd2FzIG5vdCBzdGFydGVkIG9yIG5vdCBjb21wbGV0ZWQgKGFsc28gc29tZXRpbWVzIGNhbGxlZCBcImFib3J0ZWRcIikuXHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiBcImNhbmNlbGxlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBvYnNlcnZhdGlvbiBoYXMgYmVlbiB3aXRoZHJhd24gZm9sbG93aW5nIHByZXZpb3VzIGZpbmFsIHJlbGVhc2UuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGZpbmFsOiBUaGUgb2JzZXJ2YXRpb24gaXMgY29tcGxldGUgYW5kIHZlcmlmaWVkIGJ5IGFuIGF1dGhvcml6ZWQgcGVyc29uLlxyXG4gICAqL1xyXG4gIEZpbmFsOiBcImZpbmFsXCIsXHJcbiAgLyoqXHJcbiAgICogcHJlbGltaW5hcnk6IFRoaXMgaXMgYW4gaW5pdGlhbCBvciBpbnRlcmltIG9ic2VydmF0aW9uOiBkYXRhIG1heSBiZSBpbmNvbXBsZXRlIG9yIHVudmVyaWZpZWQuXHJcbiAgICovXHJcbiAgUHJlbGltaW5hcnk6IFwicHJlbGltaW5hcnlcIixcclxuICAvKipcclxuICAgKiByZWdpc3RlcmVkOiBUaGUgZXhpc3RlbmNlIG9mIHRoZSBvYnNlcnZhdGlvbiBpcyByZWdpc3RlcmVkLCBidXQgdGhlcmUgaXMgbm8gcmVzdWx0IHlldCBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgUmVnaXN0ZXJlZDogXCJyZWdpc3RlcmVkXCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIG9ic2VydmF0aW9uIHN0YXR1cyBpcyB1bmtub3duLiAgTm90ZSB0aGF0IFwidW5rbm93blwiIGlzIGEgdmFsdWUgb2YgbGFzdCByZXNvcnQgYW5kIGV2ZXJ5IGF0dGVtcHQgc2hvdWxkIGJlIG1hZGUgdG8gcHJvdmlkZSBhIG1lYW5pbmdmdWwgdmFsdWUgb3RoZXIgdGhhbiBcInVua25vd25cIi5cclxuICAgKi9cclxuICBVbmtub3duU3RhdHVzOiBcInVua25vd25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBwcm92aWRpbmcgdGhlIHN0YXR1cyBvZiBhbiBvYnNlcnZhdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIE9ic2VydmF0aW9uU3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgT2JzZXJ2YXRpb25TdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgT2JzZXJ2YXRpb25TdGF0dXNDb2Rlc107XHJcbiJdfQ==