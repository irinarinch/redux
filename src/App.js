import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import CatalogList from './components/CatalogList';
import CatalogAdd from './components/CatalogAdd';
import './App.css';

function App() {
  return (
    <>
      <h1 className='title'>Redux</h1>
      <div className='container'>
        <h3 className='title'>Задачи 1 и 2. Редактирование и фильтрация</h3>
        <ServiceAdd />
        <ServiceList />
      </div>
      <div className='container'>
        <h3 className='title'>Задача 3. Каталог - задача со звездочкой</h3>
        <CatalogAdd />
        <CatalogList />
      </div>
    </>

  );
}

export default App;
