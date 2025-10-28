import { motion } from "motion/react";
import { EXPERIENCES, PROJECTS } from "@/constants";
import DefaultLayout from "@/layouts/default";
import ProjectCard from "@/components/project-card";
import ExperienceCard from "@/components/experience-card";
import { BentoGrid } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <DefaultLayout title="Home">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="space-y-20 py-10"
      >
        <div className="space-y-5">
          <div>
            <h2 className="animate-in fade-in text-lg leading-relaxed font-semibold duration-150">
              Nelan
            </h2>
            <p>Frontend Developer</p>
          </div>
          <div>
            <p className="leading-relaxed">
              I&apos;m a{" "}
              <span className="bg-underline relative inline-block bg-transparent transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-indigo-500 hover:bg-indigo-200 before:dark:bg-indigo-400">
                frontend developer
              </span>{" "}
              based in{" "}
              <span className="bg-underline relative inline-block bg-transparent transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-indigo-500 hover:bg-indigo-200 before:dark:bg-indigo-400">
                Bogor, Indonesia.
              </span>{" "}
              I specialize in building user interfaces for web applications
              using Next.js, React, and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-lg leading-relaxed font-semibold">My Projects</h2>
          <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </BentoGrid>
        </div>
        <div>
          <h2 className="text-lg leading-relaxed font-semibold">
            Work Experience
          </h2>
          <div className="mt-6 flex flex-col gap-2">
            {EXPERIENCES.map((experience) => (
              <ExperienceCard key={experience.title} experience={experience} />
            ))}
          </div>
        </div>
      </motion.section>
    </DefaultLayout>
  );
}
