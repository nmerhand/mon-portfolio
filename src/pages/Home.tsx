
import ButtonPrimary from '../components/Buttons/ButtonPrimary';
import { useState } from 'react';
import QuiSuisJe from '../components/Modales/ModaleQuiSuisJe';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="h-[calc(100vh-65px)] bg-[#1A1A2E] w-full flex flex-col justify-center items-center text-center relative overflow-hidden cursor-default">
            <div className="absolute inset-0 bg-[#1A1A2F]/50"></div>
            
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Bienvenue sur mon portfolio</h1>
                <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8">
                    Derrière les pixels et les lignes de code, il y a moi. Enchantée !
                </p>
                <ButtonPrimary message="Qui suis-je ?" onClick={() => setIsVisible(true)} />
                
                {isVisible && <QuiSuisJe onClick={() => setIsVisible(false)} />}
            </div>
        </div>
    );
}

export default Home