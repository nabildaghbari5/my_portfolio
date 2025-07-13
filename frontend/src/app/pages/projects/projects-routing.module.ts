import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';
import { ProjetDetailsComponent } from './projet-details/projet-details.component';

const routes: Routes = [
  
  {
    path:"",
    component:ProjetComponent
  },
  {
    path: "details/:id",
    component:ProjetDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
