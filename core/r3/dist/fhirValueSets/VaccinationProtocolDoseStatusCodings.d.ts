import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 */
export declare type VaccinationProtocolDoseStatusCodingType = {
    /**
     * count: The dose counts toward fulfilling a path to immunity for a patient, providing protection against the target disease.
     */
    Counts: CodingArgs;
    /**
     * nocount: The dose does not count toward fulfilling a path to immunity for a patient.
     */
    DoesNotCount: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 */
export declare const VaccinationProtocolDoseStatusCodings: VaccinationProtocolDoseStatusCodingType;
//# sourceMappingURL=VaccinationProtocolDoseStatusCodings.d.ts.map