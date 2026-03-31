import CardSkill from "../components/Cards/CardSkill";
import { skills } from "../data/skills";

const About = () => {
    return (
        <div className="bg-[#1A1A2E] min-h-screen">
            <div className="p-8">

                <section className="mb-12">
                    <h1 className="text-5xl font-bold text-white mb-8">À propos de moi</h1>
                    <p className="mt-4 text-[#94A3B8]">
                        Aujourd'hui, je suis étudiante de deuxième année en BTS SIO, option SLAM, à La Joliverie. 
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-white mb-8">Parcours</h2>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-white mb-8">Compétences</h2>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <CardSkill skill={skills} />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-white mb-8">Mon CV</h2>
                    
                </section>
            </div>
        </div>
    );
};

export default About;