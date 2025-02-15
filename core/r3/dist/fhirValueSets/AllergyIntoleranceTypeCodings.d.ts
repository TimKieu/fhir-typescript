import { CodingArgs } from '../fhir/Coding.js';
/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 */
export declare type AllergyIntoleranceTypeCodingType = {
    /**
     * allergy: A propensity for hypersensitivity reaction(s) to a substance.  These reactions are most typically type I hypersensitivity, plus other "allergy-like" reactions, including pseudoallergy.
     */
    Allergy: CodingArgs;
    /**
     * intolerance: A propensity for adverse reactions to a substance that is not judged to be allergic or "allergy-like".  These reactions are typically (but not necessarily) non-immune.  They are to some degree idiosyncratic and/or individually specific (i.e. are not a reaction that is expected to occur with most or all patients given similar circumstances).
     */
    Intolerance: CodingArgs;
};
/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 */
export declare const AllergyIntoleranceTypeCodings: AllergyIntoleranceTypeCodingType;
//# sourceMappingURL=AllergyIntoleranceTypeCodings.d.ts.map