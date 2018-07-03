import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListItemsComponent],
  exports: [ListItemsComponent],
})
export class ItemsModule { }
