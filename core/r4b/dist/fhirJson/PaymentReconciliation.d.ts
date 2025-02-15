import * as fhir from '../fhirJson.js';
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export interface PaymentReconciliationDetail extends fhir.BackboneElement {
    /**
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: fhir.Identifier | undefined;
    /**
     * For example: payment, adjustment, funds advance, etc.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: fhir.Reference | undefined;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: fhir.Reference | undefined;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: fhir.Reference | undefined;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.detail.date
     */
    _date?: fhir.FhirElement;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and its payment.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * The party which is receiving the payment.
     */
    payee?: fhir.Reference | undefined;
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: fhir.Money | undefined;
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export interface PaymentReconciliationProcessNote extends fhir.BackboneElement {
    /**
     * The business purpose of the note text.
     */
    type?: 'display' | 'print' | 'printoper' | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.processNote.type
     */
    _type?: fhir.FhirElement;
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.processNote.text
     */
    _text?: fhir.FhirElement;
}
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export interface PaymentReconciliation extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentReconciliation" | null;
    /**
     * A unique identifier assigned to this payment reconciliation.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.status
     */
    _status?: fhir.FhirElement;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.Period | undefined;
    /**
     * The date when the resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.created
     */
    _created?: fhir.FhirElement;
    /**
     * This party is also responsible for the reconciliation.
     */
    paymentIssuer?: fhir.Reference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: 'complete' | 'error' | 'partial' | 'queued' | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.outcome
     */
    _outcome?: fhir.FhirElement;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate: string | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.paymentDate
     */
    _paymentDate?: fhir.FhirElement;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount: fhir.Money | null;
    /**
     * For example: EFT number or check number.
     */
    paymentIdentifier?: fhir.Identifier | undefined;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: (fhir.PaymentReconciliationDetail | null)[] | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConcept | undefined;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: (fhir.PaymentReconciliationProcessNote | null)[] | undefined;
}
//# sourceMappingURL=PaymentReconciliation.d.ts.map