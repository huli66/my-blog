import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <main className={styles.main}>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>BLog</a>
        </Link>
      </main>
    </Layout>
  );
};

export default Home;
