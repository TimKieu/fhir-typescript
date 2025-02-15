// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicinal-product-confidentiality|4.3.0

/**
 * Confidentiality rating, e.g. commercial sensitivity for a Medicinal Product.
 */
export const MedicinalProductConfidentialityCodes = {
  /**
   * CommerciallySensitive: Commercially Sensitive
   */
  CommerciallySensitive: "CommerciallySensitive",
  /**
   * NotCommerciallySensitive: Not Commercially Sensitive
   */
  NotCommerciallySensitive: "NotCommerciallySensitive",
} as const;

/**
 * Confidentiality rating, e.g. commercial sensitivity for a Medicinal Product.
 */
export type MedicinalProductConfidentialityCodeType = typeof MedicinalProductConfidentialityCodes[keyof typeof MedicinalProductConfidentialityCodes];
