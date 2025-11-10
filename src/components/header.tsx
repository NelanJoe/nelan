import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Separator } from "./ui/separator";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-3xl dark:bg-zinc-900/10">
      <nav className="mx-auto flex h-20 max-w-3xl items-center justify-between px-4">
        <div className="flex h-5 items-center gap-4">
          <Link href="/">
            <Avatar>
              <AvatarFallback>Ne</AvatarFallback>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/49295389?v=4"
                alt="avatar"
                decoding="async"
                loading="lazy"
                width={32}
                height={32}
              />
            </Avatar>
          </Link>
          <NavLink href="/">home</NavLink>
          <Separator orientation="vertical" className="bg-slate-300/60" />
          <NavLink href="/projects">projects</NavLink>
          <Separator orientation="vertical" className="bg-slate-300/60" />
          <NavLink href="/blog">blog</NavLink>
          <Separator orientation="vertical" className="bg-slate-300/60" />
          <NavLink href="/contact">contact</NavLink>
        </div>
        <div>
          <AnimatedThemeToggler duration={200} />
        </div>
      </nav>
    </header>
  );
}
