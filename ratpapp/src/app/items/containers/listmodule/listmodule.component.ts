import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from '../../../shared/interfaces/item';
import { Collection2Service } from '../../../core/services/collection2.service';

@Component({
  selector: 'app-listmodule',
  templateUrl: './listmodule.component.html',
  styleUrls: ['./listmodule.component.css']
})
export class ListmoduleComponent implements OnInit {
  public collection: Observable<Item[]>;
  private sub: Subscription;
  constructor(
    private collection2Service: Collection2Service
  ) { }

  ngOnInit() {

    this.collection = this.collection2Service.collection;
  }

}


