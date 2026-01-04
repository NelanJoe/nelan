import Link from "next/link";
import { motion } from "motion/react";
import { allPosts } from "content-collections";
import type { GetStaticPropsContext, InferGetServerSidePropsType } from "next";

import DefaultLayout from "@/layouts/default";
import Image from "next/image";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const posts = allPosts.filter((post) => post.locale === locale);

  return {
    props: {
      posts,
      messages: (await import(`../../i8n/${locale}.json`)).default,
    },
  };
};

export default function Blog({
  posts,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout title="Blog">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="space-y-5 py-10"
      >
        <div>
          <h2 className="animate-in fade-in leading-relaxed font-semibold duration-150">
            Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group border-muted/0 hover:border-muted/10 hover:bg-muted/50 -mx-2 flex gap-4 rounded-sm p-2 transition-colors duration-150"
            >
              <Image
                src={post.cover}
                alt={post.title}
                width={80}
                height={80}
                priority
                className="rounded-md grayscale-100 transition-colors duration-150 group-hover:grayscale-0"
              />
              <div>
                <p>{post.title}</p>
                <p>{post.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </DefaultLayout>
  );
}
