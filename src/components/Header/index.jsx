
export const Header = () => {
    return (
        <header className="header__container">
            <img src="./src/assets/portfolio.png" alt="logo portfolio" />
            <div className="contacts__container">
            <p className="paragraph">Sobre </p>
            <p className="paragraph">Stack </p>
            <p className="paragraph">Projetos </p>
            </div>
            <button className="btn__contact">Contato</button>
        </header>
    )
}