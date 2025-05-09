import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      key={project.title}
      href={project.href}
      className="flex gap-2 justify-between group hover:bg-muted/50 p-3 hover:dark:bg-slate-100/10 rounded-lg transition-colors duration-150"
      target="_blank"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={project.cover}
          alt={project.title}
          width={500}
          height={500}
          className="w-full rounded-md md:w-[120px] saturate-100 group-hover:saturate-150 transition-colors duration-150"
        />
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3>{project.title}</h3>
              <time className="opacity-60 text-sm md:hidden">
                {project.date}
              </time>
            </div>
            <p className="opacity-60 text-sm">{project.description}</p>
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
        <time className="opacity-60 text-sm">{project.date}</time>
      </div>
    </Link>
  );
}
