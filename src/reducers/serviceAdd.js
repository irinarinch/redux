import {CHANGE_SERVICE_FIELD, FILL_SERVICE_FIELD, CLEAR_SERVICE_FIELD} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case FILL_SERVICE_FIELD:
      const {item} = action.payload;      
      return {
        name: item.name,
        price: item.price,
        id: item.id,
      }
    case CLEAR_SERVICE_FIELD:
      state = initialState;      
    default:      
      return state;
  }
}
