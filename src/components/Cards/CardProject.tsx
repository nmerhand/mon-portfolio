import type { Project } from "../../types";

interface CardProjectProps {
    projet: Project;
    onClick?: () => void;
}

const CardProject: React.FC<CardProjectProps> = ({ projet, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-[#252539] rounded-2xl p-6 shadow-md hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col justify-between"
        >
            <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition">
                    {projet.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                    {projet.descriptionCourte}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.values(projet.tech).flat().map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-pink-500/10 text-pink-400 px-2 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">{projet.contexte}</p>
        </div>
    );
};

export default CardProject;