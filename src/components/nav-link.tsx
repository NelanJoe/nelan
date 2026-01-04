import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link>;

export default function NavLink({
  href,
  children,
  className,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const targetPath = href.toString();

  const isActive =
    targetPath === "/" ? pathname === "/" : pathname?.startsWith(targetPath);

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-150",
        "text-slate-600/30 hover:text-zinc-600",
        "dark:text-slate-200/50 dark:hover:text-slate-200",
        isActive && "text-foreground dark:text-slate-200",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
