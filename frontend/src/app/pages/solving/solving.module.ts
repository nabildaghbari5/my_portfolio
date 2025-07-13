import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolvingRoutingModule } from './solving-routing.module';
import { SolvingComponent } from './solving/solving.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [SolvingComponent],
  imports: [
    CommonModule,
    SolvingRoutingModule,
    SharedModule,
    TranslateModule,  
  ]
})
export class SolvingModule { } 
