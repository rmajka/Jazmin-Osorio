import styles from "./Navbar.module.css";
import SocialMediaBox from "../socialmediabox/SocialMediaBox";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState({
    home: false,
    sobremi: false,
    articulos: false,
  });

  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftSide}>
        <h4 className={styles.name}>Jazmin Osorio</h4>
        <ul className={styles.listContainer}>
          <li>
            <a
              className={activeLink.home ? styles.active : styles.link}
              onClick={() =>
                setActiveLink({ home: true, sobremi: false, articulos: false })
              }
              href="#home"
              on
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={activeLink.sobremi ? styles.active : styles.link}
              onClick={() =>
                setActiveLink({ home: false, sobremi: true, articulos: false })
              }
              href="#sobremi"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              className={activeLink.articulos ? styles.active : styles.link}
              onClick={() =>
                setActiveLink({ home: false, sobremi: false, articulos: true })
              }
              href="#articulos"
            >
              Artículos
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <SocialMediaBox />
        <a className={styles.contactoBtn} href="#contacto">
          Contacto
        </a>
      </div>
    </nav>
  );
}
