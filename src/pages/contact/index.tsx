import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import path from "path";
import fs from "fs/promises";
import type { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

import { SOCIAL_LINKS } from "@/constants";
import DefaultLayout from "@/layouts/default";

export default function Contact() {
  const t = useTranslations("ContactPage");
  const tSocials = useTranslations("Socials");

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
        className="space-y-5 py-10"
      >
        <div>
          <p>{t("description")}</p>
        </div>
        <div className="flex flex-col gap-2">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="border-muted dark:hover:bg-muted/50 flex items-center gap-4 rounded-xs border p-2 hover:bg-slate-50/50"
            >
              <div className="dark:bg-muted rounded-sm bg-slate-200/50 p-3">
                <Icon icon={link.icon} className="text-slate-500" width={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm opacity-60">{link.name}</span>
                <span>{tSocials(link.label.toLowerCase())}</span>
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
      props: {
        messages,
      },
    };
  } catch (error) {
    console.error("Error loading localization:", error);
    return { props: { messages: {} } };
  }
}
