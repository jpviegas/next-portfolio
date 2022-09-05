import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
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
          <p className={styles.description}>TODO: descrição</p>
          <div className={styles.icons}>
            <div className={styles.socials}>
              <span />
              <ul>
                <li>
                  <a
                    href="http://github.com/jpviegas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/joao-paulo-viegas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.skills}>
              <span>Habilidades</span>
              <ul>
                <li>
                  <div className={styles.skill}>
                    <Image src="" alt="hard skill" width={25} height="20" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.inner}>
            <Image
              src={me}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="my photo"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Intro;
