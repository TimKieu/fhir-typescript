// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-channel-type|4.3.0
/**
 * The type of method used to execute a subscription.
 */
export const SubscriptionChannelTypeCodes = {
    /**
     * email: The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).
     */
    Email: "email",
    /**
     * message: The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.
     */
    Message: "message",
    /**
     * rest-hook: The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.
     */
    RestHook: "rest-hook",
    /**
     * sms: The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).
     */
    SMS: "sms",
    /**
     * websocket: The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.
     */
    Websocket: "websocket",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw4RUFBOEU7QUFFOUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUMxQzs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxXQUFXO0lBQ3JCOztPQUVHO0lBQ0gsR0FBRyxFQUFFLEtBQUs7SUFDVjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc3Vic2NyaXB0aW9uLWNoYW5uZWwtdHlwZXw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIG1ldGhvZCB1c2VkIHRvIGV4ZWN1dGUgYSBzdWJzY3JpcHRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBlbWFpbDogVGhlIGNoYW5uZWwgaXMgZXhlY3V0ZWQgYnkgc2VuZGluZyBhbiBlbWFpbCB0byB0aGUgZW1haWwgYWRkcmVzc2VkIGluIHRoZSBVUkkgKHdoaWNoIG11c3QgYmUgYSBtYWlsdG86KS5cclxuICAgKi9cclxuICBFbWFpbDogXCJlbWFpbFwiLFxyXG4gIC8qKlxyXG4gICAqIG1lc3NhZ2U6IFRoZSBjaGFubmVsIGlzIGV4ZWN1dGVkIGJ5IHNlbmRpbmcgYSBtZXNzYWdlIChlLmcuIGEgQnVuZGxlIHdpdGggYSBNZXNzYWdlSGVhZGVyIHJlc291cmNlIGV0Yy4pIHRvIHRoZSBhcHBsaWNhdGlvbiBpZGVudGlmaWVkIGluIHRoZSBVUkkuXHJcbiAgICovXHJcbiAgTWVzc2FnZTogXCJtZXNzYWdlXCIsXHJcbiAgLyoqXHJcbiAgICogcmVzdC1ob29rOiBUaGUgY2hhbm5lbCBpcyBleGVjdXRlZCBieSBtYWtpbmcgYSBwb3N0IHRvIHRoZSBVUkkuIElmIGEgcGF5bG9hZCBpcyBpbmNsdWRlZCwgdGhlIFVSTCBpcyBpbnRlcnByZXRlZCBhcyB0aGUgc2VydmljZSBiYXNlLCBhbmQgYW4gdXBkYXRlIChQVVQpIGlzIG1hZGUuXHJcbiAgICovXHJcbiAgUmVzdEhvb2s6IFwicmVzdC1ob29rXCIsXHJcbiAgLyoqXHJcbiAgICogc21zOiBUaGUgY2hhbm5lbCBpcyBleGVjdXRlZCBieSBzZW5kaW5nIGFuIFNNUyBtZXNzYWdlIHRvIHRoZSBwaG9uZSBudW1iZXIgaWRlbnRpZmllZCBpbiB0aGUgVVJMICh0ZWw6KS5cclxuICAgKi9cclxuICBTTVM6IFwic21zXCIsXHJcbiAgLyoqXHJcbiAgICogd2Vic29ja2V0OiBUaGUgY2hhbm5lbCBpcyBleGVjdXRlZCBieSBzZW5kaW5nIGEgcGFja2V0IGFjcm9zcyBhIHdlYiBzb2NrZXQgY29ubmVjdGlvbiBtYWludGFpbmVkIGJ5IHRoZSBjbGllbnQuIFRoZSBVUkwgaWRlbnRpZmllcyB0aGUgd2Vic29ja2V0LCBhbmQgdGhlIGNsaWVudCBiaW5kcyB0byB0aGlzIFVSTC5cclxuICAgKi9cclxuICBXZWJzb2NrZXQ6IFwid2Vic29ja2V0XCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgbWV0aG9kIHVzZWQgdG8gZXhlY3V0ZSBhIHN1YnNjcmlwdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZVR5cGUgPSB0eXBlb2YgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2Rlc1trZXlvZiB0eXBlb2YgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2Rlc107XHJcbiJdfQ==