import { PHONE_TEL_LINK, SOCIAL_LINKS } from "@/config/constants";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons";
import EnquireTrigger from "./EnquireTrigger";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
      <div className="flex items-center justify-center gap-3 border-b border-ink-900/5 py-1.5">
        <MiniSocial href={SOCIAL_LINKS.facebook} label="Facebook">
          <FacebookIcon width={14} height={14} />
        </MiniSocial>
        <MiniSocial href={SOCIAL_LINKS.instagram} label="Instagram">
          <InstagramIcon width={14} height={14} />
        </MiniSocial>
        <MiniSocial href={SOCIAL_LINKS.youtube} label="YouTube">
          <YoutubeIcon width={14} height={14} />
        </MiniSocial>
      </div>
      <div className="flex gap-2 p-2.5">
        <a
          href={PHONE_TEL_LINK}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-skyplay-500 py-2.5 text-sm font-bold text-skyplay-700"
        >
          Call Now
        </a>
        <EnquireTrigger className="flex flex-1 items-center justify-center gap-2 rounded-full bg-coral-500 py-2.5 text-sm font-bold text-white">
          Admission Enquiry
        </EnquireTrigger>
      </div>
    </div>
  );
}

function MiniSocial({
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
      className="flex h-6 w-6 items-center justify-center rounded-full bg-sunny-50 text-coral-600"
    >
      {children}
    </a>
  );
}
