import { PHONE_DISPLAY, PHONE_TEL_LINK } from "@/config/constants";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-coral-500 to-sunny-500 py-14 text-center sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
          Admissions Open: Ready to Apply for Class 6-12?
        </h2>
        {/* TODO-CONFIRM: add a "seats are limited" line only if the school confirms it. */}
        <p className="mt-3 text-base text-white/90 sm:text-lg">
          Send an enquiry and our admissions team will guide you through registration, the
          interaction schedule and fee timelines for Class 6 to 12.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#enquiry"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-bold text-coral-600 shadow-soft transition hover:bg-sunny-50 sm:w-auto"
          >
            Submit Admission Enquiry
          </a>
          <a
            href={PHONE_TEL_LINK}
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-white px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
