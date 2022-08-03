import Head from "next/head";
import Image from "next/image";

import Layout from "/Components/Functional/Layout/index.jsx";
import HomePage from "Components/Functional/Home";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Lozic</title>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
