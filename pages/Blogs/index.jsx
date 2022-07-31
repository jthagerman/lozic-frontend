import Head from "next/head";
import Image from "next/image";

import Layout from "/Components/Functional/Layout/index.jsx";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <p>content</p>
      </Layout>
    </>
  );
}
