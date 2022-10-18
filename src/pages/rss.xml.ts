import { SITE } from "src/config";
import rss from "@astrojs/rss";
import type { MarkdownInstance } from 'astro';
import type { Frontmatter } from "src/types";
import slugify from "@utils/slugify";

const postImportResult = import.meta.glob<MarkdownInstance<Frontmatter>>('../contents/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  title: SITE.title,
  description: SITE.desc,
  site: SITE.website + "/" + SITE.base + "/",
  items: posts.map((post) => ({
    link: import.meta.env.SITE + SITE.base + "/posts/" + slugify(post.frontmatter),
    title: post.frontmatter.title,
    pubDate: new Date(post.frontmatter.datetime),
    description: post.frontmatter.description
  }))
});
