import { motion } from "motion/react";
import DefaultLayout from "@/layouts/default";
import { PROJECTS } from "../../constants";
import Image from "next/image";
import { Badge } from "../../components/ui/badge";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <DefaultLayout title="Projects">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="space-y-5 py-10"
      >
        <div>
          <h2 className="leading-relaxed font-semibold duration-150">
            All Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Link
              key={index + 1}
              href={project.href}
              target="_blank"
              className="group space-y-4 overflow-hidden rounded-md shadow transition-all duration-150 ease-in-out hover:shadow-md hover:ring-1 hover:ring-purple-500"
            >
              <div>
                <Image
                  src={project.cover}
                  alt="project"
                  width={200}
                  height={200}
                  className="w-full rounded-t-md transition-all duration-150 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-4">
                <div>
                  <h2>{project.title}</h2>
                  <p className="text-sm text-slate-400">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="place-items-end">
                  <p className="text-xs">{project.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </DefaultLayout>
  );
}
