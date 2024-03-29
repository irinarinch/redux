import nanoid from 'nanoid';
import { ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes'

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    case EDIT_SERVICE:
      const { item } = action.payload;
      const ind = state.findIndex(i => i.id === item.id);
      state.splice(ind, 1, item);
      return [...state];
    default:      
      return state;
  }
}
