import React from 'react';

interface ButtonProps {
    message: string;
    onClick: () => void;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ message, onClick }) => {
    return (
        <button 
            className="mt-8 px-6 py-3 bg-[#FF75A0] text-[#1A1A2E] rounded-lg cursor-pointer hover:bg-[#FFB6C1] hover:shadow-lg transition-colors"
            onClick={onClick}
        >
            { message }
        </button>
    );
};

export default ButtonPrimary;