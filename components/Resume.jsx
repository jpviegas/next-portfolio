/* eslint-disable import/no-unresolved */
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { GrDocumentPdf } from "react-icons/gr";
import styles from "../styles/Resume.module.scss";
import Section from "./Section";

function Card({ title, institution, grade, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.cardTitle}>
          <h2>{title}</h2>
          <span>{institution}</span>
        </div>
        <div className={styles.grade}>
          <div className={styles.gradeContainer}>
            <span>{grade}</span>
          </div>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

function Resume() {
  const [ed, setEd] = useState(true);
  const [exp, setExp] = useState(false);
  const [parent] = useAutoAnimate();

  return (
    <Section id="curriculo">
      <span className={styles.subtitle}>Experiência</span>
      <a
        href="/curriculo-JoaoPaulo-dev.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <h1 className={styles.title}>
          Currículo <GrDocumentPdf />
        </h1>
      </a>
      <div className={styles.tabs}>
        <button
          type="button"
          className={ed ? styles.tabActive : undefined}
          onClick={() => {
            setEd(true);
            setExp(false);
          }}
        >
          <span>Formação</span>
        </button>
        <button
          type="button"
          className={exp ? styles.tabActive : undefined}
          onClick={() => {
            setEd(false);
            setExp(true);
          }}
        >
          <span>Experiência</span>
        </button>
      </div>
      <div className={styles.tree} ref={parent}>
        <Fade duration={1000} triggerOnce>
          {ed && (
            <div className={styles.education}>
              <h2 className={styles.title2}>Formação acadêmica</h2>
              <div className={styles.rows}>
                <div className={styles.cards}>
                  <Card
                    description="Curso focado em hard skill e soft skill, com matérias que vão de comandos básicos do linux até higher order functions do ecma script 6 e estruturas de dados com python."
                    grade="Curso desenvolvedor full stack"
                    institution="Trybe"
                    title="Trybe"
                  />
                  <Card
                    description="Estatística, probabilidade, cálculo, algoritmo, banco de dados."
                    grade="Bacharel em Estatística"
                    institution="Universidade Federal do Rio Grande do Norte"
                    title="UFRN"
                  />
                  <Card
                    description="Curso imersivo, prático e interativo. Habilidades: mobile design, avaliação de interfaces e venda de produtos/serviços."
                    grade="Bootcamp UX Designer"
                    institution="Instituto de Gestão e Tecnologia"
                    title="IGTI"
                  />
                </div>
              </div>
            </div>
          )}
          <div className={styles.experiencie}>
            {exp && (
              <div className={styles.education}>
                <h2 className={styles.title2}>Experiência profissional</h2>
                <div className={styles.rows}>
                  <div className={styles.cards}>
                    <Card
                      description="Elaboração de gráficos e relatórios das avaliações internas da UFRN. De agosto de 2018 até agosto de 2022."
                      grade="Bolsista de pesquisa"
                      institution="Universidade Federal do Rio Grande do Norte"
                      title="UFRN"
                    />
                    <Card
                      description="Elaboração de planilhas, negociação com fornecedores de produtos para o setor de compras e para governança. De setembro de 2014 até janeiro de 2016."
                      grade="Assistente administrativo jovem aprendiz"
                      institution="Rifóles Praia Hotel e Resort"
                      title="Rifóles"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Fade>
      </div>
    </Section>
  );
}

export default Resume;
