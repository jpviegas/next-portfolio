import styles from "../styles/Card.module.scss";

function Card({ icon, description, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}

export default Card;
