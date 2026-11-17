/**
 * Single source of truth for Improx Tech corporate information.
 * Rule: Only include facts verified from official company records.
 * Every other field MUST remain null until verified.
 * Components must render claims only when non-null.
 */

export interface OfficeAddress {
  label: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  fullAddress: string;
  mapsUrl?: string;
}

export interface CompanyInformation {
  name: string;
  legalName: string;
  parentGroup: string;
  tagline: string;
  foundingYear: number;
  email: string;
  phone: string;
  formattedPhone: string;
  addresses: {
    us: OfficeAddress;
    india: OfficeAddress;
  };
  // Unverified metrics and claims must be null
  employeeCount: number | null;
  clientCount: number | null;
  projectCount: number | null;
  slaPercentage: string | null;
  throughputMetric: string | null;
  uptimeGuarantee: string | null;
  certifications: string[] | null;
  partnerships: string[] | null;
  verifiedOutcomes: string[] | null;
  socialLinks: {
    linkedin: string | null;
    github: string | null;
    twitter: string | null;
  };
}

export const company: CompanyInformation = {
  name: 'Improx Tech',
  legalName: 'Improx Tech (Improx Group)',
  parentGroup: 'Improx Group',
  tagline: 'Enterprise Software & Cloud Engineering',
  foundingYear: 2015,
  email: 'enquiry@improxgroup.com',
  phone: '+14079000208',
  formattedPhone: '+1 (407) 900-0208',
  addresses: {
    us: {
      label: 'United States Headquarters',
      street: '16192 Coastal Highway',
      city: 'Lewes',
      region: 'Delaware',
      postalCode: '19958',
      country: 'United States',
      fullAddress: '16192 Coastal Highway, Lewes, DE 19958, United States',
      mapsUrl: 'https://maps.google.com/?q=16192+Coastal+Highway,+Lewes,+DE+19958,+United+States',
    },
    india: {
      label: 'India Delivery Center',
      street: 'Maruti Millennium Tower, Baner Annex, Baner',
      city: 'Pune',
      region: 'Maharashtra',
      postalCode: '411045',
      country: 'India',
      fullAddress: 'Maruti Millennium Tower, Baner Annex, Baner, Pune, Maharashtra 411045, India',
      mapsUrl: 'https://maps.google.com/?q=Maruti+Millennium+Tower,+Baner+Annex,+Baner,+Pune,+Maharashtra+411045',
    },
  },
  // Unverified data strictly set to null
  employeeCount: null,
  clientCount: null,
  projectCount: null,
  slaPercentage: null,
  throughputMetric: null,
  uptimeGuarantee: null,
  certifications: null,
  partnerships: null,
  verifiedOutcomes: null,
  socialLinks: {
    linkedin: null,
    github: null,
    twitter: null,
  },
};
