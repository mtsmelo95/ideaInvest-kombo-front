import styles from './Header.module.css';
import KomboLogo from "../assets/LogoKomboColor.svg";
import LanguageMenu from './LanguageMenu';
import MenuLink from './MenuLink';
import Translate from "../components/Translate";
import translation from "../i18n/translation";

export default function Header() {
  return (
    <div className={styles.container}>
        <img src={KomboLogo} alt="Logo KOMBO" />
        <nav>
            <li><MenuLink href="#aboutUs"><Translate path={translation.header.aboutUs}/></MenuLink></li>
            <li><MenuLink href="#market"><Translate path={translation.header.market}/></MenuLink></li>
            <li><MenuLink href="#contact"><Translate path={translation.header.contact}/></MenuLink></li>
            <li><LanguageMenu /></li>
        </nav>
    </div>
  )
}
