/**
 * Used to code the format of the display string.
 */
export declare const ContributorSummaryStyleCodes: {
    /**
     * a1full: Example: Jennifer Laskowski et al.
     */
    readonly FirstAuthorFullNameEtAl: "a1full";
    /**
     * a1init: Example: Laskowski J et al.
     */
    readonly FirstAuthorLastNameFirstInitialsEtAl: "a1init";
    /**
     * a3full: Example: Jennifer Laskowski, Brandon Renner, Matthew C. Pickering, et al.
     */
    readonly First3AuthorsFullNameEtAl: "a3full";
    /**
     * a3init: Example:  Laskowski J, Renner B, Pickering MC, et al.
     */
    readonly First3AuthorsLastNameFirstInitialsEtAl: "a3init";
    /**
     * a6full: Example: Jennifer Laskowski, Brandon Renner, Matthew C. Pickering, Natalie J. Serkova, Peter M. Smith-Jones, Eric T. Clambey, et al.
     */
    readonly First6AuthorsFullNameEtAl: "a6full";
    /**
     * a6init: Example: Laskowski J, Renner B, Pickering MC, Serkova NJ, Smith-Jones PM, Clambey ET, et al.
     */
    readonly First6AuthorsLastNameFirstInitialsEtAl: "a6init";
    /**
     * aallfull: Example: Jennifer Laskowski, Brandon Renner, Matthew C. Pickering, Natalie J. Serkova, Peter M. Smith-Jones, Eric T. Clambey, Raphael A. Nemenoff, Joshua M. Thurman.
     */
    readonly AllAuthorsFullName: "aallfull";
    /**
     * aallfullwithampersand: Example: Jennifer Laskowski, Brandon Renner, Matthew C. Pickering, Natalie J. Serkova, Peter M. Smith-Jones, Eric T. Clambey, Raphael A. Nemenoff, &amp; Joshua M. Thurman.
     */
    readonly AllAuthorsFullNameWithAnAmpersandBeforeLastAuthor: "aallfullwithampersand";
    /**
     * aallfullwithand: Example: Jennifer Laskowski, Brandon Renner, Matthew C. Pickering, Natalie J. Serkova, Peter M. Smith-Jones, Eric T. Clambey, Raphael A. Nemenoff, and Joshua M. Thurman.
     */
    readonly AllAuthorsFullNameWithAndBeforeLastAuthor: "aallfullwithand";
    /**
     * aallinit: Example: Laskowski J, Renner B, Pickering MC, Serkova NJ, Smith-Jones PM, Clambey ET, Nemenoff RA, Thurman JM.
     */
    readonly AllAuthorsLastNameFirstInitials: "aallinit";
    /**
     * aallinitwithampersand: Example: Laskowski J, Renner B, Pickering MC, Serkova NJ, Smith-Jones PM, Clambey ET, Nemenoff RA, &amp; Thurman JM.
     */
    readonly AllAuthorsLastNameFirstInitialsWithAnAmpersandBeforeLastAuthor: "aallinitwithampersand";
    /**
     * aallinitwithand: Example: Laskowski J, Renner B, Pickering MC, Serkova NJ, Smith-Jones PM, Clambey ET, Nemenoff RA, and Thurman JM.
     */
    readonly AllAuthorsLastNameFirstInitialsWithAndBeforeLastAuthor: "aallinitwithand";
    /**
     * contr-full-by-contr: Project design by Jennnifer Laskowski (JL), Experiment design by JL and Joshua M. Thurman (JMT), technical advice and study design contribution by Matthew C. Pickering, experiments performed by JL, data collection and analysis by JL, PET imaging and associated analyses by Natalie J. Serkova and Peter M. Smith-Jones, conceptual and technical guidance by Eric T. Clambey (ETC) and Raphael A. Nemenoff (RAN), manuscript writing by JL and JMT, manuscript revised critically by JL, Brandon Renner, ETC, and RAN.
     */
    readonly ContributorshipStatementListedByContributionWithFullNames: "contr-full-by-contr";
    /**
     * contr-full-by-person: Jennnifer Laskowski designed project; developed and performed experiments; collected and analyzed data; wrote and revised manuscript. Brandon Renner performed critical review of manuscript. Matthew C. Pickering provided technical advice and contributed to study design. Natalie J. Serkova and Peter M. Smith-Jones performed PET imaging and associated analyses. Eric T. Clambey and Raphael A. Nemenoff provided conceptual and technical guidance and critical review of manuscript. Joshua M. Thurman contributed to experimental design and wrote manuscript.
     */
    readonly ContributorshipStatementListedByPersonWithFullNames: "contr-full-by-person";
    /**
     * contr-init-by-contr: Project design by JL, Experiment design by JL and JMT, technical advice and study design contribution by MCP, experiments performed by JL, data collection and analysis by JL, PET imaging and associated analyses by NJS and PMS-J, conceptual and technical guidance by ETC and RAN, manuscript writing by JL and JMT, manuscript revised critically by JL, BR, ETC, and RAN.
     */
    readonly ContributorshipStatementListedByContributionWithInitials: "contr-init-by-contr";
    /**
     * contr-init-by-person: J.L. designed project; developed and performed experiments; collected and analyzed data; wrote and revised manuscript. B.R. performed critical review of manuscript. M.C.P. provided technical advice and contributed to study design. N.J.S and P.M.S.-J. performed PET imaging and associated analyses. E.T.C. and R.A.N provided conceptual and technical guidance and critical review of manuscript. J.M.T contributed to experimental design and wrote manuscript.
     */
    readonly ContributorshipStatementListedByPersonWithInitials: "contr-init-by-person";
};
/**
 * Used to code the format of the display string.
 */
export declare type ContributorSummaryStyleCodeType = typeof ContributorSummaryStyleCodes[keyof typeof ContributorSummaryStyleCodes];
//# sourceMappingURL=ContributorSummaryStyleCodes.d.ts.map