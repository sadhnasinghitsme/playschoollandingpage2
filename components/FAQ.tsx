"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL_LINK } from "@/config/constants";

// TODO-CONFIRM: add these answers only once the school supplies them (do not publish unconfirmed
// answers): Class 11 eligibility (minimum Class 10 marks by stream), board results (year, pass %,
// students above 90%), the 1:25 student-teacher ratio for senior classes, the exact streams open,
// and the bus areas covered. Also add FAQPage JSON-LD schema once the list is final.
const FAQS = [
  {
    question: "What is the admission process at SKS World School?",
    answer:
      "It is a simple four-step process. Registration: register online or collect the form at the Administration Office, open 9:00 AM to 2:00 PM on working days, and submit all required documents so your form can be processed. Interaction: we phone you with the date and time of the interaction and also post it on the school website; please submit one form per applicant. Selection: the school confirms admission after the interaction. Fee deposit: once admission is confirmed, deposit the fee within the stipulated time to secure the seat. After that date the seat is offered to another applicant.",
  },
  {
    question: "Which documents are needed for admission?",
    // TODO-CONFIRM: add report card, photographs, address proof and any Class 9 or Class 11
    // requirements once the school supplies them.
    answer:
      "A self-attested copy of the birth certificate, and a Transfer Certificate from the last school for Class II onwards.",
  },
  {
    question: "Which classes and streams are open for admission?",
    // TODO-CONFIRM: name the classes open this session and the streams offered (Science PCM/PCB
    // appear only on third-party listings; add Commerce or Humanities only if offered).
    answer:
      "SKS World School admits students from Class 6 to 12. Submit the enquiry form or call us to check seat availability and the streams on offer for your child's class.",
  },
  {
    question: "What are the school timings?",
    // TODO-CONFIRM: copy timings from the school's official School Timings page for the senior
    // classes.
    answer:
      "Our admissions team will share the exact daily schedule, along with drop-off and pick-up timings for your child's class, when you enquire.",
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
    question: "How does the school ensure student safety?",
    answer:
      "The school uses CCTV surveillance, a separate bus boarding lane, SMS alerts to parents and an infirmary with trained staff. School buses carry first aid, and the school has tie-ups with nearby hospitals and an ambulance for emergencies.",
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
      "Yes, CBSE Affiliation No. 2134003. The campus is at Plot No. SS, Sector 137, Noida, opposite Sector 137 Metro Station on the Noida Expressway.",
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
            Class 6-12 Admission FAQs: SKS World School, Sector 137 Noida
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
