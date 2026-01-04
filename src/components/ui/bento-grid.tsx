import Link from "next/link";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  cover?: React.ReactNode;
  badge?: React.ReactNode;
  href: string;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[22rem] md:grid-cols-3 md:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  cover,
  badge,
  href,
}: BentoGridItemProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "group/bento shadow-input row-span-1 flex h-full flex-col justify-between space-y-2 rounded-xl border border-neutral-200 bg-white p-3 transition duration-200 hover:shadow-xl dark:border-white/20 dark:bg-black dark:shadow-none",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
        {cover}
      </div>

      <div className="flex flex-1 flex-col justify-between p-1 transition duration-200 group-hover/bento:translate-y-1">
        <div className="space-y-2">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <div className="line-clamp-2 font-sans text-xs font-normal text-neutral-600 md:line-clamp-3 dark:text-neutral-300">
            {description}
          </div>
        </div>
        {badge && <div className="mt-4 pt-1">{badge}</div>}
      </div>
    </Link>
  );
};
