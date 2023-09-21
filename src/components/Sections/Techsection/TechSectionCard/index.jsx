
export const TechSectionCard = ({image, title}) => {
    return (
        <>
        <div>
        <img src={image} alt={`imagem ícone ${title}`} />
        <p>{title}</p>
        </div>
        </>
    )
}