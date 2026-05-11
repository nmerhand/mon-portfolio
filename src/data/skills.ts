import type { Skill } from "../types";

export const skills: Skill[] = [
    {
        id: 1,
        categorie: "Informatique",
        sous_catégorie: {
            "Algorithmie": ["Python"],
            "Web": ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "JSON"],
            "POO": ["Java", "PHP"],
            "Base de données": ["SQL", "MySQL", "MariaDB"],
            "Frameworks": ["LWC", "Symfony"],
            "Versioning": ["Git", "GitHub", "GitLab"],
            "Systèmes": ["Station de travail Windows10, Linux (Fedora)", "Serveurs Windows Server, Linux (Rocky, Debian)"]
        }
    },
    {
        id: 2,
        categorie: "Outils tech",
        sous_catégorie: {
            "Développement": ["VS Code", "NetBeans"],
            "Serveurs & DB": ["LAMP", "XAMPP", "phpMyAdmin"],
            "Plateformes": ["Salesforce"],
            "Gestion de projet": ["GitLab", "Trello", "Notion"],
            "NoCode": ["Odoo"],
            "Communication": ["Teams", "Slack"],
            "Design": ["Figma"]
        }
    },
    {
        id: 3,
        categorie: "Soft skills",
        sous_catégorie: [
            "Autonomie",
            "Organisation",
            "Curiosité",
            "Travail en équipe",
        ]
    },
    {
        id: 4,
        categorie: "Langues",
        sous_catégorie: {
            "Français": ["Niveau C2", "Native"],
            "Anglais": ["Niveau B1+", "TOEIC : 700/990"],
            "Espagnol": ["Niveau B2", "Emploi saisonnier deux années de suite en Espagne"],
            "Italien": ["Niveau A1"]
        }
    }
];