import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import type { Project } from '../../types';
import LinkPrimary from '../Buttons/LinkPrimary';

interface ModaleProject {
    project: Project;
    onClick: () => void;
}

const ModaleProject: React.FC<ModaleProject> = ({ project, onClick }) => {
    return createPortal(
        <div className="fixed inset-x-0 bottom-0 top-[73px] z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-6 md:top-[65px]" onClick={onClick}>

            <div className="w-full max-w-4xl max-h-full overflow-y-auto rounded-2xl bg-[#16213E] p-5 sm:p-8 text-left shadow-xl cursor-default" onClick={(e) => e.stopPropagation()}>

                <div className="flex justify-between gap-4">
                    <div className="min-w-0">
                        <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-[#FFFFFF] mb-2 break-words">{project.title}</h2>
                        <p className="text-base text-[#94A3B8] max-w-2xl mb-4">{project.descriptionCourte}</p>
                    </div>
                    <button type="button" aria-label="Fermer" className="shrink-0 text-[#FFFFFF]" onClick={onClick}><X /></button>
                </div>

                <div className="text-justify text-sm text-[#CBD5F5] mb-6">{project.descriptionLongue}</div>

                {/* <div className="text-justify text-sm text-[#CBD5F5] mb-6">
                    <h3 className="text-xl text-[#FFFFFF] max-w-2xl mb-4">Compétences développées durant le projet</h3>
                    {Object.values(project.competences ?? {}).flat().map((competence, index) => (
                        <ul className="list-disc ml-8 space-y-1 text-justify text-sm text-[#CBD5F5]">
                            <li key={index}>
                                {competence}
                            </li>
                        </ul>
                    ))}
                </div> */}

                <div>
                    <h3 className="text-xl text-[#FFFFFF] max-w-2xl mb-4">Accès au projet</h3>
                    {project.detailsConnexion && (
                        <p className='text-justify text-sm text-[#94A3B8] mb-2'>{project.detailsConnexion}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(project.liens).map(([label, lien], index) => (
                            <LinkPrimary key={index} message={label} href={lien} target="_blank" />
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ModaleProject;