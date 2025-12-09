import { Building2Icon, CalendarRangeIcon } from "lucide-react";
import type { Experience } from "@/types";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="relative pb-12 pl-10 last:pb-0">
      {/* Timeline dot */}
      <div className="bg-accent ring-background absolute top-3 left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full ring-8">
        <Building2Icon className="size-5" />
      </div>
      {/* Content */}
      <div className="space-y-4 pt-2 sm:pt-1">
        <p className="text-base font-medium">{experience.company}</p>
        <div className="space-y-1.5">
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <div className="flex items-center gap-2 text-sm">
            <CalendarRangeIcon className="size-4" />
            <span>{experience.date}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
