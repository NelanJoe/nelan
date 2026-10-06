import { useRouter } from "next/router";
import { useLocale } from "next-intl";
import { Button } from "./ui/button";


const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  id: "Indonesia",
}

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const targetLocale = locale === "id" ? "en" : "id";

  const handleSwith = () => {
    const { pathname, query, asPath } = router;

    const asPathWithoutLocale = asPath.replace(new RegExp(`^/${locale}`), "") || "";

    router.replace({ pathname, query }, asPathWithoutLocale, { locale: targetLocale, scroll: false })
  }

  return (
    <div>
      <Button variant="outline" size="sm" onClick={handleSwith}>
        {LOCALE_LABELS[targetLocale]}
      </Button>
    </div>
  );
}
