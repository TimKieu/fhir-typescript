// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Meta
import * as fhir from '../fhir.js';
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export class Meta extends fhir.FhirElement {
    /**
     * Default constructor for Meta - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['versionId'] !== undefined) {
            this.versionId = new fhir.FhirId({ value: source.versionId }, options);
        }
        if (source['_versionId']) {
            if (this.versionId) {
                this.versionId.addExtendedProperties(source._versionId);
            }
            else {
                this.versionId = new fhir.FhirId(source._versionId, options);
            }
        }
        if (source['lastUpdated'] !== undefined) {
            this.lastUpdated = new fhir.FhirInstant({ value: source.lastUpdated }, options);
        }
        if (source['_lastUpdated']) {
            if (this.lastUpdated) {
                this.lastUpdated.addExtendedProperties(source._lastUpdated);
            }
            else {
                this.lastUpdated = new fhir.FhirInstant(source._lastUpdated, options);
            }
        }
        if (source['source'] !== undefined) {
            this.source = new fhir.FhirUri({ value: source.source }, options);
        }
        if (source['_source']) {
            if (this.source) {
                this.source.addExtendedProperties(source._source);
            }
            else {
                this.source = new fhir.FhirUri(source._source, options);
            }
        }
        if (source['profile'] !== undefined) {
            this.profile = source.profile.map((x) => new fhir.FhirCanonical({ value: x }, options));
        }
        else {
            this.profile = [];
        }
        if (source['_profile']) {
            source._profile.forEach((x, i) => {
                if (this.profile.length >= i) {
                    if (x) {
                        this.profile[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.profile.push(new fhir.FhirCanonical(x));
                    }
                }
            });
        }
        if (source['security']) {
            this.security = source.security.map((x) => new fhir.Coding(x, options));
        }
        else {
            this.security = [];
        }
        if (source['tag']) {
            this.tag = source.tag.map((x) => new fhir.Coding(x, options));
        }
        else {
            this.tag = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Meta';
        }
        iss.push(...this.vOS('versionId', exp));
        iss.push(...this.vOS('lastUpdated', exp));
        iss.push(...this.vOS('source', exp));
        iss.push(...this.vOA('profile', exp));
        iss.push(...this.vOA('security', exp));
        iss.push(...this.vOA('tag', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Meta._fts_dataType = 'Meta';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvTWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx5QkFBeUI7QUFFekIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUF5RG5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQUssU0FBUSxJQUFJLENBQUMsV0FBVztJQThCeEM7O09BRUc7SUFDSCxZQUFZLFNBQTJCLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ2pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDaEgsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVcsQ0FBQyxDQUFDO2FBQUU7aUJBQzVFO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFzQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7U0FDbkc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTtRQUMzSCxJQUFJLE1BQU0s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QWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQTtTQUFFO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUEzRUQ7O0dBRUc7QUFDNkIsa0JBQWEsR0FBVSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBNZXRhXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTZWN1cml0eUxhYmVsc0NvZGVzLCAgU2VjdXJpdHlMYWJlbHNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2VjdXJpdHlMYWJlbHNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2VjdXJpdHlMYWJlbHNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1NlY3VyaXR5TGFiZWxzVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDb21tb25UYWdzQ29kZXMsICBDb21tb25UYWdzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbW1vblRhZ3NDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29tbW9uVGFnc1ZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29tbW9uVGFnc1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBNZXRhIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2ZXIgYXNzaWducyB0aGlzIHZhbHVlLCBhbmQgaWdub3JlcyB3aGF0IHRoZSBjbGllbnQgc3BlY2lmaWVzLCBleGNlcHQgaW4gdGhlIGNhc2UgdGhhdCB0aGUgc2VydmVyIGlzIGltcG9zaW5nIHZlcnNpb24gaW50ZWdyaXR5IG9uIHVwZGF0ZXMvZGVsZXRlcy5cclxuICAgKi9cclxuICB2ZXJzaW9uSWQ/OiBmaGlyLkZoaXJJZHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXRhLnZlcnNpb25JZFxyXG4gICAqL1xyXG4gIF92ZXJzaW9uSWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgdmFsdWUgaXMgYWx3YXlzIHBvcHVsYXRlZCBleGNlcHQgd2hlbiB0aGUgcmVzb3VyY2UgaXMgZmlyc3QgYmVpbmcgY3JlYXRlZC4gVGhlIHNlcnZlciAvIHJlc291cmNlIG1hbmFnZXIgc2V0cyB0aGlzIHZhbHVlOyB3aGF0IGEgY2xpZW50IHByb3ZpZGVzIGlzIGlycmVsZXZhbnQuIFRoaXMgaXMgZXF1aXZhbGVudCB0byB0aGUgSFRUUCBMYXN0LU1vZGlmaWVkIGFuZCBTSE9VTEQgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBvbiBhIFtyZWFkXShodHRwLmh0bWwjcmVhZCkgaW50ZXJhY3Rpb24uXHJcbiAgICovXHJcbiAgbGFzdFVwZGF0ZWQ/OiBmaGlyLkZoaXJJbnN0YW50fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1ldGEubGFzdFVwZGF0ZWRcclxuICAgKi9cclxuICBfbGFzdFVwZGF0ZWQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEluIHRoZSBwcm92ZW5hbmNlIHJlc291cmNlLCB0aGlzIGNvcnJlc3BvbmRzIHRvIFByb3ZlbmFuY2UuZW50aXR5LndoYXRbeF0uIFRoZSBleGFjdCB1c2Ugb2YgdGhlIHNvdXJjZSAoYW5kIHRoZSBpbXBsaWVkIFByb3ZlbmFuY2UuZW50aXR5LnJvbGUpIGlzIGxlZnQgdG8gaW1wbGVtZW50ZXIgZGlzY3JldGlvbi4gT25seSBvbmUgbm9taW5hdGVkIHNvdXJjZSBpcyBhbGxvd2VkOyBmb3IgYWRkaXRpb25hbCBwcm92ZW5hbmNlIGRldGFpbHMsIGEgZnVsbCBQcm92ZW5hbmNlIHJlc291cmNlIHNob3VsZCBiZSB1c2VkLiBcclxuICAgKiBUaGlzIGVsZW1lbnQgY2FuIGJlIHVzZWQgdG8gaW5kaWNhdGUgd2hlcmUgdGhlIGN1cnJlbnQgbWFzdGVyIHNvdXJjZSBvZiBhIHJlc291cmNlIHRoYXQgaGFzIGEgY2Fub25pY2FsIFVSTCBpZiB0aGUgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGhvc3RlZCBhdCB0aGUgY2Fub25pY2FsIFVSTC5cclxuICAgKi9cclxuICBzb3VyY2U/OiBmaGlyLkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWV0YS5zb3VyY2VcclxuICAgKi9cclxuICBfc291cmNlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJdCBpcyB1cCB0byB0aGUgc2VydmVyIGFuZC9vciBvdGhlciBpbmZyYXN0cnVjdHVyZSBvZiBwb2xpY3kgdG8gZGV0ZXJtaW5lIHdoZXRoZXIvaG93IHRoZXNlIGNsYWltcyBhcmUgdmVyaWZpZWQgYW5kL29yIHVwZGF0ZWQgb3ZlciB0aW1lLiAgVGhlIGxpc3Qgb2YgcHJvZmlsZSBVUkxzIGlzIGEgc2V0LlxyXG4gICAqL1xyXG4gIHByb2ZpbGU/OiBmaGlyLkZoaXJDYW5vbmljYWxbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXRhLnByb2ZpbGVcclxuICAgKi9cclxuICBfcHJvZmlsZT86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbiAgLyoqXHJcbiAgICogVGhlIHNlY3VyaXR5IGxhYmVscyBjYW4gYmUgdXBkYXRlZCB3aXRob3V0IGNoYW5naW5nIHRoZSBzdGF0ZWQgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UuIFRoZSBsaXN0IG9mIHNlY3VyaXR5IGxhYmVscyBpcyBhIHNldC4gVW5pcXVlbmVzcyBpcyBiYXNlZCB0aGUgc3lzdGVtL2NvZGUsIGFuZCB2ZXJzaW9uIGFuZCBkaXNwbGF5IGFyZSBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIHNlY3VyaXR5PzogZmhpci5Db2RpbmdBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0YWdzIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHN0YXRlZCB2ZXJzaW9uIG9mIHRoZSByZXNvdXJjZS4gVGhlIGxpc3Qgb2YgdGFncyBpcyBhIHNldC4gVW5pcXVlbmVzcyBpcyBiYXNlZCB0aGUgc3lzdGVtL2NvZGUsIGFuZCB2ZXJzaW9uIGFuZCBkaXNwbGF5IGFyZSBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIHRhZz86IGZoaXIuQ29kaW5nQXJnc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRhZGF0YSBhYm91dCBhIHJlc291cmNlLiBUaGlzIGlzIGNvbnRlbnQgaW4gdGhlIHJlc291cmNlIHRoYXQgaXMgbWFpbnRhaW5lZCBieSB0aGUgaW5mcmFzdHJ1Y3R1cmUuIENoYW5nZXMgdG8gdGhlIGNvbnRlbnQgbWlnaHQgbm90IGFsd2F5cyBiZSBhc3NvY2lhdGVkIHdpdGggdmVyc2lvbiBjaGFuZ2VzIHRvIHRoZSByZXNvdXJjZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZXRhIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdNZXRhJztcclxuICAvKipcclxuICAgKiBUaGUgc2VydmVyIGFzc2lnbnMgdGhpcyB2YWx1ZSwgYW5kIGlnbm9yZXMgd2hhdCB0aGUgY2xpZW50IHNwZWNpZmllcywgZXhjZXB0IGluIHRoZSBjYXNlIHRoYXQgdGhlIHNlcnZlciBpcyBpbXBvc2luZyB2ZXJzaW9uIGludGVncml0eSBvbiB1cGRhdGVzL2RlbGV0ZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHZlcnNpb25JZD86IGZoaXIuRmhpcklkfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIHZhbHVlIGlzIGFsd2F5cyBwb3B1bGF0ZWQgZXhjZXB0IHdoZW4gdGhlIHJlc291cmNlIGlzIGZpcnN0IGJlaW5nIGNyZWF0ZWQuIFRoZSBzZXJ2ZXIgLyByZXNvdXJjZSBtYW5hZ2VyIHNldHMgdGhpcyB2YWx1ZTsgd2hhdCBhIGNsaWVudCBwcm92aWRlcyBpcyBpcnJlbGV2YW50LiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gdGhlIEhUVFAgTGFzdC1Nb2RpZmllZCBhbmQgU0hPVUxEIGhhdmUgdGhlIHNhbWUgdmFsdWUgb24gYSBbcmVhZF0oaHR0cC5odG1sI3JlYWQpIGludGVyYWN0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYXN0VXBkYXRlZD86IGZoaXIuRmhpckluc3RhbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluIHRoZSBwcm92ZW5hbmNlIHJlc291cmNlLCB0aGlzIGNvcnJlc3BvbmRzIHRvIFByb3ZlbmFuY2UuZW50aXR5LndoYXRbeF0uIFRoZSBleGFjdCB1c2Ugb2YgdGhlIHNvdXJjZSAoYW5kIHRoZSBpbXBsaWVkIFByb3ZlbmFuY2UuZW50aXR5LnJvbGUpIGlzIGxlZnQgdG8gaW1wbGVtZW50ZXIgZGlzY3JldGlvbi4gT25seSBvbmUgbm9taW5hdGVkIHNvdXJjZSBpcyBhbGxvd2VkOyBmb3IgYWRkaXRpb25hbCBwcm92ZW5hbmNlIGRldGFpbHMsIGEgZnVsbCBQcm92ZW5hbmNlIHJlc291cmNlIHNob3VsZCBiZSB1c2VkLiBcclxuICAgKiBUaGlzIGVsZW1lbnQgY2FuIGJlIHVzZWQgdG8gaW5kaWNhdGUgd2hlcmUgdGhlIGN1cnJlbnQgbWFzdGVyIHNvdXJjZSBvZiBhIHJlc291cmNlIHRoYXQgaGFzIGEgY2Fub25pY2FsIFVSTCBpZiB0aGUgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGhvc3RlZCBhdCB0aGUgY2Fub25pY2FsIFVSTC5cclxuICAgKi9cclxuICBwdWJsaWMgc291cmNlPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJdCBpcyB1cCB0byB0aGUgc2VydmVyIGFuZC9vciBvdGhlciBpbmZyYXN0cnVjdHVyZSBvZiBwb2xpY3kgdG8gZGV0ZXJtaW5lIHdoZXRoZXIvaG93IHRoZXNlIGNsYWltcyBhcmUgdmVyaWZpZWQgYW5kL29yIHVwZGF0ZWQgb3ZlciB0aW1lLiAgVGhlIGxpc3Qgb2YgcHJvZmlsZSBVUkxzIGlzIGEgc2V0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcm9maWxlOiBmaGlyLkZoaXJDYW5vbmljYWxbXTtcclxuICAvKipcclxuICAgKiBUaGUgc2VjdXJpdHkgbGFiZWxzIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHN0YXRlZCB2ZXJzaW9uIG9mIHRoZSByZXNvdXJjZS4gVGhlIGxpc3Qgb2Ygc2VjdXJpdHkgbGFiZWxzIGlzIGEgc2V0LiBVbmlxdWVuZXNzIGlzIGJhc2VkIHRoZSBzeXN0ZW0vY29kZSwgYW5kIHZlcnNpb24gYW5kIGRpc3BsYXkgYXJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHNlY3VyaXR5OiBmaGlyLkNvZGluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0YWdzIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHN0YXRlZCB2ZXJzaW9uIG9mIHRoZSByZXNvdXJjZS4gVGhlIGxpc3Qgb2YgdGFncyBpcyBhIHNldC4gVW5pcXVlbmVzcyBpcyBiYXNlZCB0aGUgc3lzdGVtL2NvZGUsIGFuZCB2ZXJzaW9uIGFuZCBkaXNwbGF5IGFyZSBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0YWc6IGZoaXIuQ29kaW5nW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgTWV0YSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE1ldGFBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsndmVyc2lvbklkJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnZlcnNpb25JZCA9IG5ldyBmaGlyLkZoaXJJZCh7dmFsdWU6IHNvdXJjZS52ZXJzaW9uSWR9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZlcnNpb25JZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnZlcnNpb25JZCkgeyB0aGlzLnZlcnNpb25JZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92ZXJzaW9uSWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy52ZXJzaW9uSWQgPSBuZXcgZmhpci5GaGlySWQoc291cmNlLl92ZXJzaW9uSWQgYXMgUGFydGlhbDxmaGlyLkZoaXJJZEFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnbGFzdFVwZGF0ZWQnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS5sYXN0VXBkYXRlZH0sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfbGFzdFVwZGF0ZWQnXSkge1xyXG4gICAgICBpZiAodGhpcy5sYXN0VXBkYXRlZCkgeyB0aGlzLmxhc3RVcGRhdGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2xhc3RVcGRhdGVkISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX2xhc3RVcGRhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlySW5zdGFudEFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc291cmNlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnNvdXJjZSA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2Uuc291cmNlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zb3VyY2UnXSkge1xyXG4gICAgICBpZiAodGhpcy5zb3VyY2UpIHsgdGhpcy5zb3VyY2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc291cmNlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc291cmNlID0gbmV3IGZoaXIuRmhpclVyaShzb3VyY2UuX3NvdXJjZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclVyaUFyZ3M+LCBvcHRpb25zKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncHJvZmlsZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5wcm9maWxlID0gc291cmNlLnByb2ZpbGUubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyQ2Fub25pY2FsKHt2YWx1ZTogeH0sIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucHJvZmlsZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydfcHJvZmlsZSddKSB7XHJcbiAgICAgIHNvdXJjZS5fcHJvZmlsZS5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9maWxlLmxlbmd0aCA+PSBpKSB7IGlmICh4KSB7IHRoaXMucHJvZmlsZVtpXS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoeCk7IH0gfVxyXG4gICAgICAgIGVsc2UgeyBpZiAoeCkgeyB0aGlzLnByb2ZpbGUucHVzaChuZXcgZmhpci5GaGlyQ2Fub25pY2FsKHggYXMgUGFydGlhbDxmaGlyLkZoaXJDYW5vbmljYWxBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzZWN1cml0eSddKSB7IHRoaXMuc2VjdXJpdHkgPSBzb3VyY2Uuc2VjdXJpdHkubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RpbmcoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zZWN1cml0eSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0YWcnXSkgeyB0aGlzLnRhZyA9IHNvdXJjZS50YWcubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RpbmcoeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50YWcgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ01ldGEnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd2ZXJzaW9uSWQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2xhc3RVcGRhdGVkJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdzb3VyY2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3Byb2ZpbGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3NlY3VyaXR5JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCd0YWcnLGV4cCkpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuIl19