import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem1 = 'Сделать завтрак';
const todoItem2 = 'Сделать тренировку';
const todoItem3 = 'Сходить в магазин';

const App = () => (<div>
    <h1>todos</h1>
    <InputItem />
    <ItemList todoItem1={todoItem1} todoItem2={todoItem2} todoItem3={todoItem3} />
    <Footer count={3} />
  </div>);

export default App;
