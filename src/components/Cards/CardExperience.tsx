import type React from "react";
import type { Experience } from "../../types";

interface CardExperienceProps {
    experience: Experience;
}

const CardExperience: React.FC<CardExperienceProps> = ({ experience }) => {
    return (
        <div className="my-5 p-4 bg-[#252539] rounded-2xl">
            <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition">{experience.company}</h3>
            <p className="text-base text-[#94A3B8] text-justify mb-8">{experience.description}</p>
            
            <div className="mt-4">
                {Array.isArray(experience.missions) ? (
                    <ul className="list-disc ml-4 space-y-1 text-justify text-sm text-[#94A3B8] mb-8">
                        {experience.missions.map((mission, index) => (
                            <li key={index}>{mission}</li>
                        ))}
                    </ul>
                ) : (
                    Object.entries(experience.missions).map(([projet, missions], index) => (
                        <div key={index} className="mb-3">
                            <h3 className="font-medium text-[#FF75A0]">{projet}</h3>
                            <ul className="list-disc ml-8 space-y-1 text-justify text-sm text-[#94A3B8] mb-8">
                                {missions.map((mission, i) => (
                                    <li key={i}>{mission}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>

            <div className="flex flex-wrap gap-2 my-4">
                {experience.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="text-xs bg-pink-500/10 text-pink-400 px-2 py-1 rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <div className="flex justify-between">
                <p className="text-gray-500 text-sm">
                    {experience.startDate} - {experience.endDate || "Présent"}
                </p>
                <p className="text-gray-500 text-sm">
                    {experience.contexte}
                </p>
            </div>
            
        </div>
    );
};

export default CardExperience;