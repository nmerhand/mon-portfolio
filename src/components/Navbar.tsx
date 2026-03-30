import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#1A1A2E]/80 backdrop-blur-md border-white/10 text-[#FFFFFF] sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold cursor-pointer">
                    <a href="/">Nora MERHAND</a>
                </div>
                <ul className="flex gap-6">
                    <li><a href="about" className="hover:text-[#FF75A0] transition-colors">À propos</a></li>
                    <li><a href="projects" className="hover:text-[#FF75A0] transition-colors">Projets</a></li>
                    <li><a href="experiences" className="hover:text-[#FF75A0] transition-colors">Stage</a></li>
                    <li><a href="contact" className="hover:text-[#FF75A0] transition-colors">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar