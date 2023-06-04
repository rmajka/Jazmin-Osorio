import styles from "./Home.module.css";
import mainPhoto from "../../assets/photos/avatar.jpg";

import React from "react";

export default function Home() {
  return (
    <section className={styles.homeContainer} id="home">
      <div className={styles.imgContainer}>
        <img
          className={styles.mainPhoto}
          src={mainPhoto}
          alt="jazmin osorio photo"
        />
      </div>

      <div className={styles.textContent}>
        <h1>Alimentación inteligente para una vida en equilibrio.</h1>
        <p>
          Mi PROPOSITO #1, es poder ayudarte a desarrollar un pensamiento
          crítico respecto a tu salud, aprendiendo acerca de suplementación y
          alimentos. Aquí podrás encontrar ANÁLISIS de suplementos,
          RECOMENDACIONES para elegir un buen suplemento, como vitaminas,
          minerales, proteínas, ...; CONOCIMIENTOS de super-alimentos para
          mantener y mejorar tu salud, y mucho más.
        </p>
      </div>
    </section>
  );
}
