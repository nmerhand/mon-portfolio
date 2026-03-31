import { useState } from "react"
import CardProject from "../components/Cards/CardProject"
import { projects } from "../data/projects"
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import ModaleProject from "../components/Modales/ModaleProjects";
import type { Project } from "../types";

function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project>();

    const handleProjectClick = (project:Project) => {
        setSelectedProject(project);
        setIsVisible(true);
    }

    return (
        <div className="bg-[#1A1A2E] min-h-screen">
            <div className="pb-12 h-screen w-full flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Mes Projets</h1>
                <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8">
                    Plongez dans les projets qui ont façonné mon parcours.
                </p>
                <ButtonPrimary message="Voir mes projets" href="#projects" />
            </div>
            <div id="projects" className="pt-12 pb-22 border-t-8 border-[#FFB6C1] grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
                {projects.map((project) => (
                    <CardProject key={project.id} projet={project} onClick={() => handleProjectClick(project)} />
                ))}
            </div>
            {isVisible && selectedProject && (
                <ModaleProject project={selectedProject} onClick={() => setIsVisible(false)} />
            )}
        </div>
    )
}

export default Projects