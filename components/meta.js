import Head from "next/head";

import { HOME_OG_IMAGE_URL, SITE_NAME } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <title>{SITE_NAME}</title>
      <script 
        src='https://cdn.usefathom.com/script.js'
        site={process.env.FATHOM}
        defer
      ></script>
      <meta
        property="og:description"
        content="A comprehensive set of useful and semi-universal UX copywriting and style guidelines and examples to reference while designing and building products and interfaces."
        key="description"
      />
      <meta property="og:title" content={SITE_NAME} key="title" />
      <meta property="og:url" content="https://www.uxlanguage.com/" key="url" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="image" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@quinnkeast" />
      <meta property="twitter:creator" content="@quinnkeast" />
      <meta property="twitter:title" content={SITE_NAME} key="twitter-title" />
      <meta
        property="twitter:description"
        content="A comprehensive set of useful and semi-universal UX copywriting and style guidelines and examples to reference while designing and building products and interfaces."
        key="twitter-description"
      />
      <meta
        property="twitter:image"
        content={HOME_OG_IMAGE_URL}
        key="twitter-image"
      />
      <link rel="icon" href="/assets/favicon.ico" />
    </Head>
  );
}