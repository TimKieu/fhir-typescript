// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ContactPoint

import * as fhir from '../fhir.js';

// @ts-ignore
import { ContactPointSystemCodes,  ContactPointSystemCodeType } from '../fhirValueSets/ContactPointSystemCodes.js';
// @ts-ignore
import { ContactPointSystemVsValidation } from '../fhirValueSets/ContactPointSystemVsValidation.js';
// @ts-ignore
import { ContactPointUseCodes,  ContactPointUseCodeType } from '../fhirValueSets/ContactPointUseCodes.js';
// @ts-ignore
import { ContactPointUseVsValidation } from '../fhirValueSets/ContactPointUseVsValidation.js';
/**
 * Valid arguments for the ContactPoint type.
 */
export interface ContactPointArgs extends fhir.FhirElementArgs {
  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  system?: fhir.FhirCode<ContactPointSystemCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ContactPoint.system
   */
  _system?:fhir.FhirElementArgs;
  /**
   * Need to support legacy numbers that are not in a tightly controlled format.
   */
  value?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ContactPoint.value
   */
  _value?:fhir.FhirElementArgs;
  /**
   * Need to track the way a person uses this contact, so a user can choose which is appropriate for their purpose.
   */
  use?: fhir.FhirCode<ContactPointUseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ContactPoint.use
   */
  _use?:fhir.FhirElementArgs;
  /**
   * Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
   */
  rank?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: ContactPoint.rank
   */
  _rank?:fhir.FhirElementArgs;
  /**
   * Time period when the contact point was/is in use.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export class ContactPoint extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ContactPoint';
  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  public system?: fhir.FhirCode<ContactPointSystemCodeType>|undefined;
  /**
   * Need to support legacy numbers that are not in a tightly controlled format.
   */
  public value?: fhir.FhirString|undefined;
  /**
   * Need to track the way a person uses this contact, so a user can choose which is appropriate for their purpose.
   */
  public use?: fhir.FhirCode<ContactPointUseCodeType>|undefined;
  /**
   * Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
   */
  public rank?: fhir.FhirPositiveInt|undefined;
  /**
   * Time period when the contact point was/is in use.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for ContactPoint - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ContactPointArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['system'] !== undefined) { this.system = new fhir.FhirCode<ContactPointSystemCodeType>({value: source.system}, options); }
    if (source['_system']) {
      if (this.system) { this.system.addExtendedProperties(source._system!); }
      else { this.system = new fhir.FhirCode<ContactPointSystemCodeType>(source._system as Partial<fhir.FhirCode>, options); }
    }
    if (source['value'] !== undefined) { this.value = new fhir.FhirString({value: source.value}, options); }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirString(source._value as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['use'] !== undefined) { this.use = new fhir.FhirCode<ContactPointUseCodeType>({value: source.use}, options); }
    if (source['_use']) {
      if (this.use) { this.use.addExtendedProperties(source._use!); }
      else { this.use = new fhir.FhirCode<ContactPointUseCodeType>(source._use as Partial<fhir.FhirCode>, options); }
    }
    if (source['rank'] !== undefined) { this.rank = new fhir.FhirPositiveInt({value: source.rank}, options); }
    if (source['_rank']) {
      if (this.rank) { this.rank.addExtendedProperties(source._rank!); }
      else { this.rank = new fhir.FhirPositiveInt(source._rank as Partial<fhir.FhirPositiveIntArgs>, options); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ContactPoint' }
    iss.push(...this.vOSV('system',exp,'ContactPointSystem',ContactPointSystemVsValidation,'r'));
    iss.push(...this.vOS('value',exp));
    iss.push(...this.vOSV('use',exp,'ContactPointUse',ContactPointUseVsValidation,'r'));
    iss.push(...this.vOS('rank',exp));
    iss.push(...this.vOS('period',exp));
    return iss;
  }
}
