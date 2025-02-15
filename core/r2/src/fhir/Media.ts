// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Media

import * as fhir from '../fhir.js';

// @ts-ignore
import { DigitalMediaTypeCodes,  DigitalMediaTypeCodeType } from '../fhirValueSets/DigitalMediaTypeCodes.js';
// @ts-ignore
import { DigitalMediaTypeVsValidation } from '../fhirValueSets/DigitalMediaTypeVsValidation.js';
/**
 * Valid arguments for the Media type.
 */
export interface MediaArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Media"|undefined;
  /**
   * Whether the media is a photo (still image), an audio recording, or a video recording.
   */
  type: fhir.FhirCode<DigitalMediaTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Media.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  subtype?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Who/What this Media is a record of.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * The person who administered the collection of the image.
   */
  operator?: fhir.ReferenceArgs|undefined;
  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  view?: fhir.CodeableConceptArgs|undefined;
  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  deviceName?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Media.deviceName
   */
  _deviceName?:fhir.FhirElementArgs;
  /**
   * Height of the image in pixels (photo/video).
   */
  height?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.height
   */
  _height?:fhir.FhirElementArgs;
  /**
   * Width of the image in pixels (photo/video).
   */
  width?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.width
   */
  _width?:fhir.FhirElementArgs;
  /**
   * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
   */
  frames?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.frames
   */
  _frames?:fhir.FhirElementArgs;
  /**
   * The duration of the recording in seconds - for audio and video.
   */
  duration?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: Media.duration
   */
  _duration?:fhir.FhirElementArgs;
  /**
   * The actual content of the media - inline or by direct reference to the media source file.
   */
  content: fhir.AttachmentArgs|null;
}

/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export class Media extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Media';
  /**
   * Resource Type Name
   */
  public override resourceType: "Media";
  /**
   * Whether the media is a photo (still image), an audio recording, or a video recording.
   */
  public type: fhir.FhirCode<DigitalMediaTypeCodeType>|null;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  public subtype?: fhir.CodeableConcept|undefined;
  /**
   * Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
   */
  public identifier: fhir.Identifier[];
  /**
   * Who/What this Media is a record of.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The person who administered the collection of the image.
   */
  public operator?: fhir.Reference|undefined;
  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  public view?: fhir.CodeableConcept|undefined;
  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  public deviceName?: fhir.FhirString|undefined;
  /**
   * Height of the image in pixels (photo/video).
   */
  public height?: fhir.FhirPositiveInt|undefined;
  /**
   * Width of the image in pixels (photo/video).
   */
  public width?: fhir.FhirPositiveInt|undefined;
  /**
   * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
   */
  public frames?: fhir.FhirPositiveInt|undefined;
  /**
   * The duration of the recording in seconds - for audio and video.
   */
  public duration?: fhir.FhirUnsignedInt|undefined;
  /**
   * The actual content of the media - inline or by direct reference to the media source file.
   */
  public content: fhir.Attachment|null;
  /**
   * Default constructor for Media - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MediaArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Media';
    if (source['type'] !== undefined) { this.type = new fhir.FhirCode<DigitalMediaTypeCodeType>({value: source.type}, options); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<DigitalMediaTypeCodeType>(source._type as Partial<fhir.FhirCode>, options); }
    }
    if (source['subtype']) { this.subtype = new fhir.CodeableConcept(source.subtype, options); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    if (source['operator']) { this.operator = new fhir.Reference(source.operator, options); }
    if (source['view']) { this.view = new fhir.CodeableConcept(source.view, options); }
    if (source['deviceName'] !== undefined) { this.deviceName = new fhir.FhirString({value: source.deviceName}, options); }
    if (source['_deviceName']) {
      if (this.deviceName) { this.deviceName.addExtendedProperties(source._deviceName!); }
      else { this.deviceName = new fhir.FhirString(source._deviceName as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['height'] !== undefined) { this.height = new fhir.FhirPositiveInt({value: source.height}, options); }
    if (source['_height']) {
      if (this.height) { this.height.addExtendedProperties(source._height!); }
      else { this.height = new fhir.FhirPositiveInt(source._height as Partial<fhir.FhirPositiveIntArgs>, options); }
    }
    if (source['width'] !== undefined) { this.width = new fhir.FhirPositiveInt({value: source.width}, options); }
    if (source['_width']) {
      if (this.width) { this.width.addExtendedProperties(source._width!); }
      else { this.width = new fhir.FhirPositiveInt(source._width as Partial<fhir.FhirPositiveIntArgs>, options); }
    }
    if (source['frames'] !== undefined) { this.frames = new fhir.FhirPositiveInt({value: source.frames}, options); }
    if (source['_frames']) {
      if (this.frames) { this.frames.addExtendedProperties(source._frames!); }
      else { this.frames = new fhir.FhirPositiveInt(source._frames as Partial<fhir.FhirPositiveIntArgs>, options); }
    }
    if (source['duration'] !== undefined) { this.duration = new fhir.FhirUnsignedInt({value: source.duration}, options); }
    if (source['_duration']) {
      if (this.duration) { this.duration.addExtendedProperties(source._duration!); }
      else { this.duration = new fhir.FhirUnsignedInt(source._duration as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
    if (source['content']) { this.content = new fhir.Attachment(source.content, options); }
    else { this.content = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Media' }
    iss.push(...this.vRSV('type',exp,'DigitalMediaType',DigitalMediaTypeVsValidation,'r'));
    iss.push(...this.vOS('subtype',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('operator',exp));
    iss.push(...this.vOS('view',exp));
    iss.push(...this.vOS('deviceName',exp));
    iss.push(...this.vOS('height',exp));
    iss.push(...this.vOS('width',exp));
    iss.push(...this.vOS('frames',exp));
    iss.push(...this.vOS('duration',exp));
    iss.push(...this.vRS('content',exp));
    return iss;
  }
}
