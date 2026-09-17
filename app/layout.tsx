import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";
import EnquiryModalProvider from "@/components/EnquiryModalProvider";
import {
  SCHOOL_NAME,
  FULL_ADDRESS,
  CITY,
  STATE,
  PINCODE,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  SITE_URL,
  AFFILIATION_BOARD,
  SOCIAL_LINKS,
} from "@/config/constants";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Best Playschool & Primary CBSE School in Noida Sector 137 | SKS World School",
  description:
    "Admissions open 2026-27 at SKS World School, Sector 137, Noida Expressway — CBSE-affiliated, English-medium school for Playgroup to Class 5. Activity-based learning, safe AC campus, smart classrooms. Enquire now.",
  keywords: [
    "best playschool in Noida",
    "CBSE school Noida Sector 137",
    "playschool Noida Expressway",
    "primary school admissions Noida",
    "SKS World School",
  ],
  openGraph: {
    title: "SKS World School, Noida — Admissions Open 2026-27",
    description:
      "CBSE-affiliated school in Sector 137, Noida Expressway for Playgroup to Class 5. Activity-based learning in a safe, caring, air-conditioned campus.",
    url: SITE_URL,
    siteName: SCHOOL_NAME,
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SKS World School, Noida - Admissions Open 2026-27",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SCHOOL_NAME,
    description:
      "SKS World School is a CBSE-affiliated, English-medium, co-educational school in Sector 137, Noida Expressway, offering Playgroup through Class 5.",
    url: SITE_URL,
    telephone: `+91${PHONE_NUMBER}`,
    email: EMAIL_ADDRESS,
    address: {
      "@type": "PostalAddress",
      streetAddress: FULL_ADDRESS,
      addressLocality: CITY,
      addressRegion: STATE,
      postalCode: PINCODE,
      addressCountry: "IN",
    },
    sameAs: Object.values(SOCIAL_LINKS),
    affiliation: AFFILIATION_BOARD,
  };

  return (
    <html lang="en-IN" className={`${baloo.variable} ${poppins.variable}`}>
      <body className="bg-white text-ink-900 antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <EnquiryModalProvider>{children}</EnquiryModalProvider>
      </body>
    </html>
  );
}
