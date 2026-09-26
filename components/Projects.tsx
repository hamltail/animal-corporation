import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-32">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="projects-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
          >
            Projects
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

        <ProjectCarousel>
          <ProjectCard
            title="Pawth"
            imageSrc="/images/projects-pawth.png"
            imageAlt="Pawth project thumbnail"
            description={t("pawthDescription")}
            work={t("pawthWork")}
            technologies={["Haml", "Tailwind CSS", "Ruby on Rails"]}
            action={
              <a
                href="https://pawth-lp.hamltail.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label={t("pawthOpen")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M14 3h7v7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21H3V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            }
          />

          <ProjectCard
            title="Animal Corporation"
            imageSrc="/images/projects-animal-corporation.png"
            imageAlt="Animal Corporation project thumbnail"
            description={t("animalDescription")}
            work={t("animalWork")}
            technologies={["TypeScript", "React", "Next.js"]}
          />

          <ProjectCard
            title="Animal Caffee"
            imageSrc="/images/projects-animal-caffee.png"
            imageAlt="Animal Caffee project thumbnail"
            description={t("caffeeDescription")}
            work={t("caffeeWork")}
            technologies={["Figma", "HTML / CSS", "JavaScript"]}
            action={
              <span className="bg-surface-chip text-muted rounded px-3 py-1 text-xs font-medium">
                {t("comingSoon")}
              </span>
            }
          />
        </ProjectCarousel>
      </Container>
    </section>
  );
}
