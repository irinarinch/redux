import { CHANGE_CATALOG_FORM } from "../actions/actionTypes";

const initialState = {
  image: '',
  title: '',
  price: '',
};

export default function catalogAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATALOG_FORM:
      const {name, value} = action.payload;
    
      return {...state, [name]: value};
    default:      
      return state;
  }
}