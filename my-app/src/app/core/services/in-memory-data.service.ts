import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { State } from '../../shared/enums/state.enum';
import { Item2 } from '../../shared/interfaces/item2';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService  {
    constructor() { }

    createDb() {
      const ITEMS: Item2[] = [
        {
          id: 0,
          name: 'William',
          reference: '1245',
          state: State.ALIVRER,
          dateLivraison: new Date(2017, 1 , 8)
        },
        {
          id: 1,
          name: 'Géraldine',
          reference: '4589',
          state: State.ENCOURS,
          dateLivraison: new Date(2016 , 4 , 9)
        },
        {
          id: 2,
          name: 'Laeticia',
          reference: '5623',
          state: State.LIVREE,
          dateLivraison: new Date(2015, 6 , 10)
        }
      ];
      return {ITEMS};
    }
}
