// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationRecommendation

import * as fhir from '../fhir.js';

// @ts-ignore
import { ImmunizationRecommendationDateCriterionCodes,  ImmunizationRecommendationDateCriterionCodeType } from '../fhirValueSets/ImmunizationRecommendationDateCriterionCodes.js';
// @ts-ignore
import { ImmunizationRecommendationDateCriterionVsValidation } from '../fhirValueSets/ImmunizationRecommendationDateCriterionVsValidation.js';
// @ts-ignore
import { VaccineCodes,  VaccineCodeType } from '../fhirValueSets/VaccineCodes.js';
// @ts-ignore
import { VaccineVsValidation } from '../fhirValueSets/VaccineVsValidation.js';
// @ts-ignore
import { ImmunizationRecommendationTargetDiseaseCodes,  ImmunizationRecommendationTargetDiseaseCodeType } from '../fhirValueSets/ImmunizationRecommendationTargetDiseaseCodes.js';
// @ts-ignore
import { ImmunizationRecommendationTargetDiseaseVsValidation } from '../fhirValueSets/ImmunizationRecommendationTargetDiseaseVsValidation.js';
// @ts-ignore
import { ImmunizationRecommendationStatusCodes,  ImmunizationRecommendationStatusCodeType } from '../fhirValueSets/ImmunizationRecommendationStatusCodes.js';
// @ts-ignore
import { ImmunizationRecommendationStatusVsValidation } from '../fhirValueSets/ImmunizationRecommendationStatusVsValidation.js';
// @ts-ignore
import { ImmunizationRecommendationReasonCodes,  ImmunizationRecommendationReasonCodeType } from '../fhirValueSets/ImmunizationRecommendationReasonCodes.js';
// @ts-ignore
import { ImmunizationRecommendationReasonVsValidation } from '../fhirValueSets/ImmunizationRecommendationReasonVsValidation.js';
/**
 * Valid arguments for the ImmunizationRecommendationRecommendationDateCriterion type.
 */
export interface ImmunizationRecommendationRecommendationDateCriterionArgs extends fhir.BackboneElementArgs {
  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The date whose meaning is specified by dateCriterion.code.
   */
  value: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImmunizationRecommendation.recommendation.dateCriterion.value
   */
  _value?:fhir.FhirElementArgs;
}

/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export class ImmunizationRecommendationRecommendationDateCriterion extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImmunizationRecommendationRecommendationDateCriterion';
  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The date whose meaning is specified by dateCriterion.code.
   */
  public value: fhir.FhirDateTime|null;
  /**
   * Default constructor for ImmunizationRecommendationRecommendationDateCriterion - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationRecommendationRecommendationDateCriterionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    else { this.code = null; }
    if (source['value'] !== undefined) { this.value = new fhir.FhirDateTime({value: source.value}, options); }
    else { this.value = null; }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirDateTime(source._value as Partial<fhir.FhirDateTimeArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImmunizationRecommendation.recommendation.dateCriterion' }
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vRS('value',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImmunizationRecommendationRecommendation type.
 */
export interface ImmunizationRecommendationRecommendationArgs extends fhir.BackboneElementArgs {
  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  vaccineCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The targeted disease for the recommendation.
   */
  targetDisease?: fhir.CodeableConceptArgs|undefined;
  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  contraindicatedVaccineCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  forecastStatus: fhir.CodeableConceptArgs|null;
  /**
   * The reason for the assigned forecast status.
   */
  forecastReason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  dateCriterion?: fhir.ImmunizationRecommendationRecommendationDateCriterionArgs[]|undefined;
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImmunizationRecommendation.recommendation.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImmunizationRecommendation.recommendation.series
   */
  _series?:fhir.FhirElementArgs;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumber?: fhir.FhirPositiveInt|fhir.FhirString|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: fhir.FhirString|string|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDoses?: fhir.FhirPositiveInt|fhir.FhirString|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: fhir.FhirString|string|undefined;
  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  supportingImmunization?: fhir.ReferenceArgs[]|undefined;
  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  supportingPatientInformation?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Vaccine administration recommendations.
 */
export class ImmunizationRecommendationRecommendation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImmunizationRecommendationRecommendation';
  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  public vaccineCode: fhir.CodeableConcept[];
  /**
   * The targeted disease for the recommendation.
   */
  public targetDisease?: fhir.CodeableConcept|undefined;
  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  public contraindicatedVaccineCode: fhir.CodeableConcept[];
  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  public forecastStatus: fhir.CodeableConcept|null;
  /**
   * The reason for the assigned forecast status.
   */
  public forecastReason: fhir.CodeableConcept[];
  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  public dateCriterion: fhir.ImmunizationRecommendationRecommendationDateCriterion[];
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  public series?: fhir.FhirString|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  public doseNumber?: (fhir.FhirPositiveInt|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ImmunizationRecommendation.recommendation.doseNumber[x]
   */
  protected static readonly _fts_doseNumberIsChoice:true = true;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  public seriesDoses?: (fhir.FhirPositiveInt|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ImmunizationRecommendation.recommendation.seriesDoses[x]
   */
  protected static readonly _fts_seriesDosesIsChoice:true = true;
  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  public supportingImmunization: fhir.Reference[];
  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  public supportingPatientInformation: fhir.Reference[];
  /**
   * Default constructor for ImmunizationRecommendationRecommendation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationRecommendationRecommendationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['vaccineCode']) { this.vaccineCode = source.vaccineCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.vaccineCode = []; }
    if (source['targetDisease']) { this.targetDisease = new fhir.CodeableConcept(source.targetDisease, options); }
    if (source['contraindicatedVaccineCode']) { this.contraindicatedVaccineCode = source.contraindicatedVaccineCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.contraindicatedVaccineCode = []; }
    if (source['forecastStatus']) { this.forecastStatus = new fhir.CodeableConcept(source.forecastStatus, options); }
    else { this.forecastStatus = null; }
    if (source['forecastReason']) { this.forecastReason = source.forecastReason.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.forecastReason = []; }
    if (source['dateCriterion']) { this.dateCriterion = source.dateCriterion.map((x) => new fhir.ImmunizationRecommendationRecommendationDateCriterion(x, options)); }
    else { this.dateCriterion = []; }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['series'] !== undefined) { this.series = new fhir.FhirString({value: source.series}, options); }
    if (source['_series']) {
      if (this.series) { this.series.addExtendedProperties(source._series!); }
      else { this.series = new fhir.FhirString(source._series as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['doseNumber']) { this.doseNumber = source.doseNumber; }
    else if (source['doseNumberPositiveInt'] !== undefined) { this.doseNumber = new fhir.FhirPositiveInt({value: source.doseNumberPositiveInt}, options); }
    else if (source['doseNumberString'] !== undefined) { this.doseNumber = new fhir.FhirString({value: source.doseNumberString}, options); }
    if (source['seriesDoses']) { this.seriesDoses = source.seriesDoses; }
    else if (source['seriesDosesPositiveInt'] !== undefined) { this.seriesDoses = new fhir.FhirPositiveInt({value: source.seriesDosesPositiveInt}, options); }
    else if (source['seriesDosesString'] !== undefined) { this.seriesDoses = new fhir.FhirString({value: source.seriesDosesString}, options); }
    if (source['supportingImmunization']) { this.supportingImmunization = source.supportingImmunization.map((x) => new fhir.Reference(x, options)); }
    else { this.supportingImmunization = []; }
    if (source['supportingPatientInformation']) { this.supportingPatientInformation = source.supportingPatientInformation.map((x) => new fhir.Reference(x, options)); }
    else { this.supportingPatientInformation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImmunizationRecommendation.recommendation' }
    iss.push(...this.vOA('vaccineCode',exp));
    iss.push(...this.vOS('targetDisease',exp));
    iss.push(...this.vOA('contraindicatedVaccineCode',exp));
    iss.push(...this.vRS('forecastStatus',exp));
    iss.push(...this.vOA('forecastReason',exp));
    iss.push(...this.vOA('dateCriterion',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('series',exp));
    iss.push(...this.vOS('doseNumber',exp));
    iss.push(...this.vOS('seriesDoses',exp));
    iss.push(...this.vOA('supportingImmunization',exp));
    iss.push(...this.vOA('supportingPatientInformation',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImmunizationRecommendation type.
 */
export interface ImmunizationRecommendationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ImmunizationRecommendation"|undefined;
  /**
   * A unique identifier assigned to this particular recommendation record.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The patient the recommendation(s) are for.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The date the immunization recommendation(s) were created.
   */
  date: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImmunizationRecommendation.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: fhir.ReferenceArgs|undefined;
  /**
   * Vaccine administration recommendations.
   */
  recommendation: fhir.ImmunizationRecommendationRecommendationArgs[]|null;
}

/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export class ImmunizationRecommendation extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImmunizationRecommendation';
  /**
   * Resource Type Name
   */
  public override resourceType: "ImmunizationRecommendation";
  /**
   * A unique identifier assigned to this particular recommendation record.
   */
  public identifier: fhir.Identifier[];
  /**
   * The patient the recommendation(s) are for.
   */
  public patient: fhir.Reference|null;
  /**
   * The date the immunization recommendation(s) were created.
   */
  public date: fhir.FhirDateTime|null;
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  public authority?: fhir.Reference|undefined;
  /**
   * Vaccine administration recommendations.
   */
  public recommendation: fhir.ImmunizationRecommendationRecommendation[];
  /**
   * Default constructor for ImmunizationRecommendation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationRecommendationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ImmunizationRecommendation';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    else { this.patient = null; }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    else { this.date = null; }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['authority']) { this.authority = new fhir.Reference(source.authority, options); }
    if (source['recommendation']) { this.recommendation = source.recommendation.map((x) => new fhir.ImmunizationRecommendationRecommendation(x, options)); }
    else { this.recommendation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImmunizationRecommendation' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vRS('date',exp));
    iss.push(...this.vOS('authority',exp));
    iss.push(...this.vRA('recommendation',exp));
    return iss;
  }
}
