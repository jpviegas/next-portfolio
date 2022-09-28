import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useOnClickOutside from "../hooks/useClickOutside";
import me from "../public/me.jpg";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useRef(null);

  useOnClickOutside(mobileNav, () => setIsActive(false));

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.inner}>
        <div className={styles.me}>
          <Link href="/">
            <div className={styles.profile}>
              <Image
                width={100}
                height={100}
                objectFit="contain"
                src={me}
                alt="a picture of me"
              />
            </div>
          </Link>
        </div>
        <ul className={styles.navList}>
          <li>
            <Link href="#inicio">Início</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfólio</Link>
          </li>
          <li>
            <Link href="#habilidades">Habilidades</Link>
          </li>
          <li>
            <Link href="#curriculo">Currículo</Link>
          </li>
          <li>
            <Link href="#contato">Contato</Link>
          </li>
          <div className={styles.mobile}>
            <button
              type="button"
              onClick={() => setIsActive(true)}
              aria-label="open/close side nav menu"
            >
              <FaBars />
            </button>
          </div>
        </ul>
      </nav>
      <div
        className={`${styles.mobileNav} ${
          isActive ? undefined : styles.notActive
        }`}
      >
        <nav ref={mobileNav}>
          {isActive && (
            <ul className={styles.mobileNavList}>
              <div className={styles.close}>
                <button type="button" onClick={() => setIsActive(false)}>
                  <FaTimes />
                </button>
              </div>
              <li>
                <Link href="#inicio">Início</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfólio</Link>
              </li>
              <li>
                <Link href="#habilidades">Habilidades</Link>
              </li>
              <li>
                <Link href="#curriculo">Currículo</Link>
              </li>
              <li>
                <Link href="#contato">Contato</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
