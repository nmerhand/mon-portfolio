import type { Skill } from "../../types";

type Color = "purple" | "pink" | "red" | "blue" | "amber";

interface CardSkillProps {
    skill: Skill;
    couleur: Color
}

const CardSkill: React.FC<CardSkillProps> = ({ skill, couleur }) => {

    const colorClasses: Record<Color, string> = {
        purple: "bg-purple-600/10 text-purple-500",
        pink: "bg-pink-500/10 text-pink-500",
        red: "bg-red-400/10 text-red-400",
        blue: "bg-blue-500/10 text-blue-500",
        amber: "bg-amber-500/10 text-amber-400"
    }; 

    const renderItems = (items: string[]) => (
        <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
                <span
                    key={index}
                    className={`${colorClasses[couleur]} px-3 py-1 rounded-full text-sm`}
                >
                    {item}
                </span>
            ))}
        </div>
    );

    return (
        <div className="group bg-[#252539] rounded-2xl p-6 shadow-md h-full flex flex-col justify-between">
            <section>
                <h2 className="text-2xl font-semibold text-white">{skill.categorie}</h2>

                <div className="mt-4 space-y-4">
                    {Array.isArray(skill.sous_catégorie)
                        ? renderItems(skill.sous_catégorie)
                        : Object.entries(skill.sous_catégorie).map(([subCat, items]) => (
                            <div key={subCat}>
                                <h3 className="text-sm text-[#94A3B8] mb-2">{subCat}</h3>
                                {renderItems(items)}
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default CardSkill;