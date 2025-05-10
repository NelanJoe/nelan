import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "src/content/posts",
  include: "**/*.{md,mdx}",
  schema: (z) => ({
    title: z.string(),
    cover: z.string(),
    summary: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);

    const slug = document._meta.path;

    return {
      ...document,
      mdx,
      slug,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
