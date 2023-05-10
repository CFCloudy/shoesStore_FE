import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { NextPageWithLayout } from "@/models/common";
import { MainLayout } from "@/components/layout/main-layout/main-layout";
import { HomePages } from "@/components/home-pages";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Shoes Store</title>
        <meta name="description" content="Shoes Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="shortcut icon"
          href="https://file.hstatic.net/200000321771/file/aaa_e9159f8bafd648bfa39e1436fdbacb9d.png"
          type="image/png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Proxima+Nova"
        />
      </Head>
      <main className={styles.main}>
        <HomePages />
      </main>
    </>
  );
};
Home.Layout = MainLayout;
export default Home;
