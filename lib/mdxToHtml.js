import { bundleMDX } from "mdx-bundler";

export default async function mdxToHtml(content) {
  const { code } = await bundleMDX({
    source: content,
  });
  return code;
}