import { technologies } from "../../../data/technologies"
import { TechSectionCard } from "./TechSectionCard";

export const Tecnologies = () => {
    return (
        <section>
            <h2>Tecnologias</h2>
            <ul>
                {
                    technologies.map((technologies) => {
                        return (
                            <li>
                                <TechSectionCard image={technologies.img} title={technologies.name} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}