// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: SearchParameter

import * as fhir from '../fhir.js';

// @ts-ignore
import { ConformanceResourceStatusCodes,  ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
// @ts-ignore
import { ConformanceResourceStatusVsValidation } from '../fhirValueSets/ConformanceResourceStatusVsValidation.js';
// @ts-ignore
import { ResourceTypesCodes,  ResourceTypesCodeType } from '../fhirValueSets/ResourceTypesCodes.js';
// @ts-ignore
import { ResourceTypesVsValidation } from '../fhirValueSets/ResourceTypesVsValidation.js';
// @ts-ignore
import { SearchParamTypeCodes,  SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
// @ts-ignore
import { SearchParamTypeVsValidation } from '../fhirValueSets/SearchParamTypeVsValidation.js';
// @ts-ignore
import { SearchXpathUsageCodes,  SearchXpathUsageCodeType } from '../fhirValueSets/SearchXpathUsageCodes.js';
// @ts-ignore
import { SearchXpathUsageVsValidation } from '../fhirValueSets/SearchXpathUsageVsValidation.js';
/**
 * Valid arguments for the SearchParameterContact type.
 */
export interface SearchParameterContactArgs extends fhir.BackboneElementArgs {
  /**
   * The name of an individual to contact regarding the search parameter.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.contact.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Contact details for individual (if a name was provided) or the publisher.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
}

/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export class SearchParameterContact extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SearchParameterContact';
  /**
   * The name of an individual to contact regarding the search parameter.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Contact details for individual (if a name was provided) or the publisher.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Default constructor for SearchParameterContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SearchParameterContactArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.telecom = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SearchParameter.contact' }
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('telecom',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SearchParameter type.
 */
export interface SearchParameterArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SearchParameter"|undefined;
  /**
   * To allow referencing and reusing search parameter definitions under other names on operational systems (in case of name clash).
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * A free text natural language name identifying the search parameter.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * The status of this search parameter definition.
   */
  status?: fhir.FhirCode<ConformanceResourceStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * Helps establish the "authority/credibility" of the search parameter.  May also allow for contact.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * Contacts to assist a user in finding and communicating with the publisher.
   */
  contact?: fhir.SearchParameterContactArgs[]|undefined;
  /**
   * The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * The Scope and Usage that this search parameter was created to meet.
   */
  requirements?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.requirements
   */
  _requirements?:fhir.FhirElementArgs;
  /**
   * The code used in the URL or the parameter name in a parameters resource for this search parameter.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * The base resource type that this search parameter refers to.
   */
  base: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.base
   */
  _base?:fhir.FhirElementArgs;
  /**
   * The type of value a search parameter refers to, and how the content is interpreted.
   */
  type: fhir.FhirCode<SearchParamTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * A description of the search parameters and how it used.
   */
  description: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * An XPath expression that returns a set of elements for the search parameter.
   */
  xpath?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.xpath
   */
  _xpath?:fhir.FhirElementArgs;
  /**
   * How the search parameter relates to the set of elements returned by evaluating the xpath query.
   */
  xpathUsage?: fhir.FhirCode<SearchXpathUsageCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.xpathUsage
   */
  _xpathUsage?:fhir.FhirElementArgs;
  /**
   * Types of resource (if a resource is referenced).
   */
  target?: fhir.FhirCode[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.target
   */
  _target?:(fhir.FhirElementArgs|null)[];
}

/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export class SearchParameter extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SearchParameter';
  /**
   * Resource Type Name
   */
  public override resourceType: "SearchParameter";
  /**
   * To allow referencing and reusing search parameter definitions under other names on operational systems (in case of name clash).
   */
  public url: fhir.FhirUri|null;
  /**
   * A free text natural language name identifying the search parameter.
   */
  public name: fhir.FhirString|null;
  /**
   * The status of this search parameter definition.
   */
  public status?: fhir.FhirCode<ConformanceResourceStatusCodeType>|undefined;
  /**
   * A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Helps establish the "authority/credibility" of the search parameter.  May also allow for contact.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * Contacts to assist a user in finding and communicating with the publisher.
   */
  public contact: fhir.SearchParameterContact[];
  /**
   * The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * The Scope and Usage that this search parameter was created to meet.
   */
  public requirements?: fhir.FhirString|undefined;
  /**
   * The code used in the URL or the parameter name in a parameters resource for this search parameter.
   */
  public code: fhir.FhirCode|null;
  /**
   * The base resource type that this search parameter refers to.
   */
  public base: fhir.FhirCode|null;
  /**
   * The type of value a search parameter refers to, and how the content is interpreted.
   */
  public type: fhir.FhirCode<SearchParamTypeCodeType>|null;
  /**
   * A description of the search parameters and how it used.
   */
  public description: fhir.FhirString|null;
  /**
   * An XPath expression that returns a set of elements for the search parameter.
   */
  public xpath?: fhir.FhirString|undefined;
  /**
   * How the search parameter relates to the set of elements returned by evaluating the xpath query.
   */
  public xpathUsage?: fhir.FhirCode<SearchXpathUsageCodeType>|undefined;
  /**
   * Types of resource (if a resource is referenced).
   */
  public target: fhir.FhirCode[];
  /**
   * Default constructor for SearchParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SearchParameterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SearchParameter';
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<ConformanceResourceStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ConformanceResourceStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['experimental'] !== undefined) { this.experimental = new fhir.FhirBoolean({value: source.experimental}, options); }
    if (source['_experimental']) {
      if (this.experimental) { this.experimental.addExtendedProperties(source._experimental!); }
      else { this.experimental = new fhir.FhirBoolean(source._experimental as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['publisher'] !== undefined) { this.publisher = new fhir.FhirString({value: source.publisher}, options); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.SearchParameterContact(x, options)); }
    else { this.contact = []; }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['requirements'] !== undefined) { this.requirements = new fhir.FhirString({value: source.requirements}, options); }
    if (source['_requirements']) {
      if (this.requirements) { this.requirements.addExtendedProperties(source._requirements!); }
      else { this.requirements = new fhir.FhirString(source._requirements as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['code'] !== undefined) { this.code = new fhir.FhirCode({value: source.code}, options); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode(source._code as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['base'] !== undefined) { this.base = new fhir.FhirCode({value: source.base}, options); }
    else { this.base = null; }
    if (source['_base']) {
      if (this.base) { this.base.addExtendedProperties(source._base!); }
      else { this.base = new fhir.FhirCode(source._base as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['type'] !== undefined) { this.type = new fhir.FhirCode<SearchParamTypeCodeType>({value: source.type}, options); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<SearchParamTypeCodeType>(source._type as Partial<fhir.FhirCode>, options); }
    }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    else { this.description = null; }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['xpath'] !== undefined) { this.xpath = new fhir.FhirString({value: source.xpath}, options); }
    if (source['_xpath']) {
      if (this.xpath) { this.xpath.addExtendedProperties(source._xpath!); }
      else { this.xpath = new fhir.FhirString(source._xpath as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['xpathUsage'] !== undefined) { this.xpathUsage = new fhir.FhirCode<SearchXpathUsageCodeType>({value: source.xpathUsage}, options); }
    if (source['_xpathUsage']) {
      if (this.xpathUsage) { this.xpathUsage.addExtendedProperties(source._xpathUsage!); }
      else { this.xpathUsage = new fhir.FhirCode<SearchXpathUsageCodeType>(source._xpathUsage as Partial<fhir.FhirCode>, options); }
    }
    if (source['target'] !== undefined) { this.target = source.target.map((x) => new fhir.FhirCode({value: x}, options)); }
    else { this.target = []; }
    if (source['_target']) {
      source._target.forEach((x,i) => {
        if (this.target.length >= i) { if (x) { this.target[i].addExtendedProperties(x); } }
        else { if (x) { this.target.push(new fhir.FhirCode(x as Partial<fhir.FhirCodeArgs>)); } }
      });
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SearchParameter' }
    iss.push(...this.vRS('url',exp));
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vOSV('status',exp,'ConformanceResourceStatus',ConformanceResourceStatusVsValidation,'r'));
    iss.push(...this.vOS('experimental',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('requirements',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vRSV('base',exp,'ResourceTypes',ResourceTypesVsValidation,'r'));
    iss.push(...this.vRSV('type',exp,'SearchParamType',SearchParamTypeVsValidation,'r'));
    iss.push(...this.vRS('description',exp));
    iss.push(...this.vOS('xpath',exp));
    iss.push(...this.vOSV('xpathUsage',exp,'SearchXpathUsage',SearchXpathUsageVsValidation,'r'));
    iss.push(...this.vOAV('target',exp,'ResourceTypes',ResourceTypesVsValidation,'r'));
    return iss;
  }
}
