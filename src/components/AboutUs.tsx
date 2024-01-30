import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './AboutUs.module.css';
import charImg from '../assets/CharImg.svg';
import worldImg from '../assets/WorldImg.svg';
import Translate from './Translate';
import translation from '../i18n/translation';

export default function AboutUs() {
  const [springProps, set] = useSpring(() => ({
    opacity: 0,
  }));
 
  const handleScroll = () => {
    const offset = window.scrollY;
    set({
      opacity: offset > 100 ? 1 : 0,
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="aboutUs" className={styles.container}>
      <header>
        <h1><Translate path={translation.aboutUs.title}/></h1>
        <p><Translate path={translation.aboutUs.description}/></p>
      </header>
      <div className={styles.cardsContainer}>
        <animated.div className={`${styles.charCard}`} style={springProps}>
          <img className={styles.char} src={charImg} alt="Imagem de um Personagem" />
          <h3><Translate path={translation.aboutUs.card1Title}/></h3>
          <p>
          <Translate path={translation.aboutUs.card1Description}/>
          </p>
        </animated.div>
        <animated.div className={`${styles.charCard}`} style={springProps}>
          <img className={styles.world} src={worldImg} alt="Imagem do Mundo" />
          <h3><Translate path={translation.aboutUs.card2Title}/></h3>
          <p>
          <Translate path={translation.aboutUs.card2Description}/>
          </p>
        </animated.div>
      </div>
    </div>
  );
}
