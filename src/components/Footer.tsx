import styles from "./Footer.module.css";
import LogoFooter from "../assets/LogoFooter.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import localeIcon from "../assets/locale.svg";
import phoneIcon from "../assets/phone.svg";
import Translate from "./Translate";
import translation from "../i18n/translation";

export default function Footer() {
   return (
      <div id="contact" className={styles.container}>
         <div className={styles.topDiv}>
            <img src={LogoFooter} alt="" />
            <div className={styles.data}>
               <img src={localeIcon} alt="Icone de local" />
               <p>
                  Tecnopuc Av. Ipiranga, 6681 CEP 90619-900 Prédio 96D - Sala
                  212 - 2º andar
               </p>
               <img src={phoneIcon} alt="Icone de Telefone" />
               <p>+1 55(51) 99334 - 4066</p>
               <div className={styles.icons}>
                  <a href="#">
                     <img
                        src={facebookIcon}
                        alt="Icone do Facebook"
                     />
                  </a>
                  <a href="#">
                     <img
                        src={instagramIcon}
                        alt="Icone do Instagram"
                     />
                  </a>
                  <a href="#">
                     <img
                        src={linkedinIcon}
                        alt="Icone do Linkedin"
                     />
                  </a>
               </div>
            </div>
         </div>
         <div className={styles.line}></div>
         <div className={styles.bottonDiv}>
            <div className={styles.footerLinks}>
               <nav>
                  <li>
                     <a href="#"><Translate path={translation.footer.aboutUs}/></a>
                  </li>
                  <li>
                     <a href="#"><Translate path={translation.footer.organization}/></a>
                  </li>
                  <li>
                     <a href="#"><Translate path={translation.footer.structureProduction}/></a>
                  </li>
               </nav>
            </div>

            <p>Copyright © 2023 • Game Pub</p>
         </div>
      </div>
   );
}
