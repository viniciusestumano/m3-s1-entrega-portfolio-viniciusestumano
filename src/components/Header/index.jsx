import styles from "./style.module.css";
import menuBanner from "../../assets/portfolio.png";

export const Header = () => {
    return (
        <header className={`header__container ${styles.header__container}`}>
            <img src={menuBanner} alt="logo portfolio" />
            <div className={`contacts__container ${styles.contacts__container}`}>
            <p className="paragraph">Sobre </p>
            <p className="paragraph">Stack </p>
            <p className="paragraph">Projetos </p>
            </div>
            <button className="btn__contact">Contato</button>
        </header>
    )
}