// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: CoverageEligibilityResponse

import * as fhir from '../fhir.js';

// @ts-ignore
import { BenefitTypeCodes,  BenefitTypeCodeType } from '../fhirValueSets/BenefitTypeCodes.js';
// @ts-ignore
import { BenefitTypeVsValidation } from '../fhirValueSets/BenefitTypeVsValidation.js';
// @ts-ignore
import { ExBenefitcategoryCodes,  ExBenefitcategoryCodeType } from '../fhirValueSets/ExBenefitcategoryCodes.js';
// @ts-ignore
import { ExBenefitcategoryVsValidation } from '../fhirValueSets/ExBenefitcategoryVsValidation.js';
// @ts-ignore
import { ServiceUsclsCodes,  ServiceUsclsCodeType } from '../fhirValueSets/ServiceUsclsCodes.js';
// @ts-ignore
import { ServiceUsclsVsValidation } from '../fhirValueSets/ServiceUsclsVsValidation.js';
// @ts-ignore
import { ClaimModifiersCodes,  ClaimModifiersCodeType } from '../fhirValueSets/ClaimModifiersCodes.js';
// @ts-ignore
import { ClaimModifiersVsValidation } from '../fhirValueSets/ClaimModifiersVsValidation.js';
// @ts-ignore
import { BenefitNetworkCodes,  BenefitNetworkCodeType } from '../fhirValueSets/BenefitNetworkCodes.js';
// @ts-ignore
import { BenefitNetworkVsValidation } from '../fhirValueSets/BenefitNetworkVsValidation.js';
// @ts-ignore
import { BenefitUnitCodes,  BenefitUnitCodeType } from '../fhirValueSets/BenefitUnitCodes.js';
// @ts-ignore
import { BenefitUnitVsValidation } from '../fhirValueSets/BenefitUnitVsValidation.js';
// @ts-ignore
import { BenefitTermCodes,  BenefitTermCodeType } from '../fhirValueSets/BenefitTermCodes.js';
// @ts-ignore
import { BenefitTermVsValidation } from '../fhirValueSets/BenefitTermVsValidation.js';
// @ts-ignore
import { CoverageeligibilityresponseExAuthSupportCodes,  CoverageeligibilityresponseExAuthSupportCodeType } from '../fhirValueSets/CoverageeligibilityresponseExAuthSupportCodes.js';
// @ts-ignore
import { CoverageeligibilityresponseExAuthSupportVsValidation } from '../fhirValueSets/CoverageeligibilityresponseExAuthSupportVsValidation.js';
// @ts-ignore
import { AdjudicationErrorCodes,  AdjudicationErrorCodeType } from '../fhirValueSets/AdjudicationErrorCodes.js';
// @ts-ignore
import { AdjudicationErrorVsValidation } from '../fhirValueSets/AdjudicationErrorVsValidation.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
// @ts-ignore
import { EligibilityresponsePurposeCodes,  EligibilityresponsePurposeCodeType } from '../fhirValueSets/EligibilityresponsePurposeCodes.js';
// @ts-ignore
import { EligibilityresponsePurposeVsValidation } from '../fhirValueSets/EligibilityresponsePurposeVsValidation.js';
// @ts-ignore
import { RemittanceOutcomeCodes,  RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
// @ts-ignore
import { RemittanceOutcomeVsValidation } from '../fhirValueSets/RemittanceOutcomeVsValidation.js';
// @ts-ignore
import { FormsCodes,  FormsCodeType } from '../fhirValueSets/FormsCodes.js';
// @ts-ignore
import { FormsVsValidation } from '../fhirValueSets/FormsVsValidation.js';
/**
 * Valid arguments for the CoverageEligibilityResponseInsuranceItemBenefit type.
 */
export interface CoverageEligibilityResponseInsuranceItemBenefitArgs extends fhir.BackboneElementArgs {
  /**
   * For example: deductible, visits, benefit amount.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowed?: fhir.FhirUnsignedInt|fhir.FhirString|fhir.Money|undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedUnsignedInt?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedString?: fhir.FhirString|string|undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedMoney?: fhir.MoneyArgs|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  used?: fhir.FhirUnsignedInt|fhir.FhirString|fhir.Money|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedUnsignedInt?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedString?: fhir.FhirString|string|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedMoney?: fhir.MoneyArgs|undefined;
}

/**
 * Benefits used to date.
 */
export class CoverageEligibilityResponseInsuranceItemBenefit extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityResponseInsuranceItemBenefit';
  /**
   * For example: deductible, visits, benefit amount.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  public allowed?: (fhir.FhirUnsignedInt|fhir.FhirString|fhir.Money)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
   */
  protected static readonly _fts_allowedIsChoice:true = true;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  public used?: (fhir.FhirUnsignedInt|fhir.FhirString|fhir.Money)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.insurance.item.benefit.used[x]
   */
  protected static readonly _fts_usedIsChoice:true = true;
  /**
   * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseInsuranceItemBenefitArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
    if (source['allowed']) { this.allowed = source.allowed; }
    else if (source['allowedUnsignedInt'] !== undefined) { this.allowed = new fhir.FhirUnsignedInt({value: source.allowedUnsignedInt}, options); }
    else if (source['allowedString'] !== undefined) { this.allowed = new fhir.FhirString({value: source.allowedString}, options); }
    else if (source['allowedMoney']) { this.allowed = new fhir.Money(source.allowedMoney, options); }
    if (source['used']) { this.used = source.used; }
    else if (source['usedUnsignedInt'] !== undefined) { this.used = new fhir.FhirUnsignedInt({value: source.usedUnsignedInt}, options); }
    else if (source['usedString'] !== undefined) { this.used = new fhir.FhirString({value: source.usedString}, options); }
    else if (source['usedMoney']) { this.used = new fhir.Money(source.usedMoney, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CoverageEligibilityResponse.insurance.item.benefit' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('allowed',exp));
    iss.push(...this.vOS('used',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CoverageEligibilityResponseInsuranceItem type.
 */
export interface CoverageEligibilityResponseInsuranceItemArgs extends fhir.BackboneElementArgs {
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  productOrService?: fhir.CodeableConceptArgs|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The practitioner who is eligible for the provision of the product or service.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  excluded?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.excluded
   */
  _excluded?:fhir.FhirElementArgs;
  /**
   * For example: MED01, or DENT2.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  network?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  unit?: fhir.CodeableConceptArgs|undefined;
  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  term?: fhir.CodeableConceptArgs|undefined;
  /**
   * Benefits used to date.
   */
  benefit?: fhir.CoverageEligibilityResponseInsuranceItemBenefitArgs[]|undefined;
  /**
   * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  authorizationRequired?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.authorizationRequired
   */
  _authorizationRequired?:fhir.FhirElementArgs;
  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   */
  authorizationSupporting?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  authorizationUrl?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.authorizationUrl
   */
  _authorizationUrl?:fhir.FhirElementArgs;
}

/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export class CoverageEligibilityResponseInsuranceItem extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityResponseInsuranceItem';
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  public productOrService?: fhir.CodeableConcept|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  public modifier: fhir.CodeableConcept[];
  /**
   * The practitioner who is eligible for the provision of the product or service.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  public excluded?: fhir.FhirBoolean|undefined;
  /**
   * For example: MED01, or DENT2.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  public network?: fhir.CodeableConcept|undefined;
  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  public unit?: fhir.CodeableConcept|undefined;
  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  public term?: fhir.CodeableConcept|undefined;
  /**
   * Benefits used to date.
   */
  public benefit: fhir.CoverageEligibilityResponseInsuranceItemBenefit[];
  /**
   * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  public authorizationRequired?: fhir.FhirBoolean|undefined;
  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   */
  public authorizationSupporting: fhir.CodeableConcept[];
  /**
   * A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  public authorizationUrl?: fhir.FhirUri|undefined;
  /**
   * Default constructor for CoverageEligibilityResponseInsuranceItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseInsuranceItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category, options); }
    if (source['productOrService']) { this.productOrService = new fhir.CodeableConcept(source.productOrService, options); }
    if (source['modifier']) { this.modifier = source.modifier.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.modifier = []; }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider, options); }
    if (source['excluded'] !== undefined) { this.excluded = new fhir.FhirBoolean({value: source.excluded}, options); }
    if (source['_excluded']) {
      if (this.excluded) { this.excluded.addExtendedProperties(source._excluded!); }
      else { this.excluded = new fhir.FhirBoolean(source._excluded as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['network']) { this.network = new fhir.CodeableConcept(source.network, options); }
    if (source['unit']) { this.unit = new fhir.CodeableConcept(source.unit, options); }
    if (source['term']) { this.term = new fhir.CodeableConcept(source.term, options); }
    if (source['benefit']) { this.benefit = source.benefit.map((x) => new fhir.CoverageEligibilityResponseInsuranceItemBenefit(x, options)); }
    else { this.benefit = []; }
    if (source['authorizationRequired'] !== undefined) { this.authorizationRequired = new fhir.FhirBoolean({value: source.authorizationRequired}, options); }
    if (source['_authorizationRequired']) {
      if (this.authorizationRequired) { this.authorizationRequired.addExtendedProperties(source._authorizationRequired!); }
      else { this.authorizationRequired = new fhir.FhirBoolean(source._authorizationRequired as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['authorizationSupporting']) { this.authorizationSupporting = source.authorizationSupporting.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.authorizationSupporting = []; }
    if (source['authorizationUrl'] !== undefined) { this.authorizationUrl = new fhir.FhirUri({value: source.authorizationUrl}, options); }
    if (source['_authorizationUrl']) {
      if (this.authorizationUrl) { this.authorizationUrl.addExtendedProperties(source._authorizationUrl!); }
      else { this.authorizationUrl = new fhir.FhirUri(source._authorizationUrl as Partial<fhir.FhirUriArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CoverageEligibilityResponse.insurance.item' }
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vOS('productOrService',exp));
    iss.push(...this.vOA('modifier',exp));
    iss.push(...this.vOS('provider',exp));
    iss.push(...this.vOS('excluded',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('network',exp));
    iss.push(...this.vOS('unit',exp));
    iss.push(...this.vOS('term',exp));
    iss.push(...this.vOA('benefit',exp));
    iss.push(...this.vOS('authorizationRequired',exp));
    iss.push(...this.vOA('authorizationSupporting',exp));
    iss.push(...this.vOS('authorizationUrl',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CoverageEligibilityResponseInsurance type.
 */
export interface CoverageEligibilityResponseInsuranceArgs extends fhir.BackboneElementArgs {
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage: fhir.ReferenceArgs|null;
  /**
   * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   */
  inforce?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.insurance.inforce
   */
  _inforce?:fhir.FhirElementArgs;
  /**
   * The term of the benefits documented in this response.
   */
  benefitPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Benefits and optionally current balances, and authorization details by category or service.
   */
  item?: fhir.CoverageEligibilityResponseInsuranceItemArgs[]|undefined;
}

/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export class CoverageEligibilityResponseInsurance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityResponseInsurance';
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  public coverage: fhir.Reference|null;
  /**
   * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   */
  public inforce?: fhir.FhirBoolean|undefined;
  /**
   * The term of the benefits documented in this response.
   */
  public benefitPeriod?: fhir.Period|undefined;
  /**
   * Benefits and optionally current balances, and authorization details by category or service.
   */
  public item: fhir.CoverageEligibilityResponseInsuranceItem[];
  /**
   * Default constructor for CoverageEligibilityResponseInsurance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseInsuranceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['coverage']) { this.coverage = new fhir.Reference(source.coverage, options); }
    else { this.coverage = null; }
    if (source['inforce'] !== undefined) { this.inforce = new fhir.FhirBoolean({value: source.inforce}, options); }
    if (source['_inforce']) {
      if (this.inforce) { this.inforce.addExtendedProperties(source._inforce!); }
      else { this.inforce = new fhir.FhirBoolean(source._inforce as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['benefitPeriod']) { this.benefitPeriod = new fhir.Period(source.benefitPeriod, options); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.CoverageEligibilityResponseInsuranceItem(x, options)); }
    else { this.item = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CoverageEligibilityResponse.insurance' }
    iss.push(...this.vRS('coverage',exp));
    iss.push(...this.vOS('inforce',exp));
    iss.push(...this.vOS('benefitPeriod',exp));
    iss.push(...this.vOA('item',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CoverageEligibilityResponseError type.
 */
export interface CoverageEligibilityResponseErrorArgs extends fhir.BackboneElementArgs {
  /**
   * An error code,from a specified code system, which details why the eligibility check could not be performed.
   */
  code: fhir.CodeableConceptArgs|null;
}

/**
 * Errors encountered during the processing of the request.
 */
export class CoverageEligibilityResponseError extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityResponseError';
  /**
   * An error code,from a specified code system, which details why the eligibility check could not be performed.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Default constructor for CoverageEligibilityResponseError - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseErrorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    else { this.code = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CoverageEligibilityResponse.error' }
    iss.push(...this.vRS('code',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CoverageEligibilityResponse type.
 */
export interface CoverageEligibilityResponseArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CoverageEligibilityResponse"|undefined;
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose: fhir.FhirCode<EligibilityresponsePurposeCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.purpose
   */
  _purpose?:(fhir.FhirElementArgs|null)[];
  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  serviced?: fhir.FhirDate|fhir.Period|undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedDate?: fhir.FhirDate|string|undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The date this resource was created.
   */
  created: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  requestor?: fhir.ReferenceArgs|undefined;
  /**
   * Reference to the original request resource.
   */
  request: fhir.ReferenceArgs|null;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome: fhir.FhirCode<RemittanceOutcomeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.outcome
   */
  _outcome?:fhir.FhirElementArgs;
  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.disposition
   */
  _disposition?:fhir.FhirElementArgs;
  /**
   * The Insurer who issued the coverage in question and is the author of the response.
   */
  insurer: fhir.ReferenceArgs|null;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: fhir.CoverageEligibilityResponseInsuranceArgs[]|undefined;
  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  preAuthRef?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityResponse.preAuthRef
   */
  _preAuthRef?:fhir.FhirElementArgs;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  form?: fhir.CodeableConceptArgs|undefined;
  /**
   * Errors encountered during the processing of the request.
   */
  error?: fhir.CoverageEligibilityResponseErrorArgs[]|undefined;
}

/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export class CoverageEligibilityResponse extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityResponse';
  /**
   * Resource Type Name
   */
  public override resourceType: "CoverageEligibilityResponse";
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<FmStatusCodeType>|null;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  public purpose: fhir.FhirCode<EligibilityresponsePurposeCodeType>[];
  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  public patient: fhir.Reference|null;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  public serviced?: (fhir.FhirDate|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.serviced[x]
   */
  protected static readonly _fts_servicedIsChoice:true = true;
  /**
   * The date this resource was created.
   */
  public created: fhir.FhirDateTime|null;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  public requestor?: fhir.Reference|undefined;
  /**
   * Reference to the original request resource.
   */
  public request: fhir.Reference|null;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  public outcome: fhir.FhirCode<RemittanceOutcomeCodeType>|null;
  /**
   * A human readable description of the status of the adjudication.
   */
  public disposition?: fhir.FhirString|undefined;
  /**
   * The Insurer who issued the coverage in question and is the author of the response.
   */
  public insurer: fhir.Reference|null;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  public insurance: fhir.CoverageEligibilityResponseInsurance[];
  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  public preAuthRef?: fhir.FhirString|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  public form?: fhir.CodeableConcept|undefined;
  /**
   * Errors encountered during the processing of the request.
   */
  public error: fhir.CoverageEligibilityResponseError[];
  /**
   * Default constructor for CoverageEligibilityResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CoverageEligibilityResponse';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['purpose'] !== undefined) { this.purpose = source.purpose.map((x) => new fhir.FhirCode<EligibilityresponsePurposeCodeType>({value: x}, options)); }
    else { this.purpose = []; }
    if (source['_purpose']) {
      source._purpose.forEach((x,i) => {
        if (this.purpose.length >= i) { if (x) { this.purpose[i].addExtendedProperties(x); } }
        else { if (x) { this.purpose.push(new fhir.FhirCode<EligibilityresponsePurposeCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    else { this.patient = null; }
    if (source['serviced']) { this.serviced = source.serviced; }
    else if (source['servicedDate'] !== undefined) { this.serviced = new fhir.FhirDate({value: source.servicedDate}, options); }
    else if (source['servicedPeriod']) { this.serviced = new fhir.Period(source.servicedPeriod, options); }
    if (source['created'] !== undefined) { this.created = new fhir.FhirDateTime({value: source.created}, options); }
    else { this.created = null; }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['requestor']) { this.requestor = new fhir.Reference(source.requestor, options); }
    if (source['request']) { this.request = new fhir.Reference(source.request, options); }
    else { this.request = null; }
    if (source['outcome'] !== undefined) { this.outcome = new fhir.FhirCode<RemittanceOutcomeCodeType>({value: source.outcome}, options); }
    else { this.outcome = null; }
    if (source['_outcome']) {
      if (this.outcome) { this.outcome.addExtendedProperties(source._outcome!); }
      else { this.outcome = new fhir.FhirCode<RemittanceOutcomeCodeType>(source._outcome as Partial<fhir.FhirCode>, options); }
    }
    if (source['disposition'] !== undefined) { this.disposition = new fhir.FhirString({value: source.disposition}, options); }
    if (source['_disposition']) {
      if (this.disposition) { this.disposition.addExtendedProperties(source._disposition!); }
      else { this.disposition = new fhir.FhirString(source._disposition as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['insurer']) { this.insurer = new fhir.Reference(source.insurer, options); }
    else { this.insurer = null; }
    if (source['insurance']) { this.insurance = source.insurance.map((x) => new fhir.CoverageEligibilityResponseInsurance(x, options)); }
    else { this.insurance = []; }
    if (source['preAuthRef'] !== undefined) { this.preAuthRef = new fhir.FhirString({value: source.preAuthRef}, options); }
    if (source['_preAuthRef']) {
      if (this.preAuthRef) { this.preAuthRef.addExtendedProperties(source._preAuthRef!); }
      else { this.preAuthRef = new fhir.FhirString(source._preAuthRef as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['form']) { this.form = new fhir.CodeableConcept(source.form, options); }
    if (source['error']) { this.error = source.error.map((x) => new fhir.CoverageEligibilityResponseError(x, options)); }
    else { this.error = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CoverageEligibilityResponse' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'FmStatus',FmStatusVsValidation,'r'));
    iss.push(...this.vRAV('purpose',exp,'EligibilityresponsePurpose',EligibilityresponsePurposeVsValidation,'r'));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('serviced',exp));
    iss.push(...this.vRS('created',exp));
    iss.push(...this.vOS('requestor',exp));
    iss.push(...this.vRS('request',exp));
    iss.push(...this.vRSV('outcome',exp,'RemittanceOutcome',RemittanceOutcomeVsValidation,'r'));
    iss.push(...this.vOS('disposition',exp));
    iss.push(...this.vRS('insurer',exp));
    iss.push(...this.vOA('insurance',exp));
    iss.push(...this.vOS('preAuthRef',exp));
    iss.push(...this.vOS('form',exp));
    iss.push(...this.vOA('error',exp));
    return iss;
  }
}
