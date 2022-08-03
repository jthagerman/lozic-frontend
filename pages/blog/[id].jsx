import Head from "next/head";
import Image from "next/image";

import Layout from "/Components/Functional/Layout/index.jsx";

export default function BlogArticle() {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <Layout>
        <p>content</p>
      </Layout>
    </>
  );
}
