import * as fhir from '../fhirJson.js';
/**
 * Coding words or phrases of the name.
 */
export interface MedicinalProductNameNamePart extends fhir.BackboneElement {
    /**
     * A fragment of a product name.
     */
    part: string | null;
    /**
     * Extended properties for primitive element: MedicinalProduct.name.namePart.part
     */
    _part?: fhir.FhirElement;
    /**
     * Idenifying type for this part of the name (e.g. strength part).
     */
    type: fhir.Coding | null;
}
/**
 * Country where the name applies.
 */
export interface MedicinalProductNameCountryLanguage extends fhir.BackboneElement {
    /**
     * Country code for where this name applies.
     */
    country: fhir.CodeableConcept | null;
    /**
     * Jurisdiction code for where this name applies.
     */
    jurisdiction?: fhir.CodeableConcept | undefined;
    /**
     * Language code for this name.
     */
    language: fhir.CodeableConcept | null;
}
/**
 * The product's name, including full name and possibly coded parts.
 */
export interface MedicinalProductName extends fhir.BackboneElement {
    /**
     * The full product name.
     */
    productName: string | null;
    /**
     * Extended properties for primitive element: MedicinalProduct.name.productName
     */
    _productName?: fhir.FhirElement;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: (fhir.MedicinalProductNameNamePart | null)[] | undefined;
    /**
     * Country where the name applies.
     */
    countryLanguage?: (fhir.MedicinalProductNameCountryLanguage | null)[] | undefined;
}
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export interface MedicinalProductManufacturingBusinessOperation extends fhir.BackboneElement {
    /**
     * The type of manufacturing operation.
     */
    operationType?: fhir.CodeableConcept | undefined;
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: fhir.Identifier | undefined;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.manufacturingBusinessOperation.effectiveDate
     */
    _effectiveDate?: fhir.FhirElement;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: fhir.CodeableConcept | undefined;
    /**
     * The manufacturer or establishment associated with the process.
     */
    manufacturer?: (fhir.Reference | null)[] | undefined;
    /**
     * A regulator which oversees the operation.
     */
    regulator?: fhir.Reference | undefined;
}
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export interface MedicinalProductSpecialDesignation extends fhir.BackboneElement {
    /**
     * Identifier for the designation, or procedure number.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: fhir.CodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: fhir.Reference | undefined;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Date when the designation was granted.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.specialDesignation.date
     */
    _date?: fhir.FhirElement;
    /**
     * Animal species for which this applies.
     */
    species?: fhir.CodeableConcept | undefined;
}
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export interface MedicinalProduct extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProduct" | null;
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.Coding | undefined;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: fhir.CodeableConcept | undefined;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: MedicinalProduct.specialMeasures
     */
    _specialMeasures?: (fhir.FhirElement | null)[];
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: (fhir.MarketingStatus | null)[] | undefined;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: (fhir.Reference | null)[] | undefined;
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: (fhir.Reference | null)[] | undefined;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: (fhir.Reference | null)[] | undefined;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: (fhir.Reference | null)[] | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: (fhir.Reference | null)[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: (fhir.Reference | null)[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: (fhir.MedicinalProductName | null)[] | null;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: (fhir.Identifier | null)[] | undefined;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: (fhir.MedicinalProductManufacturingBusinessOperation | null)[] | undefined;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation?: (fhir.MedicinalProductSpecialDesignation | null)[] | undefined;
}
//# sourceMappingURL=MedicinalProduct.d.ts.map