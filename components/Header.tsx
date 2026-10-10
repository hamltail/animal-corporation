"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      href: "#about",
      label: t("about"),
    },
    {
      href: "#news",
      label: t("news"),
    },
    {
      href: "#contact",
      label: t("contact"),
    },
    {
      href: "#recruit",
      label: t("recruit"),
    },
  ] as const;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-surface relative z-50">
      <div className="flex h-20 w-full items-center justify-between px-7 md:px-11">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/animal-corporation-logo.png"
            alt=""
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
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
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
                isMenuOpen ? "opacity-0" : ""
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
      </div>

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
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
