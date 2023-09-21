import { user, username } from "../../../data/user"
export const BannerSection = () => {
    return (
        <section>
            <div>
                <span>{username}</span>
                <h1>
                    Bem vindo ao meu portfólio
                </h1>
                <span>
                    Uma frase interesante sobre mim
                </span>
                <button>Saiba mais</button>
            </div>
            <div><img src="./src/assets/banner-img.png" alt="banner imagem" /></div>
        </section>
    )
}