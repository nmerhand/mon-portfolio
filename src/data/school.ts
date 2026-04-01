import type { School } from "../types";

export const schools: School[] = [
    {
        id: 3,
        name: "EPSI",
        date: "2026 - 2027",
        title: "Bachelor Développeuse Full Stack",
        description: ["En alternance"],
        localisation: "Nantes"
    },
    {
        id: 2,
        name: "La Joliverie",
        date: "2024 - 2026",
        title: "BTS Services Informatiques aux Organisations (SIO)",
        description: ["Option : SLAM (Solutions Logicielles et Applications Métiers)"],
        localisation: "St-Sébastien-sur-Loire"
    },
    {
        id: 1,
        name: "Blanche de Castille",
        date : "2022 - 2024",
        title: "Baccalauréat général - Mention assez bien",
        description: ["NSI (Numérique et Sciences de l'Informatique)", "Mathématiques"],
        localisation: "Nantes"
    }
    
]