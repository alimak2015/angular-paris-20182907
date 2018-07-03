import { State } from '../shared/enums/state.enum';
import { Item } from '../shared/interfaces/item';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'William',
    reference: '1245',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Géraldine',
    reference: '4589',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Laeticia',
    reference: '5623',
    state: State.LIVREE
  }
];

