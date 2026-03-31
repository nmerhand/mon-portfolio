import type { Skill } from "../../types";

interface CardSkillProps {
    skill: Skill;
}

const CardSkill : React.FC<CardSkillProps> = ({skill}) => {
    return (
        <div className="space-y-10">

            <section>
                <h2 className="text-2xl font-semibold text-white">Informatique</h2>

                <div className="mt-4 space-y-4">
                    {Object.entries(skill.informatique).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-sm text-[#94A3B8] mb-2">{category}</h3>

                            <div className="flex flex-wrap gap-2">
                                {items.map((item, index) => (
                                    <span
                                        key={index}
                                        className="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white">Outils</h2>

                <div className="mt-4 space-y-4">
                    {Object.entries(skill.outils).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-sm text-[#94A3B8] mb-2">{category}</h3>

                            <div className="flex flex-wrap gap-2">
                                {items.map((item, index) => (
                                    <span
                                        key={index}
                                        className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white">Soft skills</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                    {skill.soft.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-[#79E0EE]/10 text-[#79E0EE] px-3 py-1 rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default CardSkill