import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolvingComponent } from './solving/solving.component';

const routes: Routes = [
  {
    path:"",
    component:SolvingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolvingRoutingModule { }
