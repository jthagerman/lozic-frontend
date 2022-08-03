import Head from "next/head";
import Image from "next/image";

import Layout from "/Components/Functional/Layout/index.jsx";
import Blogs from "Components/Functional/Blogs";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Layout>
        <Blogs></Blogs>
      </Layout>
    </>
  );
}
