import React from 'react';
import { NavLink } from 'react-router-dom';
import { SlSocialLinkedin } from "react-icons/sl"
import { GoMail } from "react-icons/go";
import { MdOutlinePhoneEnabled } from "react-icons/md";

const Footer: React.FC = () => {
    const linkStyles = "transition-colors duration-300 hover:text-[#FF75A0] relative pb-1 group";
    
    const activeStyles = "text-[#FF75A0] ";

    return (
        <footer className="bg-[#1A1A2E]/80 text-white text-center py-6">
            <div className='flex flex-row justify-evenly'>
                <div className='flex items-center'>
                    <h3 className='text-xl font-semibold text-white mb-2'>Nora Merhand</h3>
                </div>

                <div>
                    <h3 className='text-xl font-semibold text-white mb-2'>Liens rapides</h3>
                    <ul>
                        <li><NavLink to='/about' className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>A propos</NavLink></li>
                        <li><NavLink to='/projects' className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>Mes projets</NavLink></li>
                        <li><NavLink to='/experiences' className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>Mes expériences</NavLink></li>
                        <li><NavLink to='/veille' className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>Ma veille technologique</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>Contact</NavLink></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-xl font-semibold text-white mb-4'>Me contacter</h3>
                    <div className='flex flex-row justify-between'>
                        <a href="https://www.linkedin.com/in/nora-merhand-a372432aa/" target='_blank'>
                            <SlSocialLinkedin className='w-6 h-6 hover:scale-110 transition-transform' />
                        </a>

                        <a href="mailto:n.merhand44@gmail.com">
                            <GoMail className='w-7 h-7 hover:scale-110 transition-transform' />
                        </a>

                        <a href="tel:+33633429784" target='_blank'>
                            <MdOutlinePhoneEnabled className='w-7 h-7 hover:scale-110 transition-transform' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;