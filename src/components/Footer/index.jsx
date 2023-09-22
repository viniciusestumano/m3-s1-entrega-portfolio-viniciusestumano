import { user } from "../../data/user"
import styles from "./style.module.css"

export const Footer = () => {
    return (
        <section className={`footer__container ${styles.footer__container}`}>
            <div className={`img__footer ${styles.img__footer}`}>
                <h2 className="title2">Contato</h2>
                <img src="./src/assets/whatsapp-icon.png" alt="" />
                <img src="./src/assets/linkedin-icon.png" alt="" />
                <img src="./src/assets/github-icon.png" alt="" />
            </div>
            <p className="paragraph">Todos os direitos reservados - {user}</p>
        </section>
    )
}
