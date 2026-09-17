import { PHONE_DISPLAY, PHONE_TEL_LINK, ADMISSION_SESSION } from "@/config/constants";
import { PhoneIcon } from "./icons";
import EnquireTrigger from "./EnquireTrigger";

export default function TopBar() {
  return (
    <div className="bg-coral-600 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-2 text-xs sm:px-6 sm:text-sm lg:px-8">
        <a href={PHONE_TEL_LINK} className="flex items-center gap-2 font-semibold">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
            <PhoneIcon width={13} height={13} />
          </span>
          <span className="hidden sm:inline">For Enquiry:</span>
          <span className="font-bold">{PHONE_DISPLAY}</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="#enquiry"
            className="rounded-full bg-sunny-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-ink-900 shadow-sm transition hover:bg-sunny-300 sm:text-xs"
          >
            Admissions Open {ADMISSION_SESSION}
          </a>
          <EnquireTrigger className="rounded-full border border-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-white/10 sm:text-xs">
            Enquire Now
          </EnquireTrigger>
        </div>
      </div>
    </div>
  );
}
