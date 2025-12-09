import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  header,
  title,
  cover,
  description,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  header?: React.ReactNode;
  description?: string | React.ReactNode;
  cover: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/20 dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <Image
        alt={`${title}`}
        src={cover}
        width={200}
        height={200}
        className="w-full rounded-md border border-black/20 bg-cover object-cover md:h-[190px] lg:h-[190px] dark:border-white/20"
      />
      <div className="transition duration-200 group-hover/bento:translate-y-2">
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </Link>
  );
};
