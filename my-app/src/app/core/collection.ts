import { State } from '../shared/enums/state.enum';
import { Item } from '../shared/interfaces/item';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'William',
    reference: '1245',
    state: State.ALIVRER,
    dateLivraison: new Date(2017, 1 , 8)
  },
  {
    id: 'b1',
    name: 'Géraldine',
    reference: '4589',
    state: State.ENCOURS,
    dateLivraison: new Date(2016 , 4 , 9)
  },
  {
    id: 'c1',
    name: 'Laeticia',
    reference: '5623',
    state: State.LIVREE,
    dateLivraison: new Date(2015, 6 , 10)
  }
];

