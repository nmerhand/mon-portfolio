import { X } from 'lucide-react';

interface ModaleQuiSuisJe {
    onClick: () => void;
}

const QuiSuisJe: React.FC<ModaleQuiSuisJe> = ({ onClick }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClick}>
            
            <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#16213E] p-6 text-left align-middle shadow-xl transition-all" >
                
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold leading-6 text-[#FFFFFF] mb-4">Qui suis-je ?</h2>
                    <X className="text-[#FFFFFF] cursor-pointer" onClick={onClick}/>
                </div>
                
                <div className="mt-2">
                    <p className="text-sm text-[#94A3B8]">
                        Tout a commencé quand j'ai 
                    </p>
                </div>

                <div className="mt-6 flex justify-end">
                    
                </div>
            </div>
        </div>
    );
};

export default QuiSuisJe;