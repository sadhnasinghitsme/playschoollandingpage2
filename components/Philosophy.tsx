import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="bg-sunny-50/50 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-soft lg:order-1">
          <Image
            src="/images/philosophy-play.jpg"
            alt="A child riding a toy car in the indoor play zone at SKS World School, Sector 137 Noida"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            className="object-cover object-[55%_50%]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-leaf-700 shadow-soft">
            Our Philosophy
          </span>
          <h2 className="mt-4 font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Strong Academics, Strong Values
          </h2>
          <p className="mt-4 text-base text-ink-900/75">
            At SKS World School, Noida, three pillars guide everything we do. They help every
            student grow in confidence and character alongside their studies.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Harmony and Respect",
              "Honesty and Truthfulness",
              "Thirst for Excellence",
              "Music, dance, yoga & self-defence classes",
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
