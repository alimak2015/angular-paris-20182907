import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListmoduleComponent } from './containers/listmodule/listmodule.component';
import { ListmoduleModule } from '../listmodule/listmodule.module';
import { ItemComponent } from '../shared/components/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    ListmoduleModule
  ],
  declarations: [ListmoduleComponent , ItemComponent],
  exports: [ListmoduleComponent, ItemComponent]
})
export class ItemsModule { }
