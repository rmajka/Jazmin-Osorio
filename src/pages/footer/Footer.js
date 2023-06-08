import styles from "./Footer.module.css";
import SocialMediaBox from "../../components/socialmediabox/SocialMediaBox";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <SocialMediaBox />
      <p>
        Created by&nbsp;
        <a href="https://www.rmajka.com/" target="_blank" rel="noreferrer">
          <em>Rafał Majka</em>
        </a>
      </p>
    </footer>
  );
}
