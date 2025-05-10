// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
var posts = defineCollection({
  name: "posts",
  directory: "src/content/posts",
  include: "**/*.{md,mdx}",
  schema: (z) => ({
    title: z.string(),
    cover: z.string(),
    summary: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const slug = document._meta.path;
    return {
      ...document,
      mdx,
      slug
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
