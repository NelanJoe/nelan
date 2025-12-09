import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import NavLink from "./nav-link";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-3xl dark:bg-zinc-900/10">
      <nav className="mx-auto flex h-20 max-w-3xl items-center justify-between px-4">
        <div className="flex items-center space-x-5">
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
          {isDesktop && <DesktopView hidden={isDesktop ? "flex" : "hidden"} />}
        </div>
        <div className="flex items-center space-x-2">
          {!isDesktop && (
            <MobileView hidden={!isDesktop ? "block" : "hidden"} />
          )}
          <AnimatedThemeToggler duration={200} />
        </div>
      </nav>
    </header>
  );
}

const DesktopView = ({ hidden }: { hidden: string }) => {
  return (
    <div className={`${hidden} flex h-5 items-center gap-4`}>
      <NavLink href="/">home</NavLink>
      <Separator
        orientation="vertical"
        className="bg-slate-300/60 dark:bg-indigo-500"
      />
      <NavLink href="/projects">projects</NavLink>
      <Separator
        orientation="vertical"
        className="bg-slate-300/60 dark:bg-indigo-500"
      />
      <NavLink href="/blog">blog</NavLink>
      <Separator
        orientation="vertical"
        className="bg-slate-300/60 dark:bg-indigo-500"
      />
      <NavLink href="/contact">contact</NavLink>
    </div>
  );
};

const MobileView = ({ hidden }: { hidden: string }) => {
  return (
    <div className={`${hidden}`}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="size-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-xl px-4 pb-0">
            <div className="flex items-center gap-3">
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
              <h2 className="text-lg font-medium">Nelan</h2>
            </div>
            <Separator
              orientation="horizontal"
              className="my-4 bg-slate-400 dark:bg-indigo-500"
            />
            <div className="flex h-5 space-x-2">
              <NavLink href="/">home</NavLink>
              <Separator
                orientation="vertical"
                className="bg-slate-300/60 dark:bg-indigo-500"
              />
              <NavLink href="/projects">projects</NavLink>
              <Separator
                orientation="vertical"
                className="bg-slate-300/60 dark:bg-indigo-500"
              />
              <NavLink href="/blog">blog</NavLink>
              <Separator
                orientation="vertical"
                className="bg-slate-300/60 dark:bg-indigo-500"
              />
              <NavLink href="/contact">contact</NavLink>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="ghost" size="icon">
                <XIcon className="size-5" />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
