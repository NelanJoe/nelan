import { SITE } from "@/constants";
import Head from "next/head";

export default function MetaData({ title }: { title?: string }) {
  return (
    <Head>
      <title>{`${title} | ${SITE.title}`}</title>
      <meta name="description" content={SITE.description} />
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <link rel="canonical" href={SITE.href} />

      {/* OPEN GRAPH */}
      <meta property="og:title" content={`${title} | ${SITE.title}`} />
      <meta property="og:description" content={SITE.description} />
      <meta property="og:image" content="/logo.svg" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
