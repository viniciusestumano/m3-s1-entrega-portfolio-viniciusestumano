import styles from "../style.module.css"
export const TechSectionCard = ({image, title}) => {
    return (
        <>
        <div className={`techCard__container ${styles.techCard__container}`}>
        <img src={image} alt={`imagem ícone ${title}`} />
        <p className="paragraph">{title}</p>
        </div>
        </>
    )
}