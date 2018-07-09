import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListmoduleComponent } from '../containers/listmodule/listmodule.component';


const appRoutes: Routes = [
  { path: 'list', component: ListmoduleComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(
        appRoutes
      )
  ]
})
export class ItemsRoutingModule { }





