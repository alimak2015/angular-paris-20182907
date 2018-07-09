import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PagenotfoundComponent } from '../containers/pagenotfound/pagenotfound.component';



const appRoutes: Routes = [
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PageNotFoundRoutingModule { }


