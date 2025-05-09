import Header from "@/components/header";
import MetaData from "@/components/meta-data";

export default function DefaultLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <MetaData title={title} />
      <Header />
      <div className="max-w-3xl mx-auto px-4">{children}</div>
    </>
  );
}
