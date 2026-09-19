// Central place for all brand facts used across the site.
// Edit here and the change reflects everywhere (header, footer, forms, schema, etc).

export const SCHOOL_NAME = "SKS World School";
export const SCHOOL_SHORT_NAME = "SKS World School";
export const TAGLINE = "Playschool to Class 5 | CBSE Affiliated";

export const LOCATION_AREA = "Sector 137, Noida Expressway";
export const CITY = "Noida";
export const STATE = "Uttar Pradesh";
export const PINCODE = "201305";
export const FULL_ADDRESS = "Plot No. SS, Sector 137, Noida, Uttar Pradesh 201305";

export const AFFILIATION_BOARD = "CBSE, New Delhi";
export const AFFILIATION_NUMBER = "2134003";
export const AFFILIATION_LABEL = `Affiliation No. ${AFFILIATION_NUMBER}`;

export const TRUST_NAME = "SKS Educational & Social Trust";
export const CHAIRMAN_NAME = "Shri S.K. Sharma";

export const PHONE_NUMBER = "9319910888";
export const PHONE_DISPLAY = "+91 93199 10888";
export const PHONE_TEL_LINK = `tel:+91${PHONE_NUMBER}`;

export const EMAIL_ADDRESS = "contact@sksworldschoolnoida.ac.in";
export const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}`;

// WhatsApp number in international format without + or spaces, for wa.me links
export const WHATSAPP_NUMBER = "919319910888";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'd like to know more about admissions at SKS World School, Noida for the 2026-27 session.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

export const ADMISSION_SESSION = "2026-27";

export const SOCIAL_LINKS = {
  // TODO: replace with the school's real profile URLs once confirmed
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/sks137noida/",
  youtube: "https://www.youtube.com/",
  linkedin: "https://www.linkedin.com/",
};

// Google Maps embed built directly from the school's address (no API key required)
export const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  FULL_ADDRESS
)}&output=embed`;
export const MAP_DIRECTIONS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  FULL_ADDRESS
)}`;

export const SITE_URL = "https://www.sksworldschoolnoida.ac.in";

export type StageId =
  | "playgroup"
  | "nursery"
  | "kg"
  | "primary";

export interface ProgramStage {
  id: StageId;
  name: string;
  ageRange: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const PROGRAM_STAGES: ProgramStage[] = [
  {
    id: "playgroup",
    name: "Playgroup / Pre-Nursery",
    ageRange: "Ages 2–3 years",
    tagline: "Play-based sensory learning",
    description:
      "A warm, home-like introduction to school through sensory play, music, movement and gentle routines that build first friendships and confidence.",
    image: "/images/program-playgroup.jpg",
    imageAlt: "Young SKS World School children playing together in the colourful ball pit",
  },
  {
    id: "nursery",
    name: "Nursery",
    ageRange: "Ages 3–4 years",
    tagline: "Early language & social skills",
    description:
      "Story-time, rhymes and guided group play help children find their words, share, and build the social skills that make school feel exciting.",
    image: "/images/program-nursery.jpg",
    imageAlt: "A nursery child riding a tricycle in the play zone while a teacher looks on",
  },
  {
    id: "kg",
    name: "Kindergarten (KG)",
    ageRange: "Ages 4–5 years",
    tagline: "School readiness, numeracy & literacy",
    description:
      "A joyful, structured runway into Class 1 — building early reading, numbers and fine-motor skills through hands-on, activity-based lessons.",
    image: "/images/program-kg.jpg",
    imageAlt: "A smiling kindergarten girl holding a basketball during a group activity at SKS World School",
  },
  {
    id: "primary",
    name: "Primary, Classes 1–5",
    ageRange: "Ages 6–10 years",
    tagline: "CBSE foundational curriculum",
    description:
      "A strong CBSE academic foundation paired with smart classrooms, robotics/Lego labs and sports — so learning stays rigorous and fun.",
    image: "/images/program-primary.jpg",
    imageAlt: "Primary students of SKS World School standing together in their uniforms",
  },
];

export const CLASS_OPTIONS = [
  "Playgroup / Pre-Nursery",
  "Nursery",
  "Kindergarten (KG)",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
];
