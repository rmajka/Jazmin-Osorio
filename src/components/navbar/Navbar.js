import styles from "./Navbar.module.css";
import SocialMediaBox from "../socialmediabox/SocialMediaBox";

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftSide}>
        <h4 className={styles.name}>Jazmin Osorio</h4>
        <ul className={styles.listContainer}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobremi">Sobre mí</a>
          </li>
          <li>
            <a href="#articulos">Artículos</a>
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
