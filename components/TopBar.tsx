import { PHONE_DISPLAY, PHONE_TEL_LINK, ADMISSION_SESSION } from "@/config/constants";
import { PhoneIcon } from "./icons";
import EnquireTrigger from "./EnquireTrigger";

export default function TopBar() {
  return (
    <div className="bg-coral-600 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-2.5 text-xs sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-4 sm:gap-y-1.5 sm:px-6 sm:py-2 sm:text-sm lg:px-8">
        <a href={PHONE_TEL_LINK} className="flex items-center gap-2 font-semibold">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
            <PhoneIcon width={13} height={13} />
          </span>
          <span className="hidden sm:inline">For Enquiry:</span>
          <span className="font-bold">{PHONE_DISPLAY}</span>
        </a>

        <div className="flex w-full flex-col items-stretch gap-2 min-[380px]:w-auto min-[380px]:flex-row min-[380px]:items-center">
          <a
            href="#enquiry"
            className="flex items-center justify-center rounded-full border border-transparent bg-sunny-400 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-ink-900 shadow-sm transition hover:bg-sunny-300 sm:border-0 sm:py-1 sm:text-xs"
          >
            Admissions Open {ADMISSION_SESSION}
          </a>
          <EnquireTrigger className="flex items-center justify-center rounded-full border border-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-white/10 sm:py-1 sm:text-xs">
            Enquire Now
          </EnquireTrigger>
        </div>
      </div>
    </div>
  );
}
