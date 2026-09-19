import Image from "next/image";
import type { SVGProps } from "react";
import { PHONE_DISPLAY, PHONE_TEL_LINK, WHATSAPP_LINK } from "@/config/constants";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import EnquireTrigger from "./EnquireTrigger";

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[640px] overflow-hidden md:min-h-[90vh]">
      <Image
        src="/images/hero-child.jpg"
        alt="Young SKS World School student in uniform watching a classroom activity with classmates"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_25%]"
      />
      <div className="absolute inset-0 bg-white/65 md:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.85)_35%,rgba(255,255,255,0)_62%)] md:block" />

      {/* Right edge: persistent vertical admission tab (desktop only) */}
      <EnquireTrigger
        aria-label="Admission Enquiry"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-l-xl bg-coral-600 px-2.5 py-6 text-sm font-extrabold tracking-wide text-white shadow-soft transition hover:bg-coral-700 md:flex"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="rotate-180">ADMISSION ENQUIRY</span>
      </EnquireTrigger>

      <div className="relative z-20 mx-auto flex min-h-[640px] max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[90vh] md:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] text-coral-600 sm:text-5xl md:text-6xl">
            <span className="relative inline-block pb-3">
              Fun Learning Every
              <SquiggleUnderline className="absolute -bottom-1 left-0 h-3 w-full text-sunny-400" />
            </span>{" "}
            <span className="inline-block rounded-2xl bg-coral-600 px-4 py-1 text-sunny-300">
              Day
            </span>
          </h1>

          <p className="mt-6 text-xl font-extrabold text-coral-600 sm:text-2xl">
            Admissions Open! Playschool to Class 5 in{" "}
            <span className="inline-block rounded-xl bg-sunny-300 px-3 py-0.5 text-ink-900">
              Noida
            </span>
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={PHONE_TEL_LINK}
              className="flex items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-5 shadow-soft transition hover:bg-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
                <PhoneIcon width={18} height={18} />
              </span>
              <span className="font-bold text-ink-900">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-5 shadow-soft transition hover:bg-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon width={18} height={18} />
              </span>
              <span className="font-bold text-ink-900">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SquiggleUnderline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true" {...props}>
      <path
        d="M2 14 C 40 4, 70 20, 100 10 S 160 2, 198 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
