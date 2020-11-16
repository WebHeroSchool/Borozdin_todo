import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => {
  const items = [
    { value: 'Сделать завтрак'},
    { value: 'Сделать тренировку'},
    { value: 'Сходить в магазин'}
  ];

  return (
    <div>
      <h1>todos</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3} />
    </div>
  );
}

export default App;
