import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} target="_blank" className={project.className}>
      <div className="flex flex-col items-start justify-between rounded-md border border-black/20 p-4 transition duration-150 hover:scale-105 lg:h-70 dark:border-white/20">
        <Image
          src={project.cover}
          alt={project.title}
          width={200}
          height={200}
          className="w-full rounded-md border border-black/20 object-cover md:h-[180px] lg:h-[180px] dark:border-white/20"
        />

        <div className="mt-4 space-y-2">
          <h2 className="text-sm font-light text-black dark:text-white">
            {project.title}
          </h2>
          <p className="rounded-full text-sm font-light text-black dark:border-white/20 dark:text-white">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
