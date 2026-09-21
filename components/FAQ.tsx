"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL_LINK } from "@/config/constants";

const FAQS = [
  {
    question: "What is the admission process at SKS World School?",
    // TODO-CONFIRM: registration office hours and interaction format.
    answer:
      "Submit an enquiry via the form on this page or call us directly. Our admissions team will share the registration form, schedule a campus visit, and guide you through document verification and fee payment. Registration is also available online or at the school administration office. After registration, parents are invited for an interaction.",
  },
  {
    question: "What is the age eligibility for each class?",
    // TODO-CONFIRM: replace with a table of Class | Minimum age as on 31 March, supplied by the
    // school for Pre-Nursery, Nursery, KG and Classes 1-5. Do not publish third-party age figures
    // (e.g. Pre-Nursery 2 years 5 months) unless the school confirms them.
    answer:
      "Playgroup/Pre-Nursery: 2–3 years, Nursery: 3–4 years, Kindergarten (KG): 4–5 years, Class 1: 5–6 years, with one additional year per subsequent class up to Class 5. Ages are considered as on 31st March of the admission year.",
  },
  {
    question: "What are the school timings?",
    // TODO-CONFIRM: copy timings from the school's official School Timings page, giving
    // pre-primary and primary separately if they differ.
    answer:
      "School timings vary slightly by stage (Playgroup/Nursery/KG vs. Primary). Our admissions team will share the exact daily schedule, along with drop-off and pick-up windows, when you enquire.",
  },
  {
    question: "Is transport facility available?",
    // TODO-CONFIRM: add the bus routes and areas covered.
    answer:
      "Yes. Bus routes are customised to pick-up points to reduce travel time, and the buses are mobile-connected. There is a separate bus boarding lane and first aid on board.",
  },
  {
    question: "How can I get details about the fee structure?",
    // TODO-CONFIRM: optionally publish the fee table if the school agrees.
    answer:
      "Fees depend on the class. Submit the enquiry form or message us on WhatsApp and we will share the current fee structure.",
  },
  {
    question: "How does the school ensure child safety?",
    answer:
      "The school uses CCTV surveillance, a soft-padded play area, a separate bus boarding lane, SMS alerts to parents and an infirmary with trained staff. School buses carry first aid, and the school has tie-ups with nearby hospitals and an ambulance for emergencies.",
  },
  {
    question: "Is the school air-conditioned?",
    answer: "Classrooms are well ventilated and airy. The library and auditorium are air-conditioned.",
  },
  {
    question: "Are meals provided?",
    answer: "Meals are available at the school canteen on a pay-and-buy basis.",
  },
  {
    question: "Is SKS World School CBSE affiliated, and where is it?",
    answer:
      "Yes, CBSE Affiliation No. 2134003. The campus is at Plot No. SS, Sector 137, Noida, near Sector 137 Metro Station on the Noida Expressway.",
  },
  {
    question: "What is the student-teacher ratio?",
    // TODO-CONFIRM: confirm the 1:25 ratio applies to the junior wing.
    answer: "The ratio is 1:25, and every student receives individual care and attention.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section id="faq" className="scroll-mt-24 bg-sunny-50/40 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl md:text-4xl">
            Admission FAQs: SKS World School, Sector 137 Noida
          </h2>
          <p className="mt-3 text-base text-ink-900/70">
            Still have questions?{" "}
            <a href={PHONE_TEL_LINK} className="font-bold text-skyplay-700 underline">
              Call us at {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl bg-white shadow-soft">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-heading text-sm font-bold text-ink-900 sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sunny-100 text-ink-900 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-4">
                    <p className="text-sm text-ink-900/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
