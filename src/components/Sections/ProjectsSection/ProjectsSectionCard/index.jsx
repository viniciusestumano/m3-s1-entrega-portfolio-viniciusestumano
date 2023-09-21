export const ProjectsSectionCard = ({name, description}) => {
    return (
        <>
        <li>
            <div>
                <h3>{name}</h3>
                <img src="./src/assets/github-icon.png" alt="" />
            </div>
                <p>{description}</p>
                <span>Saiba mais</span>
        </li>
        </>
    )
}