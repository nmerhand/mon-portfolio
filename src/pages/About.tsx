import ButtonSecond from "../components/Buttons/ButtonSecond";
import CardSkill from "../components/Cards/CardSkill";
import Timeline from "../components/Timeline";
import { skills } from "../data/skills";
import { schools } from "../data/school";
import Footer from "../components/Footer";

function About() {
    const getColor = (categorie: string) => {
        switch (categorie.toLowerCase()) {
            case "informatique":
                return "purple";
            case "outils tech":
                return "blue";
            case "soft skills":
                return "pink";
            case "langues" :
                return "red";
            default:
                return "blue";
        }
    };

    return (
        <div>
            <div className="bg-[#1A1A2E] min-h-screen">
                <div className="p-8 cursor-default">

                    <section className="mb-12">
                        <h1 className="text-5xl font-bold text-white mb-8">À propos de moi</h1>
                        <p className="mt-4 text-[#CBD5F5] text-justify">
                            Aujourd'hui, je suis étudiante en deuxième année de BTS SIO, option SLAM, à La Joliverie. Là-bas, j'ai découvert une véritable passion pour le développement web. J'aime les puzzles, les énigmes et les casse-têtes, ce qui se traduit par mon goût pour résoudre des bugs et réfléchir à des solutions complexes. Ce que j'aime particulièrement dans le développement web, c'est de voir mes idées prendre forme immédiatement à l'écran — et, je l'avoue, que ce soit aussi joli que fonctionnel !
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-white mb-12">Mon CV</h2>
                        <ButtonSecond message="Télécharger mon CV" href="/MERHAND_Nora_CV.pdf" target="_blank" />
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-white mb-8">Parcours</h2>
                        <Timeline school={schools} />
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-white mb-8">Compétences</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skills.map((skill) => (
                                <CardSkill key={skill.id} skill={skill} couleur={getColor(skill.categorie)} />
                            ))}
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;