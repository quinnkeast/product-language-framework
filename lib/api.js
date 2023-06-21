import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const contentDirectory = join(process.cwd(), "_docs");

export function getPageSlugs() {
  return fs.readdirSync(contentDirectory);
}

export function getPageBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  
  return items;
}

export function getAllPages(fields = []) {
  const slugs = getPageSlugs();
  const pages = slugs
    .map((slug) => getPageBySlug(slug, fields))
  return pages;
}