import { Injectable } from '@angular/core';
import { ProjectModel } from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor() { }

  projects: ProjectModel[] = [
    {
      id: 1,
      title: "Logiciel de Gestion de Salle de Sport",
      description: "Solution complète pour la gestion des abonnements, réservations et activités d’une salle de sport.",
      image: [
        "/assets/images/projects/sallesprot/gym.jpg",

        "/assets/images/projects/sallesprot/dashbord1.png",
        "/assets/images/projects/sallesprot/dash2.png",
        "/assets/images/projects/sallesprot/activite.png",
        "/assets/images/projects/sallesprot/coeach.png",
        "/assets/images/projects/sallesprot/adherent.png",
        "/assets/images/projects/sallesprot/Ajouter_adhrent.png",
        "/assets/images/projects/sallesprot/Modifier_adherent.png",
        "/assets/images/projects/sallesprot/suppremier_adhrent.png",
        "/assets/images/projects/sallesprot/fiche_adherent.png",
        "/assets/images/projects/sallesprot/adhrent_expire.png",
        "/assets/images/projects/sallesprot/rennouveler_abonnement.png",
      ],
      technologies: ["Angular", "Spring Boot", "Postgresql", "Bootstrap"],
      githubLink: "https://github.com/...",
      detailedDescription: "Ce projet permet de gérer tous les aspects administratifs et opérationnels d’une salle de sport, allant des inscriptions à la gestion des abonnements, en passant par la réservation des activités.",
      category: 'Web',
      linkDemo: "https://youtu.be/e30Ze62qzec",
      linkCode: "https://github.com/...",
      isDemo: true,
      isCode: true,
      objectives: [
        "Automatiser la gestion des abonnements",
        "Suivre les paiements et les adhésions",
        "Optimiser la planification des coachs et activités"
      ],
      features: [
        "Authentification et autorisation (Admin, Coach, Adhérent)",
        "Gestion des adhérents (ajout, modification, suppression)",
        "Suivi des abonnements et des paiements",
        "Visualisation du tableau de bord en temps réel",
        "Système de notification pour abonnements expirés",
        "Fiches détaillées des membres"
      ],

      challenges: [
        "Assurer une gestion fluide des rôles et permissions",
        "Créer une interface utilisateur responsive et intuitive",
        "Optimiser les requêtes vers PostgreSQL"
      ],
      clientType: "Projet personnel",
    },
    {
      id: 2,
      title: "Be-process ",
      description: "Gestion des workflow et gestion des utilisateur et gesstainaire de fichier ",
      image: [
        "/assets/images/projects/be_process/1.png",
      ],
      technologies: ["Angular", "Spring boot", "Mysql", "Keyckloak", "...."],
      githubLink: "https://github.com/...",
      detailedDescription: "Ce projet permet de gérer tous les aspects administratifs et opérationnels d’une salle de sport, allant des inscriptions à la gestion des abonnements, en passant par la réservation des activités.",
      category: 'Web',
      linkDemo: "https://youtu.be/e30Ze62qzec",
      linkCode: "https://github.com/...",
      isDemo: true,
      isCode: true,
      objectives: [
        "Automatiser la gestion des abonnements",
        "Suivre les paiements et les adhésions",
        "Optimiser la planification des coachs et activités"
      ],
      features: [
        "Authentification et autorisation (Admin, Coach, Adhérent)",
        "Gestion des adhérents (ajout, modification, suppression)",
        "Suivi des abonnements et des paiements",
        "Visualisation du tableau de bord en temps réel",
        "Système de notification pour abonnements expirés",
        "Fiches détaillées des membres"
      ],

      challenges: [
        "Assurer une gestion fluide des rôles et permissions",
        "Créer une interface utilisateur responsive et intuitive",
        "Optimiser les requêtes vers MongoDB"
      ],
      clientType: "Projet personnel",
    },
    {
      id: 3,
      title: "Logiciel de puplication des offres d'emploi et  dur ecrutement ",
      description: "Solution complète pour la gestion des abonnements, réservations et activités d’une salle de sport.",
      image: [
        "/assets/images/projects/recutement/1.png",
        "/assets/images/projects/recutement/011.png",
        "/assets/images/projects/recutement/0111.png",
        "/assets/images/projects/recutement/2.png",
        "/assets/images/projects/recutement/3.png",
        "/assets/images/projects/recutement/4.png",
        "/assets/images/projects/recutement/5.png",
        "/assets/images/projects/recutement/6.png",
        "/assets/images/projects/recutement/66.png",
        "/assets/images/projects/recutement/7.png",
        "/assets/images/projects/recutement/8.png",
        "/assets/images/projects/recutement/9.png",
        "/assets/images/projects/recutement/10.png",
        "/assets/images/projects/recutement/11.png",
        "/assets/images/projects/recutement/11011.png",
        "/assets/images/projects/recutement/12.png",
        "/assets/images/projects/recutement/13.png",
        "/assets/images/projects/recutement/14.png",
        "/assets/images/projects/recutement/15.png",
        "/assets/images/projects/recutement/16.png",
        "/assets/images/projects/recutement/17.png",
        "/assets/images/projects/recutement/18.png",
        "/assets/images/projects/recutement/19.png",
        "/assets/images/projects/recutement/20.png",

      ],
      technologies: ["Angular", "Spring boot", "Mysql", "Keyckloak", "...."],
      githubLink: "https://github.com/...",
      detailedDescription: "Ce projet permet de gérer tous les aspects administratifs et opérationnels d’une salle de sport, allant des inscriptions à la gestion des abonnements, en passant par la réservation des activités.",
      category: 'Web',
      linkDemo: "https://demo...",
      linkCode: "https://github.com/...",
      isDemo: true,
      isCode: true,
      objectives: [
        "Automatiser la gestion des abonnements",
        "Suivre les paiements et les adhésions",
        "Optimiser la planification des coachs et activités"
      ],
      features: [
        "Authentification et autorisation (Admin, Coach, Adhérent)",
        "Gestion des adhérents (ajout, modification, suppression)",
        "Suivi des abonnements et des paiements",
        "Visualisation du tableau de bord en temps réel",
        "Système de notification pour abonnements expirés",
        "Fiches détaillées des membres"
      ],

      challenges: [
        "Assurer une gestion fluide des rôles et permissions",
        "Créer une interface utilisateur responsive et intuitive",
        "Optimiser les requêtes vers MongoDB"
      ],
      clientType: "Projet personnel",
    },



  ];
  // ✅ Méthode pour récupérer un projet par son ID
  getProjectById(id: number): ProjectModel | undefined {
    return this.projects.find(p => p.id === id);
  }
}
