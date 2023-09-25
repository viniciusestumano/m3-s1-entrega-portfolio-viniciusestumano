import styles from "../style.module.css"
import gitHubIcon from "../../../../assets/git-icon.png"
export const ProjectsSectionCard = ({name, description}) => {
    return (
        <>
        <li className={`cardProject ${styles.cardProject}`}>
            <div className={`infoProject ${styles.infoProject}`}>
                <h3 className="title3">{name}</h3>
                <img src={gitHubIcon} alt="" />
            </div>
                <p className="paragraph">{description}</p>
                <p className="spanName">Saiba mais</p>
        </li>
        </>
    )
}