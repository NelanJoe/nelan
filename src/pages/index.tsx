import { EXPERIENCES, PROJECTS } from "@/constants";
import DefaultLayout from "@/layouts/default";
import ProjectCard from "@/components/project-card";
import ExperienceCard from "@/components/experience-card";

export default function Home() {
  return (
    <DefaultLayout title="Home">
      <section className="py-10 space-y-20">
        <div className="space-y-5">
          <div>
            <h2 className="font-semibold text-lg leading-relaxed">Nelan</h2>
            <p>Frontend Developer</p>
          </div>
          <div>
            <p className="leading-relaxed text-foreground/60">
              Informatics Engineering student from STT Terpadu Nurul Fikri with
              a current GPA of 3.68 who wants to develop a career in the field
              of Frontend Developer. Have a strong foundation in problem
              solving, team communication, communication, and skills in managing
              programming code in a structured manner.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg leading-relaxed">My Projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg leading-relaxed">
            Work Experience
          </h2>
          <div className="flex flex-col gap-2 mt-6">
            {EXPERIENCES.map((experience) => (
              <ExperienceCard key={experience.title} experience={experience} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
