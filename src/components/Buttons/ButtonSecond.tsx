import React from 'react';
import type { ButtonProps } from './ButtonPrimary';

const ButtonSecond: React.FC<ButtonProps> = ({ message, onClick, href, target }) => {
    const baseStyles = 'px-6 py-3 text-[#79E0EE] border border-[#79E0EE]/50 rounded-lg bg-transparent cursor-pointer transition-all duration-200 hover:bg-[#79E0EE]/10 hover:border-[#79E0EE]';

    if (href) {
        return (
            <a href={href} target={target} className={baseStyles}>
                {message}
            </a>
        );
    }

    return (
        <button className={baseStyles} onClick={onClick}>
            {message}
        </button>
    );
};

export default ButtonSecond;