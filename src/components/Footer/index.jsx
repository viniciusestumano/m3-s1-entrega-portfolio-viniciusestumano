import { user } from "../../data/user"
import styles from "./style.module.css"
import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import gitIcon from "../../assets/github-icon.png"

export const Footer = () => {
    return (
        <section className={`footer__container ${styles.footer__container}`}>
            <div className={`img__footer ${styles.img__footer}`}>
                <h2 className="title2">Contato</h2>
                <img src={whatsappIcon} alt="" />
                <img src={linkedinIcon} alt="" />
                <img src={gitIcon} alt="" />
            </div>
            <p className="paragraph">Todos os direitos reservados - {user}</p>
        </section>
    )
}
