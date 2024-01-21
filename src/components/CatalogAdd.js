import React from 'react'
import { addProduct } from '../actions/actionCreators';
import { useSelector, useDispatch } from "react-redux";
import {changeCatalogForm} from "../actions/actionCreators";

const CatalogAdd = () => {
  const item = useSelector((state) => state.catalogAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;    
    dispatch(changeCatalogForm(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (item.image === '' || item.title === '' || item.price === '') return;
    dispatch(addProduct(item.image, item.title, item.price));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor='image'>Ссылка на изображение товара</label>
      <input name="image" className="catalog-input" onChange={handleChange} />
      <label htmlFor='title'>Название товара</label>
      <input name="title" className="catalog-input" onChange={handleChange} />
      <label htmlFor='price' >Цена</label>
      <input name="price" className="catalog-input" onChange={handleChange} />
      <button type="submit" className="catalog-input">Добавить</button>
    </form>
  )
}

export default CatalogAdd;