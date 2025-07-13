import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EducationsRoutingModule } from './educations-routing.module';
import { EducationComponent } from './education/education.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    EducationsRoutingModule,
    SharedModule,
    TranslateModule,

  ]
})
export class EducationsModule { }
