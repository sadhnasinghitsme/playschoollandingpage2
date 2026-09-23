"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/config/constants";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./icons";
import TopBar from "./TopBar";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#why-sks" },
  {
    label: "Programs",
    href: "#programs",
    dropdown: [
      { label: "All Programs", href: "#programs" },
      { label: "Middle School (Classes 6–8)", href: "#program-middle" },
      { label: "Secondary (Classes 9–10)", href: "#program-secondary" },
      { label: "Senior Secondary (Classes 11–12)", href: "#program-senior-secondary" },
      { label: "Beyond the Classroom", href: "#program-beyond" },
    ],
  },
  { label: "Admissions", href: "#enquiry" },
  {
    label: "Gallery",
    href: "#gallery",
    dropdown: [
      { label: "Campus Photos", href: "#gallery" },
      { label: "Videos on YouTube", href: SOCIAL_LINKS.youtube, external: true },
    ],
  },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDesktopMenu(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenDesktopMenu(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div id="site-header">
      <TopBar />
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          <a href="#top" aria-label="SKS World School — Home" className="flex flex-wrap items-center gap-2.5">
            <Image
              src="/images/sks-logo.png"
              alt="SKS World School logo"
              width={186}
              height={88}
              priority
              className="h-10 w-auto shrink-0 sm:h-11"
            />
            <span className="inline-flex items-center gap-1 rounded-full border border-sunny-300 bg-sunny-50 px-2.5 py-0.5 text-[10px] font-bold text-coral-600 sm:text-xs">
              CBSE Affiliated <span aria-hidden="true">→</span>
            </span>
          </a>

          <nav ref={navRef} className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopMenu(item.label)}
                  onMouseLeave={() => setOpenDesktopMenu(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openDesktopMenu === item.label}
                    aria-controls={`${item.label}-dropdown`}
                    onClick={() =>
                      setOpenDesktopMenu((current) => (current === item.label ? null : item.label))
                    }
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-ink-900/80 transition hover:bg-sunny-50 hover:text-coral-500"
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`transition-transform ${openDesktopMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDesktopMenu === item.label && (
                    <div
                      id={`${item.label}-dropdown`}
                      className="absolute left-0 top-full min-w-[220px] pt-2"
                    >
                      <div className="overflow-hidden rounded-2xl border border-ink-900/5 bg-white py-2 shadow-soft">
                        {item.dropdown.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            onClick={() => setOpenDesktopMenu(null)}
                            className="block px-4 py-2 text-sm font-semibold text-ink-900/80 transition hover:bg-sunny-50 hover:text-coral-500"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-900/80 transition hover:bg-sunny-50 hover:text-coral-500"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Primary mobile"
            className="border-t border-sunny-100 bg-white px-4 pb-4 pt-2 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={openMobileMenu === item.label}
                        aria-controls={`mobile-${item.label}-panel`}
                        onClick={() =>
                          setOpenMobileMenu((current) => (current === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-900 hover:bg-sunny-50"
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={`transition-transform ${
                            openMobileMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMobileMenu === item.label && (
                        <div id={`mobile-${item.label}-panel`} className="ml-3 flex flex-col gap-0.5 border-l-2 border-sunny-100 pl-3">
                          {item.dropdown.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              onClick={() => {
                                setMenuOpen(false);
                                setOpenMobileMenu(null);
                              }}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-900/75 hover:bg-sunny-50"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-900 hover:bg-sunny-50"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
