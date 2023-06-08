import styles from "./SocialMediaBox.module.css";
import fb from "../../assets/logos/facebook.svg";
import insta from "../../assets/logos/insta.svg";
import linkedin from "../../assets/logos/linkedin.svg";

export default function SocialMediaBox() {
  return (
    <div className={styles.boxContainer}>
      <a
        className={styles.fbLink}
        href="https://m.facebook.com/jazmin.osorio.908"
        target="_blank"
        rel="noreferrer"
      >
        <img className={styles.fbLogo} src={fb} alt="facebook jazim osorio" />
      </a>
      <a
        className={styles.instaLink}
        href="https://www.instagram.com/jazmin_osmo/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={styles.instaLogo}
          src={insta}
          alt="instagram jazim osorio"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/jazminosoriom/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={styles.linkedinLogo}
          src={linkedin}
          alt="linkedin jazim osorio"
        />
      </a>
    </div>
  );
}
