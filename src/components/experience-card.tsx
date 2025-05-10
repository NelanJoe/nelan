import Link from "next/link";
import type { Experience } from "@/types";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <Link
      href={experience.href}
      target="_blank"
      className="hover:bg-muted/50 -mx-2 rounded-xs p-2"
    >
      <div className="space-y-1">
        <h3>{experience.company}</h3>
        <p className="text-sm opacity-80">{experience.title}</p>
      </div>
      <p className="text-sm opacity-60">{experience.date}</p>
    </Link>
  );
}
