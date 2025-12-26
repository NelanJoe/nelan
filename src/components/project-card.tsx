import Image from "next/image";
import { BentoGridItem } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <BentoGridItem
      href={project.href}
      title={project.title}
      description={project.description}
      cover={
        <Image
          alt={project.title}
          src={project.cover}
          width={200}
          height={200}
          className="w-full rounded-md border border-black/20 bg-cover object-cover md:h-[200px] lg:h-[220px] dark:border-white/20"
        />
      }
      badge={
        <div className="flex flex-wrap gap-2">
          {project.tags.map((item, index) => (
            <Badge key={index} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      }
      className={project.className}
    />
  );
}
