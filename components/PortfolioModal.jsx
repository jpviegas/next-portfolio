/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { FaThumbsUp, FaTimes } from "react-icons/fa";
import useOnClickOutside from "../hooks/useClickOutside";
import styles from "../styles/PortfolioModal.module.scss";

function PortfolioModal({
  setActive,
  feature,
  title,
  description,
  projectLink,
  imageSource,
}) {
  const modal = useRef();

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [modal]);

  useOnClickOutside(modal, () => setActive(false));

  return (
    <div className={styles.container}>
      <div className={styles.overflow}>
        <div className={styles.inner} ref={modal}>
          <div className={styles.close}>
            <div
              className={styles.svgContainer}
              onClick={() => setActive(false)}
            >
              <FaTimes />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.inner}>
                <Image
                  src={imageSource}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.info}>
              <span className={styles.feature}>{feature}</span>
              <span className={styles.title}>{title}</span>
              <p className={styles.description}>{description}</p>
              <div className={styles.actions}>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                  <button type="button">
                    <span>Ver Projeto</span>
                    <FaThumbsUp />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
