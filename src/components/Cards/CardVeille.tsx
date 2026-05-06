import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import type { Veille } from "../../types/index";

type Props = {
    veille: Veille;
};

function CardVeille({ veille }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative rounded-2xl bg-white/5 border border-white/10 p-4 cursor-pointer overflow-hidden transition-colors duration-100 hover:bg-white/10 hover:border-pink-400/30">
            <div onClick={() => setOpen(!open)} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <FaChevronRight className={`text-[#FFB6C1] transition-transform duration-200 ${open ? "rotate-90" : ""}`} />

                    <div>
                        <h3 className="text-lg font-semibold text-white">{veille.titre}</h3>
                        <h4 className="text-md text-[#94A3B8]">{veille.description}</h4>
                    </div>
                </div>

                <p className="text-xs text-gray-500">{veille.date}</p>
            </div>

            <div className={`cursor-default overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${open ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent mb-4" />

                <div className="text-[#CBD5F5] space-y-4 text-sm">

                    <p className="text-justify">{veille.introduction}</p>

                    {Object.entries(veille.sections).map(([title, paragraphes]) => (
                        <div key={title}>
                            <h4 className="text-white font-semibold mb-2">{title}</h4>
                            {paragraphes.map((p, i) => (
                                <p key={i} className="text-justify mb-2">{p}</p>
                            ))}
                        </div>
                    ))}

                    <p className="text-justify italic text-[#94A3B8]">{veille.conclusion}</p>

                    <div>
                        <h4 className="text-white font-semibold mb-1">Sources</h4>
                        <ul className="space-y-1">
                            {Object.entries(veille.sources).map(([label, link]) => (
                                <li key={label}>
                                    <a
                                        href={link}
                                        target="_blank"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-pink-300 hover:underline"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardVeille;