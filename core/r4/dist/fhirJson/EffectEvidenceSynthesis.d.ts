import * as fhir from '../fhirJson.js';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export interface EffectEvidenceSynthesisSampleSize extends fhir.BackboneElement {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.description
     */
    _description?: fhir.FhirElement;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.FhirElement;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.FhirElement;
}
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export interface EffectEvidenceSynthesisResultsByExposure extends fhir.BackboneElement {
    /**
     * Human-readable summary of results by exposure state.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.resultsByExposure.description
     */
    _description?: fhir.FhirElement;
    /**
     * Whether these results are for the exposure state or alternative exposure state.
     */
    exposureState?: 'exposure' | 'exposure-alternative' | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.resultsByExposure.exposureState
     */
    _exposureState?: fhir.FhirElement;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a RiskEvidenceSynthesis resource.
     */
    riskEvidenceSynthesis: fhir.Reference | null;
}
/**
 * A description of the precision of the estimate for the effect.
 */
export interface EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends fhir.BackboneElement {
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.level
     */
    _level?: fhir.FhirElement;
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.from
     */
    _from?: fhir.FhirElement;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.to
     */
    _to?: fhir.FhirElement;
}
/**
 * The estimated effect of the exposure variant.
 */
export interface EffectEvidenceSynthesisEffectEstimate extends fhir.BackboneElement {
    /**
     * Human-readable summary of effect estimate.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.description
     */
    _description?: fhir.FhirElement;
    /**
     * Examples include relative risk and mean difference.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.CodeableConcept | undefined;
    /**
     * The point estimate of the effect estimate.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.value
     */
    _value?: fhir.FhirElement;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: '[APL\'U]' | '[APL\'U]/mL' | '[arb\'U]' | '[arb\'U]/L' | '[arb\'U]/mL' | '[AU]' | '[BAU]' | '[bdsk\'U]' | '[beth\'U]' | '[CFU]' | '[CFU]/L' | '[CFU]/mL' | '[Ch]' | '[cin_i]' | '[cup_us]' | '[degF]' | '[dr_av]' | '[drp]' | '[drp]/[HPF]' | '[drp]/h' | '[drp]/min' | '[drp]/mL' | '[drp]/s' | '[fdr_us]' | '[foz_br]' | '[foz_us]' | '[ft_i]' | '[fth_i]' | '[gal_br]' | '[gal_us]' | '[GPL\'U]' | '[GPL\'U]/mL' | '[gr]' | '[HPF]' | '[in_i\'H2O]' | '[in_i]' | '[iU]' | '[IU]' | '[IU]/(2.h)' | '[IU]/(24.h)' | '[IU]/10*9{RBCs}' | '[IU]/d' | '[IU]/dL' | '[IU]/g' | '[IU]/g{Hb}' | '[iU]/g{Hgb}' | '[IU]/h' | '[IU]/kg' | '[IU]/kg/d' | '[IU]/L' | '[IU]/L{37Cel}' | '[IU]/mg{creat}' | '[IU]/min' | '[IU]/mL' | '[ka\'U]' | '[lb_av]' | '[LPF]' | '[mclg\'U]' | '[mi_i]' | '[mi_us]' | '[min_us]' | '[MPL\'U]' | '[MPL\'U]/mL' | '[nmi_i]' | '[oz_av]' | '[oz_tr]' | '[pH]' | '[pi].rad/min' | '[ppb]' | '[ppm]' | '[ppm]{v/v}' | '[ppth]' | '[pptr]' | '[psi]' | '[pt_br]' | '[qt_br]' | '[qt_us]' | '[sft_i]' | '[sin_i]' | '[ston_av]' | '[syd_i]' | '[tb\'U]' | '[tbs_us]' | '[todd\'U]' | '[tsp_us]' | '[yd_i]' | '{# of calculi}' | '{# of donor informative markers}' | '{# of fetuses}' | '{# of informative markers}' | '{#}' | '{2 or 3 times}/d' | '{3 times}/d' | '{4 times}/d' | '{5 times}/d' | '{Absorbance\'U}' | '{Absorbance\'U}/mL' | '{absorbance}' | '{activity}' | '{ActivityCoefficient}' | '{AHF\'U}' | '{AntibodyResponse\'U}' | '{Applicator}' | '{APS\'U}' | '{ARU}' | '{AspirinReaction\'U}' | '{Bead}' | '{beats}/min' | '{Beats}/min' | '{binding_index}' | '{Bottle}' | '{Bowls}/d' | '{Breaths}/min' | '{CAE\'U}' | '{CAG_repeats}' | '{CagRepeat}' | '{Can}' | '{Cans}/wk' | '{Capsule}' | '{Cell}' | '{cells}' | '{cells}/[HPF]' | '{Cells}/mL' | '{cells}/uL' | '{CfTiter}' | '{cfu}' | '{cfu}/mL' | '{CGG_repeats}' | '{CGG}' | '{CH100\'U}' | '{clock time}' | '{clock_time}' | '{ComplementActivityEnzyme\'U}' | '{ComplementCH100\'U}' | '{ComplementCH50\'U}' | '{copies}' | '{copies}/mL' | '{copies}/ug' | '{Copies}/uL' | '{count}' | '{Count}' | '{Counts}/min' | '{CPM}' | '{CPM}/10*3{cell}' | '{Dalton}' | '{DdTiter}' | '{delta_OD}' | '{DeltaOpticalDensity}' | '{dilution}' | '{Dilution}' | '{Disintegrations}/min' | '{Dose}' | '{Drinks}/d' | '{Each}' | '{Ehrlich\'U}' | '{Ehrlich\'U}/(2.h)' | '{Ehrlich\'U}/100.g' | '{Ehrlich\'U}/d' | '{Ehrlich\'U}/dL' | '{Ehrlich\'U}/mL' | '{EIA_index}' | '{EIA_titer}' | '{EIA\'U}' | '{EIA\'U}/U' | '{EIAIndex}' | '{EIATiter}' | '{ELISA\'U}' | '{Elisa\'U}/mL' | '{ElisaIndex}' | '{ElisaValue}' | '{ERY}/uL' | '{EV}' | '{Events}' | '{FIU}' | '{FluorescenceIntensity\'U}' | '{fraction}' | '{G-PortionPhospholipids}' | '{GAA_repeats}' | '{genomes}/mL' | '{GliadinIndexValue}' | '{Globules}/[HPF]' | '{GPS\'U}' | '{HA_titer}' | '{HaTiter}' | '{IFA_index}' | '{IFA_titer}' | '{IfaIndex}' | '{IfaTiter}' | '{IgAAntiphosphatidyleserine\'U}' | '{IgAPhospholipid\'U}' | '{IgGAntiphosphatidyleserine\'U}' | '{IgGIndex}' | '{IgMAntiphosphatidyleserine\'U}' | '{IgMIndex}' | '{ImmuneComplex\'U}' | '{ImmuneStatusRatio}' | '{Immunity}' | '{index_val}' | '{Index_val}' | '{index}' | '{IndexValue}' | '{InhaledTobaccoUseAmountYears}' | '{InhaledTobaccoUsePacks}/d' | '{INR\'unit}' | '{INR}' | '{ISR}' | '{JDF\'U}' | '{JDF\'U}/L' | '{JuvenileDiabetesFound\'U}' | '{KCT\'U}' | '{KRONU\'U}/L' | '{KRONU\'U}/mL' | '{lgCopies}/ml' | '{log_copies}/mL' | '{Log_copies}/mL' | '{Log_IU}' | '{log_IU}/mL' | '{Log_IU}/mL' | '{Log}' | '{Lyme_index_value}' | '{LymeIndexValue}' | '{M-PortionPhospholipids}' | '{M.o.M.}' | '{M.o.M}' | '{Markers}' | '{minidrp}' | '{Molecule}/{Platelet}' | '{MPS\'U}' | '{MPS\'U}/mL' | '{MultOfMean}' | '{NonspecificOunce}' | '{Number}' | '{OD_unit}' | '{Once}/d' | '{OpticalDensity}' | '{OpticalDensityIndex}' | '{OpticalDensityRatio}' | '{P2Y12 Reaction Units}' | '{Package}' | '{Packs}/d' | '{PackYears}' | '{Patch}' | '{Percentile}' | '{Pill}' | '{Pouches}/wk' | '{RadioactiveT3UptakeRatio}' | '{ratio}' | '{RBC}/uL' | '{RecTiter}' | '{Relative\'U}' | '{RelativeViscosity}' | '{RPI\'U}' | '{RubellaVirus}' | '{SatIndex}' | '{Scoop}' | '{ScoreOf}' | '{shift}' | '{spermatozoa}/mL' | '{spray}' | '{StandardDeviation}' | '{StandardIgA\'U}' | '{StandardIgG\'U}' | '{StandardIgM\'U}' | '{StdDeviation\'U}' | '{StimulatingIndex}' | '{Streptozyme\'U}' | '{ThyroxinUptake\'U}' | '{TIBC\'U}' | '{Times}/wk' | '{Tine\'U}' | '{titer}' | '{ToxoplasmaIndexValue}' | '{Vial}' | '{Volume}/{Vvolume}' | '{WeeksDays}' | '{WhiteBloodCell}' | '/(12.h)' | '/[arb\'U]' | '/[HPF]' | '/[iU]' | '/[LPF]' | '/{Entity}' | '/{oif}' | '/{Specimen}' | '/{tot}' | '/10*10' | '/10*12' | '/10*12{rbc}' | '/10*6' | '/10*9' | '/100' | '/100{cells}' | '/100{neutrophils}' | '/100{spermatozoa}' | '/100{WBC}' | '/100{WBCs}' | '/a' | '/cm[H2O]' | '/d' | '/dL' | '/g' | '/g{creat}' | '/g{hgb}' | '/g{tot\'nit}' | '/g{tot\'prot}' | '/g{wet\'tis}' | '/h' | '/kg' | '/kg{body\'wt}' | '/L' | '/m2' | '/mg' | '/min' | '/mL' | '/mm3' | '/mmol' | '/mo' | '/s' | '/U' | '/ug' | '/uL' | '/wk' | '%' | '%{0to3Hours}' | '%{Abnormal}' | '%{Activity}' | '%{BasalActivity}' | '%{Binding}' | '%{Blockade}' | '%{Carboxyhemoglobin}' | '%{Conversion}' | '%{Cound}' | '%{EosSeen}' | '%{Excretion}' | '%{Fat}' | '%{FetalErythrocytes}' | '%{Hemoglobin}' | '%{HemoglobinA1C}' | '%{HemoglobinSaturation}' | '%{Hemolysis}' | '%{HumanResponse}' | '%{Index}' | '%{Inhibition}' | '%{Live}' | '%{Negative Control}' | '%{Normal}' | '%{NormalControl}' | '%{NormalPooledPlasma}' | '%{ofAvailable}' | '%{ofBacteria}' | '%{OfLymphocytes}' | '%{OfWBCs}' | '%{Oxygen}' | '%{Positive}' | '%{Precipitate}' | '%{Reactivity}' | '%{response}' | '%{risk}' | '%{SpermMotility}' | '%{Tot\'Cholesterol}' | '%{Tot\'Hgb}' | '%{Total}' | '%{TotalProtein}' | '%{Uptake}' | '%{vol}' | '%{WeightToWeight}' | '%/100{WBC}' | '1/d' | '1/min' | '10.L/(min.m2)' | '10.L/min' | '10.uN.s/(cm.m2)' | '10.uN.s/(cm5.m2)' | '10.uN.s/cm' | '10.uN.s/cm2' | '10*-3{Polarization\'U}' | '10*-6{Immunofluorescence\'U}' | '10*12/L' | '10*3' | '10*3.{RBC}' | '10*3.U' | '10*3{Copies}/mL' | '10*3/L' | '10*3/mL' | '10*3/uL' | '10*4/uL' | '10*5' | '10*6' | '10*6.[iU]' | '10*6.eq/mL' | '10*6.U' | '10*6/{Specimen}' | '10*6/kg' | '10*6/L' | '10*6/mL' | '10*6/mm3' | '10*6/uL' | '10*8' | '10*9/L' | '10*9/mL' | '10*9/uL' | '24.h' | 'a' | 'A' | 'A/m' | 'ag/{cell}' | 'atm' | 'att' | 'bar' | 'Bq' | 'cal' | 'Cel' | 'cg' | 'cL' | 'cm' | 'cm[H2O]' | 'cm[H2O]/(s.m)' | 'cm[H2O]/L/s' | 'cm[H2O]/s/m' | 'cm[Hg]' | 'cm2' | 'cm2/s' | 'cm3' | 'cP' | 'cSt' | 'd' | 'daL/min' | 'daL/min/m2' | 'dB' | 'deg' | 'deg/s' | 'dg' | 'dL' | 'dm' | 'dm2/s2' | 'dyn.s/(cm.m2)' | 'dyn.s/cm' | 'eq' | 'eq/L' | 'eq/mL' | 'eq/mmol' | 'eq/umol' | 'erg' | 'eV' | 'F' | 'fg' | 'fL' | 'fL/nL' | 'fm' | 'fmol' | 'fmol/g' | 'fmol/L' | 'fmol/mg' | 'fmol/mg{cytosol_protein}' | 'fmol/mg{protein}' | 'fmol/mL' | 'g' | 'g.m' | 'g.m/({hb}.m2)' | 'g.m/{beat}' | 'g.m/{hb}' | 'g{creat}' | 'g{Hb}' | 'g{total_nit}' | 'g{total_prot}' | 'g{wet_tissue}' | 'g/(100.g)' | 'g/(12.h)' | 'g/(24.h)' | 'g/(3.d)' | 'g/(4.h)' | 'g/(48.h)' | 'g/(5.h)' | 'g/(6.h)' | 'g/(72.h)' | 'g/(8.h)' | 'g/(8.h){shift}' | 'g/(8.kg.h)' | 'g/(kg.h)' | 'g/(kg.min)' | 'g/{specimen}' | 'g/{total_output}' | 'g/{total_weight}' | 'g/{TotalWeight}' | 'g/cm3' | 'g/d' | 'g/dL' | 'g/g' | 'g/g{Cre}' | 'g/g{creat}' | 'g/g{globulin}' | 'g/g{tissue}' | 'g/h' | 'g/h/m2' | 'g/kg' | 'g/kg/(8.h)' | 'g/kg/(8.h){shift}' | 'g/kg/d' | 'g/kg/h' | 'g/kg/min' | 'g/L' | 'g/m2' | 'g/mg' | 'g/min' | 'g/mL' | 'g/mmol' | 'g/mmol{creat}' | 'g/mol' | 'g/mol{creat}' | 'GBq' | 'Gy' | 'h' | 'H' | 'hL' | 'Hz' | 'J' | 'J/L' | 'K' | 'k[IU]/L' | 'k[IU]/mL' | 'K/W' | 'kat' | 'kat/kg' | 'kat/L' | 'kBq' | 'kcal' | 'kcal/(8.h)' | 'kcal/[oz_av]' | 'kcal/d' | 'kcal/h' | 'kcal/kg/(24.h)' | 'kg' | 'kg.m/s' | 'kg/(s.m2)' | 'kg/h' | 'kg/L' | 'kg/m2' | 'kg/m3' | 'kg/min' | 'kg/mol' | 'kg/s' | 'kL' | 'km' | 'kPa' | 'ks' | 'kU' | 'kU/g' | 'kU/h' | 'kU/L' | 'kU/L{class}' | 'kU/mL' | 'L' | 'L.s2/s' | 'L/(24.h)' | 'L/(8.h)' | 'L/(min.m2)' | 'L/d' | 'L/h' | 'L/kg' | 'L/L' | 'L/min' | 'L/s' | 'L/s/s2' | 'lm' | 'lm.m2' | 'lm/m2' | 'm' | 'm[iU]' | 'm[IU]/L' | 'm[IU]/mL' | 'm/s' | 'm/s2' | 'm2' | 'm2/s' | 'm3/s' | 'mA' | 'mbar' | 'mbar.s/L' | 'MBq' | 'mCi' | 'meq' | 'meq/(12.h)' | 'meq/(2.h)' | 'meq/(24.h)' | 'meq/(8.h.kg)' | 'meq/(8.h)' | 'meq/(kg.d)' | 'meq/{Specimen}' | 'meq/d' | 'meq/dL' | 'meq/g' | 'meq/g{Cre}' | 'meq/h' | 'meq/kg' | 'meq/kg/h' | 'meq/kg/min' | 'meq/L' | 'meq/m2' | 'meq/min' | 'meq/mL' | 'mg' | 'mg{Phenylketones}/dL' | 'mg/(10.h)' | 'mg/(12.h)' | 'mg/(18.h)' | 'mg/(2.h)' | 'mg/(24.h)' | 'mg/(72.h)' | 'mg/(8.h.kg)' | 'mg/(8.h)' | 'mg/(kg.h)' | 'mg/{Hgb}/g' | 'mg/{Specimen}' | 'mg/{Tot\'Volume}' | 'mg/{Volume}' | 'mg/d' | 'mg/d/(173.10*-2.m2)' | 'mg/dL' | 'mg/g' | 'mg/g{Cre}' | 'mg/g{creat}' | 'mg/h' | 'mg/kg' | 'mg/kg/(24.h)' | 'mg/kg/d' | 'mg/kg/min' | 'mg/L' | 'mg/m2' | 'mg/m3' | 'mg/mg' | 'mg/mg{cre}' | 'mg/min' | 'mg/mL' | 'mg/mmol' | 'mg/mmol{Cre}' | 'mg/mmol{creat}' | 'mg/wk' | 'min' | 'mL' | 'mL/({h\'b}.m2)' | 'mL/(10.h)' | 'mL/(12.h)' | 'mL/(2.h)' | 'mL/(24.h)' | 'mL/(4.h)' | 'mL/(72.h)' | 'mL/(8.h)' | 'mL/(kg.min)' | 'mL/[sin_i]' | 'mL/{h\'b}' | 'mL/cm[H2O]' | 'mL/d' | 'mL/dL' | 'mL/h' | 'mL/kg' | 'mL/kg/(8.h)' | 'mL/kg/d' | 'mL/kg/h' | 'mL/kg/min' | 'mL/L' | 'mL/m2' | 'mL/mbar' | 'mL/min' | 'mL/min/(173.10*-2.m2)' | 'mL/min/{1.73_m2}' | 'mL/min/m2' | 'mL/mm' | 'mL/s' | 'mm' | 'mm[H2O]' | 'mm[Hg]' | 'mm/h' | 'mm/min' | 'mm2' | 'mm3' | 'mmol' | 'mmol/(12.h)' | 'mmol/(18.h)' | 'mmol/(2.h)' | 'mmol/(24.h)' | 'mmol/(6.h)' | 'mmol/(8.h.kg)' | 'mmol/(8.h)' | 'mmol/{Tot\'Volume}' | 'mmol/d' | 'mmol/dL' | 'mmol/g' | 'mmol/g{creat}' | 'mmol/g{hemoglobin}' | 'mmol/h' | 'mmol/h/mg{Hb}' | 'mmol/h/mg{protein}' | 'mmol/kg' | 'mmol/kg{H2O}' | 'mmol/kg/d' | 'mmol/kg/h' | 'mmol/kg/min' | 'mmol/L' | 'mmol/L/s' | 'mmol/m' | 'mmol/m2' | 'mmol/min' | 'mmol/mmol' | 'mmol/mol' | 'mmol/mol{creat}' | 'mmol/s/L' | 'mo' | 'mol' | 'mol/d' | 'mol/kg' | 'mol/kg/s' | 'mol/L' | 'mol/m3' | 'mol/mL' | 'mol/mol' | 'mol/mol{creat}' | 'mol/s' | 'mosm' | 'mosm/kg' | 'mosm/L' | 'mPa' | 'ms' | 'Ms' | 'mU' | 'mU/g' | 'mU/g{Hb}' | 'mU/g{Hgb}' | 'mU/g{protein}' | 'mU/L' | 'mU/mg' | 'mU/mg{Cre}' | 'mU/min' | 'mU/mL' | 'mU/mL/min' | 'mU/mmol{creat}' | 'mU/mmol{creatinine}' | 'mU/mmol{RBCs}' | 'mV' | 'N' | 'N.cm' | 'N.s' | 'nCi' | 'ng' | 'ng/(24.h)' | 'ng/(8.h.kg)' | 'ng/(8.h)' | 'ng/(kg.d)' | 'ng/(kg.h)' | 'ng/(kg.min)' | 'ng/10*6' | 'ng/d' | 'ng/dL' | 'ng/dL/h' | 'ng/g' | 'ng/g{Cre}' | 'ng/g{creat}' | 'ng/h' | 'ng/kg' | 'ng/kg/(8.h)' | 'ng/kg/h' | 'ng/kg/min' | 'ng/L' | 'ng/m2' | 'ng/mg' | 'ng/mg{Protein}' | 'ng/mg/h' | 'ng/min' | 'ng/mL' | 'ng/mL{rbc}' | 'ng/mL/h' | 'ng/s' | 'nkat' | 'nL' | 'nm' | 'nm/s/L' | 'nmol' | 'nmol/(24.h)' | 'nmol/d' | 'nmol/dL' | 'nmol/g' | 'nmol/g{Cre}' | 'nmol/g{creat}' | 'nmol/g{dry_wt}' | 'nmol/h/L' | 'nmol/h/mg{protein}' | 'nmol/h/mL' | 'nmol/L' | 'nmol/L{RBCs}' | 'nmol/L/mmol{creat}' | 'nmol/L/s' | 'nmol/m/mg{protein}' | 'nmol/mg' | 'nmol/mg/h' | 'nmol/min/mg{hemoglobin}' | 'nmol/min/mg{protein}' | 'nmol/min/mL' | 'nmol/mL' | 'nmol/mL/h' | 'nmol/mL/min' | 'nmol/mmol' | 'nmol/mmol{Cre}' | 'nmol/mmol{creat}' | 'nmol/mol' | 'nmol/nmol' | 'nmol/s' | 'nmol/s/L' | 'nmol/umol{creat}' | 'ns' | 'Ohm' | 'osm/kg' | 'osm/L' | 'Pa' | 'pg' | 'pg/dL' | 'pg/L' | 'pg/mg' | 'pg/mL' | 'pg/mm' | 'pkat' | 'pL' | 'pm' | 'pmol' | 'pmol/d' | 'pmol/dL' | 'pmol/g' | 'pmol/h/mg{protein}' | 'pmol/h/mL' | 'pmol/L' | 'pmol/mg{protein}' | 'pmol/min' | 'pmol/min/mg{protein}' | 'pmol/mL' | 'pmol/mmol' | 'pmol/mmol{creat}' | 'pmol/mol' | 'pmol/umol' | 'pmol/umol{creat}' | 'ps' | 'pT' | 's' | 'St' | 't' | 'U' | 'u[IU]' | 'u[IU]/L' | 'u[IU]/mL' | 'U{25Cel}/L' | 'U{37Cel}/L' | 'U{G}' | 'U/(1.h)' | 'U/(10.g){feces}' | 'U/(12.h)' | 'U/(18.h)' | 'U/(2.h)' | 'U/(24.h)' | 'U/10' | 'U/10*10' | 'U/10*10{cells}' | 'U/10*12' | 'U/10*12{RBCs}' | 'U/10*6' | 'U/10*9' | 'U/d' | 'U/dL' | 'U/g' | 'U/g{Cre}' | 'U/g{creat}' | 'U/g{Hb}' | 'U/g{hemoglobin}' | 'U/g{Hgb}' | 'U/g{protein}' | 'U/h' | 'U/kg{Hb}' | 'U/kg{hemoglobin}' | 'U/kg/h' | 'U/L' | 'U/min' | 'U/mL' | 'U/mL{RBC}' | 'U/mL{RBCs}' | 'U/mmol{creat}' | 'U/mol' | 'U/s' | 'U/umol' | 'ueq' | 'ueq/L' | 'ueq/mL' | 'ug' | 'ug{FEU}/mL' | 'ug{T4}/dL' | 'ug/(100.g)' | 'ug/(24.h)' | 'ug/(8.h)' | 'ug/(kg.d)' | 'ug/(kg.h)' | 'ug/[sft_i]' | 'ug/{specimen}' | 'ug/{Specimen}' | 'ug/{TotalVolume}' | 'ug/d' | 'ug/dL' | 'ug/dL{rbc}' | 'ug/dL{RBCs}' | 'ug/g' | 'ug/g{Cre}' | 'ug/g{creat}' | 'ug/g{dry_tissue}' | 'ug/g{dry_wt}' | 'ug/g{DryWeight}' | 'ug/g{feces}' | 'ug/g{hair}' | 'ug/g{Hb}' | 'ug/g{Hgb}' | 'ug/g{tissue}' | 'ug/g{Tissue}' | 'ug/h' | 'ug/kg' | 'ug/kg/(8.h)' | 'ug/kg/d' | 'ug/kg/h' | 'ug/kg/min' | 'ug/L' | 'ug/L{DDU}' | 'ug/L{RBCs}' | 'ug/L/(24.h)' | 'ug/m2' | 'ug/m3' | 'ug/mg' | 'ug/mg{Cre}' | 'ug/mg{creat}' | 'ug/min' | 'ug/mL' | 'ug/mL{class}' | 'ug/mL{eqv}' | 'ug/mL{FEU}' | 'ug/mmol' | 'ug/mmol{creat}' | 'ug/ng' | 'ukat' | 'uL' | 'uL/(2.h)' | 'uL/h' | 'um' | 'um/s' | 'umol' | 'umol{BCE}/mol' | 'umol/(2.h)' | 'umol/(24.h)' | 'umol/(8.h)' | 'umol/d' | 'umol/dL' | 'umol/dL{GF}' | 'umol/g' | 'umol/g{Cre}' | 'umol/g{creat}' | 'umol/g{Hb}' | 'umol/g{hemoglobin}' | 'umol/g{Hgb}' | 'umol/h' | 'umol/h/g' | 'umol/h/L' | 'umol/h/mg{protein}' | 'umol/kg' | 'umol/kg{feces}' | 'umol/L' | 'umol/L{rbc}' | 'umol/L{RBCs}' | 'umol/L/h' | 'umol/m' | 'umol/mg' | 'umol/mg{Cre}' | 'umol/mg{creat}' | 'umol/min' | 'umol/min/g' | 'umol/min/g{mucosa}' | 'umol/min/g{prot}' | 'umol/min/g{protein}' | 'umol/min/L' | 'umol/mL' | 'umol/mL/min' | 'umol/mmol' | 'umol/mmol{creat}' | 'umol/mol' | 'umol/mol{Cre}' | 'umol/mol{creat}' | 'umol/mol{Hb}' | 'umol/umol' | 'umol/umol{creat}' | 'uOhm' | 'us' | 'uU' | 'uU/g' | 'uU/L' | 'uU/mL' | 'uV' | 'V' | 'wk' | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: (fhir.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate | null)[] | undefined;
}
/**
 * A description of a component of the overall certainty.
 */
export interface EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement {
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
/**
 * A description of the certainty of the effect estimate.
 */
export interface EffectEvidenceSynthesisCertainty extends fhir.BackboneElement {
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: (fhir.EffectEvidenceSynthesisCertaintyCertaintySubcomponent | null)[] | undefined;
}
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export interface EffectEvidenceSynthesis extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EffectEvidenceSynthesis" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.status
     */
    _status?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.description
     */
    _description?: fhir.FhirElement;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
     */
    topic?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: fhir.CodeableConcept | undefined;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: fhir.CodeableConcept | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
     */
    exposureAlternative: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.Reference | null;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.EffectEvidenceSynthesisSampleSize | undefined;
    /**
     * A description of the results for each exposure considered in the effect estimate.
     */
    resultsByExposure?: (fhir.EffectEvidenceSynthesisResultsByExposure | null)[] | undefined;
    /**
     * The estimated effect of the exposure variant.
     */
    effectEstimate?: (fhir.EffectEvidenceSynthesisEffectEstimate | null)[] | undefined;
    /**
     * A description of the certainty of the effect estimate.
     */
    certainty?: (fhir.EffectEvidenceSynthesisCertainty | null)[] | undefined;
}
//# sourceMappingURL=EffectEvidenceSynthesis.d.ts.map