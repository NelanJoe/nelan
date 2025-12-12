import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const CONFIG_COLLECTION = {
  NAME: "posts",
  DIRECTORY: "src/content/posts",
};

const posts = defineCollection({
  name: CONFIG_COLLECTION.NAME,
  directory: CONFIG_COLLECTION.DIRECTORY,
  include: "**/*.{md,mdx}",
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    summary: z.string(),
    content: z.string(),
  }),
  transform: async (post, context) => {
    const mdx = await compileMDX(context, post, {
      rehypePlugins: [
        [
          rehypeShiki,
          {
            theme: "dracula",
          },
        ],
        [rehypePrettyCode],
      ],
      remarkPlugins: [remarkGfm],
    });

    const slug = post._meta.path;

    return {
      ...post,
      mdx,
      slug,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
