import styles from "./Hamburger.module.css";

export default function Hamburger({ open, setOpen }) {
  return (
    <div
      className={styles.hamContainer}
      onClick={() => setOpen((curr) => !curr)}
    >
      <div className={open ? styles.oneOpen : styles.one}></div>
      <div className={open ? styles.twoOpen : styles.two}></div>
      <div className={open ? styles.threeOpen : styles.three}></div>
    </div>
  );
}
