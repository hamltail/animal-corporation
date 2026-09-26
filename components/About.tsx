import { useTranslations } from "next-intl";

import Container from "@/components/Container";

type ValueIconProps = {
  type: "humanCentered" | "thoughtful" | "rightTechnology" | "simpleBeautiful";
};

function ValueIcon({ type }: ValueIconProps) {
  const commonProps = {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    className: "about-value-icon text-primary size-12 shrink-0",
  };

  if (type === "humanCentered") {
    return (
      <svg {...commonProps}>
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="24" cy="19" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M16.5 33C17.7 28.8 20.2 26.5 24 26.5C27.8 26.5 30.3 28.8 31.5 33"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "thoughtful") {
    return (
      <svg {...commonProps}>
        <path
          d="M7 10H41V32H25L15 39V32H7V10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 27L17.8 21C15.3 18.6 17 14.5 20.5 14.5C22 14.5 23.3 15.2 24 16.4C24.7 15.2 26 14.5 27.5 14.5C31 14.5 32.7 18.6 30.2 21L24 27Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "rightTechnology") {
    return (
      <svg {...commonProps}>
        <circle
          cx="20"
          cy="20"
          r="13"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M29.5 29.5L40 40"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M13.5 20L18 24.5L26.5 15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect
        x="8"
        y="14"
        width="26"
        height="26"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M39 6V14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M35 10H43"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M40 22V28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M37 25H43"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-32">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="w-full md:max-w-140">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
            <h2
              id="about-title"
              className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
            >
              About
            </h2>

            <span className="font-japanese text-primary text-2xl font-bold">
              {t("label")}
            </span>
          </div>

          <p className="text-foreground mt-16 text-2xl leading-[1.6] font-medium">
            {t("leadFirst")}
            <br />
            {t("leadSecond")}
          </p>

          <p className="text-muted mt-16 text-base leading-[1.8]">
            {t("description")}
          </p>
        </div>

        <div className="pt-0 md:pt-37.5">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="about-value-card about-value-blue bg-surface-soft flex h-30 w-full items-center gap-6 rounded-lg px-6">
              <ValueIcon type="humanCentered" />

              <div>
                <h3 className="about-value-title font-english text-sm font-bold tracking-widest">
                  Human Centered
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t("humanCentered")}
                </p>
              </div>
            </article>

            <article className="about-value-card about-value-red bg-surface-soft flex h-30 w-full items-center gap-6 rounded-lg px-6">
              <ValueIcon type="thoughtful" />

              <div>
                <h3 className="about-value-title font-english text-sm font-bold tracking-widest">
                  Thoughtful
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t("thoughtful")}
                </p>
              </div>
            </article>

            <article className="about-value-card about-value-yellow bg-surface-soft flex h-30 w-full items-center gap-6 rounded-lg px-6">
              <ValueIcon type="rightTechnology" />

              <div>
                <h3 className="about-value-title font-english text-sm font-bold tracking-widest">
                  Right Technology
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t("rightTechnology")}
                </p>
              </div>
            </article>

            <article className="about-value-card about-value-green bg-surface-soft flex h-30 w-full items-center gap-6 rounded-lg px-6">
              <ValueIcon type="simpleBeautiful" />

              <div>
                <h3 className="about-value-title font-english text-sm font-bold tracking-widest">
                  Simple &amp; Beautiful
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t("simpleBeautiful")}
                </p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
