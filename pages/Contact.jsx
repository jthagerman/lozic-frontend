import Head from "next/head";
import Contact from "Components/Functional/Contact";

import Layout from "/Components/Functional/Layout/index.jsx";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
