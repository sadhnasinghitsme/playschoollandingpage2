import Image from "next/image";
import { PROGRAM_STAGES } from "@/config/constants";

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl md:text-4xl">
            Nursery to Class 5 Programs at SKS World School, Noida
          </h2>
          <p className="mt-3 text-base text-ink-900/70">
            From first steps into school to a strong CBSE foundation — a clear path from
            Pre-Nursery to Class 5.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_STAGES.map((stage) => (
            <article
              key={stage.id}
              id={`program-${stage.id}`}
              className="flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-soft transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={stage.image}
                  alt={stage.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-bold uppercase tracking-wide text-skyplay-600">
                  {stage.ageRange}
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-ink-900">{stage.name}</h3>
                <p className="mt-1 text-sm font-semibold text-coral-500">{stage.tagline}</p>
                <p className="mt-2 flex-1 text-sm text-ink-900/65">{stage.description}</p>
                <a
                  href="#enquiry"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-sunny-100 px-4 py-2 text-sm font-bold text-ink-900 transition hover:bg-sunny-200"
                >
                  Enquire for {stage.enquireLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
