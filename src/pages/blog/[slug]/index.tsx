import Link from "next/link";
import Image from "next/image";
import type {
  GetServerSidePropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from "next";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { ArrowLeftIcon } from "lucide-react";

import DefaultLayout from "@/layouts/default";
import { Button } from "@/components/ui/button";

export const getStaticPaths = (async () => {
  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = async ({ params }: GetServerSidePropsContext) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default function Post({
  post,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout title={post.title}>
      <section>
        <div className="my-10 px-4.5">
          <Button variant="link" asChild size="sm">
            <Link href="/blog" className="inline-flex items-center gap-2">
              <ArrowLeftIcon />
              <span>Back</span>
            </Link>
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="animate-in fade-in text-center text-2xl leading-relaxed font-semibold duration-150">
              {post.title}
            </h2>
          </div>
          <div className="my-16">
            <Image
              src={post.cover}
              alt="post-cover"
              width={200}
              height={200}
              className="h-96 w-full rounded-md object-cover"
            />
          </div>
          <article className="prose dark:prose-invert prose-h1:font-bold prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-md prose-headings:underline mx-auto pb-10">
            <MDXContent code={post.mdx} />
          </article>
        </div>
      </section>
    </DefaultLayout>
  );
}
