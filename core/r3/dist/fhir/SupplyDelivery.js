// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyDelivery
import * as fhir from '../fhir.js';
// @ts-ignore
import { SupplydeliveryStatusVsValidation } from '../fhirValueSets/SupplydeliveryStatusVsValidation.js';
// @ts-ignore
import { SupplydeliveryTypeVsValidation } from '../fhirValueSets/SupplydeliveryTypeVsValidation.js';
/**
 * The item that is being delivered or has been supplied.
 */
export class SupplyDeliverySuppliedItem extends fhir.BackboneElement {
    /**
     * Default constructor for SupplyDeliverySuppliedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['quantity']) {
            this.quantity = new fhir.Quantity(source.quantity, options);
        }
        if (source['item']) {
            this.item = source.item;
        }
        else if (source['itemCodeableConcept']) {
            this.item = new fhir.CodeableConcept(source.itemCodeableConcept, options);
        }
        else if (source['itemReference']) {
            this.item = new fhir.Reference(source.itemReference, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SupplyDelivery.suppliedItem';
        }
        iss.push(...this.vOS('quantity', exp));
        iss.push(...this.vOS('item', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SupplyDeliverySuppliedItem._fts_dataType = 'SupplyDeliverySuppliedItem';
/**
 * Internal flag to properly serialize choice-type element SupplyDelivery.suppliedItem.item[x]
 */
SupplyDeliverySuppliedItem._fts_itemIsChoice = true;
/**
 * Record of delivery of what is supplied.
 */
export class SupplyDelivery extends fhir.DomainResource {
    /**
     * Default constructor for SupplyDelivery - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'SupplyDelivery';
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier, options);
        }
        if (source['basedOn']) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.basedOn = [];
        }
        if (source['partOf']) {
            this.partOf = source.partOf.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.partOf = [];
        }
        if (source['status'] !== undefined) {
            this.status = new fhir.FhirCode({ value: source.status }, options);
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status, options);
            }
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient, options);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type, options);
        }
        if (source['suppliedItem']) {
            this.suppliedItem = new fhir.SupplyDeliverySuppliedItem(source.suppliedItem, options);
        }
        if (source['occurrence']) {
            this.occurrence = source.occurrence;
        }
        else if (source['occurrenceDateTime'] !== undefined) {
            this.occurrence = new fhir.FhirDateTime({ value: source.occurrenceDateTime }, options);
        }
        else if (source['occurrencePeriod']) {
            this.occurrence = new fhir.Period(source.occurrencePeriod, options);
        }
        else if (source['occurrenceTiming']) {
            this.occurrence = new fhir.Timing(source.occurrenceTiming, options);
        }
        if (source['supplier']) {
            this.supplier = new fhir.Reference(source.supplier, options);
        }
        if (source['destination']) {
            this.destination = new fhir.Reference(source.destination, options);
        }
        if (source['receiver']) {
            this.receiver = source.receiver.map((x) => new fhir.Reference(x, options));
        }
        else {
            this.receiver = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'SupplyDelivery';
        }
        iss.push(...this.vOS('identifier', exp));
        iss.push(...this.vOA('basedOn', exp));
        iss.push(...this.vOA('partOf', exp));
        iss.push(...this.vOSV('status', exp, 'SupplydeliveryStatus', SupplydeliveryStatusVsValidation, 'r'));
        iss.push(...this.vOS('patient', exp));
        iss.push(...this.vOSV('type', exp, 'SupplydeliveryType', SupplydeliveryTypeVsValidation, 'r'));
        iss.push(...this.vOS('suppliedItem', exp));
        iss.push(...this.vOS('occurrence', exp));
        iss.push(...this.vOS('supplier', exp));
        iss.push(...this.vOS('destination', exp));
        iss.push(...this.vOA('receiver', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SupplyDelivery._fts_dataType = 'SupplyDelivery';
/**
 * Internal flag to properly serialize choice-type element SupplyDelivery.occurrence[x]
 */
SupplyDelivery._fts_occurrenceIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGx5RGVsaXZlcnkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1N1cHBseURlbGl2ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUVoQyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHeEcsYUFBYTtBQUNiLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBdUJwRzs7R0FFRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWlCbEU7O09BRUc7SUFDSCxZQUFZLFNBQWlELEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZHLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDeEYsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FBRTthQUMzQyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDakgsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENB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Q3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsb0JBQW9CLEVBQUMsOEJBQThCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzRixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBdkdEOztHQUVHO0FBQzZCLDRCQUFhLEdBQVUsZ0JBQWdCLENBQUM7QUFzQ3hFOztHQUVHO0FBQ3VCLHNDQUF1QixHQUFRLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogU3VwcGx5RGVsaXZlcnlcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1cHBseWRlbGl2ZXJ5U3RhdHVzQ29kZXMsICBTdXBwbHlkZWxpdmVyeVN0YXR1c0NvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TdXBwbHlkZWxpdmVyeVN0YXR1c0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdXBwbHlkZWxpdmVyeVN0YXR1c1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU3VwcGx5ZGVsaXZlcnlTdGF0dXNWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFN1cHBseWRlbGl2ZXJ5VHlwZUNvZGVzLCAgU3VwcGx5ZGVsaXZlcnlUeXBlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1cHBseWRlbGl2ZXJ5VHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTdXBwbHlkZWxpdmVyeVR5cGVWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1N1cHBseWRlbGl2ZXJ5VHlwZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdXBwbHlEZWxpdmVyeVN1cHBsaWVkSXRlbSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdXBwbHlEZWxpdmVyeVN1cHBsaWVkSXRlbUFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhbW91bnQgb2Ygc3VwcGx5IHRoYXQgaGFzIGJlZW4gZGlzcGVuc2VkLiBJbmNsdWRlcyB1bml0IG9mIG1lYXN1cmUuXHJcbiAgICovXHJcbiAgcXVhbnRpdHk/OiBmaGlyLlF1YW50aXR5QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgbWVkaWNhdGlvbiwgc3Vic3RhbmNlIG9yIGRldmljZSBiZWluZyBkaXNwZW5zZWQuIFRoaXMgaXMgZWl0aGVyIGEgbGluayB0byBhIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgZGV0YWlscyBvZiB0aGUgaXRlbSBvciBhIGNvZGUgdGhhdCBpZGVudGlmaWVzIHRoZSBpdGVtIGZyb20gYSBrbm93biBsaXN0LlxyXG4gICAqL1xyXG4gIGl0ZW0/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgbWVkaWNhdGlvbiwgc3Vic3RhbmNlIG9yIGRldmljZSBiZWluZyBkaXNwZW5zZWQuIFRoaXMgaXMgZWl0aGVyIGEgbGluayB0byBhIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgZGV0YWlscyBvZiB0aGUgaXRlbSBvciBhIGNvZGUgdGhhdCBpZGVudGlmaWVzIHRoZSBpdGVtIGZyb20gYSBrbm93biBsaXN0LlxyXG4gICAqL1xyXG4gIGl0ZW1Db2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIG1lZGljYXRpb24sIHN1YnN0YW5jZSBvciBkZXZpY2UgYmVpbmcgZGlzcGVuc2VkLiBUaGlzIGlzIGVpdGhlciBhIGxpbmsgdG8gYSByZXNvdXJjZSByZXByZXNlbnRpbmcgdGhlIGRldGFpbHMgb2YgdGhlIGl0ZW0gb3IgYSBjb2RlIHRoYXQgaWRlbnRpZmllcyB0aGUgaXRlbSBmcm9tIGEga25vd24gbGlzdC5cclxuICAgKi9cclxuICBpdGVtUmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBpdGVtIHRoYXQgaXMgYmVpbmcgZGVsaXZlcmVkIG9yIGhhcyBiZWVuIHN1cHBsaWVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBseURlbGl2ZXJ5U3VwcGxpZWRJdGVtIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3VwcGx5RGVsaXZlcnlTdXBwbGllZEl0ZW0nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhbW91bnQgb2Ygc3VwcGx5IHRoYXQgaGFzIGJlZW4gZGlzcGVuc2VkLiBJbmNsdWRlcyB1bml0IG9mIG1lYXN1cmUuXHJcbiAgICovXHJcbiAgcHVibGljIHF1YW50aXR5PzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgbWVkaWNhdGlvbiwgc3Vic3RhbmNlIG9yIGRldmljZSBiZWluZyBkaXNwZW5zZWQuIFRoaXMgaXMgZWl0aGVyIGEgbGluayB0byBhIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgZGV0YWlscyBvZiB0aGUgaXRlbSBvciBhIGNvZGUgdGhhdCBpZGVudGlmaWVzIHRoZSBpdGVtIGZyb20gYSBrbm93biBsaXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpdGVtPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUmVmZXJlbmNlKXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBTdXBwbHlEZWxpdmVyeS5zdXBwbGllZEl0ZW0uaXRlbVt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19pdGVtSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgU3VwcGx5RGVsaXZlcnlTdXBwbGllZEl0ZW0gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdXBwbHlEZWxpdmVyeVN1cHBsaWVkSXRlbUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydxdWFudGl0eSddKSB7IHRoaXMucXVhbnRpdHkgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UucXVhbnRpdHksIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydpdGVtJ10pIHsgdGhpcy5pdGVtID0gc291cmNlLml0ZW07IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnaXRlbUNvZGVhYmxlQ29uY2VwdCddKSB7IHRoaXMuaXRlbSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuaXRlbUNvZGVhYmxlQ29uY2VwdCwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnaXRlbVJlZmVyZW5jZSddKSB7IHRoaXMuaXRlbSA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuaXRlbVJlZmVyZW5jZSwgb3B0aW9ucyk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdTdXBwbHlEZWxpdmVyeS5zdXBwbGllZEl0ZW0nIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdxdWFudGl0eScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnaXRlbScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3VwcGx5RGVsaXZlcnkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VwcGx5RGVsaXZlcnlBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJTdXBwbHlEZWxpdmVyeVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGFzc2lnbmVkIGJ5IHRoZSBkaXNwZW5zZXIsIGFuZCB1c2VkIHRvIHJlZmVyIHRvIHRoaXMgb3JkZXIgaW4gb3RoZXIgZXh0ZXJuYWwgc3RhbmRhcmRzLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHBsYW4sIHByb3Bvc2FsIG9yIG9yZGVyIHRoYXQgaXMgZnVsZmlsbGVkIGluIHdob2xlIG9yIGluIHBhcnQgYnkgdGhpcyBldmVudC5cclxuICAgKi9cclxuICBiYXNlZE9uPzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5vdCB0byBiZSB1c2VkIHRvIGxpbmsgYW4gZXZlbnQgdG8gYW4gRW5jb3VudGVyIC0gdXNlIEV2ZW50LmNvbnRleHQgZm9yIHRoYXQuXHJcbiAgICogW1RoZSBhbGxvd2VkIHJlZmVyZW5jZSByZXNvdXJjZXMgbWF5IGJlIGFkanVzdGVkIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgZXZlbnQgcmVzb3VyY2VdLlxyXG4gICAqL1xyXG4gIHBhcnRPZj86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxTdXBwbHlkZWxpdmVyeVN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdXBwbHlEZWxpdmVyeS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGxpbmsgdG8gYSByZXNvdXJjZSByZXByZXNlbnRpbmcgdGhlIHBlcnNvbiB3aG9tIHRoZSBkZWxpdmVyZWQgaXRlbSBpcyBmb3IuXHJcbiAgICovXHJcbiAgcGF0aWVudD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSB0eXBlIG9mIGRpc3BlbnNpbmcgZXZlbnQgdGhhdCBpcyBwZXJmb3JtZWQuIEV4YW1wbGVzIGluY2x1ZGU6IFRyaWFsIEZpbGwsIENvbXBsZXRpb24gb2YgVHJpYWwsIFBhcnRpYWwgRmlsbCwgRW1lcmdlbmN5IEZpbGwsIFNhbXBsZXMsIGV0Yy5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaXRlbSB0aGF0IGlzIGJlaW5nIGRlbGl2ZXJlZCBvciBoYXMgYmVlbiBzdXBwbGllZC5cclxuICAgKi9cclxuICBzdXBwbGllZEl0ZW0/OiBmaGlyLlN1cHBseURlbGl2ZXJ5U3VwcGxpZWRJdGVtQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogW1RoZSBsaXN0IG9mIHR5cGVzIG1heSBiZSBjb25zdHJhaW5lZCBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIHR5cGUgb2YgZXZlbnRdLlxyXG4gICAqL1xyXG4gIG9jY3VycmVuY2U/OiBmaGlyLkZoaXJEYXRlVGltZXxmaGlyLlBlcmlvZHxmaGlyLlRpbWluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogW1RoZSBsaXN0IG9mIHR5cGVzIG1heSBiZSBjb25zdHJhaW5lZCBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIHR5cGUgb2YgZXZlbnRdLlxyXG4gICAqL1xyXG4gIG9jY3VycmVuY2VEYXRlVGltZT86IGZoaXIuRmhpckRhdGVUaW1lfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogW1RoZSBsaXN0IG9mIHR5cGVzIG1heSBiZSBjb25zdHJhaW5lZCBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIHR5cGUgb2YgZXZlbnRdLlxyXG4gICAqL1xyXG4gIG9jY3VycmVuY2VQZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFtUaGUgbGlzdCBvZiB0eXBlcyBtYXkgYmUgY29uc3RyYWluZWQgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSB0eXBlIG9mIGV2ZW50XS5cclxuICAgKi9cclxuICBvY2N1cnJlbmNlVGltaW5nPzogZmhpci5UaW1pbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaW5kaXZpZHVhbCByZXNwb25zaWJsZSBmb3IgZGlzcGVuc2luZyB0aGUgbWVkaWNhdGlvbiwgc3VwcGxpZXIgb3IgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHN1cHBsaWVyPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWNhdGlvbiBvZiB0aGUgZmFjaWxpdHkvbG9jYXRpb24gd2hlcmUgdGhlIFN1cHBseSB3YXMgc2hpcHBlZCB0bywgYXMgcGFydCBvZiB0aGUgZGlzcGVuc2UgZXZlbnQuXHJcbiAgICovXHJcbiAgZGVzdGluYXRpb24/OiBmaGlyLlJlZmVyZW5jZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIHBlcnNvbiB3aG8gcGlja2VkIHVwIHRoZSBTdXBwbHkuXHJcbiAgICovXHJcbiAgcmVjZWl2ZXI/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWNvcmQgb2YgZGVsaXZlcnkgb2Ygd2hhdCBpcyBzdXBwbGllZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdXBwbHlEZWxpdmVyeSBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3VwcGx5RGVsaXZlcnknO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiU3VwcGx5RGVsaXZlcnlcIjtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGFzc2lnbmVkIGJ5IHRoZSBkaXNwZW5zZXIsIGFuZCB1c2VkIHRvIHJlZmVyIHRvIHRoaXMgb3JkZXIgaW4gb3RoZXIgZXh0ZXJuYWwgc3RhbmRhcmRzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHBsYW4sIHByb3Bvc2FsIG9yIG9yZGVyIHRoYXQgaXMgZnVsZmlsbGVkIGluIHdob2xlIG9yIGluIHBhcnQgYnkgdGhpcyBldmVudC5cclxuICAgKi9cclxuICBwdWJsaWMgYmFzZWRPbjogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBOb3QgdG8gYmUgdXNlZCB0byBsaW5rIGFuIGV2ZW50IHRvIGFuIEVuY291bnRlciAtIHVzZSBFdmVudC5jb250ZXh0IGZvciB0aGF0LlxyXG4gICAqIFtUaGUgYWxsb3dlZCByZWZlcmVuY2UgcmVzb3VyY2VzIG1heSBiZSBhZGp1c3RlZCBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIGV2ZW50IHJlc291cmNlXS5cclxuICAgKi9cclxuICBwdWJsaWMgcGFydE9mOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSB0aGUgc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgbWFyayB0aGUgcmVzb3VyY2UgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzPzogZmhpci5GaGlyQ29kZTxTdXBwbHlkZWxpdmVyeVN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBsaW5rIHRvIGEgcmVzb3VyY2UgcmVwcmVzZW50aW5nIHRoZSBwZXJzb24gd2hvbSB0aGUgZGVsaXZlcmVkIGl0ZW0gaXMgZm9yLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYXRpZW50PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgdHlwZSBvZiBkaXNwZW5zaW5nIGV2ZW50IHRoYXQgaXMgcGVyZm9ybWVkLiBFeGFtcGxlcyBpbmNsdWRlOiBUcmlhbCBGaWxsLCBDb21wbGV0aW9uIG9mIFRyaWFsLCBQYXJ0aWFsIEZpbGwsIEVtZXJnZW5jeSBGaWxsLCBTYW1wbGVzLCBldGMuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGl0ZW0gdGhhdCBpcyBiZWluZyBkZWxpdmVyZWQgb3IgaGFzIGJlZW4gc3VwcGxpZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHN1cHBsaWVkSXRlbT86IGZoaXIuU3VwcGx5RGVsaXZlcnlTdXBwbGllZEl0ZW18dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFtUaGUgbGlzdCBvZiB0eXBlcyBtYXkgYmUgY29uc3RyYWluZWQgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSB0eXBlIG9mIGV2ZW50XS5cclxuICAgKi9cclxuICBwdWJsaWMgb2NjdXJyZW5jZT86IChmaGlyLkZoaXJEYXRlVGltZXxmaGlyLlBlcmlvZHxmaGlyLlRpbWluZyl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgU3VwcGx5RGVsaXZlcnkub2NjdXJyZW5jZVt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19vY2N1cnJlbmNlSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIGluZGl2aWR1YWwgcmVzcG9uc2libGUgZm9yIGRpc3BlbnNpbmcgdGhlIG1lZGljYXRpb24sIHN1cHBsaWVyIG9yIGRldmljZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3VwcGxpZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmljYXRpb24gb2YgdGhlIGZhY2lsaXR5L2xvY2F0aW9uIHdoZXJlIHRoZSBTdXBwbHkgd2FzIHNoaXBwZWQgdG8sIGFzIHBhcnQgb2YgdGhlIGRpc3BlbnNlIGV2ZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXN0aW5hdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBwZXJzb24gd2hvIHBpY2tlZCB1cCB0aGUgU3VwcGx5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWNlaXZlcjogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdXBwbHlEZWxpdmVyeSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1cHBseURlbGl2ZXJ5QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIHRoaXMucmVzb3VyY2VUeXBlID0gJ1N1cHBseURlbGl2ZXJ5JztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBuZXcgZmhpci5JZGVudGlmaWVyKHNvdXJjZS5pZGVudGlmaWVyLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYmFzZWRPbiddKSB7IHRoaXMuYmFzZWRPbiA9IHNvdXJjZS5iYXNlZE9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYmFzZWRPbiA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXJ0T2YnXSkgeyB0aGlzLnBhcnRPZiA9IHNvdXJjZS5wYXJ0T2YubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5wYXJ0T2YgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1cHBseWRlbGl2ZXJ5U3RhdHVzQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLnN0YXR1c30sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfc3RhdHVzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzKSB7IHRoaXMuc3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3N0YXR1cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG5ldyBmaGlyLkZoaXJDb2RlPFN1cHBseWRlbGl2ZXJ5U3RhdHVzQ29kZVR5cGU+KHNvdXJjZS5fc3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwYXRpZW50J10pIHsgdGhpcy5wYXRpZW50ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5wYXRpZW50LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsndHlwZSddKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UudHlwZSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3N1cHBsaWVkSXRlbSddKSB7IHRoaXMuc3VwcGxpZWRJdGVtID0gbmV3IGZoaXIuU3VwcGx5RGVsaXZlcnlTdXBwbGllZEl0ZW0oc291cmNlLnN1cHBsaWVkSXRlbSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ29jY3VycmVuY2UnXSkgeyB0aGlzLm9jY3VycmVuY2UgPSBzb3VyY2Uub2NjdXJyZW5jZTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydvY2N1cnJlbmNlRGF0ZVRpbWUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMub2NjdXJyZW5jZSA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5vY2N1cnJlbmNlRGF0ZVRpbWV9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydvY2N1cnJlbmNlUGVyaW9kJ10pIHsgdGhpcy5vY2N1cnJlbmNlID0gbmV3IGZoaXIuUGVyaW9kKHNvdXJjZS5vY2N1cnJlbmNlUGVyaW9kLCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydvY2N1cnJlbmNlVGltaW5nJ10pIHsgdGhpcy5vY2N1cnJlbmNlID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS5vY2N1cnJlbmNlVGltaW5nLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3VwcGxpZXInXSkgeyB0aGlzLnN1cHBsaWVyID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zdXBwbGllciwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Rlc3RpbmF0aW9uJ10pIHsgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UuZGVzdGluYXRpb24sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWNlaXZlciddKSB7IHRoaXMucmVjZWl2ZXIgPSBzb3VyY2UucmVjZWl2ZXIubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWNlaXZlciA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU3VwcGx5RGVsaXZlcnknIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdpZGVudGlmaWVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdiYXNlZE9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdwYXJ0T2YnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdzdGF0dXMnLGV4cCwnU3VwcGx5ZGVsaXZlcnlTdGF0dXMnLFN1cHBseWRlbGl2ZXJ5U3RhdHVzVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3BhdGllbnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCd0eXBlJyxleHAsJ1N1cHBseWRlbGl2ZXJ5VHlwZScsU3VwcGx5ZGVsaXZlcnlUeXBlVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3N1cHBsaWVkSXRlbScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnb2NjdXJyZW5jZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc3VwcGxpZXInLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Rlc3RpbmF0aW9uJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdyZWNlaXZlcicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=