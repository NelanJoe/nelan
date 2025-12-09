import Link from "next/link";
import { NextPageContext } from "next";
import { Icon } from "@iconify/react";
import DefaultLayout from "@/layouts/default";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent } from "@/components/ui/empty";

export default function Error({ statusCode }: { statusCode?: number }) {
  return (
    <DefaultLayout title={`${statusCode} - Error`}>
      <Empty>
        <EmptyContent>
          <div className="space-y-5">
            <h2 className="prose text-center text-6xl font-semibold">
              {statusCode}
            </h2>
            <p className="text-center">
              {statusCode
                ? `An error ${statusCode} occurred on server`
                : "An error occurred on client"}
            </p>
            <Button size="sm" asChild>
              <Link href="/">
                <Icon icon="mynaui-arrow-left" fontSize={24} />
                Back to Home
              </Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </DefaultLayout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
