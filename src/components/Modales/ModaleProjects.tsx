import { X } from 'lucide-react';
import type { Project } from '../../types';

interface ModaleProject {
    project: Project;
    onClick: () => void;
}

const ModaleProject: React.FC<ModaleProject> = ({ project, onClick }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClick}>

            <div className="mt-12 w-full max-w-4xl transform overflow-hidden rounded-2xl bg-[#16213E] p-8 text-left align-middle shadow-xl transition-all cursor-default" onClick={(e) => e.stopPropagation()}>

                <div className="flex justify-between">
                    <div>
                        <h2 className="text-3xl font-bold leading-6 text-[#FFFFFF] mb-2">{project.title}</h2>
                        <p className="text-base text-[#94A3B8] max-w-2xl mb-8">{project.descriptionCourte}</p>
                    </div>
                    <X className="text-[#FFFFFF] cursor-pointer" onClick={onClick} />
                </div>

                <div className="text-justify text-sm text-[#94A3B8] mb-8">{project.descriptionLongue}</div>

                

                <div>
                    <h3 className="text-xl text-[#FFFFFF] max-w-2xl mb-6">Accès au projet</h3>
                    {Object.entries(project.liens).map(([label, lien], index) => (
                        <a
                            key={index}
                            href={lien}
                            target='_blank'
                            className="mr-3 px-3 py-1.5 rounded-lg text-sm font-medium text-[#FF75A0] bg-[#FF75A0]/10 hover:bg-[#FF75A0]/20 transition-colors duration-200 shadow-sm"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModaleProject;