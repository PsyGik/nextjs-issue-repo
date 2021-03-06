import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import AppBar from "../components/app-bar/app-bar";
import BarApp from "../components/bar-app/bar-app";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <AppBar brand="Next App" />
        <BarApp />
    </div>
  );
}
