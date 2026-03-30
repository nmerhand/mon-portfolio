
import ButtonPrimary from '../components/Buttons/ButtonPrimary';
import { useState } from 'react';
import QuiSuisJe from '../components/QuiSuisJe';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FFFFFF] mb-4">Bienvenu sur mon portfolio</h1>
            <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto">
                Derrière les pixels et les lignes de code, il y a moi. Enchantée !
            </p>
            <ButtonPrimary message = "Qui suis-je ?" onClick={() => setIsVisible(true)} />
            {isVisible && (
                <QuiSuisJe onClick={() => setIsVisible(false)} />
            )}
        </div>
    )
}

export default Home