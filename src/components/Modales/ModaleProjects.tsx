import { X } from 'lucide-react';
import type { Project } from '../../types';
import LinkPrimary from '../Buttons/LinkPrimary';

interface ModaleProject {
    project: Project;
    onClick: () => void;
}

const ModaleProject: React.FC<ModaleProject> = ({ project, onClick }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClick}>

            <div className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-[#16213E] p-8 text-left align-middle shadow-xl transition-all cursor-default" onClick={(e) => e.stopPropagation()}>

                <div className="flex justify-between">
                    <div>
                        <h2 className="text-3xl font-bold leading-6 text-[#FFFFFF] mb-2">{project.title}</h2>
                        <p className="text-base text-[#94A3B8] max-w-2xl mb-4">{project.descriptionCourte}</p>
                    </div>
                    <X className="text-[#FFFFFF] cursor-pointer" onClick={onClick} />
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
                    {Object.entries(project.liens).map(([label, lien], index) => (
                        <LinkPrimary key={index} message={label} href={lien} target="_blank" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModaleProject;