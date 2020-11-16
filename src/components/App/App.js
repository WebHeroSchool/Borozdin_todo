import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const items = [
    { value: 'Сделать завтрак'},
    { value: 'Сделать тренировку'},
    { value: 'Сходить в магазин'}
  ];

  return (
    <div className = "todo">
      <h1 className = "todo__title">todos</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3} />
    </div>
  );
}

export default App;
