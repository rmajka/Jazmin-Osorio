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
                position < 81 && position >= -400 ? styles.active : styles.link
              }
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={
                position < -400 && position >= -950
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
                position < -950 && position >= -1370
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
          className={position < -1370 ? styles.activeBtn : styles.contactoBtn}
          href="#contacto"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
