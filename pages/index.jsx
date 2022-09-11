import Head from "next/head";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div id="inicio" className={styles.container}>
      <Head>
        <title>jpviegas | Portfólio</title>
        lang
        <meta
          name="robots"
          content="portfolio,html,css,javascript,react,next"
        />
        <meta name="description" content="portfolio joão paulo viegas" />
        <meta
          name="jpviegas portfolio"
          content="jpviegas portfolio created with nextjs"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <main className="global">
        <Intro />
        <Portfolio />
        <Features />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
