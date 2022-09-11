import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import hs from "../assets/50x50.png";
import me from "../public/me.jpg";
import styles from "../styles/Intro.module.scss";
import Section from "./Section";

function Intro() {
  return (
    <Section id="">
      <div className={styles.container}>
        <div className={styles.text}>
          <span className={styles.welcome}>Bem vindo!</span>
          <span className={styles.name}>
            <span>
              <span>Olá, eu sou </span>
              <span className={styles.nameColor}>João Paulo Viegas</span>
            </span>
            <span>Desenvolvedor Full stack</span>
          </span>
          <p className={styles.description}>
            Profissional focado no front end, com bastante conhecimento de back
            end, amante da música e ouvinte de podcasts.
          </p>
          <div className={styles.icons}>
            <div className={styles.socials}>
              <span />
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/joao-paulo-viegas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn>Linkedin</FaLinkedinIn>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jpviegas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub>GitHub</FaGithub>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className={styles.skills}>
              <span>Habilidades</span>
              <ul>
                <li>
                  <div className={styles.skill}>
                    <Image src={hs} alt="hard skill" width={25} height={25} />
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.inner}>
            <Image
              src={me}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
              alt="a picture of me"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Intro;
