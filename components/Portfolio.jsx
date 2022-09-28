import p50d from "../assets/50p50d.png";
import ebtyr from "../assets/ebytr.png";
import pixelArt from "../assets/pixelart.png";
import todoApp from "../assets/todoapp.png";
import styles from "../styles/Portfolio.module.scss";
import PortfolioCard from "./PortfolioCard";
import Section from "./Section";

function Portfolio() {
  return (
    <Section id="portfolio" className={styles.portfolio}>
      <span className={styles.subtitle}>Visite meu portfólio</span>
      <h1 className={styles.title}>Portfólio</h1>
      <div className={styles.cards}>
        <PortfolioCard
          imageSource={p50d}
          category="html/css"
          description="50 projects in 50 days"
          projectLink="https://jp-50projects50days.netlify.app/"
        />
        <PortfolioCard
          imageSource={ebtyr}
          category="react + mysql"
          description="ToDo app com back end mysql"
          projectLink="https://github.com/jpviegas/ebytr"
        />
        <PortfolioCard
          imageSource={pixelArt}
          category="css/javascript"
          description="Crie arte em pixel"
          projectLink="https://jp-pixelart.netlify.app/"
        />
        <PortfolioCard
          imageSource={todoApp}
          category="react"
          description="Gerencie sua lista de tarefas"
          projectLink="https://jp-todoapp.netlify.app/"
        />
      </div>
    </Section>
  );
}

export default Portfolio;
