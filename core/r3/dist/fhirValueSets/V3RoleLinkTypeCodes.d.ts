/**
 * **** MISSING DEFINITIONS ****
 */
export declare const V3RoleLinkTypeCodes: {
    /**
     * BACKUP: This relationship indicates the source Role is available to the target Role as a backup. An entity in a backup role will be available as a substitute or replacement in the event that the entity assigned the role is unavailable. In medical roles where it is critical that the function be performed and there is a possibility that the individual assigned may be ill or otherwise indisposed, another individual is assigned to cover for the individual originally assigned the role. A backup may be required to be identified, but unless the backup is actually used, he/she would not assume the assigned entity role.
     */
    readonly IsBackupFor: "BACKUP";
    /**
     * CONT: This relationship indicates the target Role provides or receives information regarding the target role.  For example, AssignedEntity is a contact for a ServiceDeliveryLocation.
     */
    readonly HasContact: "CONT";
    /**
     * DIRAUTH: The source Role has direct authority over the target role in a chain of authority.
     */
    readonly HasDirectAuthorityOver: "DIRAUTH";
    /**
     * IDENT: Description: The source role provides identification for the target role. The source role must be IDENT. The player entity of the source role is constrained to be the same as (i.e. the equivalent of, or equal to) the player of the target role if present. If the player is absent from the source role, then it is assumed to be the same as the player of the target role.
     */
    readonly Identification: "IDENT";
    /**
     * INDAUTH: The source Role has indirect authority over the target role in a chain of authority.
     */
    readonly HasIndirectAuthorityOver: "INDAUTH";
    /**
     * PART: The target Role is part of the Source Role.
     */
    readonly HasPart: "PART";
    /**
     * REL: An action taken with respect to a subject Entity by a regulatory or authoritative body with supervisory capacity over that entity. The action is taken in response to behavior by the subject Entity that body finds to be undesirable.
     *
     *                         Suspension, license restrictions, monetary fine, letter of reprimand, mandated training, mandated supervision, etc.Examples:
     */
    readonly Related: "REL";
    /**
     * REPL: This relationship indicates that the source Role replaces (or subsumes) the target Role.  Allows for new identifiers and/or new effective time for a registry entry or a certification, etc.
     */
    readonly Replaces: "REPL";
};
/**
 * **** MISSING DEFINITIONS ****
 */
export declare type V3RoleLinkTypeCodeType = typeof V3RoleLinkTypeCodes[keyof typeof V3RoleLinkTypeCodes];
//# sourceMappingURL=V3RoleLinkTypeCodes.d.ts.map