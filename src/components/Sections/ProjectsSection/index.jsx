import { projects } from "../../../data/projects"
import { ProjectsSectionCard } from "./ProjectsSectionCard"
import styles from "./style.module.css"

export const ProjectsPage = () => {
    return (
        <section className={`projects__container ${styles.projects__container}`}>
            <h2 className="title2">Projetos</h2>
            <ul>
                {
                    projects.map((projetos) => {
                        return (
                            <li>
                                <ProjectsSectionCard name={projetos.name} description={projetos.description}/>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}