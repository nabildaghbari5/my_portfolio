import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./abouts/abouts.module').then(m => m.AboutsModule)
  },
  {
    path: 'education', loadChildren: () => import('./educations/educations.module').then(m => m.EducationsModule)
  },

  {
    path: 'skills', loadChildren: () => import('./skils/skils.module').then(m => m.SkilsModule)
  },
  {
    path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'projet', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'projet', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'solving', loadChildren: () => import('./solving/solving.module').then(m => m.SolvingModule)
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
