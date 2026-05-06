import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Projet Python",
    descriptionCourte: "Gestion de logs",
    descriptionLongue: "Le projet Python a pour objectif de collecter, stocker et analyser les journaux de navigation des employés de l'entreprise STESIO. Ces logs, enregistrés dans une base de données relationnelle, permettent de suivre les accès aux sites web et d'extraire des statistiques pertinentes. Ce projet repose sur une architecture orientée base de données et nécessite des traitements adaptés pour organiser efficacement les logs et en extraire des informations exploitables.",
    contexte: "BTS SIO - première année",
    objectifs: [
      "Importer et structurer les journaux de navigation",
      "Stocker les données dans une base relationnelle",
      "Fournir des analyses sous forme de statistiques et rapports",
      "Répondre à des requêtes spécifiques pour assurer le suivi des accès web"
    ],
    tech: ["Python", "SQL", "VSCode"],
    competences: [
      "Analyser les objectifs et les modalités d'organisation d'un projet"
    ],
    liens: {"Google Drive" : "https://drive.google.com/drive/folders/1bNxk-FUBuC0MNa9fRvcquslALPpEghSw"}
  },
  {
    id: 2,
    title: "Intranet",
    descriptionCourte: "Création d'un intranet d'entreprise",
    descriptionLongue: "Le projet Intranet a pour objectif de concevoir et développer un intranet d'entreprise moderne et fonctionnel pour Corpany, une société spécialisée dans les solutions technologiques pour l'éducation. Cet intranet servira de plateforme centrale pour la collaboration, le partage d'informations et l'optimisation des processus internes. Le projet mobilise des compétences en programmation, design, gestion de projet et administration système, et s'inscrit dans une démarche d'innovation en s'appuyant sur les meilleures pratiques du marché. L'intranet devra être évolutif et répondre aux besoins spécifiques des utilisateurs afin d'améliorer la productivité et la cohésion au sein de l'entreprise.",
    contexte: "BTS SIO - première année",
    objectifs: [
      "Faciliter la communication interne",
      "Améliorer la collaboration avec des outils numériques",
      "Centraliser les ressources et documents",
      "Optimiser la gestion des projets et tâches"
    ],
    tech: ["HTML / CSS", "PHP", "JavaScript", "SQL", "MariaDB", "Apache", "VSCode"],
    competences: [
      "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
      "Déployer un service"
    ],
    liens: {
      "Accéder à l'intranet" : "https://jolsio.fr:4456/merhandn/public/code_source/SeConnecter/SeConnecter.php"
    },
    detailsConnexion: "Connexion au compte administrateur : nmerhand - 123"
  },
  {
    id: 3,
    title: "Projet Thali",
    descriptionCourte: "Gestion d'excursions pour un centre de thalassothérie",
    descriptionLongue: "Le projet Thali a pour objectif de développer un module logiciel pour la gestion et la réservation de mini-excursions organisées par le centre de thalassothérapie THALI. Ces excursions, proposées aux curistes les après-midis, sont limitées en places et décomposées en plusieurs étapes détaillant leur déroulement. L'entreprise STESIO, une ESN (Entreprise de Services du Numérique), a été mandatée par THALI pour concevoir cette application en Java, avec une interface graphique et une base de données MySQL/MariaDB. Le module repose sur un système CRUD (ajout, modification, suppression et consultation des excursions et de leurs étapes). Un prototype partiel existe déjà, et le projet consiste à le compléter en améliorant ses fonctionnalités à différents niveaux.",
    contexte: "BTS SIO - première année",
    tech: ["Java", "SQL", "NetBeans", "Trello"],
    competences: [
      "Réaliser les tests d'intégration et d'acceptation d'un service"
    ],
    liens: {
      "Google Drive" : "https://drive.google.com/drive/folders/1PaGK4h6LdR1l0VgiJrJmJ8vl5dE_2vW1?usp=sharing"
    }
  },
  {
    id: 4,
    title: "R3st0.fr",
    descriptionCourte: "Evolution d'un site de référencement de restaurants",
    descriptionLongue: "Le projet R3st0.fr s'inscrit dans la création et l'évolution d'un site web dédié aux avis et recommandations de restaurants, à l'image de plateformes connues comme Tripadvisor ou LaFourchette. L'application existante permet déjà de recenser un grand nombre d'établissements, d'afficher leurs informations essentielles (nom, adresse, caractéristiques) et de regrouper les retours des clients via des notes et des critiques. L'objectif du projet est de prendre en main cette base existante pour la faire évoluer et en améliorer la qualité. Cela passe par la correction de bugs et l'ajout de fonctionnalités nouvelles. Le développement se déroule en équipe, selon une méthode inspirée des pratiques agiles : organisation en itérations courtes, réunions de synchronisation (daily scrum), gestion collaborative des tâches et livraison régulière de versions opérationnelles. Enfin, le projet comprend aussi une partie déploiement : l'application finale, ainsi que sa base de données, doit être installée et rendue accessible sur le serveur web de la section SIO.",
    contexte: "BTS SIO - deuxième année",
    objectifs: [
      "Améliorer et faire évoluer l'application existante.",
      "Travailler en équipe en suivant une démarche agile.",
      "Déployer le site sur le serveur de la section."
    ],
    tech: ["HTML / CSS", "PHP", "SQL", "MariaDB", "GitLab", "NetBeans"],
    competences: [
      "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
      "Traiter des demandes concernant les applications",
      "Planifier les activités"
    ],
    liens: {
      "Accès au site" : "https://jolsio.fr:4456/merhandn/public/r3sto_nmerhand/",
      "Google Drive": "https://drive.google.com/drive/folders/1Y50cmUitKUxwKX85EKzYoEs3p00xpk8m?usp=sharing",
      "Lien GitLab" : "https://gitlab.com/NoraMERHAND/p1_g4_siteresto2025"
    }
  },
  {
    id: 5,
    title: "Modérateur R3st0",
    descriptionCourte: "Développement d'un modérateur d'avis",
    descriptionLongue: "Suite au projet R3st0.fr, nous avons eu pour projet de développer une application Java permettant de filtrer les avis / critiques laissés sur le site par les utilisateurs connectés. L'application est accèssible à deux types d'utilisateurs possibles : modérateur et responsable du site. Tout utilisateur doit s'authentifier au préalable et se voit autoriser l'accès à différentes fonctionnalités en fonction de son role. Un modérateur a le droit de masquer des avis en rentrant le justificatif de masquage. Le responsable du site quant à lui peut démasqer les avis ou les supprimer complètement. Cet application est accessible via un executable dont l'installation et les détails de connexion sont disponible dans le fichier 'Manuel utilisateur'.",
    contexte: "BTS SIO - deuxième année",
    tech: ["Java", "SQL", "GitLab", "IntelliJ"],
    competences: [
      "Participer à l'évolution d'un site Web exploitant les données de l'organisation"
    ],
    liens: {
      "Manuel utilisateur" : "/P3_G5_AppliModerateurResto_RemiseLivrable.pdf",
      "Google Drive" : "https://drive.google.com/drive/u/0/folders/1wYpUQIxKuttUmtE14-hJ6gppjcd9P7eA",
      "Lien GitLab" : "https://gitlab.com/noel_lilo/P3_G5_AppliModerateurResto"
    }
  }
];
