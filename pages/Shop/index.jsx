import Head from "next/head";
import Image from "next/image";

import Layout from "/Components/Functional/Layout/index.jsx";
import Shop from "Components/Functional/Shop";
export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Layout>
        <Shop />
      </Layout>
    </>
  );
}

export const getServerSideProps = () => {};
