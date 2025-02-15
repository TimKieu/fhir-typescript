// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: VisionPrescription

import * as fhir from '../fhir.js';

// @ts-ignore
import { VisionBaseCodes,  VisionBaseCodeType } from '../fhirValueSets/VisionBaseCodes.js';
// @ts-ignore
import { VisionBaseVsValidation } from '../fhirValueSets/VisionBaseVsValidation.js';
// @ts-ignore
import { VisionProductCodes,  VisionProductCodeType } from '../fhirValueSets/VisionProductCodes.js';
// @ts-ignore
import { VisionProductVsValidation } from '../fhirValueSets/VisionProductVsValidation.js';
// @ts-ignore
import { VisionEyeCodes,  VisionEyeCodeType } from '../fhirValueSets/VisionEyeCodes.js';
// @ts-ignore
import { VisionEyeVsValidation } from '../fhirValueSets/VisionEyeVsValidation.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
/**
 * Valid arguments for the VisionPrescriptionLensSpecificationPrism type.
 */
export interface VisionPrescriptionLensSpecificationPrismArgs extends fhir.BackboneElementArgs {
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  amount: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.amount
   */
  _amount?:fhir.FhirElementArgs;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  base: fhir.FhirCode<VisionBaseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.base
   */
  _base?:fhir.FhirElementArgs;
}

/**
 * Allows for adjustment on two axis.
 */
export class VisionPrescriptionLensSpecificationPrism extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VisionPrescriptionLensSpecificationPrism';
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  public amount: fhir.FhirDecimal|null;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  public base: fhir.FhirCode<VisionBaseCodeType>|null;
  /**
   * Default constructor for VisionPrescriptionLensSpecificationPrism - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VisionPrescriptionLensSpecificationPrismArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['amount'] !== undefined) { this.amount = new fhir.FhirDecimal({value: source.amount}, options); }
    else { this.amount = null; }
    if (source['_amount']) {
      if (this.amount) { this.amount.addExtendedProperties(source._amount!); }
      else { this.amount = new fhir.FhirDecimal(source._amount as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['base'] !== undefined) { this.base = new fhir.FhirCode<VisionBaseCodeType>({value: source.base}, options); }
    else { this.base = null; }
    if (source['_base']) {
      if (this.base) { this.base.addExtendedProperties(source._base!); }
      else { this.base = new fhir.FhirCode<VisionBaseCodeType>(source._base as Partial<fhir.FhirCode>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'VisionPrescription.lensSpecification.prism' }
    iss.push(...this.vRS('amount',exp));
    iss.push(...this.vRSV('base',exp,'VisionBase',VisionBaseVsValidation,'r'));
    return iss;
  }
}
/**
 * Valid arguments for the VisionPrescriptionLensSpecification type.
 */
export interface VisionPrescriptionLensSpecificationArgs extends fhir.BackboneElementArgs {
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  product: fhir.CodeableConceptArgs|null;
  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  eye: fhir.FhirCode<VisionEyeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.eye
   */
  _eye?:fhir.FhirElementArgs;
  /**
   * The value is negative for near-sighted and positive for far sighted.
   * Often insurance will not cover a lens with power between +75 and -75.
   */
  sphere?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.sphere
   */
  _sphere?:fhir.FhirElementArgs;
  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  cylinder?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.cylinder
   */
  _cylinder?:fhir.FhirElementArgs;
  /**
   * The limits are +180 and -180 degrees.
   */
  axis?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.axis
   */
  _axis?:fhir.FhirElementArgs;
  /**
   * Allows for adjustment on two axis.
   */
  prism?: fhir.VisionPrescriptionLensSpecificationPrismArgs[]|undefined;
  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  add?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.add
   */
  _add?:fhir.FhirElementArgs;
  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  power?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.power
   */
  _power?:fhir.FhirElementArgs;
  /**
   * Back curvature measured in millimetres.
   */
  backCurve?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.backCurve
   */
  _backCurve?:fhir.FhirElementArgs;
  /**
   * Contact lens diameter measured in millimetres.
   */
  diameter?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.diameter
   */
  _diameter?:fhir.FhirElementArgs;
  /**
   * The recommended maximum wear period for the lens.
   */
  duration?: fhir.QuantityArgs|undefined;
  /**
   * Special color or pattern.
   */
  color?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.color
   */
  _color?:fhir.FhirElementArgs;
  /**
   * Brand recommendations or restrictions.
   */
  brand?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.lensSpecification.brand
   */
  _brand?:fhir.FhirElementArgs;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export class VisionPrescriptionLensSpecification extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VisionPrescriptionLensSpecification';
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  public product: fhir.CodeableConcept|null;
  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  public eye: fhir.FhirCode<VisionEyeCodeType>|null;
  /**
   * The value is negative for near-sighted and positive for far sighted.
   * Often insurance will not cover a lens with power between +75 and -75.
   */
  public sphere?: fhir.FhirDecimal|undefined;
  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  public cylinder?: fhir.FhirDecimal|undefined;
  /**
   * The limits are +180 and -180 degrees.
   */
  public axis?: fhir.FhirInteger|undefined;
  /**
   * Allows for adjustment on two axis.
   */
  public prism: fhir.VisionPrescriptionLensSpecificationPrism[];
  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  public add?: fhir.FhirDecimal|undefined;
  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  public power?: fhir.FhirDecimal|undefined;
  /**
   * Back curvature measured in millimetres.
   */
  public backCurve?: fhir.FhirDecimal|undefined;
  /**
   * Contact lens diameter measured in millimetres.
   */
  public diameter?: fhir.FhirDecimal|undefined;
  /**
   * The recommended maximum wear period for the lens.
   */
  public duration?: fhir.Quantity|undefined;
  /**
   * Special color or pattern.
   */
  public color?: fhir.FhirString|undefined;
  /**
   * Brand recommendations or restrictions.
   */
  public brand?: fhir.FhirString|undefined;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for VisionPrescriptionLensSpecification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VisionPrescriptionLensSpecificationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['product']) { this.product = new fhir.CodeableConcept(source.product, options); }
    else { this.product = null; }
    if (source['eye'] !== undefined) { this.eye = new fhir.FhirCode<VisionEyeCodeType>({value: source.eye}, options); }
    else { this.eye = null; }
    if (source['_eye']) {
      if (this.eye) { this.eye.addExtendedProperties(source._eye!); }
      else { this.eye = new fhir.FhirCode<VisionEyeCodeType>(source._eye as Partial<fhir.FhirCode>, options); }
    }
    if (source['sphere'] !== undefined) { this.sphere = new fhir.FhirDecimal({value: source.sphere}, options); }
    if (source['_sphere']) {
      if (this.sphere) { this.sphere.addExtendedProperties(source._sphere!); }
      else { this.sphere = new fhir.FhirDecimal(source._sphere as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['cylinder'] !== undefined) { this.cylinder = new fhir.FhirDecimal({value: source.cylinder}, options); }
    if (source['_cylinder']) {
      if (this.cylinder) { this.cylinder.addExtendedProperties(source._cylinder!); }
      else { this.cylinder = new fhir.FhirDecimal(source._cylinder as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['axis'] !== undefined) { this.axis = new fhir.FhirInteger({value: source.axis}, options); }
    if (source['_axis']) {
      if (this.axis) { this.axis.addExtendedProperties(source._axis!); }
      else { this.axis = new fhir.FhirInteger(source._axis as Partial<fhir.FhirIntegerArgs>, options); }
    }
    if (source['prism']) { this.prism = source.prism.map((x) => new fhir.VisionPrescriptionLensSpecificationPrism(x, options)); }
    else { this.prism = []; }
    if (source['add'] !== undefined) { this.add = new fhir.FhirDecimal({value: source.add}, options); }
    if (source['_add']) {
      if (this.add) { this.add.addExtendedProperties(source._add!); }
      else { this.add = new fhir.FhirDecimal(source._add as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['power'] !== undefined) { this.power = new fhir.FhirDecimal({value: source.power}, options); }
    if (source['_power']) {
      if (this.power) { this.power.addExtendedProperties(source._power!); }
      else { this.power = new fhir.FhirDecimal(source._power as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['backCurve'] !== undefined) { this.backCurve = new fhir.FhirDecimal({value: source.backCurve}, options); }
    if (source['_backCurve']) {
      if (this.backCurve) { this.backCurve.addExtendedProperties(source._backCurve!); }
      else { this.backCurve = new fhir.FhirDecimal(source._backCurve as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['diameter'] !== undefined) { this.diameter = new fhir.FhirDecimal({value: source.diameter}, options); }
    if (source['_diameter']) {
      if (this.diameter) { this.diameter.addExtendedProperties(source._diameter!); }
      else { this.diameter = new fhir.FhirDecimal(source._diameter as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['duration']) { this.duration = new fhir.Quantity(source.duration, options); }
    if (source['color'] !== undefined) { this.color = new fhir.FhirString({value: source.color}, options); }
    if (source['_color']) {
      if (this.color) { this.color.addExtendedProperties(source._color!); }
      else { this.color = new fhir.FhirString(source._color as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['brand'] !== undefined) { this.brand = new fhir.FhirString({value: source.brand}, options); }
    if (source['_brand']) {
      if (this.brand) { this.brand.addExtendedProperties(source._brand!); }
      else { this.brand = new fhir.FhirString(source._brand as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'VisionPrescription.lensSpecification' }
    iss.push(...this.vRS('product',exp));
    iss.push(...this.vRSV('eye',exp,'VisionEye',VisionEyeVsValidation,'r'));
    iss.push(...this.vOS('sphere',exp));
    iss.push(...this.vOS('cylinder',exp));
    iss.push(...this.vOS('axis',exp));
    iss.push(...this.vOA('prism',exp));
    iss.push(...this.vOS('add',exp));
    iss.push(...this.vOS('power',exp));
    iss.push(...this.vOS('backCurve',exp));
    iss.push(...this.vOS('diameter',exp));
    iss.push(...this.vOS('duration',exp));
    iss.push(...this.vOS('color',exp));
    iss.push(...this.vOS('brand',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}
/**
 * Valid arguments for the VisionPrescription type.
 */
export interface VisionPrescriptionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "VisionPrescription"|undefined;
  /**
   * A unique identifier assigned to this vision prescription.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The date this resource was created.
   */
  created: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   */
  dateWritten: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: VisionPrescription.dateWritten
   */
  _dateWritten?:fhir.FhirElementArgs;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  prescriber: fhir.ReferenceArgs|null;
  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  lensSpecification: fhir.VisionPrescriptionLensSpecificationArgs[]|null;
}

/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export class VisionPrescription extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VisionPrescription';
  /**
   * Resource Type Name
   */
  public override resourceType: "VisionPrescription";
  /**
   * A unique identifier assigned to this vision prescription.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<FmStatusCodeType>|null;
  /**
   * The date this resource was created.
   */
  public created: fhir.FhirDateTime|null;
  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  public patient: fhir.Reference|null;
  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   */
  public dateWritten: fhir.FhirDateTime|null;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  public prescriber: fhir.Reference|null;
  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  public lensSpecification: fhir.VisionPrescriptionLensSpecification[];
  /**
   * Default constructor for VisionPrescription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VisionPrescriptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'VisionPrescription';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['created'] !== undefined) { this.created = new fhir.FhirDateTime({value: source.created}, options); }
    else { this.created = null; }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    else { this.patient = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter, options); }
    if (source['dateWritten'] !== undefined) { this.dateWritten = new fhir.FhirDateTime({value: source.dateWritten}, options); }
    else { this.dateWritten = null; }
    if (source['_dateWritten']) {
      if (this.dateWritten) { this.dateWritten.addExtendedProperties(source._dateWritten!); }
      else { this.dateWritten = new fhir.FhirDateTime(source._dateWritten as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['prescriber']) { this.prescriber = new fhir.Reference(source.prescriber, options); }
    else { this.prescriber = null; }
    if (source['lensSpecification']) { this.lensSpecification = source.lensSpecification.map((x) => new fhir.VisionPrescriptionLensSpecification(x, options)); }
    else { this.lensSpecification = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'VisionPrescription' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'FmStatus',FmStatusVsValidation,'r'));
    iss.push(...this.vRS('created',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vRS('dateWritten',exp));
    iss.push(...this.vRS('prescriber',exp));
    iss.push(...this.vRA('lensSpecification',exp));
    return iss;
  }
}
