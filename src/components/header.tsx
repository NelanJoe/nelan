import Link from "next/link";
import {
  MenuIcon,
  HomeIcon,
  FolderGit2Icon,
  BookOpenIcon,
  MailIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import NavLink from "./nav-link";
import LocaleSwitcher from "./locale-switcher";
import { ModeToggle } from "./mode-toggle";

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
          <LocaleSwitcher />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

const DesktopView = ({ hidden }: { hidden: string }) => {
  const t = useTranslations("Header");

  return (
    <div className={`${hidden} flex h-5 items-center gap-4`}>
      <NavLink href="/">{t("nav.home")}</NavLink>
      <Separator
        orientation="vertical"
        className="bg-slate-300/60 dark:bg-indigo-500"
      />
      <NavLink href="/projects">{t("nav.projects")}</NavLink>
      <Separator
        orientation="vertical"
        className="bg-slate-300/60 dark:bg-indigo-500"
      />
      <NavLink href="/blog">{t("nav.blog")}</NavLink>
      <Separator
        orientation="vertical"
        className="bg-slate-300/60 dark:bg-indigo-500"
      />
      <NavLink href="/contact">{t("nav.contact")}</NavLink>
    </div>
  );
};

const MobileView = ({ hidden }: { hidden: string }) => {
  const t = useTranslations("Header");

  return (
    <div className={`${hidden}`}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="size-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>{t("drawer.title")}</DrawerTitle>
          </DrawerHeader>

          <div className="mx-auto w-full max-w-sm px-6 py-4">
            <div className="bg-muted/40 mb-6 flex items-center gap-4 rounded-lg border p-4">
              <Avatar className="h-12 w-12 border-2 border-stone-500">
                <AvatarFallback>Ne</AvatarFallback>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/49295389?v=4"
                  alt="avatar"
                />
              </Avatar>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">Nelan</span>
                <span className="text-muted-foreground text-xs">
                  {t("drawer.role")}
                </span>
              </div>
            </div>

            {/* Menu Navigasi Vertikal */}
            <div className="flex flex-col space-y-2">
              <MobileLink href="/" icon={<HomeIcon className="size-5" />}>
                {t("nav.home")}
              </MobileLink>
              <MobileLink
                href="/projects"
                icon={<FolderGit2Icon className="size-5" />}
              >
                {t("nav.projects")}
              </MobileLink>
              <MobileLink
                href="/blog"
                icon={<BookOpenIcon className="size-5" />}
              >
                {t("nav.blog")}
              </MobileLink>
              <MobileLink
                href="/contact"
                icon={<MailIcon className="size-5" />}
              >
                {t("nav.contact")}
              </MobileLink>
            </div>
          </div>

          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                {t("drawer.close")}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const MobileLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <DrawerClose asChild>
      <Link
        href={href}
        className="hover:bg-muted flex items-center gap-4 rounded-md p-3 text-sm font-medium transition-colors"
      >
        <span className="text-stone-500 dark:text-stone-400">{icon}</span>
        <span className="text-base">{children}</span>
      </Link>
    </DrawerClose>
  );
};
