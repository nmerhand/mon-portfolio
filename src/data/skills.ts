import type { Skill } from "../types";

export const skills: Skill = {
    id: 1,
    informatique: {
        "Algorithmie": ["Python"],
        "Web": ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "JSON"],
        "POO": ["Java", "PHP"],
        "Base de données": ["SQL", "MySQL", "MariaDB"],
        "Frameworks": ["LWC"],
        "Versioning": ["Git", "GitHub", "GitLab"],
        "Systèmes": ["Station de travail Windows10, Linux (Fedora)", "Serveurs Windows Server, Linux (Rocky, Debian)"]
    },
    outils: {
        "Développement": ["VS Code", "NetBeans"],
        "Serveurs & DB": ["LAMP", "XAMPP", "phpMyAdmin"],
        "Plateformes": ["Salesforce"],
        "Gestion de projet": ["GitLab", "Trello", "Notion"],
        "NoCode": ["Odoo"],
        "Communication": ["Teams", "Slack"],
        "Design": ["Figma"]
    },
    soft: [
        "Autonomie",
        "Organisation",
        "Curiosité",
        "Travail en équipe",
    ]
};