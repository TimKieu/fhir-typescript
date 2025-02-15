// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Person

import * as fhir from '../fhir.js';

// @ts-ignore
import { IdentityAssuranceLevelCodes,  IdentityAssuranceLevelCodeType } from '../fhirValueSets/IdentityAssuranceLevelCodes.js';
// @ts-ignore
import { IdentityAssuranceLevelVsValidation } from '../fhirValueSets/IdentityAssuranceLevelVsValidation.js';
// @ts-ignore
import { AdministrativeGenderCodes,  AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
/**
 * Valid arguments for the PersonLink type.
 */
export interface PersonLinkArgs extends fhir.BackboneElementArgs {
  /**
   * The resource to which this actual person is associated.
   */
  target: fhir.ReferenceArgs|null;
  /**
   * Level of assurance that this link is associated with the target resource.
   */
  assurance?: fhir.FhirCode<IdentityAssuranceLevelCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Person.link.assurance
   */
  _assurance?:fhir.FhirElementArgs;
}

/**
 * Link to a resource that concerns the same actual person.
 */
export class PersonLink extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PersonLink';
  /**
   * The resource to which this actual person is associated.
   */
  public target: fhir.Reference|null;
  /**
   * Level of assurance that this link is associated with the target resource.
   */
  public assurance?: fhir.FhirCode<IdentityAssuranceLevelCodeType>|undefined;
  /**
   * Default constructor for PersonLink - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PersonLinkArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['target']) { this.target = new fhir.Reference(source.target, options); }
    else { this.target = null; }
    if (source['assurance'] !== undefined) { this.assurance = new fhir.FhirCode<IdentityAssuranceLevelCodeType>({value: source.assurance}, options); }
    if (source['_assurance']) {
      if (this.assurance) { this.assurance.addExtendedProperties(source._assurance!); }
      else { this.assurance = new fhir.FhirCode<IdentityAssuranceLevelCodeType>(source._assurance as Partial<fhir.FhirCode>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Person.link' }
    iss.push(...this.vRS('target',exp));
    iss.push(...this.vOSV('assurance',exp,'IdentityAssuranceLevel',IdentityAssuranceLevelVsValidation,'r'));
    return iss;
  }
}
/**
 * Valid arguments for the Person type.
 */
export interface PersonArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Person"|undefined;
  /**
   * Identifier for a person within a particular scope.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Person may have multiple names with different uses or applicable periods.
   */
  name?: fhir.HumanNameArgs[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
   */
  gender?: fhir.FhirCode<AdministrativeGenderCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Person.gender
   */
  _gender?:fhir.FhirElementArgs;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown.
   */
  birthDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Person.birthDate
   */
  _birthDate?:fhir.FhirElementArgs;
  /**
   * Person may have multiple addresses with different uses or applicable periods.
   */
  address?: fhir.AddressArgs[]|undefined;
  /**
   * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
   */
  photo?: fhir.AttachmentArgs|undefined;
  /**
   * The organization that is the custodian of the person record.
   */
  managingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * Whether this person's record is in active use.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Person.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * Link to a resource that concerns the same actual person.
   */
  link?: fhir.PersonLinkArgs[]|undefined;
}

/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export class Person extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Person';
  /**
   * Resource Type Name
   */
  public override resourceType: "Person";
  /**
   * Identifier for a person within a particular scope.
   */
  public identifier: fhir.Identifier[];
  /**
   * Person may have multiple names with different uses or applicable periods.
   */
  public name: fhir.HumanName[];
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
   */
  public gender?: fhir.FhirCode<AdministrativeGenderCodeType>|undefined;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown.
   */
  public birthDate?: fhir.FhirDate|undefined;
  /**
   * Person may have multiple addresses with different uses or applicable periods.
   */
  public address: fhir.Address[];
  /**
   * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
   */
  public photo?: fhir.Attachment|undefined;
  /**
   * The organization that is the custodian of the person record.
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * Whether this person's record is in active use.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * Link to a resource that concerns the same actual person.
   */
  public link: fhir.PersonLink[];
  /**
   * Default constructor for Person - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PersonArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Person';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['name']) { this.name = source.name.map((x) => new fhir.HumanName(x, options)); }
    else { this.name = []; }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.telecom = []; }
    if (source['gender'] !== undefined) { this.gender = new fhir.FhirCode<AdministrativeGenderCodeType>({value: source.gender}, options); }
    if (source['_gender']) {
      if (this.gender) { this.gender.addExtendedProperties(source._gender!); }
      else { this.gender = new fhir.FhirCode<AdministrativeGenderCodeType>(source._gender as Partial<fhir.FhirCode>, options); }
    }
    if (source['birthDate'] !== undefined) { this.birthDate = new fhir.FhirDate({value: source.birthDate}, options); }
    if (source['_birthDate']) {
      if (this.birthDate) { this.birthDate.addExtendedProperties(source._birthDate!); }
      else { this.birthDate = new fhir.FhirDate(source._birthDate as Partial<fhir.FhirDateArgs>, options); }
    }
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x, options)); }
    else { this.address = []; }
    if (source['photo']) { this.photo = new fhir.Attachment(source.photo, options); }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization, options); }
    if (source['active'] !== undefined) { this.active = new fhir.FhirBoolean({value: source.active}, options); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['link']) { this.link = source.link.map((x) => new fhir.PersonLink(x, options)); }
    else { this.link = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Person' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOSV('gender',exp,'AdministrativeGender',AdministrativeGenderVsValidation,'r'));
    iss.push(...this.vOS('birthDate',exp));
    iss.push(...this.vOA('address',exp));
    iss.push(...this.vOS('photo',exp));
    iss.push(...this.vOS('managingOrganization',exp));
    iss.push(...this.vOS('active',exp));
    iss.push(...this.vOA('link',exp));
    return iss;
  }
}
