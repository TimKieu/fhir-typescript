// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/therapy-relationship-type|4.3.0
/**
 * Classification of relationship between a therapy and a contraindication or an indication.
 */
export const TherapyRelationshipTypeCodes = {
    /**
     * contraindicated-except-with: Contraindicated unless the other therapy is given
     */
    ContraindicatedUnlessTheOtherTherapyIsGiven: "contraindicated-except-with",
    /**
     * contraindicated-only-with: Only contraindicated if the other therapy is given
     */
    OnlyContraindicatedIfTheOtherTherapyIsGiven: "contraindicated-only-with",
    /**
     * indicated-except-with: Indicated except when the other therapy is given
     */
    IndicatedExceptWhenTheOtherTherapyIsGiven: "indicated-except-with",
    /**
     * indicated-only-before: Indicated only if the other therapy is planned to be given afterwards (prep)
     */
    IndicatedOnlyIfTheOtherTherapyIsPlannedToBeGivenAfterwardsPrep: "indicated-only-before",
    /**
     * indicated-only-with: Indicated only when the other therapy is given (co-occurrent)
     */
    IndicatedOnlyWhenTheOtherTherapyIsGivenCoOccurrent: "indicated-only-with",
    /**
     * replace-other-therapy: Indicated to replace the other therapy
     */
    IndicatedToReplaceTheOtherTherapy: "replace-other-therapy",
    /**
     * replace-other-therapy-contraindicated: Indicated to replace the other contraindicated therapy.
     */
    IndicatedToReplaceTheOtherContraindicatedTherapy: "replace-other-therapy-contraindicated",
    /**
     * replace-other-therapy-not-effective: Indicated to replace the other therapy not effective on patient
     */
    IndicatedToReplaceTheOtherTherapyNotEffectiveOnPatient: "replace-other-therapy-not-effective",
    /**
     * replace-other-therapy-not-tolerated: Indicated to replace the other therapy not well tolerated by patient
     */
    IndicatedToReplaceTheOtherTherapyNotWellToleratedByPatient: "replace-other-therapy-not-tolerated",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlcmFweVJlbGF0aW9uc2hpcFR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvVGhlcmFweVJlbGF0aW9uc2hpcFR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw4RUFBOEU7QUFFOUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUMxQzs7T0FFRztJQUNILDJDQUEyQyxFQUFFLDZCQUE2QjtJQUMxRTs7T0FFRztJQUNILDJDQUEyQyxFQUFFLDJCQUEyQjtJQUN4RTs7T0FFRztJQUNILHlDQUF5QyxFQUFFLHVCQUF1QjtJQUNsRTs7T0FFRztJQUNILDhEQUE4RCxFQUFFLHVCQUF1QjtJQUN2Rjs7T0FFRztJQUNILGtEQUFrRCxFQUFFLHFCQUFxQjtJQUN6RTs7T0FFRztJQUNILGlDQUFpQyxFQUFFLHVCQUF1QjtJQUMxRDs7T0FFRztJQUNILGdEQUFnRCxFQUFFLHVDQUF1QztJQUN6Rjs7T0FFRztJQUNILHNEQUFzRCxFQUFFLHFDQUFxQztJQUM3Rjs7T0FFRztJQUNILDBEQUEwRCxFQUFFLHFDQUFxQztDQUN6RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC90aGVyYXB5LXJlbGF0aW9uc2hpcC10eXBlfDQuMy4wXHJcblxyXG4vKipcclxuICogQ2xhc3NpZmljYXRpb24gb2YgcmVsYXRpb25zaGlwIGJldHdlZW4gYSB0aGVyYXB5IGFuZCBhIGNvbnRyYWluZGljYXRpb24gb3IgYW4gaW5kaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBUaGVyYXB5UmVsYXRpb25zaGlwVHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbnRyYWluZGljYXRlZC1leGNlcHQtd2l0aDogQ29udHJhaW5kaWNhdGVkIHVubGVzcyB0aGUgb3RoZXIgdGhlcmFweSBpcyBnaXZlblxyXG4gICAqL1xyXG4gIENvbnRyYWluZGljYXRlZFVubGVzc1RoZU90aGVyVGhlcmFweUlzR2l2ZW46IFwiY29udHJhaW5kaWNhdGVkLWV4Y2VwdC13aXRoXCIsXHJcbiAgLyoqXHJcbiAgICogY29udHJhaW5kaWNhdGVkLW9ubHktd2l0aDogT25seSBjb250cmFpbmRpY2F0ZWQgaWYgdGhlIG90aGVyIHRoZXJhcHkgaXMgZ2l2ZW5cclxuICAgKi9cclxuICBPbmx5Q29udHJhaW5kaWNhdGVkSWZUaGVPdGhlclRoZXJhcHlJc0dpdmVuOiBcImNvbnRyYWluZGljYXRlZC1vbmx5LXdpdGhcIixcclxuICAvKipcclxuICAgKiBpbmRpY2F0ZWQtZXhjZXB0LXdpdGg6IEluZGljYXRlZCBleGNlcHQgd2hlbiB0aGUgb3RoZXIgdGhlcmFweSBpcyBnaXZlblxyXG4gICAqL1xyXG4gIEluZGljYXRlZEV4Y2VwdFdoZW5UaGVPdGhlclRoZXJhcHlJc0dpdmVuOiBcImluZGljYXRlZC1leGNlcHQtd2l0aFwiLFxyXG4gIC8qKlxyXG4gICAqIGluZGljYXRlZC1vbmx5LWJlZm9yZTogSW5kaWNhdGVkIG9ubHkgaWYgdGhlIG90aGVyIHRoZXJhcHkgaXMgcGxhbm5lZCB0byBiZSBnaXZlbiBhZnRlcndhcmRzIChwcmVwKVxyXG4gICAqL1xyXG4gIEluZGljYXRlZE9ubHlJZlRoZU90aGVyVGhlcmFweUlzUGxhbm5lZFRvQmVHaXZlbkFmdGVyd2FyZHNQcmVwOiBcImluZGljYXRlZC1vbmx5LWJlZm9yZVwiLFxyXG4gIC8qKlxyXG4gICAqIGluZGljYXRlZC1vbmx5LXdpdGg6IEluZGljYXRlZCBvbmx5IHdoZW4gdGhlIG90aGVyIHRoZXJhcHkgaXMgZ2l2ZW4gKGNvLW9jY3VycmVudClcclxuICAgKi9cclxuICBJbmRpY2F0ZWRPbmx5V2hlblRoZU90aGVyVGhlcmFweUlzR2l2ZW5Db09jY3VycmVudDogXCJpbmRpY2F0ZWQtb25seS13aXRoXCIsXHJcbiAgLyoqXHJcbiAgICogcmVwbGFjZS1vdGhlci10aGVyYXB5OiBJbmRpY2F0ZWQgdG8gcmVwbGFjZSB0aGUgb3RoZXIgdGhlcmFweVxyXG4gICAqL1xyXG4gIEluZGljYXRlZFRvUmVwbGFjZVRoZU90aGVyVGhlcmFweTogXCJyZXBsYWNlLW90aGVyLXRoZXJhcHlcIixcclxuICAvKipcclxuICAgKiByZXBsYWNlLW90aGVyLXRoZXJhcHktY29udHJhaW5kaWNhdGVkOiBJbmRpY2F0ZWQgdG8gcmVwbGFjZSB0aGUgb3RoZXIgY29udHJhaW5kaWNhdGVkIHRoZXJhcHkuXHJcbiAgICovXHJcbiAgSW5kaWNhdGVkVG9SZXBsYWNlVGhlT3RoZXJDb250cmFpbmRpY2F0ZWRUaGVyYXB5OiBcInJlcGxhY2Utb3RoZXItdGhlcmFweS1jb250cmFpbmRpY2F0ZWRcIixcclxuICAvKipcclxuICAgKiByZXBsYWNlLW90aGVyLXRoZXJhcHktbm90LWVmZmVjdGl2ZTogSW5kaWNhdGVkIHRvIHJlcGxhY2UgdGhlIG90aGVyIHRoZXJhcHkgbm90IGVmZmVjdGl2ZSBvbiBwYXRpZW50XHJcbiAgICovXHJcbiAgSW5kaWNhdGVkVG9SZXBsYWNlVGhlT3RoZXJUaGVyYXB5Tm90RWZmZWN0aXZlT25QYXRpZW50OiBcInJlcGxhY2Utb3RoZXItdGhlcmFweS1ub3QtZWZmZWN0aXZlXCIsXHJcbiAgLyoqXHJcbiAgICogcmVwbGFjZS1vdGhlci10aGVyYXB5LW5vdC10b2xlcmF0ZWQ6IEluZGljYXRlZCB0byByZXBsYWNlIHRoZSBvdGhlciB0aGVyYXB5IG5vdCB3ZWxsIHRvbGVyYXRlZCBieSBwYXRpZW50XHJcbiAgICovXHJcbiAgSW5kaWNhdGVkVG9SZXBsYWNlVGhlT3RoZXJUaGVyYXB5Tm90V2VsbFRvbGVyYXRlZEJ5UGF0aWVudDogXCJyZXBsYWNlLW90aGVyLXRoZXJhcHktbm90LXRvbGVyYXRlZFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzaWZpY2F0aW9uIG9mIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIGEgdGhlcmFweSBhbmQgYSBjb250cmFpbmRpY2F0aW9uIG9yIGFuIGluZGljYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUaGVyYXB5UmVsYXRpb25zaGlwVHlwZUNvZGVUeXBlID0gdHlwZW9mIFRoZXJhcHlSZWxhdGlvbnNoaXBUeXBlQ29kZXNba2V5b2YgdHlwZW9mIFRoZXJhcHlSZWxhdGlvbnNoaXBUeXBlQ29kZXNdO1xyXG4iXX0=