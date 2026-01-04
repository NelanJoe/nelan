import { useRouter } from "next/router";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Link from "next/link";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const { route } = useRouter();
  const t = useTranslations("LocaleSwitcher");

  const targetLocale = locale === "id" ? "en" : "id";

  return (
    <div>
      <Button variant="outline" size="sm" asChild>
        <Link href={route} locale={targetLocale}>
          {t("label")}
        </Link>
      </Button>
    </div>
  );
}
