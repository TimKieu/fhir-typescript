// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImagingObjectSelection

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the ImagingObjectSelectionStudySeriesInstanceFrames type.
 */
export interface ImagingObjectSelectionStudySeriesInstanceFramesArgs extends fhir.BackboneElementArgs {
  /**
   * One or more non-duplicate frame numbers in the selected instance.
   */
  frameNumbers: fhir.FhirUnsignedInt[]|(number|null)[]|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.frames.frameNumbers
   */
  _frameNumbers?:(fhir.FhirElementArgs|null)[];
  /**
   * WADO-RS URL enables retrieval of the frames using DICOM WADO-RS API.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.frames.url
   */
  _url?:fhir.FhirElementArgs;
}

/**
 * The specific set of frames referenced in this imaging object selection. The URL retrieves the pixel data, and is encapsulated in a multipart MIME response.
 */
export class ImagingObjectSelectionStudySeriesInstanceFrames extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingObjectSelectionStudySeriesInstanceFrames';
  /**
   * One or more non-duplicate frame numbers in the selected instance.
   */
  public frameNumbers: fhir.FhirUnsignedInt[];
  /**
   * WADO-RS URL enables retrieval of the frames using DICOM WADO-RS API.
   */
  public url: fhir.FhirUri|null;
  /**
   * Default constructor for ImagingObjectSelectionStudySeriesInstanceFrames - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingObjectSelectionStudySeriesInstanceFramesArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['frameNumbers'] !== undefined) { this.frameNumbers = source.frameNumbers.map((x) => new fhir.FhirUnsignedInt({value: x}, options)); }
    else { this.frameNumbers = []; }
    if (source['_frameNumbers']) {
      source._frameNumbers.forEach((x,i) => {
        if (this.frameNumbers.length >= i) { if (x) { this.frameNumbers[i].addExtendedProperties(x); } }
        else { if (x) { this.frameNumbers.push(new fhir.FhirUnsignedInt(x as Partial<fhir.FhirUnsignedIntArgs>)); } }
      });
    }
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingObjectSelection.study.series.instance.frames' }
    iss.push(...this.vRA('frameNumbers',exp));
    iss.push(...this.vRS('url',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImagingObjectSelectionStudySeriesInstance type.
 */
export interface ImagingObjectSelectionStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
  /**
   * DICOM SOP instances can be an image or other data object. The SOP class UID provide the accurate information about what type the instance is.
   */
  sopClass: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.sopClass
   */
  _sopClass?:fhir.FhirElementArgs;
  /**
   * SOP instance UID is required to fully identify the DICOM SOP instance in the selection.
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * WADO-RS URL enables retrieval of the SOP instance using DICOM WADO-RS API.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.series.instance.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * The specific set of frames referenced in this imaging object selection. The URL retrieves the pixel data, and is encapsulated in a multipart MIME response.
   */
  frames?: fhir.ImagingObjectSelectionStudySeriesInstanceFramesArgs[]|undefined;
}

/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. This is the instance level identity of the instance in the selection.
 */
export class ImagingObjectSelectionStudySeriesInstance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingObjectSelectionStudySeriesInstance';
  /**
   * DICOM SOP instances can be an image or other data object. The SOP class UID provide the accurate information about what type the instance is.
   */
  public sopClass: fhir.FhirOid|null;
  /**
   * SOP instance UID is required to fully identify the DICOM SOP instance in the selection.
   */
  public uid: fhir.FhirOid|null;
  /**
   * WADO-RS URL enables retrieval of the SOP instance using DICOM WADO-RS API.
   */
  public url: fhir.FhirUri|null;
  /**
   * The specific set of frames referenced in this imaging object selection. The URL retrieves the pixel data, and is encapsulated in a multipart MIME response.
   */
  public frames: fhir.ImagingObjectSelectionStudySeriesInstanceFrames[];
  /**
   * Default constructor for ImagingObjectSelectionStudySeriesInstance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingObjectSelectionStudySeriesInstanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['sopClass'] !== undefined) { this.sopClass = new fhir.FhirOid({value: source.sopClass}, options); }
    else { this.sopClass = null; }
    if (source['_sopClass']) {
      if (this.sopClass) { this.sopClass.addExtendedProperties(source._sopClass!); }
      else { this.sopClass = new fhir.FhirOid(source._sopClass as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['frames']) { this.frames = source.frames.map((x) => new fhir.ImagingObjectSelectionStudySeriesInstanceFrames(x, options)); }
    else { this.frames = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingObjectSelection.study.series.instance' }
    iss.push(...this.vRS('sopClass',exp));
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vRS('url',exp));
    iss.push(...this.vOA('frames',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImagingObjectSelectionStudySeries type.
 */
export interface ImagingObjectSelectionStudySeriesArgs extends fhir.BackboneElementArgs {
  /**
   * Series instance UID is required to fully identify the DICOM SOP instances in the selection.
   */
  uid?: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.series.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * WADO-RS URL enables retrieval of the entire series using DICOM WADO-RS API.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.series.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. This is the instance level identity of the instance in the selection.
   */
  instance: fhir.ImagingObjectSelectionStudySeriesInstanceArgs[]|null;
}

/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the series level provide a means of retrieving the entire series.
 */
export class ImagingObjectSelectionStudySeries extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingObjectSelectionStudySeries';
  /**
   * Series instance UID is required to fully identify the DICOM SOP instances in the selection.
   */
  public uid?: fhir.FhirOid|undefined;
  /**
   * WADO-RS URL enables retrieval of the entire series using DICOM WADO-RS API.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. This is the instance level identity of the instance in the selection.
   */
  public instance: fhir.ImagingObjectSelectionStudySeriesInstance[];
  /**
   * Default constructor for ImagingObjectSelectionStudySeries - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingObjectSelectionStudySeriesArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.ImagingObjectSelectionStudySeriesInstance(x, options)); }
    else { this.instance = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingObjectSelection.study.series' }
    iss.push(...this.vOS('uid',exp));
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vRA('instance',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImagingObjectSelectionStudy type.
 */
export interface ImagingObjectSelectionStudyArgs extends fhir.BackboneElementArgs {
  /**
   * Study instance UID is required to fully identify the DICOM SOP instances in the selection.
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * WADO-RS URL enables retrieval of the entire study using DICOM WADO-RS API.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.study.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Used to retrieve the ImagingStudy that contain the images referenced in the Imaging ObjectSelection.study.
   */
  imagingStudy?: fhir.ReferenceArgs|undefined;
  /**
   * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the series level provide a means of retrieving the entire series.
   */
  series: fhir.ImagingObjectSelectionStudySeriesArgs[]|null;
}

/**
 * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the study level provide a means of retrieving the entire study.
 */
export class ImagingObjectSelectionStudy extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingObjectSelectionStudy';
  /**
   * Study instance UID is required to fully identify the DICOM SOP instances in the selection.
   */
  public uid: fhir.FhirOid|null;
  /**
   * WADO-RS URL enables retrieval of the entire study using DICOM WADO-RS API.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Used to retrieve the ImagingStudy that contain the images referenced in the Imaging ObjectSelection.study.
   */
  public imagingStudy?: fhir.Reference|undefined;
  /**
   * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the series level provide a means of retrieving the entire series.
   */
  public series: fhir.ImagingObjectSelectionStudySeries[];
  /**
   * Default constructor for ImagingObjectSelectionStudy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingObjectSelectionStudyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['imagingStudy']) { this.imagingStudy = new fhir.Reference(source.imagingStudy, options); }
    if (source['series']) { this.series = source.series.map((x) => new fhir.ImagingObjectSelectionStudySeries(x, options)); }
    else { this.series = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingObjectSelection.study' }
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOS('imagingStudy',exp));
    iss.push(...this.vRA('series',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImagingObjectSelection type.
 */
export interface ImagingObjectSelectionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ImagingObjectSelection"|undefined;
  /**
   * DICOM SOP Instance is always assigned with a unique identifier (UID).
   */
  uid: fhir.FhirOid|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.uid
   */
  _uid?:fhir.FhirElementArgs;
  /**
   * SOP Instances in ImagingObjectSelection must be from the same patient.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * Need to represent the application purpose that the SOP instances in ImagingObjectSelection are selected for.
   */
  title: fhir.CodeableConceptArgs|null;
  /**
   * Need to provide a narrative description of the SOP instances in the selection.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Track the selection decision maker.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * Date and time when the selection was made can be important to understand the content of selection.
   */
  authoringTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImagingObjectSelection.authoringTime
   */
  _authoringTime?:fhir.FhirElementArgs;
  /**
   * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the study level provide a means of retrieving the entire study.
   */
  study: fhir.ImagingObjectSelectionStudyArgs[]|null;
}

/**
 * A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.
 */
export class ImagingObjectSelection extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImagingObjectSelection';
  /**
   * Resource Type Name
   */
  public override resourceType: "ImagingObjectSelection";
  /**
   * DICOM SOP Instance is always assigned with a unique identifier (UID).
   */
  public uid: fhir.FhirOid|null;
  /**
   * SOP Instances in ImagingObjectSelection must be from the same patient.
   */
  public patient: fhir.Reference|null;
  /**
   * Need to represent the application purpose that the SOP instances in ImagingObjectSelection are selected for.
   */
  public title: fhir.CodeableConcept|null;
  /**
   * Need to provide a narrative description of the SOP instances in the selection.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Track the selection decision maker.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Date and time when the selection was made can be important to understand the content of selection.
   */
  public authoringTime?: fhir.FhirDateTime|undefined;
  /**
   * DICOM SOP instances are identified through the UIDs of the study - series - instance hierarchy. In addition, the locator at the study level provide a means of retrieving the entire study.
   */
  public study: fhir.ImagingObjectSelectionStudy[];
  /**
   * Default constructor for ImagingObjectSelection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImagingObjectSelectionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ImagingObjectSelection';
    if (source['uid'] !== undefined) { this.uid = new fhir.FhirOid({value: source.uid}, options); }
    else { this.uid = null; }
    if (source['_uid']) {
      if (this.uid) { this.uid.addExtendedProperties(source._uid!); }
      else { this.uid = new fhir.FhirOid(source._uid as Partial<fhir.FhirOidArgs>, options); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    else { this.patient = null; }
    if (source['title']) { this.title = new fhir.CodeableConcept(source.title, options); }
    else { this.title = null; }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author, options); }
    if (source['authoringTime'] !== undefined) { this.authoringTime = new fhir.FhirDateTime({value: source.authoringTime}, options); }
    if (source['_authoringTime']) {
      if (this.authoringTime) { this.authoringTime.addExtendedProperties(source._authoringTime!); }
      else { this.authoringTime = new fhir.FhirDateTime(source._authoringTime as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['study']) { this.study = source.study.map((x) => new fhir.ImagingObjectSelectionStudy(x, options)); }
    else { this.study = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImagingObjectSelection' }
    iss.push(...this.vRS('uid',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vRS('title',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vOS('authoringTime',exp));
    iss.push(...this.vRA('study',exp));
    return iss;
  }
}
