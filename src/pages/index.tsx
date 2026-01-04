import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import path from "path";
import fs from "fs/promises";

import DefaultLayout from "@/layouts/default";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import ExperienceCard from "@/components/experience-card";
import { EXPERIENCES, PROJECTS } from "@/constants";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <DefaultLayout title={t("meta_title")}>
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
              {t("name")}
            </h2>
            <p>{t("tagline")}</p>
          </div>
          <div>
            <p className="leading-relaxed">
              {t.rich("about", {
                highlight: (chunks) => (
                  <span className="bg-underline relative inline-block bg-transparent transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-indigo-500 hover:bg-indigo-200 before:dark:bg-indigo-400">
                    {chunks}
                  </span>
                ),
              })}
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg leading-relaxed font-semibold">
              {t("projects_title")}
            </h2>
            <Button variant="ghost" asChild>
              <Link href="/projects">{t("see_more")}</Link>
            </Button>
          </div>

          <BentoGrid>
            {PROJECTS.slice(0, 3).map((project) => (
              <BentoGridItem
                key={project.id}
                title={project.title}
                href={project.href}
                className={project.className}
                description={project.description}
                cover={
                  <Image
                    src={project.cover}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover object-center"
                  />
                }
                badge={
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border px-2 py-0.5 text-xs text-[10px] font-medium text-neutral-500 dark:text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </div>

        {/* Experience Section */}
        <div className="space-y-8">
          <h2 className="text-lg leading-relaxed font-semibold">
            {t("experience_title")}
          </h2>
          <div className="relative ml-4">
            <div className="absolute inset-y-0 left-0 border-l-2" />
            {EXPERIENCES.map((experience) => (
              <ExperienceCard key={experience.title} experience={experience} />
            ))}
          </div>
        </div>
      </motion.section>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const filePath = path.join(process.cwd(), "src", "i8n", `${locale}.json`);

  let messages = {};
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    messages = JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
  }

  return {
    props: {
      messages,
    },
  };
}
