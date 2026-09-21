import EnquiryForm from "./EnquiryForm";
import { ADMISSION_SESSION } from "@/config/constants";

export default function EnquirySection() {
  return (
    <section id="enquiry" className="scroll-mt-24 bg-skyplay-50 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-coral-500 shadow-soft">
            {/* TODO-CONFIRM: reinstate "Limited seats" only if the school confirms seat status. */}
            Admissions open {ADMISSION_SESSION}
          </span>
          <h2 className="mt-4 font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl md:text-4xl">
            Nursery to Class 5 Admission Enquiry, Sector 137 Noida
          </h2>
          {/* TODO-CONFIRM: add "within [2 working hours]" after "call you back" once the admissions
              team confirms the callback time it can meet. */}
          <p className="mt-3 max-w-md text-base text-ink-900/70">
            Share a few details and our admissions team will call you back with the class
            schedule, fee structure and a convenient campus visit slot.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm font-semibold text-ink-900/80">
            {/* TODO-CONFIRM: replace with "Callback within [2 working hours]" once confirmed. */}
            <li className="flex items-center gap-2">
              <Dot /> Response within one working day
            </li>
            <li className="flex items-center gap-2">
              <Dot /> No obligation campus tour
            </li>
            {/* TODO-CONFIRM: add scholarship wording only if the school offers one. */}
            <li className="flex items-center gap-2">
              <Dot /> Fee structure details on call
            </li>
          </ul>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-2 w-2 shrink-0 rounded-full bg-leaf-500" aria-hidden="true" />;
}
