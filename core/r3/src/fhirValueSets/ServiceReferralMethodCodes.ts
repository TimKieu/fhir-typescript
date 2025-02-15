// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/service-referral-method|3.0.2

/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export const ServiceReferralMethodCodes = {
  /**
   * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
   */
  SecureMessaging: "elec",
  /**
   * fax: Referrals may be accepted by fax.
   */
  Fax: "fax",
  /**
   * mail: Referrals may be accepted via regular postage (or hand delivered).
   */
  Mail: "mail",
  /**
   * phone: Referrals may be accepted over the phone from a practitioner.
   */
  Phone: "phone",
  /**
   * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
   */
  SecureEmail: "semail",
} as const;

/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export type ServiceReferralMethodCodeType = typeof ServiceReferralMethodCodes[keyof typeof ServiceReferralMethodCodes];
