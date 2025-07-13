import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutsRoutingModule } from './abouts-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryModule } from 'ng-gallery';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    HomeComponent ,
  ],  

  imports: [
    CommonModule,
    AboutsRoutingModule,
    SharedModule,
    TranslateModule,
    GalleryModule,
    ModalModule.forRoot()

  ]
})
export class AboutsModule { }
