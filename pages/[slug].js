import { Component } from 'react';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Head from 'next/head';

const PageTemplate = props => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    </Head>
    <Content {...props} path='content' key={props.slug} />
  </Layout>
);

export default PageTemplate;

PageTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const config = await import(`../data/config.json`);
  const content = await import(`../docs/${slug}.md`);
  const pageData = matter(content.default);

  // Get pages from docs folder
  // Get all .md files from the docs dir
  const pages = (ctx => {
    const keys = ctx.keys();
    const values = keys.map(ctx);
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');

       const value = values[index];
       const document = matter(value.default);
       return {
         title: document.data.title,
         order: document.data.order,
         document,
         slug,
       };
    });
    return data;
  })(require.context('../docs/', true, /\.md$/));

  return {
    siteTitle: config.title,
    slug,
    pages,
    ...pageData
  }
}