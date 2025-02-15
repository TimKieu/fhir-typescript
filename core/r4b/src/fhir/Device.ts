// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Device

import * as fhir from '../fhir.js';

// @ts-ignore
import { UdiEntryTypeCodes,  UdiEntryTypeCodeType } from '../fhirValueSets/UdiEntryTypeCodes.js';
// @ts-ignore
import { UdiEntryTypeVsValidation } from '../fhirValueSets/UdiEntryTypeVsValidation.js';
// @ts-ignore
import { DeviceNametypeCodes,  DeviceNametypeCodeType } from '../fhirValueSets/DeviceNametypeCodes.js';
// @ts-ignore
import { DeviceNametypeVsValidation } from '../fhirValueSets/DeviceNametypeVsValidation.js';
// @ts-ignore
import { DeviceStatusCodes,  DeviceStatusCodeType } from '../fhirValueSets/DeviceStatusCodes.js';
// @ts-ignore
import { DeviceStatusVsValidation } from '../fhirValueSets/DeviceStatusVsValidation.js';
// @ts-ignore
import { DeviceStatusReasonCodes,  DeviceStatusReasonCodeType } from '../fhirValueSets/DeviceStatusReasonCodes.js';
// @ts-ignore
import { DeviceStatusReasonVsValidation } from '../fhirValueSets/DeviceStatusReasonVsValidation.js';
// @ts-ignore
import { DeviceTypeCodes,  DeviceTypeCodeType } from '../fhirValueSets/DeviceTypeCodes.js';
// @ts-ignore
import { DeviceTypeVsValidation } from '../fhirValueSets/DeviceTypeVsValidation.js';
/**
 * Valid arguments for the DeviceUdiCarrier type.
 */
export interface DeviceUdiCarrierArgs extends fhir.BackboneElementArgs {
  /**
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
   */
  deviceIdentifier?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.udiCarrier.deviceIdentifier
   */
  _deviceIdentifier?:fhir.FhirElementArgs;
  /**
   * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :
   * 1) GS1: 
   * http://hl7.org/fhir/NamingSystem/gs1-di, 
   * 2) HIBCC:
   * http://hl7.org/fhir/NamingSystem/hibcc-dI, 
   * 3) ICCBBA for blood containers:
   * http://hl7.org/fhir/NamingSystem/iccbba-blood-di, 
   * 4) ICCBA for other devices:
   * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
   */
  issuer?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Device.udiCarrier.issuer
   */
  _issuer?:fhir.FhirElementArgs;
  /**
   * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  jurisdiction?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Device.udiCarrier.jurisdiction
   */
  _jurisdiction?:fhir.FhirElementArgs;
  /**
   * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  carrierAIDC?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Extended properties for primitive element: Device.udiCarrier.carrierAIDC
   */
  _carrierAIDC?:fhir.FhirElementArgs;
  /**
   * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  carrierHRF?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.udiCarrier.carrierHRF
   */
  _carrierHRF?:fhir.FhirElementArgs;
  /**
   * A coded entry to indicate how the data was entered.
   */
  entryType?: fhir.FhirCode<UdiEntryTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Device.udiCarrier.entryType
   */
  _entryType?:fhir.FhirElementArgs;
}

/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export class DeviceUdiCarrier extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceUdiCarrier';
  /**
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
   */
  public deviceIdentifier?: fhir.FhirString|undefined;
  /**
   * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :
   * 1) GS1: 
   * http://hl7.org/fhir/NamingSystem/gs1-di, 
   * 2) HIBCC:
   * http://hl7.org/fhir/NamingSystem/hibcc-dI, 
   * 3) ICCBBA for blood containers:
   * http://hl7.org/fhir/NamingSystem/iccbba-blood-di, 
   * 4) ICCBA for other devices:
   * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
   */
  public issuer?: fhir.FhirUri|undefined;
  /**
   * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  public jurisdiction?: fhir.FhirUri|undefined;
  /**
   * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  public carrierAIDC?: fhir.FhirBase64Binary|undefined;
  /**
   * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  public carrierHRF?: fhir.FhirString|undefined;
  /**
   * A coded entry to indicate how the data was entered.
   */
  public entryType?: fhir.FhirCode<UdiEntryTypeCodeType>|undefined;
  /**
   * Default constructor for DeviceUdiCarrier - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceUdiCarrierArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['deviceIdentifier'] !== undefined) { this.deviceIdentifier = new fhir.FhirString({value: source.deviceIdentifier}, options); }
    if (source['_deviceIdentifier']) {
      if (this.deviceIdentifier) { this.deviceIdentifier.addExtendedProperties(source._deviceIdentifier!); }
      else { this.deviceIdentifier = new fhir.FhirString(source._deviceIdentifier as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['issuer'] !== undefined) { this.issuer = new fhir.FhirUri({value: source.issuer}, options); }
    if (source['_issuer']) {
      if (this.issuer) { this.issuer.addExtendedProperties(source._issuer!); }
      else { this.issuer = new fhir.FhirUri(source._issuer as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['jurisdiction'] !== undefined) { this.jurisdiction = new fhir.FhirUri({value: source.jurisdiction}, options); }
    if (source['_jurisdiction']) {
      if (this.jurisdiction) { this.jurisdiction.addExtendedProperties(source._jurisdiction!); }
      else { this.jurisdiction = new fhir.FhirUri(source._jurisdiction as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['carrierAIDC'] !== undefined) { this.carrierAIDC = new fhir.FhirBase64Binary({value: source.carrierAIDC}, options); }
    if (source['_carrierAIDC']) {
      if (this.carrierAIDC) { this.carrierAIDC.addExtendedProperties(source._carrierAIDC!); }
      else { this.carrierAIDC = new fhir.FhirBase64Binary(source._carrierAIDC as Partial<fhir.FhirBase64BinaryArgs>, options); }
    }
    if (source['carrierHRF'] !== undefined) { this.carrierHRF = new fhir.FhirString({value: source.carrierHRF}, options); }
    if (source['_carrierHRF']) {
      if (this.carrierHRF) { this.carrierHRF.addExtendedProperties(source._carrierHRF!); }
      else { this.carrierHRF = new fhir.FhirString(source._carrierHRF as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['entryType'] !== undefined) { this.entryType = new fhir.FhirCode<UdiEntryTypeCodeType>({value: source.entryType}, options); }
    if (source['_entryType']) {
      if (this.entryType) { this.entryType.addExtendedProperties(source._entryType!); }
      else { this.entryType = new fhir.FhirCode<UdiEntryTypeCodeType>(source._entryType as Partial<fhir.FhirCode>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Device.udiCarrier' }
    iss.push(...this.vOS('deviceIdentifier',exp));
    iss.push(...this.vOS('issuer',exp));
    iss.push(...this.vOS('jurisdiction',exp));
    iss.push(...this.vOS('carrierAIDC',exp));
    iss.push(...this.vOS('carrierHRF',exp));
    iss.push(...this.vOSV('entryType',exp,'UdiEntryType',UdiEntryTypeVsValidation,'r'));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceDeviceName type.
 */
export interface DeviceDeviceNameArgs extends fhir.BackboneElementArgs {
  /**
   * The name that identifies the device.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.deviceName.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  type: fhir.FhirCode<DeviceNametypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Device.deviceName.type
   */
  _type?:fhir.FhirElementArgs;
}

/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export class DeviceDeviceName extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceDeviceName';
  /**
   * The name that identifies the device.
   */
  public name: fhir.FhirString|null;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  public type: fhir.FhirCode<DeviceNametypeCodeType>|null;
  /**
   * Default constructor for DeviceDeviceName - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceDeviceNameArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['type'] !== undefined) { this.type = new fhir.FhirCode<DeviceNametypeCodeType>({value: source.type}, options); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<DeviceNametypeCodeType>(source._type as Partial<fhir.FhirCode>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Device.deviceName' }
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vRSV('type',exp,'DeviceNametype',DeviceNametypeVsValidation,'r'));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceSpecialization type.
 */
export interface DeviceSpecializationArgs extends fhir.BackboneElementArgs {
  /**
   * The standard that is used to operate and communicate.
   */
  systemType: fhir.CodeableConceptArgs|null;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.specialization.version
   */
  _version?:fhir.FhirElementArgs;
}

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export class DeviceSpecialization extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceSpecialization';
  /**
   * The standard that is used to operate and communicate.
   */
  public systemType: fhir.CodeableConcept|null;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  public version?: fhir.FhirString|undefined;
  /**
   * Default constructor for DeviceSpecialization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceSpecializationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['systemType']) { this.systemType = new fhir.CodeableConcept(source.systemType, options); }
    else { this.systemType = null; }
    if (source['version'] !== undefined) { this.version = new fhir.FhirString({value: source.version}, options); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Device.specialization' }
    iss.push(...this.vRS('systemType',exp));
    iss.push(...this.vOS('version',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceVersion type.
 */
export interface DeviceVersionArgs extends fhir.BackboneElementArgs {
  /**
   * The type of the device version, e.g. manufacturer, approved, internal.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * A single component of the device version.
   */
  component?: fhir.IdentifierArgs|undefined;
  /**
   * The version text.
   */
  value: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.version.value
   */
  _value?:fhir.FhirElementArgs;
}

/**
 * The actual design of the device or software version running on the device.
 */
export class DeviceVersion extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceVersion';
  /**
   * The type of the device version, e.g. manufacturer, approved, internal.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * A single component of the device version.
   */
  public component?: fhir.Identifier|undefined;
  /**
   * The version text.
   */
  public value: fhir.FhirString|null;
  /**
   * Default constructor for DeviceVersion - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceVersionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['component']) { this.component = new fhir.Identifier(source.component, options); }
    if (source['value'] !== undefined) { this.value = new fhir.FhirString({value: source.value}, options); }
    else { this.value = null; }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirString(source._value as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Device.version' }
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('component',exp));
    iss.push(...this.vRS('value',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceProperty type.
 */
export interface DevicePropertyArgs extends fhir.BackboneElementArgs {
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Property value as a quantity.
   */
  valueQuantity?: fhir.QuantityArgs[]|undefined;
  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  valueCode?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export class DeviceProperty extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceProperty';
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Property value as a quantity.
   */
  public valueQuantity: fhir.Quantity[];
  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  public valueCode: fhir.CodeableConcept[];
  /**
   * Default constructor for DeviceProperty - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DevicePropertyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
    if (source['valueQuantity']) { this.valueQuantity = source.valueQuantity.map((x) => new fhir.Quantity(x, options)); }
    else { this.valueQuantity = []; }
    if (source['valueCode']) { this.valueCode = source.valueCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.valueCode = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Device.property' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOA('valueQuantity',exp));
    iss.push(...this.vOA('valueCode',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Device type.
 */
export interface DeviceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Device"|undefined;
  /**
   * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The reference to the definition for the device.
   */
  definition?: fhir.ReferenceArgs|undefined;
  /**
   * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
   */
  udiCarrier?: fhir.DeviceUdiCarrierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
   */
  status?: fhir.FhirCode<DeviceStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Device.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Reason for the dtatus of the Device availability.
   */
  statusReason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
   */
  distinctIdentifier?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.distinctIdentifier
   */
  _distinctIdentifier?:fhir.FhirElementArgs;
  /**
   * A name of the manufacturer.
   */
  manufacturer?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.manufacturer
   */
  _manufacturer?:fhir.FhirElementArgs;
  /**
   * The date and time when the device was manufactured.
   */
  manufactureDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Device.manufactureDate
   */
  _manufactureDate?:fhir.FhirElementArgs;
  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  expirationDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Device.expirationDate
   */
  _expirationDate?:fhir.FhirElementArgs;
  /**
   * Lot number assigned by the manufacturer.
   */
  lotNumber?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.lotNumber
   */
  _lotNumber?:fhir.FhirElementArgs;
  /**
   * Alphanumeric Maximum 20.
   */
  serialNumber?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.serialNumber
   */
  _serialNumber?:fhir.FhirElementArgs;
  /**
   * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   */
  deviceName?: fhir.DeviceDeviceNameArgs[]|undefined;
  /**
   * The manufacturer's model number for the device.
   */
  modelNumber?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.modelNumber
   */
  _modelNumber?:fhir.FhirElementArgs;
  /**
   * Alphanumeric Maximum 20.
   */
  partNumber?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.partNumber
   */
  _partNumber?:fhir.FhirElementArgs;
  /**
   * The kind or type of device.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  specialization?: fhir.DeviceSpecializationArgs[]|undefined;
  /**
   * The actual design of the device or software version running on the device.
   */
  version?: fhir.DeviceVersionArgs[]|undefined;
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  property?: fhir.DevicePropertyArgs[]|undefined;
  /**
   * Patient information, If the device is affixed to a person.
   */
  patient?: fhir.ReferenceArgs|undefined;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: fhir.ReferenceArgs|undefined;
  /**
   * used for troubleshooting etc.
   */
  contact?: fhir.ContactPointArgs[]|undefined;
  /**
   * The place where the device can be found.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Device.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Provides additional safety characteristics about a medical device.  For example devices containing latex.
   */
  safety?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The device that this device is attached to or is part of.
   */
  parent?: fhir.ReferenceArgs|undefined;
}

/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export class Device extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Device';
  /**
   * Resource Type Name
   */
  public override resourceType: "Device";
  /**
   * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
   */
  public identifier: fhir.Identifier[];
  /**
   * The reference to the definition for the device.
   */
  public definition?: fhir.Reference|undefined;
  /**
   * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
   */
  public udiCarrier: fhir.DeviceUdiCarrier[];
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
   */
  public status?: fhir.FhirCode<DeviceStatusCodeType>|undefined;
  /**
   * Reason for the dtatus of the Device availability.
   */
  public statusReason: fhir.CodeableConcept[];
  /**
   * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
   */
  public distinctIdentifier?: fhir.FhirString|undefined;
  /**
   * A name of the manufacturer.
   */
  public manufacturer?: fhir.FhirString|undefined;
  /**
   * The date and time when the device was manufactured.
   */
  public manufactureDate?: fhir.FhirDateTime|undefined;
  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  public expirationDate?: fhir.FhirDateTime|undefined;
  /**
   * Lot number assigned by the manufacturer.
   */
  public lotNumber?: fhir.FhirString|undefined;
  /**
   * Alphanumeric Maximum 20.
   */
  public serialNumber?: fhir.FhirString|undefined;
  /**
   * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   */
  public deviceName: fhir.DeviceDeviceName[];
  /**
   * The manufacturer's model number for the device.
   */
  public modelNumber?: fhir.FhirString|undefined;
  /**
   * Alphanumeric Maximum 20.
   */
  public partNumber?: fhir.FhirString|undefined;
  /**
   * The kind or type of device.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  public specialization: fhir.DeviceSpecialization[];
  /**
   * The actual design of the device or software version running on the device.
   */
  public version: fhir.DeviceVersion[];
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  public property: fhir.DeviceProperty[];
  /**
   * Patient information, If the device is affixed to a person.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  public owner?: fhir.Reference|undefined;
  /**
   * used for troubleshooting etc.
   */
  public contact: fhir.ContactPoint[];
  /**
   * The place where the device can be found.
   */
  public location?: fhir.Reference|undefined;
  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  public note: fhir.Annotation[];
  /**
   * Provides additional safety characteristics about a medical device.  For example devices containing latex.
   */
  public safety: fhir.CodeableConcept[];
  /**
   * The device that this device is attached to or is part of.
   */
  public parent?: fhir.Reference|undefined;
  /**
   * Default constructor for Device - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Device';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['definition']) { this.definition = new fhir.Reference(source.definition, options); }
    if (source['udiCarrier']) { this.udiCarrier = source.udiCarrier.map((x) => new fhir.DeviceUdiCarrier(x, options)); }
    else { this.udiCarrier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<DeviceStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<DeviceStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['statusReason']) { this.statusReason = source.statusReason.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.statusReason = []; }
    if (source['distinctIdentifier'] !== undefined) { this.distinctIdentifier = new fhir.FhirString({value: source.distinctIdentifier}, options); }
    if (source['_distinctIdentifier']) {
      if (this.distinctIdentifier) { this.distinctIdentifier.addExtendedProperties(source._distinctIdentifier!); }
      else { this.distinctIdentifier = new fhir.FhirString(source._distinctIdentifier as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['manufacturer'] !== undefined) { this.manufacturer = new fhir.FhirString({value: source.manufacturer}, options); }
    if (source['_manufacturer']) {
      if (this.manufacturer) { this.manufacturer.addExtendedProperties(source._manufacturer!); }
      else { this.manufacturer = new fhir.FhirString(source._manufacturer as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['manufactureDate'] !== undefined) { this.manufactureDate = new fhir.FhirDateTime({value: source.manufactureDate}, options); }
    if (source['_manufactureDate']) {
      if (this.manufactureDate) { this.manufactureDate.addExtendedProperties(source._manufactureDate!); }
      else { this.manufactureDate = new fhir.FhirDateTime(source._manufactureDate as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['expirationDate'] !== undefined) { this.expirationDate = new fhir.FhirDateTime({value: source.expirationDate}, options); }
    if (source['_expirationDate']) {
      if (this.expirationDate) { this.expirationDate.addExtendedProperties(source._expirationDate!); }
      else { this.expirationDate = new fhir.FhirDateTime(source._expirationDate as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['lotNumber'] !== undefined) { this.lotNumber = new fhir.FhirString({value: source.lotNumber}, options); }
    if (source['_lotNumber']) {
      if (this.lotNumber) { this.lotNumber.addExtendedProperties(source._lotNumber!); }
      else { this.lotNumber = new fhir.FhirString(source._lotNumber as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['serialNumber'] !== undefined) { this.serialNumber = new fhir.FhirString({value: source.serialNumber}, options); }
    if (source['_serialNumber']) {
      if (this.serialNumber) { this.serialNumber.addExtendedProperties(source._serialNumber!); }
      else { this.serialNumber = new fhir.FhirString(source._serialNumber as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['deviceName']) { this.deviceName = source.deviceName.map((x) => new fhir.DeviceDeviceName(x, options)); }
    else { this.deviceName = []; }
    if (source['modelNumber'] !== undefined) { this.modelNumber = new fhir.FhirString({value: source.modelNumber}, options); }
    if (source['_modelNumber']) {
      if (this.modelNumber) { this.modelNumber.addExtendedProperties(source._modelNumber!); }
      else { this.modelNumber = new fhir.FhirString(source._modelNumber as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['partNumber'] !== undefined) { this.partNumber = new fhir.FhirString({value: source.partNumber}, options); }
    if (source['_partNumber']) {
      if (this.partNumber) { this.partNumber.addExtendedProperties(source._partNumber!); }
      else { this.partNumber = new fhir.FhirString(source._partNumber as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['specialization']) { this.specialization = source.specialization.map((x) => new fhir.DeviceSpecialization(x, options)); }
    else { this.specialization = []; }
    if (source['version']) { this.version = source.version.map((x) => new fhir.DeviceVersion(x, options)); }
    else { this.version = []; }
    if (source['property']) { this.property = source.property.map((x) => new fhir.DeviceProperty(x, options)); }
    else { this.property = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    if (source['owner']) { this.owner = new fhir.Reference(source.owner, options); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.contact = []; }
    if (source['location']) { this.location = new fhir.Reference(source.location, options); }
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
    if (source['safety']) { this.safety = source.safety.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.safety = []; }
    if (source['parent']) { this.parent = new fhir.Reference(source.parent, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Device' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('definition',exp));
    iss.push(...this.vOA('udiCarrier',exp));
    iss.push(...this.vOSV('status',exp,'DeviceStatus',DeviceStatusVsValidation,'r'));
    iss.push(...this.vOA('statusReason',exp));
    iss.push(...this.vOS('distinctIdentifier',exp));
    iss.push(...this.vOS('manufacturer',exp));
    iss.push(...this.vOS('manufactureDate',exp));
    iss.push(...this.vOS('expirationDate',exp));
    iss.push(...this.vOS('lotNumber',exp));
    iss.push(...this.vOS('serialNumber',exp));
    iss.push(...this.vOA('deviceName',exp));
    iss.push(...this.vOS('modelNumber',exp));
    iss.push(...this.vOS('partNumber',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOA('specialization',exp));
    iss.push(...this.vOA('version',exp));
    iss.push(...this.vOA('property',exp));
    iss.push(...this.vOS('patient',exp));
    iss.push(...this.vOS('owner',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('location',exp));
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('safety',exp));
    iss.push(...this.vOS('parent',exp));
    return iss;
  }
}
