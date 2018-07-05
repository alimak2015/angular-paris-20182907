import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListItemsComponent]
})
export class ItemsModule { }
