import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of a statistic, e.g. relative risk or mean
 */
export declare type StatisticTypeCodingType = {
    /**
     * 0000100: Computed by forming the difference between two means, divided by an estimate of the within-group standard deviation. It is used to provide an estimatation of the effect size between two treatments when the predictor (independent variable) is categorical and the response(dependent) variable is continuous
     */
    StandardizedMeanDifference: CodingArgs;
    /**
     * 0000301: The strength of correlation between a set (2 or more) of random variables. The covariance is obtained by forming: cov(x,y)=e([x-e(x)][y-e(y)] where e(x), e(y) is the expected value (mean) of variable x and y respectively. Covariance is symmetric so cov(x,y)=cov(y,x). The covariance is usefull when looking at the variance of the sum of the 2 random variables since: var(x+y) = var(x) +var(y) +2cov(x,y) the covariance cov(x,y) is used to obtain the coefficient of correlation cor(x,y) by normalizing (dividing) cov(x,y) but the product of the standard deviations of x and y.
     */
    Covariance: CodingArgs;
    /**
     * 0000424: Difference between the observed risks (proportions of individuals with the outcome of interest) in the two groups. The risk difference is straightforward to interpret: it describes the actual difference in the observed risk of events between experimental and control interventions.
     */
    RiskDifference: CodingArgs;
    /**
     * 0000457: The mean difference, or difference in means, measures the absolute difference between the mean value in two different groups.
     */
    MeanDifference: CodingArgs;
    /**
     * 0000565: Generated by a type of data transformation called a regression, which aims to model a response variable by expression the predictor variables as part of a function where variable terms are modified by a number. A regression coefficient is one such number.
     */
    RegressionCoefficient: CodingArgs;
    /**
     * absolute-MedianDiff: Computed by forming the difference between two medians.
     */
    AbsoluteMedianDifference: CodingArgs;
    /**
     * C16726: The relative frequency of occurrence of something.
     */
    Incidence: CodingArgs;
    /**
     * C16932: The ratio of the odds of an event occurring in one group to the odds of it occurring in another group, or to a sample-based estimate of that ratio.
     */
    OddsRatio: CodingArgs;
    /**
     * C17010: The ratio (for a given time period) of the number of occurrences of a disease or event to the number of units at risk in the population.
     */
    Prevalence: CodingArgs;
    /**
     * C25463: The number or amount of something
     */
    Count: CodingArgs;
    /**
     * C25564: The largest possible quantity or degree.
     */
    Maximum: CodingArgs;
    /**
     * C25570: The smallest possible quantity.
     */
    Minimum: CodingArgs;
    /**
     * C28007: The value which has an equal number of values greater and less than it.
     */
    Median: CodingArgs;
    /**
     * C44256: Quotient of quantities of the same kind for different components within the same system. [Use for univariate outcomes within an individual.]
     */
    Proportion: CodingArgs;
    /**
     * C53319: The sum of a set of values divided by the number of values in the set.
     */
    Mean: CodingArgs;
    /**
     * C65171: A distribution-free analog of correlation analysis. Like regression, it can be applied to compare two independent random variables, each at several levels (which may be discrete or continuous). Unlike regression, Spearman's rank correlation works on ranked (relative) data, rather than directly on the data itself.
     */
    SpearmanRankOrderCorrelation: CodingArgs;
    /**
     * C65172: A measure of the correlation of two variables X and Y measured on the same object or organism, that is, a measure of the tendency of the variables to increase or decrease together. It is defined as the sum of the products of the standard scores of the two measures divided by the degrees of freedom.
     */
    PearsonCorrelationCoefficient: CodingArgs;
    /**
     * C93150: A measure of how often a particular event happens in one group compared to how often it happens in another group, over time. In cancer research, hazard ratios are often used in clinical trials to measure survival at any point in time in a group of patients who have been given a specific treatment compared to a control group given another treatment or a placebo. A hazard ratio of one means that there is no difference in survival between the two groups. A hazard ratio of greater than one or less than one means that survival was better in one of the groups.
     */
    HazardRatio: CodingArgs;
    /**
     * C93152:  A measure of the risk of a certain event happening in one group compared to the risk of the same event happening in another group. In cancer research, risk ratios are used in prospective (forward looking) studies, such as cohort studies and clinical trials. A risk ratio of one means there is no difference between two groups in terms of their risk of cancer, based on whether or not they were exposed to a certain substance or factor, or how they responded to two treatments being compared. A risk ratio of greater than one or of less than one usually means that being exposed to a certain substance or factor either increases (risk ratio greater than one) or decreases (risk ratio less than one) the risk of cancer, or that the treatments being compared do not have the same effects.
     */
    RelativeRisk: CodingArgs;
    /**
     * descriptive: Descriptive measure reported as narrative.
     */
    Descriptive: CodingArgs;
    /**
     * predictedRisk: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    PredictedRisk: CodingArgs;
    /**
     * rate-ratio: A type of relative effect estimate that compares rates over time (eg events per person-years).
     */
    IncidenceRateRatio: CodingArgs;
};
/**
 * The type of a statistic, e.g. relative risk or mean
 */
export declare const StatisticTypeCodings: StatisticTypeCodingType;
//# sourceMappingURL=StatisticTypeCodings.d.ts.map