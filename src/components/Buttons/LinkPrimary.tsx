import React from 'react';
import type { ButtonProps } from './ButtonPrimary';

const LinkPrimary: React.FC<ButtonProps> = ({ message, href, target }) => {
    const baseStyles = 'mr-3 py-1 text-sm font-medium text-[#94A3B8] hover:text-white relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:bg-pink-500 after:transition-transform after:duration-200 hover:after:scale-x-100';

    return (
        <a href={href} target={target} className={baseStyles}>
            {message}
        </a>
    );

};

export default LinkPrimary;