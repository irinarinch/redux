import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE , FILL_SERVICE_FIELD, CLEAR_SERVICE_FIELD, ADD_PRODUCT, CHANGE_CATALOG_FORM} from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function fillServiceField(item) {
  return {type: FILL_SERVICE_FIELD, payload: {item}}
}

export function editService(item) {
  return {type: EDIT_SERVICE, payload: {item}};
}

export function clearServiceField() {
  return {type: CLEAR_SERVICE_FIELD};
}

export function addProduct(image, name, price) {
  return {type: ADD_PRODUCT, payload: {image, name, price}};
}

export function changeCatalogForm(name, value) {
  return {type: CHANGE_CATALOG_FORM, payload: {name, value}}
}