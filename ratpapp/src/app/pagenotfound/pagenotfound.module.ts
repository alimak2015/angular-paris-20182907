import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './containers/pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagenotfoundComponent],
  exports : [PagenotfoundComponent]
})
export class PagenotfoundModule { }
