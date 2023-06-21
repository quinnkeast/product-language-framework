import Head from "next/head";

import { HOME_OG_IMAGE_URL, SITE_NAME } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      <title>{SITE_NAME}</title>
      <script 
        src='https://cdn.usefathom.com/script.js'
        site={process.env.FATHOM}
        defer
      ></script>
    </Head>
  );
}