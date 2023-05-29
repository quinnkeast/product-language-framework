import Layout from '../components/Layout';
import Content from '../components/Content';
import Head from 'next/head';
import mdxToHtml from "../lib/mdxToHtml";
import { getPageBySlug, getAllPages } from "../lib/api";

export default function Page({ page, pages }) {
  return(
    <Layout>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Content page={page} pages={pages} path='content' key={page.slug} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug, [
    "title",
    "order",
    "content",
  ]);

  const content = (await mdxToHtml(page.content)) || "";

  const pages = await getAllPages([
    "slug", 
    "title"
  ]);

  return {
    props: {
      page: {
        ...page,
        content,
      },
      pages,
    },
  }
}

export async function getStaticPaths() {
  const pages = await getAllPages(["slug"]);

  return {
    paths: pages.map((page) => {
      return {
        params: {
          slug: page.slug,
        }
      }
    }),
    fallback: false,
  };
}