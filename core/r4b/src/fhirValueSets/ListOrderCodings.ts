// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/list-order|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Base values for the order of the items in a list resource.
 */
export type ListOrderCodingType = {
  /**
   * alphabetic: The list is sorted alphabetically by an unspecified property of the items in the list.
   */
  SortedAlphabetically: CodingArgs;
  /**
   * category: The list is sorted categorically by an unspecified property of the items in the list.
   */
  SortedByCategory: CodingArgs;
  /**
   * entry-date: The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
   */
  SortedByItemDate: CodingArgs;
  /**
   * event-date: The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
   */
  SortedByEventDate: CodingArgs;
  /**
   * patient: The list is sorted by patient, with items for each patient grouped together.
   */
  SortedByPatient: CodingArgs;
  /**
   * priority: The list is sorted by priority. The exact method in which priority has been determined is not specified.
   */
  SortedByPriority: CodingArgs;
  /**
   * system: The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
   */
  SortedBySystem: CodingArgs;
  /**
   * user: The list was sorted by a user. The criteria the user used are not specified.
   */
  SortedByUser: CodingArgs;
}

/**
 * Base values for the order of the items in a list resource.
 */
export const ListOrderCodings:ListOrderCodingType = {
  /**
   * alphabetic: The list is sorted alphabetically by an unspecified property of the items in the list.
   */
  SortedAlphabetically: {
    display: "Sorted Alphabetically",
    code: "alphabetic",
    system: "http://terminology.hl7.org/CodeSystem/list-order",
  },
  /**
   * category: The list is sorted categorically by an unspecified property of the items in the list.
   */
  SortedByCategory: {
    display: "Sorted by Category",
    code: "category",
    system: "http://terminology.hl7.org/CodeSystem/list-order",
  },
  /**
   * entry-date: The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
   */
  SortedByItemDate: {
    display: "Sorted by Item Date",
    code: "entry-date",
    system: "http://terminology.hl7.org/CodeSystem/list-order",
  },
  /**
   * event-date: The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
   */
  SortedByEventDate: {
    display: "Sorted by Event Date",
    code: "event-date",
    system: "http://terminology.hl7.org/CodeSystem/list-order",
  },
  /**
   * patient: The list is sorted by patient, with items for each patient grouped together.
   */
  SortedByPatient: {
    display: "Sorted by Patient",
    code: "patient",
    system: "http://terminology.hl7.org/CodeSystem/list-order",
  },
  /**
   * priority: The list is sorted by priority. The exact method in which priority has been determined is not specified.
   */
  SortedByPriority: {
    display: "Sorted by Priority",
    code: "priority",
    system: "http://terminology.hl7.org/CodeSystem/list-order",
  },
  /**
   * system: The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
   */
  SortedBySystem: {
    display: "Sorted by System",
    code: "system",
    system: "http://terminology.hl7.org/CodeSystem/list-order",
  },
  /**
   * user: The list was sorted by a user. The criteria the user used are not specified.
   */
  SortedByUser: {
    display: "Sorted by User",
    code: "user",
    system: "http://terminology.hl7.org/CodeSystem/list-order",
  },
} as const;
