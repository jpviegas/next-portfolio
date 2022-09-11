import Image from "next/image";
import me from "../public/me.jpg";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.imgContainer}>
        <Image width="100%" height="100%" objectFit="contain" src={me} />
      </div>
      <p>code by jpviegas</p>
    </footer>
  );
}

export default Footer;
