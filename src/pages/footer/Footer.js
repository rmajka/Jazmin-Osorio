import styles from "./Footer.module.css";
import SocialMediaBox from "../../components/socialmediabox/SocialMediaBox";

export default function Footer() {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <footer className={styles.container}>
      <SocialMediaBox />

      <p>
        Created by&nbsp;
        <a
          className={styles.footerAnchor}
          href="https://www.rmajka.com"
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
        >
          <em>Rafał Majka</em>
        </a>
      </p>
    </footer>
  );
}
