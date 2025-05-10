import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import type {
  GetServerSidePropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from "next";

import DefaultLayout from "@/layouts/default";

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
      <section className="py-10">
        <div className="mb-10">
          <h2 className="animate-in fade-in text-center text-2xl leading-relaxed font-semibold duration-150">
            {post.title}
          </h2>
        </div>
        <div>
          <MDXContent code={post.mdx} />
        </div>
      </section>
    </DefaultLayout>
  );
}
