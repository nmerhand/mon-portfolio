import { X } from 'lucide-react';

interface ModaleQuiSuisJe {
    onClick: () => void;
}

const ModaleQuiSuisJe: React.FC<ModaleQuiSuisJe> = ({ onClick }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClick}>
            
            <div className="mt-12 w-full max-w-4xl transform overflow-hidden rounded-2xl bg-[#16213E] p-6 text-left align-middle shadow-xl transition-all cursor-default" onClick={(e) => e.stopPropagation()}>
                
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold leading-6 text-[#FFFFFF] mb-4">Qui suis-je ?</h2>
                    <X className="text-[#FFFFFF] cursor-pointer" onClick={onClick}/>
                </div>
                
                <div className="mt-2">
                    <div className="text-justify text-sm text-[#CBD5F5]">
                        <p>Je m'appelle <span className="text-[#FF75A0]">Nora Merhand</span>, et depuis toute petite, on me pose LA question que l'on adresse à tous les enfants :</p>
                        <p className="italic">« Tu veux devenir quoi quand tu seras grande ? »</p>
                        <p className="pt-2">Et comme beaucoup d'enfants avant moi, j'ai répondu : « Une princesse ! »</p>
                        <p className="pt-2">Bon… je ne suis pas devenue princesse.</p>
                        <p className="pt-2">En grandissant, j'ai commencé à y réfléchir plus sérieusement, et je me suis naturellement tournée vers le monde des livres : je voulais devenir éditrice.</p>
                        <p className="pt-2">Je suis restée longtemps avec cet objectif. Jusqu'en seconde exactement, lorsque j'ai eu mes premiers cours d'informatique. Et là, ça a été le coup de foudre : je voulais faire <i>ça</i>. À l'époque, je ne le savais pas encore, mais ce qui m'avait tant plu, c'était le développement web : HTML, CSS… la base.</p>
                        <p className="pt-2">J'ai donc décidé de changer de perspective et de choisir la spécialité NSI pour mon bac. Pourtant, durant ma première et ma terminale, mon attachement à l'informatique s'est progressivement atténué : je n'étais plus sûre d'aimer ça.</p>
                        <p className="pt-2">J'ai failli abandonner… mais j'avais toujours en tête ce qui m'avait fait aimer l'informatique au départ. Et même si je ne le retrouvais pas en NSI, je savais que ça existait.</p>
                        <p className="pt-2">Alors je me suis accrochée. Et je suis partie à La Joliverie, en BTS SIO option SLAM. Et là, j'ai trouvé. Ou plutôt… j'ai retrouvé ce qui m'avait plu.</p>
                        <p className="pt-2">Et je suis retombée amoureuse de l'informatique.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModaleQuiSuisJe;