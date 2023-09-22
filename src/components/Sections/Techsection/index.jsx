import { technologies } from "../../../data/technologies"
import { TechSectionCard } from "./TechSectionCard";
import styles from "./style.module.css";

export const Tecnologies = () => {
    return (
        <section className={`techSection__container ${styles.techSection__container}`}>
            <h2 className="title2">Tecnologias</h2>
            <ul>
                {
                    technologies.map((technologies) => {
                        return (
                            <li>
                                <TechSectionCard  image={technologies.img} title={technologies.name} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}