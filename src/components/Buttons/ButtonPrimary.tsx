import React from 'react';

interface ButtonProps {
    message: string;
    onClick?: () => void;
    href?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ message, onClick, href }) => {
    const baseStyles = "mt-8 px-6 py-3 bg-[#FF75A0] text-[#1A1A2E] rounded-lg cursor-pointer hover:bg-[#FFB6C1] hover:shadow-lg transition-colors";

    if (href) {
        return (
        <a href={href} className={baseStyles}>
            {message}
        </a>
        );
    }

    return (
        <button className={baseStyles} onClick={onClick}>
            { message }
        </button>
    );
};

export default ButtonPrimary;