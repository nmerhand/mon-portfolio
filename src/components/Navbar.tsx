import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const linkStyles = "transition-colors duration-300 hover:text-[#FF75A0] relative pb-1 group";
    
    const activeStyles = "text-[#FF75A0] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#FF75A0]";
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-[#1A1A2E]/80 backdrop-blur-md border-b border-white/10 text-[#FFFFFF] sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4 sm:px-6">
                <div className="text-2xl font-bold cursor-pointer transition-transform hover:scale-105">
                    <NavLink to="/" onClick={closeMenu}>Nora MERHAND</NavLink>
                </div>

                <button
                    type="button"
                    className="md:hidden rounded p-2 hover:bg-white/10"
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>

                <ul className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#1A1A2E] px-6 py-5 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
                    <li>
                        <NavLink 
                            to="/" 
                            onClick={closeMenu}
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            onClick={closeMenu}
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            À propos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/projects" 
                            onClick={closeMenu}
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            Projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/experiences" 
                            onClick={closeMenu}
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            Expériences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/veille" 
                            onClick={closeMenu}
                            className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}
                        >
                            Veille Technologique
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            onClick={closeMenu}
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