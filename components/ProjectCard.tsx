import Image from "next/image";
import type { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  work: string;
  technologies: string[];
  action?: ReactNode;
};

export default function ProjectCard({
  title,
  imageSrc,
  imageAlt,
  description,
  work,
  technologies,
  action,
}: ProjectCardProps) {
  return (
    <article className="project-shadow bg-surface flex flex-col overflow-hidden rounded-xl transition-transform duration-300 ease-out hover:scale-[1.02]">
      <div className="bg-surface relative aspect-video w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 480px, (min-width: 640px) 420px, 88vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-english text-lg font-bold">{title}</h3>

          {action}
        </div>

        <p className="text-muted mt-3 min-h-13 text-sm leading-[1.8]">
          {description}
        </p>

        <div className="text-subtle mt-3 text-[13px]">{work}</div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="chip">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
