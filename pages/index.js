import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AndinetFelekeTour</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a> Coming Soon</a>
        </h1>
        <p className={styles.subtitle}>Bringing you something exciting!!</p>

        <div className={styles.footer}>
          2022 <span>AndinetFelekeTour</span>
        </div>
      </main>
    </div>
  );
}
