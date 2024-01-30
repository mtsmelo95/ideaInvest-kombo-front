import styles from "./Market.module.css";
import Image1 from "../assets/Image1.svg";
import Image2 from "../assets/Image2.svg";
import Image3 from "../assets/Image3.svg";
import Image4 from "../assets/Image4.svg";
import Image5 from "../assets/Image5.svg";
import Image6 from "../assets/Image6.svg";
import Translate from "./Translate";
import translation from "../i18n/translation";

export default function Market() {
   return (
      <div id="market" className={styles.container}>
         <div className={styles.containerHead}>
            <h1><Translate path={translation.market.title}/></h1>
            <p>
            <Translate path={translation.market.description }/>
            </p>
         </div>

         <div className={styles.descriptions}>
            <div className={styles.line}>
               <div className={styles.description}>
                  <div className={styles.titleDescription}>1. <Translate path={translation.market.card1Title}/></div>

                  <p>
                  <Translate path={translation.market.card1Description}/>
                  </p>
               </div>
               <div className={styles.imageContainer}>
                  <img
                     className={styles.imagesDaEsquerda}
                     src={Image1}
                     alt="Imagens de Bonecos"
                  />
                  <img
                     className={styles.imagesDaDireita}
                     src={Image2}
                     alt="Imagens de Bonecos"
                  />
               </div>
            </div>

            <div className={styles.line}>
               <div className={styles.description}>
                  <div className={styles.titleDescription}>
                     2. <Translate path={translation.market.card2Title}/>
                  </div>

                  <p>
                  <Translate path={translation.market.card2Description}/>
                  </p>
               </div>
               <div className={styles.imageContainer}>
                  <img
                     className={styles.imagesDaEsquerda}
                     src={Image3}
                     alt="Imagens de Bonecos"
                  />
                  <img
                     className={styles.imagesDaDireita}
                     src={Image4}
                     alt="Imagens de Bonecos"
                  />
               </div>
            </div>

            <div className={styles.line}>
               <div className={styles.description}>
                  <div className={styles.titleDescription}>3. <Translate path={translation.market.card3Title}/></div>

                  <p>
                  <Translate path={translation.market.card3Description}/>
                  </p>
               </div>
               <div className={styles.imageContainer}>
                  <img
                     className={styles.imagesDaEsquerda}
                     src={Image5}
                     alt="Imagens de Bonecos"
                  />
                  <img
                     className={styles.imagesDaDireita}
                     src={Image6}
                     alt="Imagens de Bonecos"
                  />
               </div>
            </div>
         </div>

         <div className={styles.buttom}>
            <button><Translate path={translation.contact.button}/></button>
         </div>
      </div>
   );
}
