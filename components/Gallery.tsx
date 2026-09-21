import Image from "next/image";

const GALLERY_ITEMS = [
  { src: "/images/gallery-ball-pit.jpg", position: "55% 50%", alt: "Children laughing and playing with colourful balls in the ball pit at SKS World School" },
  { src: "/images/philosophy-play.jpg", position: "60% 50%", alt: "Child in a toy car at the play zone, SKS World School Noida" },
  { src: "/images/gallery-basketball.jpg", position: "55% 50%", alt: "Student with a basketball at SKS World School, Sector 137" },
  { src: "/images/gallery-rocking-horse.jpg", position: "45% 50%", alt: "Nursery child on a rocking horse in the play area" },
  { src: "/images/gallery-ball-pit-girl.jpg", position: "85% 50%", alt: "A little girl exploring the ball pit at SKS World School" },
  { src: "/images/gallery-prayer.jpg", position: "45% 50%", alt: "A student with folded hands and closed eyes in prayer at SKS World School" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-skyplay-50/60 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl md:text-4xl">
            Campus Life at SKS World School, Sector 137 Noida
          </h2>
          <p className="mt-3 text-base text-ink-900/70">
            Play zones, activity time and everyday moments of joyful learning at our Noida
            Expressway campus.
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
                style={{ objectPosition: item.position }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
