import { user, username } from "../../../data/user"
export const BannerSection = () => {
    return (
        <section className="banner__container">
            <div className="banner__container-info">
                <span className="spanName">{username}</span>
                <h1 className="title1">
                    Bem vindo ao meu portfólio
                </h1>
                <p className="paragraph">
                    Uma frase interesante sobre mim
                </p>
                <button className="btn">Saiba mais</button>
            </div>
            <div><img src="./src/assets/banner-img.png" alt="banner imagem" className="banner__container-img" /></div>
        </section>
    )
}