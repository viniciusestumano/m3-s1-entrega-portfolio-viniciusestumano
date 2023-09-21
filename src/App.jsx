import { AboutMe } from "./components/AboutMe"
import { ProjectsPage } from "./components/Sections/ProjectsSection"
import { BannerSection } from "./components/Sections/BannerSection"
import { Tecnologies } from "./components/Sections/Techsection"
import { DefaultTemplate } from "./components/DefaultTemplate"
import "./styles/index.css"
function App() {

  return (
    <>
    <DefaultTemplate>
    <BannerSection />
    <AboutMe />
    <Tecnologies />
    <ProjectsPage />
    </DefaultTemplate>
    </>
  )
}

export default App
