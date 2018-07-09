import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { Collection2Service } from '../../../core/services/collection2.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  constructor(private collection2Service: Collection2Service) { }

  ngOnInit() {
  }

}




