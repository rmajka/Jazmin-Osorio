import styles from "./Navbar.module.css";
import SocialMediaBox from "../socialmediabox/SocialMediaBox";

export default function Navbar({ position }) {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftSide}>
        <h4 className={styles.name}>Jazmin Osorio</h4>
        <ul className={styles.listContainer}>
          <li>
            <a
              className={
                position < 81 && position >= -420 ? styles.active : styles.link
              }
              href="#home"
              on
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={
                position < -420 && position >= -1000
                  ? styles.active
                  : styles.link
              }
              href="#sobremi"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              className={
                position < -1000 && position > -1800
                  ? styles.active
                  : styles.link
              }
              href="#articulos"
            >
              Mis artículos
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <SocialMediaBox />
        <a
          className={position < -1800 ? styles.activeBtn : styles.contactoBtn}
          href="#contacto"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
