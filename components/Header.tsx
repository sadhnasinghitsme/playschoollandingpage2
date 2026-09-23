import Image from "next/image";
import { SCHOOL_NAME } from "@/config/constants";
import TopBar from "./TopBar";
import EnquireTrigger from "./EnquireTrigger";

export default function Header() {
  return (
    <div id="site-header">
      <TopBar />
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <a href="#top" aria-label={`${SCHOOL_NAME} — Home`} className="flex min-w-0 items-center">
            <Image
              src="/images/sks-logo.png"
              alt={`${SCHOOL_NAME} logo`}
              width={186}
              height={88}
              priority
              className="h-12 w-auto shrink-0 sm:h-11"
            />
          </a>
          <EnquireTrigger className="shrink-0 rounded-full bg-coral-600 px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-soft transition hover:bg-coral-700 sm:hidden">
            Enquire Now
          </EnquireTrigger>
        </div>
      </header>
    </div>
  );
}
