"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

// TODO-CONFIRM (must be done before ads go live): these three quotes are placeholders written for
// the junior page. Replace them with real Class 6-12 parent reviews (results, teachers, guidance),
// avoiding "best school in Noida" style claims, and link to the school's Google reviews.
// TODO-CONFIRM: replace these with real, attributed parent reviews (first name, child's class,
// review date if possible) taken from the school's Google reviews or website, with the parent's
// consent. Keep any quote below only if it is confirmed real, and add the parent's first name.
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "My daughter was very shy before joining Playgroup. Within a few months, the teachers at SKS helped her open up, make friends and even sing rhymes at home!",
    name: "Parent of a Playgroup Student",
    role: "SKS World School, Noida",
    avatar: "/images/testimonial-1.svg",
  },
  {
    quote:
      "What I love most is the balance — strong CBSE academics along with robotics, art and sports. The SMS updates also keep me informed every single day.",
    name: "Parent of a Class 2 Student",
    role: "SKS World School, Noida",
    avatar: "/images/testimonial-2.svg",
  },
  {
    quote:
      "The campus is safe, clean and always CCTV monitored, which gives us huge peace of mind. The teachers genuinely care about every child's progress.",
    name: "Parent of a Kindergarten Student",
    role: "SKS World School, Noida",
    avatar: "/images/testimonial-3.svg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function goTo(next: number) {
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const current = TESTIMONIALS[index];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl md:text-4xl">
            What SKS Parents Say
          </h2>
        </div>

        <div
          className="mt-10 rounded-3xl bg-sunny-50/60 p-6 shadow-soft sm:p-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="Parent testimonials"
        >
          <div aria-live="polite" className="flex flex-col items-center text-center">
            <Image
              src={current.avatar}
              alt={`Portrait illustration representing ${current.name}`}
              width={72}
              height={72}
              className="h-16 w-16 rounded-full object-cover shadow-soft sm:h-[72px] sm:w-[72px]"
            />
            <p className="mt-5 max-w-xl text-base italic text-ink-900/80 sm:text-lg">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="mt-4 font-heading text-sm font-bold text-ink-900">{current.name}</p>
            <p className="text-xs text-ink-900/55">{current.role}</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-900 shadow-soft transition hover:bg-sunny-100"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
              {TESTIMONIALS.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-coral-500" : "bg-ink-900/15"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-900 shadow-soft transition hover:bg-sunny-100"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
