import ButtonPrimary from "../components/Buttons/ButtonPrimary"
import CardExperience from "../components/Cards/CardExperience"
import Footer from "../components/Footer"
import { experiences } from "../data/experiences"

function Experiences() {
    return (
        <div>
            <div className="bg-[#1A1A2E] min-h-screen cursor-default">
                <div className="pb-12 h-screen w-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Mes Expériences</h1>
                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8">
                        Retour sur mes expériences en entreprise et ce que j'y ai appris.
                    </p>
                    <ButtonPrimary message="Voir mes stages" href="#stages" />
                </div>

                <div id="stages" className="px-8 py-8 bg-[#1A1A2E] border-y-8 border-[#FFB6C1]">
                    <h2 className="text-4xl font-bold leading-6 text-[#FFFFFF] mb-10">Mes Stages</h2>
                    {experiences.map((experience) => (
                        <CardExperience experience={experience} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Experiences