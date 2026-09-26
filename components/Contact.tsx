import { useTranslations } from "next-intl";

import Container from "@/components/Container";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-32">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="contact-title"
            className="font-english text-left text-[64px] leading-[1.2] font-bold tracking-widest"
          >
            Contact
          </h2>

          <span className="font-japanese text-primary text-2xl font-bold">
            {t("label")}
          </span>
        </div>

        <div className="text-center">
          <div className="catchphrase-area">
            <h3 className="catchphrase-title mt-16 text-2xl leading-[1.3] font-medium md:text-[28px] lg:mt-24 lg:text-[32px]">
              {t("title")}
            </h3>

            <p className="text-muted mx-auto mt-10 max-w-170 text-base leading-[1.8] md:mt-12 lg:mt-16">
              {t("description")}
            </p>
          </div>

          <a
            href="mailto:info@example.com"
            aria-label={t("mailLabel")}
            className="cta-button border-primary text-primary mx-auto mt-12 inline-flex h-12 w-full max-w-70 items-center justify-center gap-3 rounded-3xl border-2 text-base font-medium lg:mt-16"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="inline-block"
            >
              <path
                d="M3 6.5L12 13L21 6.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>

            <span>{t("button")}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
