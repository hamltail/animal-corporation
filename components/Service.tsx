import { useTranslations } from "next-intl";

import Container from "@/components/Container";

const services = [
  {
    title: "Web Design",
    messageKey: "webDesign",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-20"
      >
        <rect x="10" y="13" width="44" height="31" rx="2" />
        <path d="M26 51h12" />
        <path d="M29 44l-3 7" />
        <path d="M35 44l3 7" />
      </svg>
    ),
  },
  {
    title: "UI / UX Design",
    messageKey: "uiUxDesign",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-20"
      >
        <rect x="21" y="7" width="22" height="50" rx="5" />
        <path d="M29 11h6" />
        <path d="M29 52h6" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    messageKey: "webDevelopment",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-20"
      >
        <path d="m23 20-12 12 12 12" />
        <path d="m41 20 12 12-12 12" />
        <path d="m36 13-8 38" />
      </svg>
    ),
  },
  {
    title: "Quality & Improvement",
    messageKey: "qualityImprovement",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-20"
      >
        <rect x="27" y="7" width="10" height="10" rx="1" />
        <rect x="9" y="45" width="10" height="10" rx="1" />
        <rect x="27" y="45" width="10" height="10" rx="1" />
        <rect x="45" y="45" width="10" height="10" rx="1" />
        <path d="M32 17v12" />
        <path d="M14 29h36" />
        <path d="M14 29v16" />
        <path d="M32 29v16" />
        <path d="M50 29v16" />
      </svg>
    ),
  },
] as const;

export default function Service() {
  const t = useTranslations("Service");

  return (
    <section id="service" className="py-32">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="service-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
          >
            Service
          </h2>

          <span className="font-japanese text-primary text-2xl font-bold">
            {t("label")}
          </span>
        </div>

        <p className="text-muted mt-10 max-w-170 text-base leading-[1.8]">
          {t("introFirst")}
          <br />
          {t("introSecond")}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-surface-soft flex min-h-80 flex-col items-start rounded-lg p-6"
            >
              <div className="bg-surface text-foreground mx-auto flex size-32 items-center justify-center rounded-full">
                {service.icon}
              </div>

              <div className="mt-6 w-full">
                <h3 className="font-english text-lg font-bold">
                  {service.title}
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t(service.messageKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
