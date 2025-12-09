import { BentoGridItem } from "./ui/bento-grid";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <BentoGridItem
      header={project.title}
      description={project.description}
      className={project.className}
      cover={project.cover}
      href={project.href}
    />
  );
}
