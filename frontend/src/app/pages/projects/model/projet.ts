export interface ProjectModel {
  id: number;
  title: string;
  description: string;
  image: string[]; // tableau d’images pour affichage en carousel ou galerie
  technologies: string[]; // liste des technologies utilisées
  githubLink: string;
  detailedDescription: string;
  category: string;
  linkDemo: string;
  linkCode: string;
  isDemo: boolean;
  isCode: boolean;

  // 🎯 Objectifs du projet
  objectives?: string[];
  // 🧩 Fonctionnalités principales
  features?: string[];
  // 🧠 Défis rencontrés
  challenges?: string[];
  // 🧑‍💼 Type de client (ex: freelance, entreprise, projet académique)
  clientType?: string;


}
