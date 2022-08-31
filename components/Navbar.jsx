import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useOnClickOutside from "../hooks/useClickOutside";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const mobileNav = useRef(null);
  useOnClickOutside(mobileNav, () => setIsActive(false));
  const [isScrolled, setIsScrolled] = useState(false);
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
            <>
              <span>BIO</span>
              <div className={styles.profile}>
                <Image
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  src="/01.jpg"
                />
              </div>
            </>
          </Link>
        </div>
        <ul className={styles.nav_list}>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#resume">Resume</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <div className={styles.mobile}>
            <button type="button" onClick={() => setIsActive(true)}>
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
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#resume">Resume</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
