import styles from "./Footer.module.css";
import SocialMediaBox from "../../components/socialmediabox/SocialMediaBox";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <SocialMediaBox />
      <span>
        Created by{" "}
        <a href="https://www.rmajka.com/" target="_blank">
          <em>Rafał Majka</em>
        </a>
      </span>
    </footer>
  );
}
