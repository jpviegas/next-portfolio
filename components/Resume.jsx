/* eslint-disable import/no-unresolved */
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "../styles/Resume.module.scss";
import Section from "./Section";

function Card({ title, institution, grade, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.cardTitle}>
          <h4>{title}</h4>
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
    <Section id="resume">
      <span className={styles.subtitle}>experiencia</span>
      <h1 className={styles.title}>Currículo</h1>
      <div className={styles.tabs}>
        <button
          type="button"
          className={ed ? styles.tabActive : undefined}
          onClick={() => {
            setEd(true);
            setExp(false);
          }}
        >
          <span>Educação</span>
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
              <span className={styles.subtitle}>2010</span>
              <h2 className={styles.title2}>Educação</h2>
              <div className={styles.rows}>
                <div className={styles.cards}>
                  <Card
                    description="ufrn"
                    grade="Bacharel em Estatística"
                    institution="UFRN"
                    title="UFRN"
                  />
                  <Card
                    description="card ed 2"
                    grade="card ed 2"
                    institution="card ed 2"
                    title="card ed 2"
                  />
                </div>
              </div>
            </div>
          )}
          <div className={styles.experiencie}>
            {exp && (
              <div className={styles.education}>
                <span className={styles.subtitle}>2017</span>
                <h2 className={styles.title2}>Experiência</h2>
                <div className={styles.rows}>
                  <div className={styles.cards}>
                    <Card
                      description="#TODO:"
                      grade="Rifóles"
                      institution="Rifóles"
                      title="Rifóles"
                    />
                    <Card
                      description="card ex 2"
                      grade="card ex 2"
                      institution="card ex 2"
                      title="card ex 2"
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
