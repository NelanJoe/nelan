import type { Experience } from "@/types";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="flex justify-between p-3 group hover:bg-muted/50 hover:dark:bg-slate-100/10 rounded-lg transition-colors duration-150">
      <div className="space-y-1">
        <h3>{experience.company}</h3>
        <p className="text-sm opacity-80">{experience.title}</p>
      </div>
      <p className="text-sm opacity-60">{experience.date}</p>
    </div>
  );
}
