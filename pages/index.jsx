import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import touchicon from "../public/apple-touch-icon.png";
import favicon16 from "../public/favicon-16x16.png";
import favicon32 from "../public/favicon-32x32.png";
import favicon from "../public/favicon.ico";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div id="home" className={styles.container}>
      <Head>
        <title>jpviegas | Portfólio</title>
        <meta
          name="jpviegas portfolio"
          content="jpviegas portfolio created with nextjs"
        />
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={touchicon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <main className="global">
        <Intro />
        <Portfolio />
      </main>
    </div>
  );
}
