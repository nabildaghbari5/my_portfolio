import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProjetComponent } from './projet/projet.component';
import { ProjetDetailsComponent } from './projet-details/projet-details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GalleryModule } from 'ng-gallery';



@NgModule({
  declarations: [
    ProjetComponent,
    ProjetDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,  
    SharedModule,
    TranslateModule,   
    SlickCarouselModule, // Put in here
    GalleryModule,
  ]
})
export class ProjectsModule { }
