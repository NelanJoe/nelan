import Link from "next/link";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[23rem] md:grid-cols-3",
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
  cover,
  description,
  href,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  href: string;
  header?: React.ReactNode;
  description?: string | React.ReactNode;
  cover?: React.ReactNode;
  badge?: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 rounded-xl border border-neutral-200 bg-white p-2.5 transition duration-200 hover:shadow-xl dark:border-white/20 dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {cover}
      <div className="transition duration-200 group-hover/bento:translate-y-1">
        <div className="mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="space-y-2">
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
          {badge}
        </div>
      </div>
    </Link>
  );
};
