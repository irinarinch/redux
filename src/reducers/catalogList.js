import nanoid from 'nanoid';
import { ADD_PRODUCT } from "../actions/actionTypes";

const initialState = [
  {id: nanoid(), image: 'https://i.ucrazy.ru/files/pics/2023.10/2023-10-17-21-53-072.webp', name: 'Апельсин', price: 100},
  {id: nanoid(), image: 'https://i.pinimg.com/736x/87/aa/e5/87aae5a958ea6975edb4ef246a7608ae.jpg', name: 'Гитара', price: 21000},
  {id: nanoid(), image: 'https://i.pinimg.com/736x/72/12/03/7212036e9aa65c0ce229990ec17a2a12.jpg', name: 'Хлеб', price: 50},
  {id: nanoid(), image: 'https://i.ucrazy.ru/files/pics/2023.10/2023-10-17-21-53-072.webp', name: 'Апельсин', price: 100},
  {id: nanoid(), image: 'https://i.pinimg.com/736x/87/aa/e5/87aae5a958ea6975edb4ef246a7608ae.jpg', name: 'Гитара', price: 21000},
];

export default function catalogListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const { image, name, price } = action.payload;
      
      return [...state, { id: nanoid(), image, name, price: Number(price) }];    
    default:      
      return state;
  }
}