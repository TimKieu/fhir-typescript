// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: BackboneElement
import * as fhir from '../fhir.js';
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export class BackboneElement extends fhir.FhirElement {
    /**
     * Default constructor for BackboneElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['modifierExtension']) {
            this.modifierExtension = source.modifierExtension.map((x) => new fhir.Extension(x, options));
        }
        else {
            this.modifierExtension = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'BackboneElement';
        }
        iss.push(...this.vOA('modifierExtension', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
BackboneElement._fts_dataType = 'BackboneElement';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFja2JvbmVFbGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9CYWNrYm9uZUVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBWW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFTbkQ7O09BRUc7SUFDSCxZQUFZLFNBQXNDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FBRTthQUM3SDtZQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7U0FBRTtJQUN2QyxDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsaUJBQWlCLENBQUE7U0FBRTtRQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUF4QkQ7O0dBRUc7QUFDNkIsNkJBQWEsR0FBVSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogQmFja2JvbmVFbGVtZW50XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEJhY2tib25lRWxlbWVudCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBCYWNrYm9uZUVsZW1lbnRBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIE1heSBiZSB1c2VkIHRvIHJlcHJlc2VudCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRoYXQgaXMgbm90IHBhcnQgb2YgdGhlIGJhc2ljIGRlZmluaXRpb24gb2YgdGhlIGVsZW1lbnQsIGFuZCB0aGF0IG1vZGlmaWVzIHRoZSB1bmRlcnN0YW5kaW5nIG9mIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgaXQuIFVzdWFsbHkgbW9kaWZpZXIgZWxlbWVudHMgcHJvdmlkZSBuZWdhdGlvbiBvciBxdWFsaWZpY2F0aW9uLiBJbiBvcmRlciB0byBtYWtlIHRoZSB1c2Ugb2YgZXh0ZW5zaW9ucyBzYWZlIGFuZCBtYW5hZ2VhYmxlLCB0aGVyZSBpcyBhIHN0cmljdCBzZXQgb2YgZ292ZXJuYW5jZSBhcHBsaWVkIHRvIHRoZSBkZWZpbml0aW9uIGFuZCB1c2Ugb2YgZXh0ZW5zaW9ucy4gVGhvdWdoIGFueSBpbXBsZW1lbnRlciBpcyBhbGxvd2VkIHRvIGRlZmluZSBhbiBleHRlbnNpb24sIHRoZXJlIGlzIGEgc2V0IG9mIHJlcXVpcmVtZW50cyB0aGF0IFNIQUxMIGJlIG1ldCBhcyBwYXJ0IG9mIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBleHRlbnNpb24uIEFwcGxpY2F0aW9ucyBwcm9jZXNzaW5nIGEgcmVzb3VyY2UgYXJlIHJlcXVpcmVkIHRvIGNoZWNrIGZvciBtb2RpZmllciBleHRlbnNpb25zLlxyXG4gICAqL1xyXG4gIG1vZGlmaWVyRXh0ZW5zaW9uPzogZmhpci5FeHRlbnNpb25BcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBkZWZpbml0aW9uIGZvciBhbGwgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbnNpZGUgYSByZXNvdXJjZSAtIGJ1dCBub3QgdGhvc2UgaW4gYSBkYXRhIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFja2JvbmVFbGVtZW50IGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdCYWNrYm9uZUVsZW1lbnQnO1xyXG4gIC8qKlxyXG4gICAqIE1heSBiZSB1c2VkIHRvIHJlcHJlc2VudCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRoYXQgaXMgbm90IHBhcnQgb2YgdGhlIGJhc2ljIGRlZmluaXRpb24gb2YgdGhlIGVsZW1lbnQsIGFuZCB0aGF0IG1vZGlmaWVzIHRoZSB1bmRlcnN0YW5kaW5nIG9mIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgaXQuIFVzdWFsbHkgbW9kaWZpZXIgZWxlbWVudHMgcHJvdmlkZSBuZWdhdGlvbiBvciBxdWFsaWZpY2F0aW9uLiBJbiBvcmRlciB0byBtYWtlIHRoZSB1c2Ugb2YgZXh0ZW5zaW9ucyBzYWZlIGFuZCBtYW5hZ2VhYmxlLCB0aGVyZSBpcyBhIHN0cmljdCBzZXQgb2YgZ292ZXJuYW5jZSBhcHBsaWVkIHRvIHRoZSBkZWZpbml0aW9uIGFuZCB1c2Ugb2YgZXh0ZW5zaW9ucy4gVGhvdWdoIGFueSBpbXBsZW1lbnRlciBpcyBhbGxvd2VkIHRvIGRlZmluZSBhbiBleHRlbnNpb24sIHRoZXJlIGlzIGEgc2V0IG9mIHJlcXVpcmVtZW50cyB0aGF0IFNIQUxMIGJlIG1ldCBhcyBwYXJ0IG9mIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBleHRlbnNpb24uIEFwcGxpY2F0aW9ucyBwcm9jZXNzaW5nIGEgcmVzb3VyY2UgYXJlIHJlcXVpcmVkIHRvIGNoZWNrIGZvciBtb2RpZmllciBleHRlbnNpb25zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtb2RpZmllckV4dGVuc2lvbjogZmhpci5FeHRlbnNpb25bXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBCYWNrYm9uZUVsZW1lbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxCYWNrYm9uZUVsZW1lbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnbW9kaWZpZXJFeHRlbnNpb24nXSkgeyB0aGlzLm1vZGlmaWVyRXh0ZW5zaW9uID0gc291cmNlLm1vZGlmaWVyRXh0ZW5zaW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuRXh0ZW5zaW9uKHgsIG9wdGlvbnMpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubW9kaWZpZXJFeHRlbnNpb24gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0JhY2tib25lRWxlbWVudCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ21vZGlmaWVyRXh0ZW5zaW9uJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==