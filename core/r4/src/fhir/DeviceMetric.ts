// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceMetric

import * as fhir from '../fhir.js';

// @ts-ignore
import { MetricCalibrationTypeCodes,  MetricCalibrationTypeCodeType } from '../fhirValueSets/MetricCalibrationTypeCodes.js';
// @ts-ignore
import { MetricCalibrationTypeVsValidation } from '../fhirValueSets/MetricCalibrationTypeVsValidation.js';
// @ts-ignore
import { MetricCalibrationStateCodes,  MetricCalibrationStateCodeType } from '../fhirValueSets/MetricCalibrationStateCodes.js';
// @ts-ignore
import { MetricCalibrationStateVsValidation } from '../fhirValueSets/MetricCalibrationStateVsValidation.js';
// @ts-ignore
import { MetricOperationalStatusCodes,  MetricOperationalStatusCodeType } from '../fhirValueSets/MetricOperationalStatusCodes.js';
// @ts-ignore
import { MetricOperationalStatusVsValidation } from '../fhirValueSets/MetricOperationalStatusVsValidation.js';
// @ts-ignore
import { MetricColorCodes,  MetricColorCodeType } from '../fhirValueSets/MetricColorCodes.js';
// @ts-ignore
import { MetricColorVsValidation } from '../fhirValueSets/MetricColorVsValidation.js';
// @ts-ignore
import { MetricCategoryCodes,  MetricCategoryCodeType } from '../fhirValueSets/MetricCategoryCodes.js';
// @ts-ignore
import { MetricCategoryVsValidation } from '../fhirValueSets/MetricCategoryVsValidation.js';
/**
 * Valid arguments for the DeviceMetricCalibration type.
 */
export interface DeviceMetricCalibrationArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the type of the calibration method.
   */
  type?: fhir.FhirCode<MetricCalibrationTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * Describes the state of the calibration.
   */
  state?: fhir.FhirCode<MetricCalibrationStateCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.state
   */
  _state?:fhir.FhirElementArgs;
  /**
   * Describes the time last calibration has been performed.
   */
  time?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.time
   */
  _time?:fhir.FhirElementArgs;
}

/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export class DeviceMetricCalibration extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceMetricCalibration';
  /**
   * Describes the type of the calibration method.
   */
  public type?: fhir.FhirCode<MetricCalibrationTypeCodeType>|undefined;
  /**
   * Describes the state of the calibration.
   */
  public state?: fhir.FhirCode<MetricCalibrationStateCodeType>|undefined;
  /**
   * Describes the time last calibration has been performed.
   */
  public time?: fhir.FhirInstant|undefined;
  /**
   * Default constructor for DeviceMetricCalibration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceMetricCalibrationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type'] !== undefined) { this.type = new fhir.FhirCode<MetricCalibrationTypeCodeType>({value: source.type}, options); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<MetricCalibrationTypeCodeType>(source._type as Partial<fhir.FhirCode>, options); }
    }
    if (source['state'] !== undefined) { this.state = new fhir.FhirCode<MetricCalibrationStateCodeType>({value: source.state}, options); }
    if (source['_state']) {
      if (this.state) { this.state.addExtendedProperties(source._state!); }
      else { this.state = new fhir.FhirCode<MetricCalibrationStateCodeType>(source._state as Partial<fhir.FhirCode>, options); }
    }
    if (source['time'] !== undefined) { this.time = new fhir.FhirInstant({value: source.time}, options); }
    if (source['_time']) {
      if (this.time) { this.time.addExtendedProperties(source._time!); }
      else { this.time = new fhir.FhirInstant(source._time as Partial<fhir.FhirInstantArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceMetric.calibration' }
    iss.push(...this.vOSV('type',exp,'MetricCalibrationType',MetricCalibrationTypeVsValidation,'r'));
    iss.push(...this.vOSV('state',exp,'MetricCalibrationState',MetricCalibrationStateVsValidation,'r'));
    iss.push(...this.vOS('time',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceMetric type.
 */
export interface DeviceMetricArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceMetric"|undefined;
  /**
   * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   */
  unit?: fhir.CodeableConceptArgs|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
   */
  parent?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates current operational state of the device. For example: On, Off, Standby, etc.
   */
  operationalStatus?: fhir.FhirCode<MetricOperationalStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.operationalStatus
   */
  _operationalStatus?:fhir.FhirElementArgs;
  /**
   * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   */
  color?: fhir.FhirCode<MetricColorCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.color
   */
  _color?:fhir.FhirElementArgs;
  /**
   * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   */
  category: fhir.FhirCode<MetricCategoryCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.category
   */
  _category?:fhir.FhirElementArgs;
  /**
   * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
   */
  measurementPeriod?: fhir.TimingArgs|undefined;
  /**
   * Describes the calibrations that have been performed or that are required to be performed.
   */
  calibration?: fhir.DeviceMetricCalibrationArgs[]|undefined;
}

/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export class DeviceMetric extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceMetric';
  /**
   * Resource Type Name
   */
  public override resourceType: "DeviceMetric";
  /**
   * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
   */
  public identifier: fhir.Identifier[];
  /**
   * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   */
  public unit?: fhir.CodeableConcept|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
   */
  public parent?: fhir.Reference|undefined;
  /**
   * Indicates current operational state of the device. For example: On, Off, Standby, etc.
   */
  public operationalStatus?: fhir.FhirCode<MetricOperationalStatusCodeType>|undefined;
  /**
   * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   */
  public color?: fhir.FhirCode<MetricColorCodeType>|undefined;
  /**
   * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   */
  public category: fhir.FhirCode<MetricCategoryCodeType>|null;
  /**
   * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
   */
  public measurementPeriod?: fhir.Timing|undefined;
  /**
   * Describes the calibrations that have been performed or that are required to be performed.
   */
  public calibration: fhir.DeviceMetricCalibration[];
  /**
   * Default constructor for DeviceMetric - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceMetricArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DeviceMetric';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
    if (source['unit']) { this.unit = new fhir.CodeableConcept(source.unit, options); }
    if (source['source']) { this.source = new fhir.Reference(source.source, options); }
    if (source['parent']) { this.parent = new fhir.Reference(source.parent, options); }
    if (source['operationalStatus'] !== undefined) { this.operationalStatus = new fhir.FhirCode<MetricOperationalStatusCodeType>({value: source.operationalStatus}, options); }
    if (source['_operationalStatus']) {
      if (this.operationalStatus) { this.operationalStatus.addExtendedProperties(source._operationalStatus!); }
      else { this.operationalStatus = new fhir.FhirCode<MetricOperationalStatusCodeType>(source._operationalStatus as Partial<fhir.FhirCode>, options); }
    }
    if (source['color'] !== undefined) { this.color = new fhir.FhirCode<MetricColorCodeType>({value: source.color}, options); }
    if (source['_color']) {
      if (this.color) { this.color.addExtendedProperties(source._color!); }
      else { this.color = new fhir.FhirCode<MetricColorCodeType>(source._color as Partial<fhir.FhirCode>, options); }
    }
    if (source['category'] !== undefined) { this.category = new fhir.FhirCode<MetricCategoryCodeType>({value: source.category}, options); }
    else { this.category = null; }
    if (source['_category']) {
      if (this.category) { this.category.addExtendedProperties(source._category!); }
      else { this.category = new fhir.FhirCode<MetricCategoryCodeType>(source._category as Partial<fhir.FhirCode>, options); }
    }
    if (source['measurementPeriod']) { this.measurementPeriod = new fhir.Timing(source.measurementPeriod, options); }
    if (source['calibration']) { this.calibration = source.calibration.map((x) => new fhir.DeviceMetricCalibration(x, options)); }
    else { this.calibration = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceMetric' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('unit',exp));
    iss.push(...this.vOS('source',exp));
    iss.push(...this.vOS('parent',exp));
    iss.push(...this.vOSV('operationalStatus',exp,'MetricOperationalStatus',MetricOperationalStatusVsValidation,'r'));
    iss.push(...this.vOSV('color',exp,'MetricColor',MetricColorVsValidation,'r'));
    iss.push(...this.vRSV('category',exp,'MetricCategory',MetricCategoryVsValidation,'r'));
    iss.push(...this.vOS('measurementPeriod',exp));
    iss.push(...this.vOA('calibration',exp));
    return iss;
  }
}
