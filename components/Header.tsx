"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

import Container from "@/components/Container";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-surface relative z-50">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/animal-corporation-logo.png"
            alt="Animal Corporation Logo"
            className="company-logo size-8 object-contain"
            width={32}
            height={32}
          />

          <span className="font-english whitespace-nowrap text-base tracking-[0.18em]">
            Animal Corporation
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav
            aria-label={t("globalNavigation")}
            className="hidden shrink-0 md:block"
          >
            <ul className="text-muted flex items-center gap-8 whitespace-nowrap text-sm font-medium">
              <li>
                <a href="#about" className="nav-link">
                  {t("about")}
                </a>
              </li>

              <li>
                <a href="#news" className="nav-link">
                  {t("news")}
                </a>
              </li>

              <li>
                <a href="#contact" className="nav-link">
                  {t("contact")}
                </a>
              </li>

              <li>
                <a href="#recruit" className="nav-link">
                  {t("recruit")}
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="flex flex-col gap-1.5 md:hidden"
            aria-label={t("toggleMenu")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            <span
              className={`bg-foreground h-0.5 w-6 transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`bg-foreground h-0.5 w-6 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`bg-foreground h-0.5 w-6 transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          <ThemeSwitcher />
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label={t("mobileNavigation")}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`bg-surface absolute inset-x-7 top-20 rounded-b-2xl px-4 py-4 shadow-xl transition-opacity duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="text-muted flex flex-col gap-4 text-base font-medium">
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              {t("about")}
            </a>
          </li>

          <li>
            <a href="#news" className="nav-link" onClick={closeMenu}>
              {t("news")}
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              {t("contact")}
            </a>
          </li>

          <li>
            <a href="#recruit" className="nav-link" onClick={closeMenu}>
              {t("recruit")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
