import React from "react";
import Header from "@/components/header";
import MetaData from "@/components/meta-data";

interface DefaultLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function DefaultLayout({
  children,
  title,
  description,
}: DefaultLayoutProps) {
  return (
    <>
      <MetaData title={title} description={description} />
      <div className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="mx-auto w-full max-w-3xl flex-1 px-4">{children}</main>
      </div>
    </>
  );
}
