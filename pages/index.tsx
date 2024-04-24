import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { NextPageWithLayout } from "@/models/common";
import { MainLayout } from "@/components/layout/main-layout/main-layout";
import { HomePages } from "@/components/home-pages";
import logo from "@/assets/logo-no-background.svg";
const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>King Shoes - Shoes Store</title>
        <meta name="description" content="Browse our collection of high-quality shoes at King Shoes Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href={logo.src} type="image/png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Proxima+Nova" />
      </Head>
      <main className={styles.main}>
        <HomePages />
      </main>
    </>
  );
};
Home.Layout = MainLayout;
export default Home;