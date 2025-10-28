import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";
import { Icon } from "@iconify/react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} target="_blank" className={project.className}>
      <div className="relative flex flex-col items-start justify-between border border-black/20 p-4 transition duration-150 hover:scale-105 lg:h-70 dark:border-white/20">
        <Icon
          icon="mynaui:plus"
          className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white"
        />
        <Icon
          icon="mynaui:plus"
          className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white"
        />
        <Icon
          icon="mynaui:plus"
          className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white"
        />
        <Icon
          icon="mynaui:plus"
          className="absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white"
        />

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
