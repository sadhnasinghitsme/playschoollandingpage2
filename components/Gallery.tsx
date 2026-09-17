import Image from "next/image";

const GALLERY_ITEMS = [
  { src: "/images/gallery-annual-day.svg", alt: "Children performing on stage at SKS World School Annual Day celebration" },
  { src: "/images/gallery-activity.svg", alt: "Students taking part in a hands-on activity session at SKS World School" },
  { src: "/images/gallery-playzone.svg", alt: "Children playing in the outdoor play zone at SKS World School campus" },
  { src: "/images/gallery-classroom.svg", alt: "Smart interactive classroom with digital learning tools at SKS World School" },
  { src: "/images/gallery-sports.svg", alt: "Students participating in a sports day event at SKS World School" },
  { src: "/images/gallery-artcraft.svg", alt: "Children showing their art and craft creations at SKS World School" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-skyplay-50/60 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl md:text-4xl">
            A Peek Into Campus Life
          </h2>
          <p className="mt-3 text-base text-ink-900/70">
            Annual days, activity time and everyday moments of joyful learning at SKS.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.src}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-soft transition hover:scale-[1.02]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
