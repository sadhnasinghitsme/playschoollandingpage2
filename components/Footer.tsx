import Image from "next/image";
import {
  SCHOOL_NAME,
  FULL_ADDRESS,
  AFFILIATION_BOARD,
  AFFILIATION_LABEL,
  TRUST_NAME,
  CHAIRMAN_NAME,
  PHONE_DISPLAY,
  PHONE_TEL_LINK,
  EMAIL_ADDRESS,
  EMAIL_LINK,
  MAP_EMBED_SRC,
  MAP_DIRECTIONS_LINK,
  SOCIAL_LINKS,
} from "@/config/constants";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 bg-ink-900 pb-24 pt-14 text-white/80 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-lg bg-white px-3 py-2">
              <Image src="/images/sks-logo.png" alt="SKS World School logo" width={186} height={88} className="h-9 w-auto" />
            </div>
            <p className="mt-3 text-sm">{FULL_ADDRESS}</p>
            <p className="mt-1 text-sm">Near Sector 137 Metro Station, Noida Expressway</p>
            <p className="mt-3 text-sm">
              Affiliated to {AFFILIATION_BOARD} &middot; {AFFILIATION_LABEL}
            </p>
            <p className="mt-1 text-sm">
              Run by {TRUST_NAME} &middot; Chairman: {CHAIRMAN_NAME}
            </p>

            <div className="mt-5 space-y-1.5 text-sm">
              <a href={PHONE_TEL_LINK} className="block font-semibold text-white hover:underline">
                {PHONE_DISPLAY}
              </a>
              <a href={EMAIL_LINK} className="block font-semibold text-white hover:underline">
                {EMAIL_ADDRESS}
              </a>
            </div>

            <div className="mt-5 flex gap-3">
              <SocialLink href={SOCIAL_LINKS.facebook} label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href={SOCIAL_LINKS.instagram} label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href={SOCIAL_LINKS.youtube} label="YouTube">
                <YoutubeIcon />
              </SocialLink>
              <SocialLink href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                <LinkedinIcon />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Find Us
            </h3>
            <div className="mt-4 overflow-hidden rounded-2xl">
              <iframe
                title="SKS World School location map"
                src={MAP_EMBED_SRC}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAP_DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-skyplay-300 hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {year} {SCHOOL_NAME}, Sector 137, Noida. CBSE {AFFILIATION_LABEL}. All rights reserved.
          Managed by {TRUST_NAME}.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
    >
      {children}
    </a>
  );
}
