import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      key={project.title}
      href={project.href}
      className="group border-muted/0 hover:border-muted/10 hover:bg-muted/50 -mx-2 flex justify-between gap-6 rounded-md p-2 transition-colors duration-150"
      target="_blank"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <Image
          src={project.cover}
          alt={project.title}
          width={500}
          height={500}
          className="w-full rounded-md saturate-100 transition-colors duration-150 group-hover:saturate-150 md:w-[120px]"
          priority
        />
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3>{project.title}</h3>
              <time className="text-sm opacity-60 md:hidden">
                {project.date}
              </time>
            </div>
            <p className="text-sm opacity-60">{project.description}</p>
          </div>
          <div className="space-x-2">
            {project.tags.map((tag, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-foreground/50"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <time className="text-sm opacity-60">{project.date}</time>
      </div>
    </Link>
  );
}
