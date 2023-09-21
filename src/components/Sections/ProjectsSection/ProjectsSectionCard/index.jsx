export const ProjectsSectionCard = ({name, description}) => {
    return (
        <>
        <li className="cardProject">
            <div className="infoProject">
                <h3 className="title3">{name}</h3>
                <img src="./src/assets/github-icon.png" alt="" />
            </div>
                <p className="paragraph">{description}</p>
                <p className="spanName">Saiba mais</p>
        </li>
        </>
    )
}