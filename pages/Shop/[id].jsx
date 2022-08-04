import Head from "next/head";
import Image from "next/image";

import Layout from "/Components/Functional/Layout/index.jsx";
import Product from "Components/Functional/Product";

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <Layout>
        <Product />
      </Layout>
    </>
  );
}
