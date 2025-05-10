import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SOCIAL_LINKS } from "@/constants";
import DefaultLayout from "@/layouts/default";

export default function Contact() {
  return (
    <DefaultLayout title="Contact">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="space-y-5"
      >
        <div>
          <p>
            If you want to get in touch with me about something or just to say
            hi, reach out on social media or send me an email.
          </p>
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
                <span>{link.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </DefaultLayout>
  );
}
