import * as fhir from '../fhirJson.js';
/**
 * A product specific contact, person (in a role), or an organization.
 */
export interface MedicinalProductDefinitionContact extends fhir.BackboneElement {
    /**
     * Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact: fhir.Reference | null;
}
/**
 * Coding words or phrases of the name.
 */
export interface MedicinalProductDefinitionNameNamePart extends fhir.BackboneElement {
    /**
     * A fragment of a product name.
     */
    part: string | null;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.name.namePart.part
     */
    _part?: fhir.FhirElement;
    /**
     * Identifying type for this part of the name (e.g. strength part).
     */
    type: fhir.CodeableConcept | null;
}
/**
 * Country and jurisdiction where the name applies, and associated language.
 */
export interface MedicinalProductDefinitionNameCountryLanguage extends fhir.BackboneElement {
    /**
     * Country code for where this name applies.
     */
    country: fhir.CodeableConcept | null;
    /**
     * Jurisdiction code for where this name applies. A jurisdiction may be a sub- or supra-national entity (e.g. a state or a geographic region).
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
export interface MedicinalProductDefinitionName extends fhir.BackboneElement {
    /**
     * The full product name.
     */
    productName: string | null;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.name.productName
     */
    _productName?: fhir.FhirElement;
    /**
     * Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Coding words or phrases of the name.
     */
    namePart?: (fhir.MedicinalProductDefinitionNameNamePart | null)[] | undefined;
    /**
     * Country and jurisdiction where the name applies, and associated language.
     */
    countryLanguage?: (fhir.MedicinalProductDefinitionNameCountryLanguage | null)[] | undefined;
}
/**
 * Reference to another product, e.g. for linking authorised to investigational product, or a virtual product.
 */
export interface MedicinalProductDefinitionCrossReference extends fhir.BackboneElement {
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    product: fhir.CodeableReference | null;
    /**
     * The type of relationship, for instance branded to generic, virtual to actual product, product to development product (investigational), parallel import version.
     */
    type?: fhir.CodeableConcept | undefined;
}
/**
 * A manufacturing or administrative process or step associated with (or performed on) the medicinal product.
 */
export interface MedicinalProductDefinitionOperation extends fhir.BackboneElement {
    /**
     * The type of manufacturing operation e.g. manufacturing itself, re-packaging. For the authorization of this, a RegulatedAuthorization would point to the same plan or activity referenced here.
     */
    type?: fhir.CodeableReference | undefined;
    /**
     * Date range of applicability.
     */
    effectiveDate?: fhir.Period | undefined;
    /**
     * The organization or establishment responsible for (or associated with) the particular process or step, examples include the manufacturer, importer, agent.
     */
    organization?: (fhir.Reference | null)[] | undefined;
    /**
     * Specifies whether this particular business or manufacturing process is considered proprietary or confidential.
     */
    confidentialityIndicator?: fhir.CodeableConcept | undefined;
}
/**
 * Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import".
 */
export interface MedicinalProductDefinitionCharacteristic extends fhir.BackboneElement {
    /**
     * A code expressing the type of characteristic.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A value for the characteristic.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A value for the characteristic.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * A value for the characteristic.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.characteristic.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * A value for the characteristic.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.characteristic.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * A value for the characteristic.
     */
    valueAttachment?: fhir.Attachment | undefined;
}
/**
 * A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs).
 */
export interface MedicinalProductDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductDefinition" | null;
    /**
     * Business identifier for this product. Could be an MPID. When in development or being regulated, products are typically referenced by official identifiers, assigned by a manufacturer or regulator, and unique to a product (which, when compared to a product instance being prescribed, is actually a product type). See also MedicinalProductDefinition.code.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * A business identifier relating to a specific version of the product, this is commonly used to support revisions to an existing product.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the given status became applicable.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * General description of this product.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * The dose form for a single part product, or combined form of a multiple part product. This is one concept that describes all the components. It does not represent the form with components physically mixed, if that might be necessary, for which see (AdministrableProductDefinition.administrableDoseForm).
     */
    combinedPharmaceuticalDoseForm?: fhir.CodeableConcept | undefined;
    /**
     * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. See also AdministrableProductDefinition resource. MedicinalProductDefinition.route is the same concept as AdministrableProductDefinition.routeOfAdministration.code, and they cannot be used together.
     */
    route?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Description of indication(s) for this product, used when structured indications are not required. In cases where structured indications are required, they are captured using the ClinicalUseDefinition resource. An indication is a medical situation for which using the product is appropriate.
     */
    indication?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductDefinition.indication
     */
    _indication?: fhir.FhirElement;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons, such as heightened reporting requirements.
     */
    additionalMonitoringIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons, such as a requirement to conduct post-authorisation studies.
     */
    specialMeasures?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * If authorised for use in children, or infants, neonates etc.
     */
    pediatricUseIndicator?: fhir.CodeableConcept | undefined;
    /**
     * Allows the product to be classified by various systems, commonly WHO ATC.
     */
    classification?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorization. This refers to the product being actually 'on the market' as opposed to being allowed to be on the market (which is an authorization).
     */
    marketingStatus?: (fhir.MarketingStatus | null)[] | undefined;
    /**
     * Package type for the product. See also the PackagedProductDefinition resource.
     */
    packagedMedicinalProduct?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The ingredients of this medicinal product - when not detailed in other resources. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource, or indirectly via incoming AdministrableProductDefinition, PackagedProductDefinition or ManufacturedItemDefinition references. In cases where those levels of detail are not used, the ingredients may be specified directly here as codes.
     */
    ingredient?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product. This includes process-related impurities and contaminants, product-related impurities including degradation products.
     */
    impurity?: (fhir.CodeableReference | null)[] | undefined;
    /**
     * Additional information or supporting documentation about the medicinal product.
     */
    attachedDocument?: (fhir.Reference | null)[] | undefined;
    /**
     * A master file for the medicinal product (e.g. Pharmacovigilance System Master File). Drug master files (DMFs) are documents submitted to regulatory agencies to provide confidential detailed information about facilities, processes or articles used in the manufacturing, processing, packaging and storing of drug products.
     */
    masterFile?: (fhir.Reference | null)[] | undefined;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: (fhir.MedicinalProductDefinitionContact | null)[] | undefined;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: (fhir.Reference | null)[] | undefined;
    /**
     * A code that this product is known by, usually within some formal terminology, perhaps assigned by a third party (i.e. not the manufacturer or regulator). Products (types of medications) tend to be known by identifiers during development and within regulatory process. However when they are prescribed they tend to be identified by codes. The same product may be have multiple codes, applied to it by multiple organizations.
     */
    code?: (fhir.Coding | null)[] | undefined;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: (fhir.MedicinalProductDefinitionName | null)[] | null;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product, or a virtual product.
     */
    crossReference?: (fhir.MedicinalProductDefinitionCrossReference | null)[] | undefined;
    /**
     * A manufacturing or administrative process or step associated with (or performed on) the medicinal product.
     */
    operation?: (fhir.MedicinalProductDefinitionOperation | null)[] | undefined;
    /**
     * Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import".
     */
    characteristic?: (fhir.MedicinalProductDefinitionCharacteristic | null)[] | undefined;
}
//# sourceMappingURL=MedicinalProductDefinition.d.ts.map