// Central place for all brand facts used across the site.
// Edit here and the change reflects everywhere (header, footer, forms, schema, etc).

export const SCHOOL_NAME = "SKS World School";
export const SCHOOL_SHORT_NAME = "SKS World School";
export const TAGLINE = "Class 6 to 12 | CBSE Affiliated";

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

// Second admissions number, listed on the school's official contact page and FAQ.
export const PHONE_2_NUMBER = "9540530100";
export const PHONE_2_DISPLAY = "+91 95405 30100";
export const PHONE_2_TEL_LINK = `tel:+91${PHONE_2_NUMBER}`;

export const ADMIN_OFFICE_HOURS = "Administration Office: 9:00 AM to 2:00 PM, working days";

export const EMAIL_ADDRESS = "contact@sksworldschoolnoida.ac.in";
export const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}`;

// WhatsApp number in international format without + or spaces, for wa.me links
export const WHATSAPP_NUMBER = "919319910888";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I want to know about Class 6-12 admission at SKS World School, Sector 137.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

// TODO-CONFIRM: ask the school which session it is admitting into (2026-27 mid-session vacancies
// or 2027-28 registrations) and update this value to match. It appears in the top bar pill and
// the enquiry section badge.
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

// TODO-CONFIRM: preferred domain/path for this page (for example
// admissions.sksworldschoolnoida.ac.in/senior) so the display URL matches the final URL.
export const SITE_URL = "https://www.sksworldschoolnoida.ac.in";

export type StageId =
  | "middle"
  | "secondary"
  | "senior-secondary"
  | "beyond";

export interface ProgramStage {
  id: StageId;
  name: string;
  ageRange: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  enquireLabel: string;
}

// TODO-CONFIRM (school to supply, then add to the descriptions below): subjects for Classes 6-8,
// assessments / mock tests / doubt classes for Class 10 board preparation, streams and subject
// combinations for Classes 11-12 (Science PCM/PCB appear only on third-party listings; add
// Commerce or Humanities only if offered), Class 11 eligibility, and which classes are open now.
// TODO-CONFIRM: swap the photos below for senior-class campus, classroom and lab photos.
export const PROGRAM_STAGES: ProgramStage[] = [
  {
    id: "middle",
    name: "Middle School",
    ageRange: "Classes 6–8",
    tagline: "CBSE curriculum, activity-based learning",
    description:
      "CBSE curriculum with activity-based learning, science, maths and computer labs, and co-curricular activities.",
    image: "/images/program-primary.jpg",
    imageAlt: "Students of SKS World School standing together in their uniforms",
    enquireLabel: "Classes 6–8",
  },
  {
    id: "secondary",
    name: "Secondary School",
    ageRange: "Classes 9–10",
    tagline: "CBSE board preparation for Class 10",
    description:
      "CBSE curriculum for Classes 9 and 10, building a strong foundation for the Class 10 board examination.",
    image: "/images/gallery-prayer.jpg",
    imageAlt: "A student with folded hands and closed eyes in prayer at SKS World School",
    enquireLabel: "Classes 9–10",
  },
  {
    id: "senior-secondary",
    name: "Senior Secondary",
    ageRange: "Classes 11–12",
    tagline: "CBSE curriculum, board exams in Class 12",
    description:
      "CBSE curriculum for Classes 11 and 12, with CBSE board examinations in Class 12. Our admissions team shares the streams currently on offer when you enquire.",
    image: "/images/gallery-basketball.jpg",
    imageAlt: "Students taking turns in a basketball activity at SKS World School, Sector 137",
    enquireLabel: "Classes 11–12",
  },
  {
    id: "beyond",
    name: "Beyond the Classroom",
    ageRange: "Co-curricular",
    tagline: "Robotics, music, dance, yoga & self-defence",
    description:
      "A Robotics Lab in association with LEGO, Dramm Jamm dance education, a music room with western and classical music and vocal training, self-defence classes and a yoga room.",
    image: "/images/program-kg.jpg",
    imageAlt: "A smiling student holding a basketball during a group activity at SKS World School",
    enquireLabel: "Classes 6–12",
  },
];

// TODO-CONFIRM: list only the classes the school is admitting into this session.
export const CLASS_OPTIONS = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];
