import styles from "./MobleNavbar.module.css";
import { useState } from "react";
import SocialMediaBox from "../socialmediabox/SocialMediaBox";
import Hamburger from "../hamburger/Hamburger";

export default function MobleNavbar({ position }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navContainer}>
        <h4 className={styles.name}>Jazmin Osorio</h4>
        <Hamburger open={open} setOpen={setOpen} />
      </nav>
      <div className={open ? styles.menuOpen : styles.menu}>
        <ul className={styles.listContainer}>
          <li>
            <a
              className={
                position < 81 && position >= -420
                  ? styles.linkActive
                  : styles.link
              }
              href="#home"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={
                position < -420 && position >= -1000
                  ? styles.linkActive
                  : styles.link
              }
              href="#sobremi"
              onClick={() => setOpen(false)}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              className={
                position < -1000 && position > -1900
                  ? styles.linkActive
                  : styles.link
              }
              href="#articulos"
              onClick={() => setOpen(false)}
            >
              Mis artículos
            </a>
          </li>
          <li>
            <a
              className={position < -1900 ? styles.linkActive : styles.link}
              href="#contacto"
              onClick={() => setOpen(false)}
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className={styles.socialBox}>
          <SocialMediaBox />
        </div>
      </div>
    </>
  );
}
