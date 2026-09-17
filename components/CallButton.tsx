import { PHONE_TEL_LINK } from "@/config/constants";
import { PhoneIcon } from "./icons";

export default function CallButton() {
  return (
    <a
      href={PHONE_TEL_LINK}
      aria-label="Call us"
      className="fixed bottom-[184px] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-coral-500 text-white shadow-soft transition hover:scale-105 hover:bg-coral-600 md:bottom-24 md:right-6"
    >
      <PhoneIcon width={26} height={26} />
    </a>
  );
}
