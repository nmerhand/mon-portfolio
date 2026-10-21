import { useState } from "react"
import CardProject from "../components/Cards/CardProject"
import { projects } from "../data/projects"
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import ModaleProject from "../components/Modales/ModaleProjects";
import type { Project } from "../types";
import Footer from "../components/Footer";

function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project>();

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsVisible(true);
    }

    return (
        <div>
            <div className="bg-[#1A1A2E] min-h-screen cursor-default">
                <div className="min-h-[calc(100svh-65px)] px-4 py-16 flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Mes Projets</h1>
                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8">
                        Plongez dans les projets qui ont façonné mon parcours.
                    </p>
                    <ButtonPrimary message="Voir mes projets" href="#projects" />
                </div>
                <div id="projects" className="py-12 border-y-8 border-[#FFB6C1] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
                    {projects.map((project) => (
                        <CardProject key={project.id} projet={project} onClick={() => handleProjectClick(project)} />
                    ))}
                </div>
                {isVisible && selectedProject && (
                    <ModaleProject project={selectedProject} onClick={() => setIsVisible(false)} />
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Projects