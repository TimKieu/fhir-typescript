// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseStatement

import * as fhir from '../fhirJson.js';


/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export interface DeviceUseStatement extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "DeviceUseStatement"|null;
  /**
   * Knowing where the device is targeted is important for tracking if multiple sites are possible.
   */
  bodySiteCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Knowing where the device is targeted is important for tracking if multiple sites are possible.
   */
  bodySiteReference?: fhir.Reference|undefined;
  /**
   * The time period over which the device was used.
   */
  whenUsed?: fhir.Period|undefined;
  /**
   * The details of the device used.
   */
  device: fhir.Reference|null;
  /**
   * An external identifier for this statement such as an IRI.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * Reason or justification for the use of the device.
   */
  indication?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  notes?: (string|null)[]|undefined;
  /**
   * Extended properties for primitive element: DeviceUseStatement.notes
   */
  _notes?:(fhir.FhirElement|null)[];
  /**
   * The time at which the statement was made/recorded.
   */
  recordedOn?: string|undefined;
  /**
   * Extended properties for primitive element: DeviceUseStatement.recordedOn
   */
  _recordedOn?:fhir.FhirElement;
  /**
   * The patient who used the device.
   */
  subject: fhir.Reference|null;
  /**
   * How often the device was used.
   */
  timingTiming?: fhir.Timing|undefined;
  /**
   * How often the device was used.
   */
  timingPeriod?: fhir.Period|undefined;
  /**
   * How often the device was used.
   */
  timingDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: DeviceUseStatement.timing[x]
   */
  _timingDateTime?:fhir.FhirElement;
}
