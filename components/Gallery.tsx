import Image from "next/image";

// 18 tiles so both the 3-column and 2-column grids end on a full row.
const GALLERY_ITEMS = [
  { src: "/images/gallery-ball-pit.jpg", position: "55% 50%", alt: "Children laughing and playing with colourful balls in the ball pit at SKS World School" },
  { src: "/images/features-school-gate.jpg", position: "35% 50%", alt: "The SKS World School building and entrance gate on the Noida Expressway, Sector 137" },
  { src: "/images/gallery-class-vests.jpg", position: "50% 50%", alt: "A large class of SKS World School students in black and white outfits with their teacher" },
  { src: "/images/gallery-group-gold.jpg", position: "50% 50%", alt: "Students in gold and orange outfits with their teacher in a classroom at SKS World School" },
  { src: "/images/philosophy-play.jpg", position: "60% 50%", alt: "Child in a toy car at the play zone, SKS World School Noida" },
  { src: "/images/gallery-stage-teal.jpg", position: "60% 50%", alt: "Girls in teal dresses dancing on stage at an SKS World School event" },
  { src: "/images/gallery-group-green.jpg", position: "50% 50%", alt: "Students in green jackets posing with their teacher at SKS World School" },
  { src: "/images/gallery-stage-pompoms.jpg", position: "45% 50%", alt: "Children performing an energetic dance with pom-poms on stage at SKS World School" },
  { src: "/images/gallery-basketball.jpg", position: "55% 50%", alt: "Student with a basketball at SKS World School, Sector 137" },
  { src: "/images/gallery-rocking-horse.jpg", position: "45% 50%", alt: "A child on a rocking horse in the play area at SKS World School, Sector 137 Noida" },
  { src: "/images/gallery-group-red.jpg", position: "50% 50%", alt: "Students in red and white costumes in a classroom at SKS World School" },
  { src: "/images/features-dance.jpg", position: "50% 50%", alt: "SKS World School students performing a group dance on stage" },
  { src: "/images/gallery-group-purple.jpg", position: "50% 50%", alt: "Students in purple costumes with their teacher in front of the classroom board" },
  { src: "/images/gallery-ball-pit-girl.jpg", position: "85% 50%", alt: "A little girl exploring the ball pit at SKS World School" },
  { src: "/images/gallery-animal-costumes.jpg", position: "50% 50%", alt: "Students in animal costumes with their teacher at an SKS World School event" },
  { src: "/images/gallery-animal-stage.jpg", position: "55% 50%", alt: "Children in animal costumes on stage at SKS World School" },
  { src: "/images/gallery-silver-costumes.jpg", position: "50% 50%", alt: "Students in silver costumes lined up in a classroom at SKS World School" },
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
            A glimpse of the campus, play areas, events and everyday moments at our Noida
            Expressway school.
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
