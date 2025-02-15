// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImagingStudy

import * as fhir from '../fhir.js';

// @ts-ignore
import { DicomCid29Codes,  DicomCid29CodeType } from '../fhirValueSets/DicomCid29Codes.js';
// @ts-ignore
import { DicomCid29VsValidation } from '../fhirValueSets/DicomCid29VsValidation.js';
// @ts-ignore
import { InstanceAvailabilityCodes,  InstanceAvailabilityCodeType } from '../fhirValueSets/InstanceAvailabilityCodes.js';
// @ts-ignore
import { InstanceAvailabilityVsValidation } from '../fhirValueSets/InstanceAvailabilityVsValidation.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodySiteVsValidation } from '../fhirValueSets/BodySiteVsValidation.js';
// @ts-ignore
import { BodysiteLateralityCodes,  BodysiteLateralityCodeType } from '../fhirValueSets/BodysiteLateralityCodes.js';
// @ts-ignore
import { BodysiteLateralityVsValidation } from '../fhirValueSets/BodysiteLateralityVsValidation.js';
// @ts-ignore
import { ProcedureCodes,  ProcedureCodeType } from '../fhirValueSets/ProcedureCodes.js';
// @ts-ignore
import { ProcedureVsValidation } from '../fhirValueSets/ProcedureVsValidation.js';
// @ts-ignore
import { ProcedureReasonCodes,  ProcedureReasonCodeType } from '../fhirValueSets/ProcedureReasonCodes.js';
// @ts-ignore
import { ProcedureReasonVsValidation } from '../fhirValueSets/ProcedureReasonVsValidation.js';
/**
 * Valid arguments for the ImagingStudySeriesInstance type.
 */
export interface ImagingStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
  /**
   * Formal identifier for this image or other content.
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * The number of instance in the series.
   */
  number?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.number
   */
  _number?:fhir.FhirElementArgs;
  /**
   * DICOM instance  type.
   */
  sopClass: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.sopClass
   */
  _sopClass?:fhir.FhirElementArgs;
  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.instance.title
   */
  _title?:fhir.FhirElementArgs;
}

/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export class ImagingStudySeriesInstance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingStudySeriesInstance';
  /**
   * Formal identifier for this image or other content.
   */
  public uid: fhir.FhirOid|null;
  /**
   * The number of instance in the series.
   */
  public number?: fhir.FhirUnsignedInt|undefined;
  /**
   * DICOM instance  type.
   */
  public sopClass: fhir.FhirOid|null;
  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudySeriesInstanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['number'] !== undefined) { this.number = new fhir.FhirUnsignedInt({value: source.number}, options); }
    if (source['_number']) {
      if (this.number) { this.number.addExtendedProperties(source._number!); }
      else { this.number = new fhir.FhirUnsignedInt(source._number as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['sopClass'] !== undefined) { this.sopClass = new fhir.FhirOid({value: source.sopClass}, options); }
    else { this.sopClass = null; }
    if (source['_sopClass']) {
      if (this.sopClass) { this.sopClass.addExtendedProperties(source._sopClass!); }
      else { this.sopClass = new fhir.FhirOid(source._sopClass as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['title'] !== undefined) { this.title = new fhir.FhirString({value: source.title}, options); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingStudy.series.instance' }
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vOS('number',exp));
    iss.push(...this.vRS('sopClass',exp));
    iss.push(...this.vOS('title',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImagingStudySeries type.
 */
export interface ImagingStudySeriesArgs extends fhir.BackboneElementArgs {
  /**
   * Formal identifier for this series.
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * The numeric identifier of this series in the study.
   */
  number?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.number
   */
  _number?:fhir.FhirElementArgs;
  /**
   * The modality of this series sequence.
   */
  modality: fhir.CodingArgs|null;
  /**
   * A description of the series.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.numberOfInstances
   */
  _numberOfInstances?:fhir.FhirElementArgs;
  /**
   * Availability of series (online, offline or nearline).
   */
  availability?: fhir.FhirCode<InstanceAvailabilityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.availability
   */
  _availability?:fhir.FhirElementArgs;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
   */
  endpoint?: fhir.ReferenceArgs[]|undefined;
  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  bodySite?: fhir.CodingArgs|undefined;
  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  laterality?: fhir.CodingArgs|undefined;
  /**
   * The date and time the series was started.
   */
  started?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.series.started
   */
  _started?:fhir.FhirElementArgs;
  /**
   * The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.
   */
  performer?: fhir.ReferenceArgs[]|undefined;
  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  instance?: fhir.ImagingStudySeriesInstanceArgs[]|undefined;
}

/**
 * Each study has one or more series of images or other content.
 */
export class ImagingStudySeries extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingStudySeries';
  /**
   * Formal identifier for this series.
   */
  public uid: fhir.FhirOid|null;
  /**
   * The numeric identifier of this series in the study.
   */
  public number?: fhir.FhirUnsignedInt|undefined;
  /**
   * The modality of this series sequence.
   */
  public modality: fhir.Coding|null;
  /**
   * A description of the series.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  public numberOfInstances?: fhir.FhirUnsignedInt|undefined;
  /**
   * Availability of series (online, offline or nearline).
   */
  public availability?: fhir.FhirCode<InstanceAvailabilityCodeType>|undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
   */
  public endpoint: fhir.Reference[];
  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  public bodySite?: fhir.Coding|undefined;
  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  public laterality?: fhir.Coding|undefined;
  /**
   * The date and time the series was started.
   */
  public started?: fhir.FhirDateTime|undefined;
  /**
   * The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.
   */
  public performer: fhir.Reference[];
  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  public instance: fhir.ImagingStudySeriesInstance[];
  /**
   * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudySeriesArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['number'] !== undefined) { this.number = new fhir.FhirUnsignedInt({value: source.number}, options); }
    if (source['_number']) {
      if (this.number) { this.number.addExtendedProperties(source._number!); }
      else { this.number = new fhir.FhirUnsignedInt(source._number as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['modality']) { this.modality = new fhir.Coding(source.modality, options); }
    else { this.modality = null; }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['numberOfInstances'] !== undefined) { this.numberOfInstances = new fhir.FhirUnsignedInt({value: source.numberOfInstances}, options); }
    if (source['_numberOfInstances']) {
      if (this.numberOfInstances) { this.numberOfInstances.addExtendedProperties(source._numberOfInstances!); }
      else { this.numberOfInstances = new fhir.FhirUnsignedInt(source._numberOfInstances as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['availability'] !== undefined) { this.availability = new fhir.FhirCode<InstanceAvailabilityCodeType>({value: source.availability}, options); }
    if (source['_availability']) {
      if (this.availability) { this.availability.addExtendedProperties(source._availability!); }
      else { this.availability = new fhir.FhirCode<InstanceAvailabilityCodeType>(source._availability as Partial<fhir.FhirCode>, options); }
    }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x, options)); }
    else { this.endpoint = []; }
    if (source['bodySite']) { this.bodySite = new fhir.Coding(source.bodySite, options); }
    if (source['laterality']) { this.laterality = new fhir.Coding(source.laterality, options); }
    if (source['started'] !== undefined) { this.started = new fhir.FhirDateTime({value: source.started}, options); }
    if (source['_started']) {
      if (this.started) { this.started.addExtendedProperties(source._started!); }
      else { this.started = new fhir.FhirDateTime(source._started as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.Reference(x, options)); }
    else { this.performer = []; }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.ImagingStudySeriesInstance(x, options)); }
    else { this.instance = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingStudy.series' }
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vOS('number',exp));
    iss.push(...this.vRS('modality',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('numberOfInstances',exp));
    iss.push(...this.vOSV('availability',exp,'InstanceAvailability',InstanceAvailabilityVsValidation,'r'));
    iss.push(...this.vOA('endpoint',exp));
    iss.push(...this.vOS('bodySite',exp));
    iss.push(...this.vOS('laterality',exp));
    iss.push(...this.vOS('started',exp));
    iss.push(...this.vOA('performer',exp));
    iss.push(...this.vOA('instance',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImagingStudy type.
 */
export interface ImagingStudyArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ImagingStudy"|undefined;
  /**
   * Formal identifier for the study.
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
   */
  accession?: fhir.IdentifierArgs|undefined;
  /**
   * Other identifiers for the study.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Availability of study (online, offline, or nearline).
   */
  availability?: fhir.FhirCode<InstanceAvailabilityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.availability
   */
  _availability?:fhir.FhirElementArgs;
  /**
   * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  modalityList?: fhir.CodingArgs[]|undefined;
  /**
   * The patient imaged in the study.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The encounter or episode at which the request is initiated.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * Date and time the study started.
   */
  started?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.started
   */
  _started?:fhir.FhirElementArgs;
  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The requesting/referring physician.
   */
  referrer?: fhir.ReferenceArgs|undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  interpreter?: fhir.ReferenceArgs[]|undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   */
  endpoint?: fhir.ReferenceArgs[]|undefined;
  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  numberOfSeries?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.numberOfSeries
   */
  _numberOfSeries?:fhir.FhirElementArgs;
  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.numberOfInstances
   */
  _numberOfInstances?:fhir.FhirElementArgs;
  /**
   * A reference to the performed Procedure.
   */
  procedureReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * The code for the performed procedure type.
   */
  procedureCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  reason?: fhir.CodeableConceptArgs|undefined;
  /**
   * Institution-generated description or classification of the Study performed.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingStudy.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Each study has one or more series of images or other content.
   */
  series?: fhir.ImagingStudySeriesArgs[]|undefined;
}

/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export class ImagingStudy extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingStudy';
  /**
   * Resource Type Name
   */
  public override resourceType: "ImagingStudy";
  /**
   * Formal identifier for the study.
   */
  public uid: fhir.FhirOid|null;
  /**
   * Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
   */
  public accession?: fhir.Identifier|undefined;
  /**
   * Other identifiers for the study.
   */
  public identifier: fhir.Identifier[];
  /**
   * Availability of study (online, offline, or nearline).
   */
  public availability?: fhir.FhirCode<InstanceAvailabilityCodeType>|undefined;
  /**
   * A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  public modalityList: fhir.Coding[];
  /**
   * The patient imaged in the study.
   */
  public patient: fhir.Reference|null;
  /**
   * The encounter or episode at which the request is initiated.
   */
  public context?: fhir.Reference|undefined;
  /**
   * Date and time the study started.
   */
  public started?: fhir.FhirDateTime|undefined;
  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  public basedOn: fhir.Reference[];
  /**
   * The requesting/referring physician.
   */
  public referrer?: fhir.Reference|undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  public interpreter: fhir.Reference[];
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   */
  public endpoint: fhir.Reference[];
  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  public numberOfSeries?: fhir.FhirUnsignedInt|undefined;
  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  public numberOfInstances?: fhir.FhirUnsignedInt|undefined;
  /**
   * A reference to the performed Procedure.
   */
  public procedureReference: fhir.Reference[];
  /**
   * The code for the performed procedure type.
   */
  public procedureCode: fhir.CodeableConcept[];
  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  public reason?: fhir.CodeableConcept|undefined;
  /**
   * Institution-generated description or classification of the Study performed.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Each study has one or more series of images or other content.
   */
  public series: fhir.ImagingStudySeries[];
  /**
   * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingStudyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ImagingStudy';
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['accession']) { this.accession = new fhir.Identifier(source.accession, options); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['availability'] !== undefined) { this.availability = new fhir.FhirCode<InstanceAvailabilityCodeType>({value: source.availability}, options); }
    if (source['_availability']) {
      if (this.availability) { this.availability.addExtendedProperties(source._availability!); }
      else { this.availability = new fhir.FhirCode<InstanceAvailabilityCodeType>(source._availability as Partial<fhir.FhirCode>, options); }
    }
    if (source['modalityList']) { this.modalityList = source.modalityList.map((x) => new fhir.Coding(x, options)); }
    else { this.modalityList = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    else { this.patient = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context, options); }
    if (source['started'] !== undefined) { this.started = new fhir.FhirDateTime({value: source.started}, options); }
    if (source['_started']) {
      if (this.started) { this.started.addExtendedProperties(source._started!); }
      else { this.started = new fhir.FhirDateTime(source._started as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x, options)); }
    else { this.basedOn = []; }
    if (source['referrer']) { this.referrer = new fhir.Reference(source.referrer, options); }
    if (source['interpreter']) { this.interpreter = source.interpreter.map((x) => new fhir.Reference(x, options)); }
    else { this.interpreter = []; }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x, options)); }
    else { this.endpoint = []; }
    if (source['numberOfSeries'] !== undefined) { this.numberOfSeries = new fhir.FhirUnsignedInt({value: source.numberOfSeries}, options); }
    if (source['_numberOfSeries']) {
      if (this.numberOfSeries) { this.numberOfSeries.addExtendedProperties(source._numberOfSeries!); }
      else { this.numberOfSeries = new fhir.FhirUnsignedInt(source._numberOfSeries as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['numberOfInstances'] !== undefined) { this.numberOfInstances = new fhir.FhirUnsignedInt({value: source.numberOfInstances}, options); }
    if (source['_numberOfInstances']) {
      if (this.numberOfInstances) { this.numberOfInstances.addExtendedProperties(source._numberOfInstances!); }
      else { this.numberOfInstances = new fhir.FhirUnsignedInt(source._numberOfInstances as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['procedureReference']) { this.procedureReference = source.procedureReference.map((x) => new fhir.Reference(x, options)); }
    else { this.procedureReference = []; }
    if (source['procedureCode']) { this.procedureCode = source.procedureCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.procedureCode = []; }
    if (source['reason']) { this.reason = new fhir.CodeableConcept(source.reason, options); }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['series']) { this.series = source.series.map((x) => new fhir.ImagingStudySeries(x, options)); }
    else { this.series = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingStudy' }
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vOS('accession',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOSV('availability',exp,'InstanceAvailability',InstanceAvailabilityVsValidation,'r'));
    iss.push(...this.vOA('modalityList',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('started',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vOS('referrer',exp));
    iss.push(...this.vOA('interpreter',exp));
    iss.push(...this.vOA('endpoint',exp));
    iss.push(...this.vOS('numberOfSeries',exp));
    iss.push(...this.vOS('numberOfInstances',exp));
    iss.push(...this.vOA('procedureReference',exp));
    iss.push(...this.vOA('procedureCode',exp));
    iss.push(...this.vOS('reason',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('series',exp));
    return iss;
  }
}
