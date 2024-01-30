
import styles from "./Cover.module.css";
import KomboLogo from "../assets/KomboLogoWhite.svg";
import Translate from "./Translate";
import translation from "../i18n/translation";

export default function Cover() {
   return (
      <div className={styles.container}>
         <div className={styles.blackFilter} />
         <img className={styles.coverImg} src={KomboLogo} alt="Logo Kombo" />
         <div className={styles.logoFooter}>Personagens e mundos</div>
         <button className={styles.button}><Translate path={translation.cover.buttom}/></button>
      </div>
   );
}