import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/Contact.module.scss";
import Section from "./Section";

function Contact() {
  return (
    <Section id="contato">
      <span className={styles.subtitle}>Contato</span>
      <h1 className={styles.title}>Entre em contato</h1>
      <div className={styles.container}>
        <div className={styles.connect}>
          <div className={styles.contact}>
            <div className={styles.phone}>
              <span>Telefone: </span>
              <span>(84) 99168-3700</span>
            </div>
            <div className={styles.email}>
              <span>Email: </span>
              <span>jp.viegas@hotmail.com</span>
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.links}>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/joao-paulo-viegas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jpviegas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
