import type { ReactElement, SVGProps } from "react";

interface Feature {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

const FEATURES: Feature[] = [
  {
    title: "CBSE Affiliated (No. 2134003)",
    description: "A CBSE-affiliated, English-medium, co-educational school in Sector 137, Noida.",
    icon: BadgeIcon,
  },
  {
    title: "Activity-Based Learning",
    description:
      "Students learn by doing: concepts are taught through hands-on activities, not rote memorisation.",
    icon: PuzzleIcon,
  },
  {
    title: "Caring & Trained Teachers",
    // TODO-CONFIRM: add a verifiable detail (qualifications, years of experience or training
    // programmes) or remove "Experienced educators trained in..." if the school cannot support it.
    description: "Experienced educators trained in early-childhood and primary pedagogy.",
    icon: HeartIcon,
  },
  {
    title: "Individual Attention",
    // TODO-CONFIRM: confirm the 1:25 student-teacher ratio applies to the junior wing.
    description:
      "A student-teacher ratio of 1:25 helps teachers give every child care and attention.",
    icon: UsersIcon,
  },
  {
    title: "Safe & Secure Transport",
    // TODO-CONFIRM: "GPS" and "trained attendants" may be re-added only if the school confirms them.
    description:
      "Bus routes customised to pick-up points, mobile-connected buses, a separate bus boarding lane and first aid on board.",
    icon: BusIcon,
  },
  {
    title: "CCTV-Monitored, Safe Campus",
    description:
      "CCTV surveillance, an infirmary with trained staff and a soft-padded play area. Well-ventilated classrooms, with an air-conditioned library and auditorium.",
    icon: ShieldIcon,
  },
  {
    title: "Smart Interactive Classrooms",
    description: "Digital boards and interactive tools make lessons engaging and visual.",
    icon: MonitorIcon,
  },
  {
    title: "Robotics Lab in association with LEGO",
    // TODO-CONFIRM: which junior classes use the robotics lab.
    description: "Hands-on robotics and building that grow problem-solving skills.",
    icon: RobotIcon,
  },
  {
    title: "SMS Updates & Parent App",
    description:
      "SMS alerts and a mobile app keep parents informed about attendance and school activities.",
    icon: MessageIcon,
  },
];

export default function Features() {
  return (
    <section id="why-sks" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl md:text-4xl">
            Why Parents Choose SKS World School, Noida Sector 137
          </h2>
          {/* TODO-CONFIRM: add "trusted by" wording only once review numbers support it. */}
          <p className="mt-3 text-base text-ink-900/70">
            A CBSE school on the Noida Expressway with a safe campus, activity-based classrooms
            and bus transport.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-2xl border border-ink-900/5 bg-sunny-50/40 p-5 transition hover:shadow-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-coral-500 shadow-soft">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-ink-900">{feature.title}</h3>
                <p className="mt-1 text-sm text-ink-900/65">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2z" fill="currentColor" />
    </svg>
  );
}
function PuzzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 8h3.2a2 2 0 100-4 2 2 0 013.6 1.2V8H14v3.2a2 2 0 104 0V8h2v6h-3.2a2 2 0 100 4 2 2 0 01-3.6-1.2V16H10v-2.8a2 2 0 10-4 0V16H4V8z"
        fill="currentColor"
      />
    </svg>
  );
}
function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21s-7.5-4.6-10-9.3C.5 8 2.4 4.5 6 4.5c2 0 3.5 1 6 3.5 2.5-2.5 4-3.5 6-3.5 3.6 0 5.5 3.5 4 7.2C19.5 16.4 12 21 12 21z"
        fill="currentColor"
      />
    </svg>
  );
}
function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <circle cx="17" cy="9" r="2.4" fill="currentColor" opacity="0.6" />
      <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6H2z" fill="currentColor" />
      <path d="M14.5 15c2.7.3 4.5 2.3 4.5 5h3c0-3-2.3-5.3-5-5.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
function BusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="11" rx="2" fill="currentColor" />
      <circle cx="7.5" cy="18" r="1.6" fill="currentColor" />
      <circle cx="16.5" cy="18" r="1.6" fill="currentColor" />
      <rect x="5.5" y="7.5" width="3.5" height="3.5" fill="white" />
      <rect x="10.5" y="7.5" width="3.5" height="3.5" fill="white" />
    </svg>
  );
}
function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2l8 3v6c0 5-3.4 8.7-8 11-4.6-2.3-8-6-8-11V5l8-3z" fill="currentColor" />
    </svg>
  );
}
function MonitorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="4" width="19" height="12" rx="1.5" fill="currentColor" />
      <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function RobotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="9" width="14" height="10" rx="2" fill="currentColor" />
      <circle cx="9.5" cy="14" r="1.4" fill="white" />
      <circle cx="14.5" cy="14" r="1.4" fill="white" />
      <path d="M12 4v3M9 4h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function MessageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 5h18v11H8l-5 4V5z" fill="currentColor" />
    </svg>
  );
}
