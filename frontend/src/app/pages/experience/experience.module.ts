import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ExperiencesComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule,
    TranslateModule,
  ]
})
export class ExperienceModule { }
