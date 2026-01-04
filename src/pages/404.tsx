import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import path from "path";
import fs from "fs/promises";
import type { GetStaticPropsContext } from "next";

import DefaultLayout from "@/layouts/default";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent } from "@/components/ui/empty";

export default function Custom404() {
  const t = useTranslations("ErrorPage");

  return (
    <DefaultLayout title={t("title", { statusCode: 404 })}>
      <Empty>
        <EmptyContent>
          <div className="space-y-5">
            <h2 className="prose text-center text-6xl font-semibold">404</h2>
            <p className="text-center">{t("client_error")}</p>
            <Button size="sm" asChild>
              <Link href="/">
                <Icon icon="mynaui-arrow-left" fontSize={24} />
                {t("back_home")}
              </Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  try {
    const filePath = path.join(process.cwd(), "src", "i8n", `${locale}.json`);
    const fileContents = await fs.readFile(filePath, "utf8");
    const messages = JSON.parse(fileContents);

    return {
      props: {
        messages,
      },
    };
  } catch (error) {
    return {
      props: {
        messages: {},
      },
    };
  }
}
