/* eslint-disable import/no-unresolved */
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/PortfolioCard.module.scss";
import PortfolioModal from "./PortfolioModal";

function PortfolioCard({
  imageSource,
  category,
  likes,
  description,
  projectLink,
}) {
  const [active, setActive] = useState(false);
  const [parent] = useAutoAnimate();
  return (
    <div ref={parent}>
      <Fade fraction={0.2} duration={500}>
        <button
          type="button"
          className={styles.container}
          onClick={() => setActive(true)}
        >
          <div className={styles.imageContainer}>
            <Image
              src={imageSource}
              width="100%"
              height="100%"
              objectFit="cover"
              layout="responsive"
              alt="cover"
            />
          </div>
          <div className={styles.info}>
            <span className={styles.category}>{category}</span>
            <div className={styles.likes}>
              <FaHeart />
              <span>{likes}</span>
            </div>
          </div>
          <h2>{description}</h2>
        </button>
      </Fade>
      {active && (
        <PortfolioModal
          active={active}
          setActive={setActive}
          feature={category}
          imageSource={imageSource}
          title={description}
          projectLink={projectLink}
        />
      )}
    </div>
  );
}

export default PortfolioCard;
