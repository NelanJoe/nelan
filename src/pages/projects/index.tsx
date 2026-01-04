import path from "path";
import fs from "fs/promises";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

import DefaultLayout from "@/layouts/default";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants";

export default function ProjectsPage() {
  const tPage = useTranslations("ProjectsPage");
  const tProjects = useTranslations("Projects");

  return (
    <DefaultLayout title={tPage("meta_title")}>
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="space-y-8 py-10"
      >
        <div>
          <h2 className="text-2xl leading-relaxed font-semibold duration-150">
            {tPage("title")}
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            {tPage("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.id || index}
              href={project.href}
              target="_blank"
              className="group space-y-4 overflow-hidden rounded-md shadow-lg transition-all duration-150 ease-in-out hover:outline-1"
            >
              <div>
                <Image
                  src={project.cover}
                  alt={tProjects(`${project.id}.title`)}
                  width={400}
                  height={250}
                  className="aspect-video w-full rounded-t-md object-cover transition-all duration-150 group-hover:scale-105" // Tambahkan aspect-video agar rapi
                />
              </div>
              <div className="space-y-4 p-4">
                <div>
                  <h2 className="text-lg font-semibold">
                    {tProjects(`${project.id}.title`)}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {tProjects(`${project.id}.description`)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="place-items-end">
                  <p className="text-xs text-slate-400">{project.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  try {
    const filePath = path.join(process.cwd(), "src", "i8n", `${locale}.json`);
    const fileContents = await fs.readFile(filePath, "utf8");
    const messages = JSON.parse(fileContents);

    return {
      props: { messages },
    };
  } catch (error) {
    console.error("Error loading localization:", error);
    return { props: { messages: {} } };
  }
}
