import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProfileComponent } from './profile/profile.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TranslateModule

  ],
  exports: [BreadcrumbsComponent , ProfileComponent]
})
export class SharedModule { }
