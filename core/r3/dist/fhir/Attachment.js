// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Attachment
import * as fhir from '../fhir.js';
/**
 * For referring to data content defined in other formats.
 */
export class Attachment extends fhir.FhirElement {
    /**
     * Default constructor for Attachment - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['contentType'] !== undefined) {
            this.contentType = new fhir.FhirCode({ value: source.contentType }, options);
        }
        if (source['_contentType']) {
            if (this.contentType) {
                this.contentType.addExtendedProperties(source._contentType);
            }
            else {
                this.contentType = new fhir.FhirCode(source._contentType, options);
            }
        }
        if (source['language'] !== undefined) {
            this.language = new fhir.FhirCode({ value: source.language }, options);
        }
        if (source['_language']) {
            if (this.language) {
                this.language.addExtendedProperties(source._language);
            }
            else {
                this.language = new fhir.FhirCode(source._language, options);
            }
        }
        if (source['data'] !== undefined) {
            this.data = new fhir.FhirBase64Binary({ value: source.data }, options);
        }
        if (source['_data']) {
            if (this.data) {
                this.data.addExtendedProperties(source._data);
            }
            else {
                this.data = new fhir.FhirBase64Binary(source._data, options);
            }
        }
        if (source['url'] !== undefined) {
            this.url = new fhir.FhirUri({ value: source.url }, options);
        }
        if (source['_url']) {
            if (this.url) {
                this.url.addExtendedProperties(source._url);
            }
            else {
                this.url = new fhir.FhirUri(source._url, options);
            }
        }
        if (source['size'] !== undefined) {
            this.size = new fhir.FhirUnsignedInt({ value: source.size }, options);
        }
        if (source['_size']) {
            if (this.size) {
                this.size.addExtendedProperties(source._size);
            }
            else {
                this.size = new fhir.FhirUnsignedInt(source._size, options);
            }
        }
        if (source['hash'] !== undefined) {
            this.hash = new fhir.FhirBase64Binary({ value: source.hash }, options);
        }
        if (source['_hash']) {
            if (this.hash) {
                this.hash.addExtendedProperties(source._hash);
            }
            else {
                this.hash = new fhir.FhirBase64Binary(source._hash, options);
            }
        }
        if (source['title'] !== undefined) {
            this.title = new fhir.FhirString({ value: source.title }, options);
        }
        if (source['_title']) {
            if (this.title) {
                this.title.addExtendedProperties(source._title);
            }
            else {
                this.title = new fhir.FhirString(source._title, options);
            }
        }
        if (source['creation'] !== undefined) {
            this.creation = new fhir.FhirDateTime({ value: source.creation }, options);
        }
        if (source['_creation']) {
            if (this.creation) {
                this.creation.addExtendedProperties(source._creation);
            }
            else {
                this.creation = new fhir.FhirDateTime(source._creation, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Attachment';
        }
        iss.push(...this.vOS('contentType', exp));
        iss.push(...this.vOS('language', exp));
        iss.push(...this.vOS('data', exp));
        iss.push(...this.vOS('url', exp));
        iss.push(...this.vOS('size', exp));
        iss.push(...this.vOS('hash', exp));
        iss.push(...this.vOS('title', exp));
        iss.push(...this.vOS('creation', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Attachment._fts_dataType = 'Attachment';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvQXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUE0RW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsV0FBVztJQXFDOUM7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDeEgsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFFLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFlBQWEsQ0FBQyxDQUFDO2FBQUU7aUJBQ2xGO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUEwQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDM0c7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUMv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LENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFlBQVksQ0FBQTtTQUFFO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFqR0Q7O0dBRUc7QUFDNkIsd0JBQWEsR0FBVSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IEF0dGFjaG1lbnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IExhbmd1YWdlc0NvZGVzLCAgTGFuZ3VhZ2VzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc0NvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBMYW5ndWFnZXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0xhbmd1YWdlc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBBdHRhY2htZW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dGFjaG1lbnRBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIHR5cGUgb2YgdGhlIGRhdGEgaW4gdGhlIGF0dGFjaG1lbnQgYW5kIGFsbG93cyBhIG1ldGhvZCB0byBiZSBjaG9zZW4gdG8gaW50ZXJwcmV0IG9yIHJlbmRlciB0aGUgZGF0YS4gSW5jbHVkZXMgbWltZSB0eXBlIHBhcmFtZXRlcnMgc3VjaCBhcyBjaGFyc2V0IHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gICAqL1xyXG4gIGNvbnRlbnRUeXBlPzogZmhpci5GaGlyQ29kZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBdHRhY2htZW50LmNvbnRlbnRUeXBlXHJcbiAgICovXHJcbiAgX2NvbnRlbnRUeXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaHVtYW4gbGFuZ3VhZ2Ugb2YgdGhlIGNvbnRlbnQuIFRoZSB2YWx1ZSBjYW4gYmUgYW55IHZhbGlkIHZhbHVlIGFjY29yZGluZyB0byBCQ1AgNDcuXHJcbiAgICovXHJcbiAgbGFuZ3VhZ2U/OiBmaGlyLkZoaXJDb2RlfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQubGFuZ3VhZ2VcclxuICAgKi9cclxuICBfbGFuZ3VhZ2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiYXNlNjQtZW5jb2RlZCBkYXRhIFNIQUxMIGJlIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjaGFyYWN0ZXIgc2V0IGFzIHRoZSBiYXNlIHJlc291cmNlIFhNTCBvciBKU09OLlxyXG4gICAqL1xyXG4gIGRhdGE/OiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5kYXRhXHJcbiAgICovXHJcbiAgX2RhdGE/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIGJvdGggZGF0YSBhbmQgdXJsIGFyZSBwcm92aWRlZCwgdGhlIHVybCBTSEFMTCBwb2ludCB0byB0aGUgc2FtZSBjb250ZW50IGFzIHRoZSBkYXRhIGNvbnRhaW5zLiBVcmxzIG1heSBiZSByZWxhdGl2ZSByZWZlcmVuY2VzIG9yIG1heSByZWZlcmVuY2UgdHJhbnNpZW50IGxvY2F0aW9ucyBzdWNoIGFzIGEgd3JhcHBpbmcgZW52ZWxvcGUgdXNpbmcgY2lkOiB0aG91Z2ggdGhpcyBoYXMgcmFtaWZpY2F0aW9ucyBmb3IgdXNpbmcgc2lnbmF0dXJlcy4gUmVsYXRpdmUgVVJMcyBhcmUgaW50ZXJwcmV0ZWQgcmVsYXRpdmUgdG8gdGhlIHNlcnZpY2UgdXJsLCBsaWtlIGEgcmVzb3VyY2UgcmVmZXJlbmNlLCByYXRoZXIgdGhhbiByZWxhdGl2ZSB0byB0aGUgcmVzb3VyY2UgaXRzZWxmLiBJZiBhIFVSTCBpcyBwcm92aWRlZCwgaXQgU0hBTEwgcmVzb2x2ZSB0byBhY3R1YWwgZGF0YS5cclxuICAgKi9cclxuICB1cmw/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC51cmxcclxuICAgKi9cclxuICBfdXJsPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIGlzIHJlZHVuZGFudCBpZiB0aGUgZGF0YSBpcyBwcm92aWRlZCBhcyBhIGJhc2U2NGJpbmFyeSwgYnV0IGlzIHVzZWZ1bCBpZiB0aGUgZGF0YSBpcyBwcm92aWRlZCBhcyBhIHVybCByZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgc2l6ZT86IGZoaXIuRmhpclVuc2lnbmVkSW50fG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEF0dGFjaG1lbnQuc2l6ZVxyXG4gICAqL1xyXG4gIF9zaXplPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgaGFzaCBpcyBjYWxjdWxhdGVkIG9uIHRoZSBkYXRhIHByaW9yIHRvIGJhc2U2NCBlbmNvZGluZywgaWYgdGhlIGRhdGEgaXMgYmFzZWQ2NCBlbmNvZGVkLlxyXG4gICAqL1xyXG4gIGhhc2g/OiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5oYXNoXHJcbiAgICovXHJcbiAgX2hhc2g/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEEgbGFiZWwgb3Igc2V0IG9mIHRleHQgdG8gZGlzcGxheSBpbiBwbGFjZSBvZiB0aGUgZGF0YS5cclxuICAgKi9cclxuICB0aXRsZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBBdHRhY2htZW50LnRpdGxlXHJcbiAgICovXHJcbiAgX3RpdGxlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0aGF0IHRoZSBhdHRhY2htZW50IHdhcyBmaXJzdCBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIGNyZWF0aW9uPzogZmhpci5GaGlyRGF0ZVRpbWV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQXR0YWNobWVudC5jcmVhdGlvblxyXG4gICAqL1xyXG4gIF9jcmVhdGlvbj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3IgcmVmZXJyaW5nIHRvIGRhdGEgY29udGVudCBkZWZpbmVkIGluIG90aGVyIGZvcm1hdHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudCBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQXR0YWNobWVudCc7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgdHlwZSBvZiB0aGUgZGF0YSBpbiB0aGUgYXR0YWNobWVudCBhbmQgYWxsb3dzIGEgbWV0aG9kIHRvIGJlIGNob3NlbiB0byBpbnRlcnByZXQgb3IgcmVuZGVyIHRoZSBkYXRhLiBJbmNsdWRlcyBtaW1lIHR5cGUgcGFyYW1ldGVycyBzdWNoIGFzIGNoYXJzZXQgd2hlcmUgYXBwcm9wcmlhdGUuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRlbnRUeXBlPzogZmhpci5GaGlyQ29kZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGh1bWFuIGxhbmd1YWdlIG9mIHRoZSBjb250ZW50LiBUaGUgdmFsdWUgY2FuIGJlIGFueSB2YWxpZCB2YWx1ZSBhY2NvcmRpbmcgdG8gQkNQIDQ3LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYW5ndWFnZT86IGZoaXIuRmhpckNvZGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiYXNlNjQtZW5jb2RlZCBkYXRhIFNIQUxMIGJlIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjaGFyYWN0ZXIgc2V0IGFzIHRoZSBiYXNlIHJlc291cmNlIFhNTCBvciBKU09OLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkYXRhPzogZmhpci5GaGlyQmFzZTY0QmluYXJ5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBib3RoIGRhdGEgYW5kIHVybCBhcmUgcHJvdmlkZWQsIHRoZSB1cmwgU0hBTEwgcG9pbnQgdG8gdGhlIHNhbWUgY29udGVudCBhcyB0aGUgZGF0YSBjb250YWlucy4gVXJscyBtYXkgYmUgcmVsYXRpdmUgcmVmZXJlbmNlcyBvciBtYXkgcmVmZXJlbmNlIHRyYW5zaWVudCBsb2NhdGlvbnMgc3VjaCBhcyBhIHdyYXBwaW5nIGVudmVsb3BlIHVzaW5nIGNpZDogdGhvdWdoIHRoaXMgaGFzIHJhbWlmaWNhdGlvbnMgZm9yIHVzaW5nIHNpZ25hdHVyZXMuIFJlbGF0aXZlIFVSTHMgYXJlIGludGVycHJldGVkIHJlbGF0aXZlIHRvIHRoZSBzZXJ2aWNlIHVybCwgbGlrZSBhIHJlc291cmNlIHJlZmVyZW5jZSwgcmF0aGVyIHRoYW4gcmVsYXRpdmUgdG8gdGhlIHJlc291cmNlIGl0c2VsZi4gSWYgYSBVUkwgaXMgcHJvdmlkZWQsIGl0IFNIQUxMIHJlc29sdmUgdG8gYWN0dWFsIGRhdGEuXHJcbiAgICovXHJcbiAgcHVibGljIHVybD86IGZoaXIuRmhpclVyaXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiBieXRlcyBpcyByZWR1bmRhbnQgaWYgdGhlIGRhdGEgaXMgcHJvdmlkZWQgYXMgYSBiYXNlNjRiaW5hcnksIGJ1dCBpcyB1c2VmdWwgaWYgdGhlIGRhdGEgaXMgcHJvdmlkZWQgYXMgYSB1cmwgcmVmZXJlbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaXplPzogZmhpci5GaGlyVW5zaWduZWRJbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoYXNoIGlzIGNhbGN1bGF0ZWQgb24gdGhlIGRhdGEgcHJpb3IgdG8gYmFzZTY0IGVuY29kaW5nLCBpZiB0aGUgZGF0YSBpcyBiYXNlZDY0IGVuY29kZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGhhc2g/OiBmaGlyLkZoaXJCYXNlNjRCaW5hcnl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgbGFiZWwgb3Igc2V0IG9mIHRleHQgdG8gZGlzcGxheSBpbiBwbGFjZSBvZiB0aGUgZGF0YS5cclxuICAgKi9cclxuICBwdWJsaWMgdGl0bGU/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHRoYXQgdGhlIGF0dGFjaG1lbnQgd2FzIGZpcnN0IGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0aW9uPzogZmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEF0dGFjaG1lbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxBdHRhY2htZW50QXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2NvbnRlbnRUeXBlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvbnRlbnRUeXBlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UuY29udGVudFR5cGV9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvbnRlbnRUeXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY29udGVudFR5cGUpIHsgdGhpcy5jb250ZW50VHlwZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb250ZW50VHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNvbnRlbnRUeXBlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9jb250ZW50VHlwZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2xhbmd1YWdlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2UubGFuZ3VhZ2V9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2xhbmd1YWdlJ10pIHtcclxuICAgICAgaWYgKHRoaXMubGFuZ3VhZ2UpIHsgdGhpcy5sYW5ndWFnZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9sYW5ndWFnZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmxhbmd1YWdlID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl9sYW5ndWFnZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGEnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGF0YSA9IG5ldyBmaGlyLkZoaXJCYXNlNjRCaW5hcnkoe3ZhbHVlOiBzb3VyY2UuZGF0YX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGF0YSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEpIHsgdGhpcy5kYXRhLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RhdGEhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRhID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeShzb3VyY2UuX2RhdGEgYXMgUGFydGlhbDxmaGlyLkZoaXJCYXNlNjRCaW5hcnlBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3VybCddICE9PSB1bmRlZmluZWQpIHsgdGhpcy51cmwgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnVybH0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfdXJsJ10pIHtcclxuICAgICAgaWYgKHRoaXMudXJsKSB7IHRoaXMudXJsLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3VybCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnVybCA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl91cmwgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3NpemUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc2l6ZSA9IG5ldyBmaGlyLkZoaXJVbnNpZ25lZEludCh7dmFsdWU6IHNvdXJjZS5zaXplfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zaXplJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc2l6ZSkgeyB0aGlzLnNpemUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc2l6ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnNpemUgPSBuZXcgZmhpci5GaGlyVW5zaWduZWRJbnQoc291cmNlLl9zaXplIGFzIFBhcnRpYWw8Zmhpci5GaGlyVW5zaWduZWRJbnRBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2hhc2gnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaGFzaCA9IG5ldyBmaGlyLkZoaXJCYXNlNjRCaW5hcnkoe3ZhbHVlOiBzb3VyY2UuaGFzaH0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfaGFzaCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc2gpIHsgdGhpcy5oYXNoLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2hhc2ghKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5oYXNoID0gbmV3IGZoaXIuRmhpckJhc2U2NEJpbmFyeShzb3VyY2UuX2hhc2ggYXMgUGFydGlhbDxmaGlyLkZoaXJCYXNlNjRCaW5hcnlBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3RpdGxlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnRpdGxlID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS50aXRsZX0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfdGl0bGUnXSkge1xyXG4gICAgICBpZiAodGhpcy50aXRsZSkgeyB0aGlzLnRpdGxlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3RpdGxlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudGl0bGUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fdGl0bGUgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NyZWF0aW9uJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNyZWF0aW9uID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogc291cmNlLmNyZWF0aW9ufSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGlvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0aW9uKSB7IHRoaXMuY3JlYXRpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRpb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jcmVhdGlvbiA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZShzb3VyY2UuX2NyZWF0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmIChleHAgPT09ICcnKSB7IGV4cCA9ICdBdHRhY2htZW50JyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY29udGVudFR5cGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2xhbmd1YWdlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkYXRhJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd1cmwnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3NpemUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2hhc2gnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3RpdGxlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdjcmVhdGlvbicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=