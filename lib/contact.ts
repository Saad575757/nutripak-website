export const CONTACT_HERO = {
  breadcrumbLabel: "Contact",
  badge: "Get in touch",
  heading: "Contact Nutripak",
  intro:
    "Nutripak is a subsidiary of Alfalah Health Care, with both of our offices based in Karachi, Pakistan. Reach the right office by phone or email and we will get back to you.",
} as const;

export interface Office {
  id: string;
  label: string;
  city: string;
  company: string;
  address: string[];
  phone: string;
  phoneHref: string;
  website: string;
  websiteHref: string;
  email: string;
  emailHref: string;
}

export const COMPANY_NAME = "NUTRIPAK";
export const PARENT_COMPANY = "Subsidiary of Alfalah Health Care";
export const WEBSITE = "www.nutripak.net";
export const WEBSITE_HREF = "https://www.nutripak.net";
export const EMAIL = "nutripak.np@gmail.com";

/** Primary order-enquiry line, shared by call and WhatsApp. */
export const PHONE = "0313-3346732";
export const PHONE_E164 = "+923133346732";
export const PHONE_HREF = `tel:${PHONE_E164}`;
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164.replace("+", "")}`;

export interface ContactChannel {
  icon: string;
  label: string;
  value: string;
  href: string;
}

/** The three ways a customer is told to reach the order desk. */
export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: "call",
    label: "Call",
    value: PHONE,
    href: PHONE_HREF,
  },
  {
    icon: "chat",
    label: "WhatsApp",
    value: PHONE,
    href: WHATSAPP_HREF,
  },
  {
    icon: "mail",
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

export const OFFICES: Office[] = [
  {
    id: "regional-office",
    label: "Regional Office",
    city: "Karachi",
    company: `${COMPANY_NAME} (${PARENT_COMPANY})`,
    address: [
      "Plot # A-366/6,",
      "Sector 6-A, Mehran Town,",
      "Korangi,",
      "Karachi, Pakistan.",
    ],
    phone: PHONE_E164,
    phoneHref: PHONE_HREF,
    website: WEBSITE,
    websiteHref: WEBSITE_HREF,
    email: EMAIL,
    emailHref: `mailto:${EMAIL}`,
  },
  {
    id: "head-office",
    label: "Head Office",
    city: "Karachi",
    company: `${COMPANY_NAME} (${PARENT_COMPANY})`,
    address: [
      "Plot # D-8,",
      "Block-8,",
      "Gulshan e Iqbal",
      "Karachi, Pakistan.",
    ],
    phone: "+92 315-8558568",
    phoneHref: "tel:+923158558568",
    website: WEBSITE,
    websiteHref: WEBSITE_HREF,
    email: EMAIL,
    emailHref: `mailto:${EMAIL}`,
  },
];

/** Shown under the office cards so the shared details are stated only once. */
export const CONTACT_SHARED_DETAILS = {
  website: WEBSITE,
  websiteHref: WEBSITE_HREF,
  phone: PHONE,
  phoneHref: PHONE_HREF,
  whatsappHref: WHATSAPP_HREF,
  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,
};

export const QUERY_TOPICS = [
  "General enquiry",
  "Product information",
  "Orders & delivery",
  "Wholesale & distribution",
  "Careers & employment",
  "Feedback",

];
