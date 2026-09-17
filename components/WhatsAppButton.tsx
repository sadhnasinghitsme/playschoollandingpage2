import { WHATSAPP_LINK } from "@/config/constants";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SKS World School on WhatsApp"
      className="fixed bottom-28 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105 md:bottom-6 md:right-6"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
