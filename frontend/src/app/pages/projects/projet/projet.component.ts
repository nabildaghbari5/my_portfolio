import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';
import { ProjetService } from '../service/projet.service';
import { ProjectModel } from '../model/projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss',
  animations: [
    trigger('cardAnimation', [
      state('initial', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('initial => final', animate('500ms ease-in')),
      transition('final => initial', animate('500ms ease-out'))
    ]),
    trigger('detailsAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('hidden <=> visible', animate('300ms ease-in-out'))
    ])
  ]
})
export class ProjetComponent implements OnInit {
  categories: string[] = ['Tous', 'Web', 'Mobile', 'Productivité'];
  projects: ProjectModel[]=[];
   
  constructor(
    private router:Router , 
    private projetService:ProjetService
  ){

  }

  currentProjects: ProjectModel[] = [];
  selectedCategory: string = 'Tous';
  isHovered: { [key: number]: boolean } = {};

  ngOnInit() {
    this.filterProjects('Tous');
    this.projetService.projects.forEach(p => {
      this.projects.push(p);
    })

  }

  

  filterProjects(category: string) {
    this.selectedCategory = category;
    this.currentProjects = category === 'Tous' 
      ? this.projects 
      : this.projects.filter(project => project.category === category);
  }

  toggleProjectDetails(projectId: number) {
    this.isHovered[projectId] = !this.isHovered[projectId];
  }

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
  



  detaileProject(id:any){
     this.router.navigate(["/projet/details" , id]) ;
  }
}