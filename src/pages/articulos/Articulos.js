import styles from "./Articulos.module.css";
import photo from "../../assets/photos/grados.jpg";

export default function Articulos() {
  return (
    <section className={styles.container} id="articulos">
      <h1>ARTÍCULOS CIENTÍFICOS</h1>
      <div className={styles.textPhoto}>
        <div className={styles.topWithPhoto}>
          <ul className={styles.articulosTop}>
            <li>
              J. Osorio, M. Aznar, C. Nerín, C. Elliott, O. Chevallier,
              Comparison of LC-ESI, DART, and ASAP for the analysis of oligomers
              migration from biopolymer food packaging materials in food
              (simulants), Analytical and Bioanalytical chemistry 414(2021),
              DOI: 10.1007/s00216-021-03755-0
            </li>
            <li>
              J. Osorio, M. Aznar, C. Nerín, N. Birse, C. Elliott, O.
              Chevallier, Ambient mass spectrometry as a tool for a rapid and
              simultaneous determination of migrants coming from a bamboo-based
              biopolymer packaging, J. Hazard. Mater. 398 (2020). 122891.
              doi:10.1016/j.jhazmat.2020.122891.
            </li>
            <li>
              J. Osorio, N. Dreolin, M. Aznar, C. Nerín, P. Hancock,
              Determination of volatile non intentionally added substances
              coming from a starch-based biopolymer intended for food contact by
              different gas chromatography mass spectrometry approaches, J.
              Chromatogr. A. (2019). doi:10.1016/j.chroma.2019.04.007.
            </li>
            <li>
              J. Osorio, M. Aznar, C. Nerín, Identification of key odorant
              compounds in starch-based polymers intended for food contact
              materials, Food Chem. 285 (2019) 39–45.
              doi:10.1016/j.foodchem.2019.01.157.
            </li>
            <li>
              J. Osorio, S. Úbeda, M. Aznar, C. Nerín, Analysis of
              isophthalaldehyde in migration samples from polyethylene
              terephthalate packaging, Food Addit. Contam. Part A. 35 (2018)
              1645–1652. doi:10.1080/19440049.2018.1465208.
            </li>
          </ul>
          <img className={styles.img} src={photo} alt="phd jazmin osorio" />
        </div>
        <ul className={styles.articulos}>
          <li>
            J. Osorio, S. Úbeda, M. Aznar, C. Nerín, Analysis of
            isophthalaldehyde in migration samples from polyethylene
            terephthalate packaging, Food Addit. Contam. Part A. 35 (2018)
            1645–1652. doi:10.1080/19440049.2018.1465208.
          </li>
          <li>
            J. Osorio, C. Lopéz, J. Zapata. Characterization of aroma compounds
            in Colombian rums by HS-SPME-GC-MS-O. Revista Colombiana de Química.
            (2016) vol.45 no.2. doi: 10.15446/rev.colomb.quim.v45n2.60406.
          </li>
          <li>
            W. da S. Oliveira, J. Osorio Monsalve, C. Nerin, M. Padula, H.T.
            Godoy, Characterization of odorants from baby bottles by headspace
            solid phase microextraction coupled to gas
            chromatography-olfactometry-mass spectrometry, Talanta. 207 (2020)
            120301. doi:10.1016/J.TALANTA.2019.120301.
          </li>
          <li>
            M. Aznar, C. Domeño, J. Osorio, C. Nerin, Release of volatile
            compounds from cooking plastic bags under different heating sources,
            Food Packag. Shelf Life. 26 (2020) 100552.
            doi:10.1016/j.fpsl.2020.100552.
          </li>
          <li>
            J. Zapata, V. Londoño, M. Naranjo, J. Osorio, C. Lopez, M. Quintero,
            Characterization of aroma compounds present in an industrial
            recovery concentrate of coffee flavor, CYTA - J. Food. 16 (2018)
            367–372. doi:10.1080/19476337.2017.1406995.
          </li>
        </ul>
      </div>
    </section>
  );
}
