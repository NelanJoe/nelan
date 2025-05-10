import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={cn(
        "text-slate-600/30 transition-colors duration-150 hover:text-zinc-600 dark:text-slate-200/50 dark:hover:text-slate-200",
        isActive && "text-foreground dark:text-slate-200",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
