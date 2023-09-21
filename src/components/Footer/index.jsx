import { user } from "../../data/user"

export const Footer = () => {
    return (
        <section className="footer__container">
                <h2 className="title2">Contato</h2>
            <div className="img__footer">
                <img src="./src/assets/whatsapp-icon.png" alt="" />
                <img src="./src/assets/linkedin-icon.png" alt="" />
                <img src="./src/assets/github-icon.png" alt="" />
            </div>
            <p className="paragraph">Todos os direitos reservados - {user}</p>
        </section>
    )
}
