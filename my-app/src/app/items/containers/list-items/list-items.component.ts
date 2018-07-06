import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
   public collection: Observable<Item[]>;
 // public collection:  Item[];
  private sub: Subscription;
    constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
     this.collection = this.collectionService.collection;
    // console.log(this.collection);
    // this.sub = this.collectionService.collection.subscribe((data)  =>  {
    // this.collection =  data;
  // });
  }



}
