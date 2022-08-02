import Head from "next/head";
import Image from "next/image";
import About from "Components/Functional/Home/About";

import Layout from "/Components/Functional/Layout/index.jsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
