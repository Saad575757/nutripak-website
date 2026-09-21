export interface MetricItem {
  icon: string;
  value: string;
  caption: string;
}

export const CONTACT_METRICS: MetricItem[] = [
  { icon: "bolt", value: "< 2 Hour Response", caption: "Clinical triage SLA" },
  { icon: "verified_user", value: "4.9/5 Care Satisfaction", caption: "Over 14,200 intakes logged" },
  { icon: "lock", value: "Encrypted & HIPAA Aware", caption: "256-bit confidential routing" },
];

export interface InboxChannel {
  icon: string;
  title: string;
  email: string;
  description: string;
}

export const INBOX_CHANNELS: InboxChannel[] = [
  {
    icon: "science",
    title: "Clinical & Formulations",
    email: "science@nutripak.com",
    description: "Contraindications, assays & ingredient provenance",
  },
  {
    icon: "local_shipping",
    title: "Orders & Member Concierge",
    email: "care@nutripak.com",
    description: "Routine deliveries, batch replacements & modifications",
  },
  {
    icon: "medical_services",
    title: "Wholesale & Clinical Practice",
    email: "practitioner@nutripak.com",
    description: "Doctor dispensing, functional medicine & institutional supply",
  },
  {
    icon: "campaign",
    title: "Research & Media Inquiries",
    email: "press@nutripak.com",
    description: "Clinical study access, publication data & press kits",
  },
];

export const TELEPHONE_DISPLAY = "+1 (800) 582-NUTRI";
export const TELEPHONE_HREF = "tel:+18005826887";
export const HEADQUARTERS_ADDRESS = [
  "NUTRIPAK BioSciences Ltd.",
  "440 Brannan Street, Suite 300",
  "San Francisco, CA 94107",
];

export interface LocationItem {
  badge: string;
  city: string;
  description: string;
  address: string;
  timezone: string;
  image: string;
  alt: string;
}

export const LOCATIONS: LocationItem[] = [
  {
    badge: "Headquarters & Lab",
    city: "San Francisco, California",
    description:
      "Primary formulation cleanrooms, concierge intake, and analytical chemistry lab.",
    address: "440 Brannan St, Suite 300",
    timezone: "PST / UTC-8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWwNTpjV_t0ywc_hZIg2XST3TDbj-o8uG1HS9gQgQv_MazYjVErLlZQnnUOFZs8aELFynYuSC6Bj9EjssqOushShTTEVhOKQal97FXxMVYuowLI_gj4w97kZ31T1GwHMp_cf4L_Le4p9bS-c3OJpXnoFEn2BEyfoyYjfO8KAy1LlvDWWyA7A28ISI9HeB6N5YtT2bR1WhRAdqlT9krhn0pgc_7psCBHYG5xO0TTXRDZ8zT8YH3uP1qw",
    alt: "A clean, minimalist biological research lab interior in San Francisco with floor-to-ceiling windows, natural wood benches, botanical plants, amber supplement jars, and research equipment under soft natural lighting.",
  },
  {
    badge: "European Advisory",
    city: "Oxford, United Kingdom",
    description:
      "Clinical trial design, European botanicals sourcing, and longevity fellowship hub.",
    address: "Oxford Science Park, Suite 12",
    timezone: "GMT / UTC+0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQTDq6H-c-cx7wEfzlU1uNMas1oeNFtKgVYDEb1TV5OrUcjN27XNNKYCYPkArdTQAqTlC-9OdaXfiAxPlm4iD5cFCF8foWsteV8HEmBt9FjsbMTFtJoPIfxMDSlW5N1ZSMWw4DMViuI1ScaJUAzDcFj84kMfj6x6v_08f_8YU_4BWj-d0nnhF4LWhRRwpCKJ7LuSPM6_B4tI1rpcuW6roVlQQkoIfF6PnjHbCTJHibtygzo32RABNKQ",
    alt: "A serene European architectural office space with clinical research journals, modern warm lighting, indoor olive tree, glass partitions, and scientific charts on tablets.",
  },
  {
    badge: "cGMP Encapsulation",
    city: "Salt Lake Valley, Utah",
    description:
      "Cold-fill encapsulation, microbiological heavy metal testing, and climate-controlled inventory.",
    address: "1800 Mountain View Pkwy",
    timezone: "MST / UTC-7",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRt7Dvch1QNIXrjCD7CcPR1AZFyRkjFC_fzGtOK12A9W9P6TBYzJX3fnd_zRDFvn8hnK8A-e1G4jERBAem4bITU-JXgsBv1gVIsEoWOJvegVznvVnRUlEev160f83QjJ7-EaVUvHBwtJxhtEr6C3kKGqvSczjxFjrATQxrAHL6q4CkukLTc80YrE5mKDlovjC8ArJllUU0xW3nJ82KPUa-a-MBJlX9wHQDiykGIi14NGiQh4cTN-BDtQ",
    alt: "A high-tech cGMP pharmaceutical facility in Utah with stainless steel encapsulation suites, sterile clean room attire, automated capsule inspection, and warm mountain light through large high-bay windows.",
  },
];

export const CONCIERGE_PHONE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDvjIaBvcNN8lg_TAdLJ4ATXoKkHAYcy0a9lBq5entXPmT5rdbysiCD77jzUgMAtOnwybEyZ2R234DK6QV4ZXcDKOtHjWMmoTRPRz3EwfLwEjBpxWSTJZ3RzSumeJZhnIMpF7JR32OcKs5Oh5XcAv0v7YJi1sKGNV4G8PfNrfaydhOQXlUuCcenvB2jNDuKzeQm8XJhzT1XHe8SRSRlzIIzLNJMlHs8Qd6YXmCv-lzp1BY_u8bHftRf5w";

export interface ConciergeFaq {
  question: string;
  answer: string;
}

export const CONCIERGE_FAQS: ConciergeFaq[] = [
  {
    question: "How quickly can I expect a clinical response?",
    answer:
      "During standard laboratory hours (Mon–Fri 8:00 AM–7:00 PM EST), all live chats are answered in under 3 minutes. Written case submissions via this concierge desk are triaged by our registered nutritionists and clinical biochemists within 2 hours. Weekend submissions are reviewed by Sunday evening.",
  },
  {
    question: "Can a clinician review my current bloodwork or supplement stack?",
    answer:
      "Yes. You can upload recent lab reports (lipid panels, vitamin D assays, micronutrient analyses) directly via the secure intake form above. While our advisors do not diagnose illness or alter prescription medications without your physician's consent, we systematically evaluate ingredient overlaps, co-factor absorption rates, and optimal dosing timing.",
  },
  {
    question: "How do I modify, pause, or cancel my subscription instantly?",
    answer:
      "You maintain total autonomy through your Member Portal at any time without having to call or wait for email clearance. You can delay shipments by 15, 30, or 60 days, adjust capsule counts, swap products, or cancel with a single tap. If you prefer our team to handle it for you, simply choose 'Subscription Adjustments' in the form above.",
  },
  {
    question: "Do you offer practitioner wholesale accounts for clinics?",
    answer:
      "We collaborate with over 2,400 integrative health centers, medical doctors (MDs), and naturopathic practitioners (NDs). Verified practices receive wholesale pricing tiers, access to patient-direct dispensary links, unbranded clinical whitepapers, and third-party Certificate of Analysis (CoA) batches for every production run.",
  },
];

export interface TopicPill {
  id: string;
  label: string;
  placeholder: string;
}

export const TOPIC_PILLS: TopicPill[] = [
  {
    id: "clinical",
    label: "Clinical & Ingredients",
    placeholder: "e.g. Taking Daily Essentials alongside Levothyroxine",
  },
  {
    id: "routine",
    label: "Routine Consultation",
    placeholder: "e.g. Taking Daily Essentials alongside Levothyroxine",
  },
  {
    id: "orders",
    label: "Orders & Delivery",
    placeholder: "e.g. Expedited delivery status for order #",
  },
  {
    id: "subscription",
    label: "Subscription Adjustments",
    placeholder: "e.g. Pause upcoming renewal until next month",
  },
  {
    id: "practitioner",
    label: "Practitioner & Wholesale",
    placeholder: "e.g. Clinic dispensary application & wholesale credentials",
  },
];

export const CLINICAL_CONTEXT_OPTIONS = [
  "Prescriptions Active",
  "Pregnant or Nursing",
  "Known Food Allergies",
];