import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import NavLink from "./nav-link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header>
      <nav className="max-w-3xl mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center gap-4 h-5">
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
          <NavLink href="/blog">blog</NavLink>
          <Separator orientation="vertical" className="bg-slate-300/60" />
          <NavLink href="/contact">contact</NavLink>
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
