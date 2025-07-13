import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkilsRoutingModule } from './skils-routing.module';
import { SkilsComponent } from './skils/skils.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SkilsComponent
  ],
  imports: [
    CommonModule,
    SkilsRoutingModule,
    SharedModule,
    TranslateModule,
  ]
})
export class SkilsModule { }
