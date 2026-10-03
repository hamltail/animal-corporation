import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-surface-soft">
      <Container className="flex flex-col items-center gap-6 py-8 lg:h-24 lg:flex-row lg:justify-between lg:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/animal-corporation-logo.png"
            alt=""
            width={32}
            height={32}
            className="company-logo size-8 object-contain"
          />

          <span className="font-english whitespace-nowrap text-base tracking-[0.18em]">
            Animal Corporation
          </span>
        </Link>

        <div className="flex flex-col items-center gap-3">
          <nav aria-label={t("navigation")}>
            <ul className="text-muted flex flex-col items-center gap-4 text-sm lg:flex-row lg:gap-8">
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
            </ul>
          </nav>

          <LanguageSwitcher />
        </div>

        <p className="text-muted text-xs">© 2026 Animal Corporation</p>
      </Container>
    </footer>
  );
}
