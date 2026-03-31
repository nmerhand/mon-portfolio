import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const linkStyles = "transition-colors duration-300 hover:text-[#FF75A0] relative pb-1 group";
    
    const activeStyles = "text-[#FF75A0] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#FF75A0]";

    return (
        <nav className="bg-[#1A1A2E]/80 backdrop-blur-md border-b border-white/10 text-[#FFFFFF] sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold cursor-pointer transition-transform hover:scale-105">
                    <NavLink to="/">Nora MERHAND</NavLink>
                </div>
                
                <ul className="flex gap-8">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            À propos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/projects" // Attention : doit correspondre au 'path' dans App.tsx
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            Projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/experiences" 
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            Expériences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;