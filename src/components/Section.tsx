import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    content: string;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
    return (
        <section id={id} className="py-20 px-6 text-center bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="max-w-3xl mx-auto text-lg">{content}</p>
        </section>
    );
};

export default Section;