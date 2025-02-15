// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Location

import * as fhir from '../fhirJson.js';


/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export interface LocationPosition extends fhir.BackboneElement { 
  /**
   * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
   */
  longitude: number|null;
  /**
   * Extended properties for primitive element: Location.position.longitude
   */
  _longitude?:fhir.FhirElement;
  /**
   * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
   */
  latitude: number|null;
  /**
   * Extended properties for primitive element: Location.position.latitude
   */
  _latitude?:fhir.FhirElement;
  /**
   * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
   */
  altitude?: number|undefined;
  /**
   * Extended properties for primitive element: Location.position.altitude
   */
  _altitude?:fhir.FhirElement;
}

/**
 * Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.
 */
export interface Location extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "Location"|null;
  /**
   * Unique code or number identifying the location to its users.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: 'active'|'inactive'|'suspended'|undefined;
  /**
   * Extended properties for primitive element: Location.status
   */
  _status?:fhir.FhirElement;
  /**
   * The Operational status covers operation values most relevant to beds (but can also apply to rooms/units/chair/etc such as an isolation unit/dialisys chair). This typically covers concepts such as contamination, housekeeping and other activities like maintenance.
   */
  operationalStatus?: fhir.Coding|undefined;
  /**
   * If the name of an location changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: Location.name
   */
  _name?:fhir.FhirElement;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
   */
  alias?: (string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Location.alias
   */
  _alias?:(fhir.FhirElement|null)[];
  /**
   * Description of the Location, which helps in finding or referencing the place.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: Location.description
   */
  _description?:fhir.FhirElement;
  /**
   * This is labeled as a modifer because whether or not the location is a class of locations changes how it can be used and understood.
   */
  mode?: 'instance'|'kind'|undefined;
  /**
   * Extended properties for primitive element: Location.mode
   */
  _mode?:fhir.FhirElement;
  /**
   * Indicates the type of function performed at the location.
   */
  type?: fhir.CodeableConcept|undefined;
  /**
   * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   */
  telecom?: (fhir.ContactPoint|null)[]|undefined;
  /**
   * This was kept as 0..1 as there is no use property on the address, so wouldn't be able to identify different address types.
   */
  address?: fhir.Address|undefined;
  /**
   * Physical form of the location, e.g. building, room, vehicle, road.
   */
  physicalType?: fhir.CodeableConcept|undefined;
  /**
   * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
   */
  position?: fhir.LocationPosition|undefined;
  /**
   * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
   */
  managingOrganization?: fhir.Reference|undefined;
  /**
   * Another Location which this Location is physically part of.
   */
  partOf?: fhir.Reference|undefined;
  /**
   * Technical endpoints providing access to services operated for the location.
   */
  endpoint?: (fhir.Reference|null)[]|undefined;
}
