import { motion } from "motion/react";
import { EXPERIENCES, PROJECTS } from "@/constants";
import DefaultLayout from "@/layouts/default";
import ProjectCard from "@/components/project-card";
import ExperienceCard from "@/components/experience-card";

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
            <p className="text-foreground/60 leading-relaxed">
              Freshgraduate Informatics Engineering from STT Terpadu Nurul
              Fikri. I am a person who wants to develop a career in the field of
              Frontend Developer. Have a strong foundation in problem solving,
              team communication, communication, and skills in managing
              programming code in a structured manner.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-lg leading-relaxed font-semibold">My Projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
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
