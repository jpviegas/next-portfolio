import { JackInTheBox } from "react-awesome-reveal";
import { DiMysql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import styles from "../styles/Features.module.scss";
import Card from "./Card";
import Section from "./Section";

function Features() {
  return (
    <Section>
      <span className={styles.subtitle} />
      <h1 className={styles.title}>Trabalho com:</h1>
      <div className={styles.cards}>
        <JackInTheBox cascade damping={0.05} triggerOnce>
          <Card
            icon={<SiHtml5 />}
            title="HTML 5"
            description="Utilização de tags semânticas e acessibilidade."
          />
          <Card
            icon={<SiCss3 />}
            title="CSS 3"
            description="Design, estilos e responsividade nas páginas."
          />
          <Card
            icon={<SiTypescript />}
            title="TypeScript"
            description="Superset de JavaScript com tipagens."
          />
          <Card
            icon={<FaReact />}
            title="ReactJS"
            description="Biblioteca para JavaScript. Criação de páginas web."
          />
          <Card
            icon={<DiMysql />}
            title="mySQL"
            description="Criação de banco de dados sql. Aplicação em API."
          />
          <Card
            icon={<SiMongodb />}
            title="MongoDB"
            description="Criação de banco de dados no-sql. Aplicação em API."
          />
          <Card
            icon={<SiExpress />}
            title="Express"
            description="Framework para back end em NodeJS. Criação de API."
          />
        </JackInTheBox>
      </div>
    </Section>
  );
}

export default Features;
