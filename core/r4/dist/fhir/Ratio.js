// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Ratio
import * as fhir from '../fhir.js';
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export class Ratio extends fhir.FhirElement {
    /**
     * Default constructor for Ratio - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['numerator']) {
            this.numerator = new fhir.Quantity(source.numerator, options);
        }
        if (source['denominator']) {
            this.denominator = new fhir.Quantity(source.denominator, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Ratio';
        }
        iss.push(...this.vOS('numerator', exp));
        iss.push(...this.vOS('denominator', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Ratio._fts_dataType = 'Ratio';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmF0aW8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1JhdGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWdCbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sS0FBTSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBYXpDOztPQUVHO0lBQ0gsWUFBWSxTQUE0QixFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUNsRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzNGLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO0lBQ25HLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxPQUFPLENBQUE7U0FBRTtRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBN0JEOztHQUVHO0FBQzZCLG1CQUFhLEdBQVUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBSYXRpb1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBSYXRpbyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSYXRpb0FyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBudW1lcmF0b3IuXHJcbiAgICovXHJcbiAgbnVtZXJhdG9yPzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgZGVub21pbmF0b3IuXHJcbiAgICovXHJcbiAgZGVub21pbmF0b3I/OiBmaGlyLlF1YW50aXR5QXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJlbGF0aW9uc2hpcCBvZiB0d28gUXVhbnRpdHkgdmFsdWVzIC0gZXhwcmVzc2VkIGFzIGEgbnVtZXJhdG9yIGFuZCBhIGRlbm9taW5hdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJhdGlvIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdSYXRpbyc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBudW1lcmF0b3IuXHJcbiAgICovXHJcbiAgcHVibGljIG51bWVyYXRvcj86IGZoaXIuUXVhbnRpdHl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgZGVub21pbmF0b3IuXHJcbiAgICovXHJcbiAgcHVibGljIGRlbm9taW5hdG9yPzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUmF0aW8gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxSYXRpb0FyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydudW1lcmF0b3InXSkgeyB0aGlzLm51bWVyYXRvciA9IG5ldyBmaGlyLlF1YW50aXR5KHNvdXJjZS5udW1lcmF0b3IsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydkZW5vbWluYXRvciddKSB7IHRoaXMuZGVub21pbmF0b3IgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UuZGVub21pbmF0b3IsIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUmF0aW8nIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdudW1lcmF0b3InLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2Rlbm9taW5hdG9yJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==