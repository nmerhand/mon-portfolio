import CardVeille from "../components/Cards/CardVeille";
import Footer from "../components/Footer"
import { veilles } from "../data/veilles"

function Veille() {
    return (
        <div>
            <div className="bg-[#1A1A2E] min-h-screen cursor-default">
                <div className="pb-12 h-screen w-full flex flex-col justify-center items-center text-center">
                    <h1 className="max-w-6xl mx-auto md:text-5xl font-bold text-white mb-4">En quoi les Applications Web Progressives représentent-elle une alternative viable aux applications mobiles natives ?</h1>

                </div>

                <div id="" className="px-8 py-8 bg-[#1A1A2E] border-y-8 border-[#FFB6C1]">
                    <p className="text-justify text-[#CBD5F5]">
                        Les Applications Web Progressives, aussi appellées Progressive Web Apps ou PWA sont des applications web utilisant des technologies web modernes permettant l'installation sur un appareil et le fonctionnement hors connexion.
                    </p>

                    <div className="mt-8 space-y-4">
                        {veilles
                            .slice()
                            .sort((a, b) => b.id - a.id)
                            .map((veille) => (
                                <CardVeille key={veille.id} veille={veille} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Veille