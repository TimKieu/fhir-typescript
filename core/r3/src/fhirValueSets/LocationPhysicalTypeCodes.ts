// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/location-physical-type|3.0.2

/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export const LocationPhysicalTypeCodes = {
  /**
   * area: A defined physical boundary of something, such as a flood risk zone, region, postcode
   */
  Area: "area",
  /**
   * bd: A space that is allocated for sleeping/laying on. This is not the physical bed/trolley that may be moved about, but the space it may occupy.
   */
  Bed: "bd",
  /**
   * bu: Any Building or structure. This may contain rooms, corridors, wings, etc. It may not have walls, or a roof, but is considered a defined/allocated space.
   */
  Building: "bu",
  /**
   * ca: A container that can store goods, equipment, medications or other items.
   */
  Cabinet: "ca",
  /**
   * co: Any corridor within a Building, that may connect rooms.
   */
  Corridor: "co",
  /**
   * ho: A residential dwelling. Usually used to reference a location that a person/patient may reside.
   */
  House: "ho",
  /**
   * jdn: A wide scope that covers a conceptual domain, such as a Nation (Country wide community or Federal Government - e.g. Ministry of Health),  Province or State (community or Government), Business (throughout the enterprise), Nation with a business scope of an agency (e.g. CDC, FDA etc.) or a Business segment (UK Pharmacy), not just an physical boundry
   */
  Jurisdiction: "jdn",
  /**
   * lvl: A Level in a multi-level Building/Structure.
   */
  Level: "lvl",
  /**
   * rd: A defined path to travel between 2 points that has a known name.
   */
  Road: "rd",
  /**
   * ro: A space that is allocated as a room, it may have walls/roof etc., but does not require these.
   */
  Room: "ro",
  /**
   * si: A collection of buildings or other locations such as a site or a campus.
   */
  Site: "si",
  /**
   * ve: A means of transportation.
   */
  Vehicle: "ve",
  /**
   * wa: A Ward is a section of a medical facility that may contain rooms and other types of location.
   */
  Ward: "wa",
  /**
   * wi: A Wing within a Building, this often contains levels, rooms and corridors.
   */
  Wing: "wi",
} as const;

/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export type LocationPhysicalTypeCodeType = typeof LocationPhysicalTypeCodes[keyof typeof LocationPhysicalTypeCodes];
