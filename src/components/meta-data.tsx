import Head from "next/head";
import { useTranslations } from "next-intl";
import { SITE } from "@/constants";

export default function MetaData({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const t = useTranslations("Site");
  const pageTitle = title ? `${title} | ${t("title")}` : t("title");
  const metaDescription = description || t("description");

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={t("author")} />
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <link rel="canonical" href={SITE.href} />

      {/* OPEN GRAPH (Untuk Preview di WA/Medsos) */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="/logo.svg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE.href} />
    </Head>
  );
}
