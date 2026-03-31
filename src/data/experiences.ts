import type { Experience } from "../types";

export const experiences : Experience[] = [
    {
        id: 1,
        company: 'Kiliogene',
        description: 'Kiliogene est une société spécialisée en solutions Salesforce',
        contexte: 'Première année de BTS SIO',
        missions: ["Amélioration et création de composant LWC génériques réutilisable et intégrable dans des Flow ou d'autres LWC"],
        startDate: '12.05.2025',
        endDate: '20.06.2025',
        skills: ['TypeScript', 'Salesforce', 'LWC', 'JSON', 'VSCode', 'GitHub', 'Slack', 'Figma']
    },
    {
        id: 2,
        company: 'Splayce',
        description: 'Splayce est une entreprise appartenant au groupe GDCom Group. Elle est spécialisé dans le secteur de la santé et propose à ses clients des stratégies de communication sur-mesure',
        contexte: 'Deuxième année de BTS SIO',
        missions: {
            "Catalogue digital hors ligne destiné aux commerciaux de l'entreprise" : ["Développement de la gestion des tarifs", "Développement de l'affichage des déclinaisons d'après des maquettes fournies"],
            "Lumméa, un logiciel permettant de gérer l'affichage d'informations sur des écrans municipaux ainsi que sur des croix de pharmacie" : ["Permettre la visualisation du mot de passe sur la page de connexion grâce un icon en forme d'oeil", "Afficher une barre de scroll sur la page d'édition des contenus afin de permettre une meilleure accessibilitée", "Permettre le tri des programmes par ordre alphabétique ou par dates", "Ajout d'une barre de recherche dans une liste déroulante sur la page administrateur", "Permettre la modification des noms des programmes une fois ceux-ci créé - Mission ajournée", "Correction d'un bug d'affichage sur la page planning", "Ajout de nouvelles transitions", "Permettre la copie des contenus depuis un compte revendeur vers un compte client", "Affichage des programmes prioritaires sur la page planning"]
        },
        startDate: '05.01.2026',
        endDate: '12.02.2026',
        skills: ['React', 'TypeScript', 'JSON', 'Tailwind CSS', 'Salesforce', 'SOQL', 'VSCode', 'GitHub', 'Monday', 'Teams']
    }
];