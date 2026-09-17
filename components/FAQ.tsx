"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL_LINK } from "@/config/constants";

const FAQS = [
  {
    question: "What is the admission process at SKS World School?",
    answer:
      "Submit an enquiry via the form on this page or call us directly. Our admissions team will share the registration form, schedule a campus visit, and guide you through document verification and fee payment.",
  },
  {
    question: "What is the age eligibility for each class?",
    answer:
      "Playgroup/Pre-Nursery: 2–3 years, Nursery: 3–4 years, Kindergarten (KG): 4–5 years, Class 1: 5–6 years, with one additional year per subsequent class up to Class 5. Ages are considered as on 31st March of the admission year.",
  },
  {
    question: "What are the school timings?",
    answer:
      "School timings vary slightly by stage (Playgroup/Nursery/KG vs. Primary). Our admissions team will share the exact daily schedule, along with drop-off and pick-up windows, when you enquire.",
  },
  {
    question: "Is transport facility available?",
    answer:
      "Yes. SKS World School provides safe and secure GPS-enabled bus transport with trained attendants, covering key areas across Noida and the Noida Expressway.",
  },
  {
    question: "How can I get details about the fee structure?",
    answer:
      "Fee details differ by class/stage. Please share your details through the enquiry form or call us at " +
      PHONE_DISPLAY +
      ", and our admissions team will share the complete fee structure with you.",
  },
  {
    question: "How does the school ensure child safety?",
    answer:
      "The campus is fully CCTV-monitored, air-conditioned, and staffed with trained, caring teachers and support staff. Transport is GPS-enabled with attendants, and parents receive regular SMS updates.",
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
            Frequently Asked Questions
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
