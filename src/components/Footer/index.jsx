import { user } from "../../data/user"

export const Footer = () => {
    return (
        <section>
            <div>
                <h2>Contato</h2>
                <img src="./src/assets/whatsapp-icon.png" alt="" />
                <img src="./src/assets/linkedin-icon.png" alt="" />
                <img src="./src/assets/github-icon.png" alt="" />
            </div>
            <span>Todos os direitos reservados - {user}</span>
        </section>
    )
}
