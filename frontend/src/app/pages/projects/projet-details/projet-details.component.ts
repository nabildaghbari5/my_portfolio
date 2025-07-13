import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ProjetService } from '../service/projet.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-projet-details',
  templateUrl: './projet-details.component.html',
  styleUrls: ['./projet-details.component.scss']
})
export class ProjetDetailsComponent implements OnInit {
  images: GalleryItem[] = [];
  project: any; // Un seul projet, pas un tableau
  projetImage: string[] = [];

  // Nouvelles propriétés pour les fonctionnalités améliorées
  activeTab = "objectives"
  isFavorite = false
  isAutoplay = true

  constructor(
    private projetService: ProjetService,
    private route: ActivatedRoute
  ) { }

ngOnInit(): void {
  debugger
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.loadProjectImages(+id); // conversion en number
  }
}


  loadProjectImages(projectId:number) {
    this.project = this.projetService.getProjectById(projectId);

    if (!this.project) {
      console.warn(`Aucun projet trouvé avec l'ID : ${projectId}`);
      return;
    }

    if (this.project.image) {
      this.projetImage = this.project.image;

      this.images = this.projetImage.map(img =>
        new ImageItem({
          src: img,
          thumb: img
        })
      );
    }
  }


  // Nouvelles méthodes pour les fonctionnalités améliorées
  setActiveTab(tab: string): void {
    this.activeTab = tab
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite
    // Ici vous pouvez ajouter la logique pour sauvegarder en localStorage ou via un service
    if (this.isFavorite) {
      console.log("Projet ajouté aux favoris")
    } else {
      console.log("Projet retiré des favoris")
    }
  }

  toggleAutoplay(): void {
    this.isAutoplay = !this.isAutoplay
  }

  hasContentForActiveTab(): boolean {
    if (!this.project) return false

    switch (this.activeTab) {
      case "objectives":
        return this.project.objectives && this.project.objectives.length > 0
      case "features":
        return this.project.features && this.project.features.length > 0
      case "challenges":
        return this.project.challenges && this.project.challenges.length > 0
      default:
        return false
    }
  }

}
