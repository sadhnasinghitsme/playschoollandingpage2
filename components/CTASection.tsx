import { ADMISSION_SESSION, PHONE_DISPLAY, PHONE_TEL_LINK } from "@/config/constants";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-coral-500 to-sunny-500 py-14 text-center sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
          Give Your Child the Best Start This {ADMISSION_SESSION}
        </h2>
        <p className="mt-3 text-base text-white/90 sm:text-lg">
          Seats for Playgroup to Class 5 are filling fast. Reach out today and let&apos;s plan
          your child&apos;s SKS journey together.
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
