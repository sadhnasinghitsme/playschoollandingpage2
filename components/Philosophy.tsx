import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="bg-sunny-50/50 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-soft lg:order-1">
          <Image
            src="/images/program-kg.svg"
            alt="Children exploring and learning through play at SKS World School"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-leaf-700 shadow-soft">
            Our Early-Years Philosophy
          </span>
          <h2 className="mt-4 font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Learning Through Play, Growing Through Values
          </h2>
          <p className="mt-4 text-base text-ink-900/75">
            In the early years, every song, story and game is a lesson in disguise. At SKS, we
            build a foundation of curiosity, kindness and confidence — so children don&apos;t just
            learn to read and count, they learn to love learning.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Play-based, joyful classrooms",
              "Holistic physical & emotional growth",
              "Strong values & good habits",
              "Art, music, sports & dance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-semibold text-ink-900/80">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
