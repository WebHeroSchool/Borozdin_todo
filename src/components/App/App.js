import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const initialState = {
    items : [
      {
        value: 'Сделать завтрак',
        isDone: true,
        id: 1
      },
      {
        value: 'Сделать тренировку',
        isDone: false,
        id: 2
      },
      {
        value: 'Сходить в магазин',
        isDone: false,
        id: 3
      }
    ],
    count:3
  };

  const [items, setItems] = useState (initialState.items);
  const [count, setCount] = useState (initialState.count);

  useEffect(() => {
    console.log("update");
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("count change");
  }, [count]);

  const onClickDone = id => {
    const newItemList = items.map (item=> {
      const newItem = { ...item };

      if(item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter (item => item.id !== id);
    setItems(newItemList);
    setCount((count) => count - 1);
  };

  const onClickAdd = value => {
    const newItem = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setItems(newItem);
    setCount((count) => count + 1);
  };

  return (
    <div className = {styles.wrap}>
      <h1 className = {styles.title}>todos</h1>
      <div className = {styles.todoBody}>
        <InputItem onClickAdd={onClickAdd} />
        <ItemList
          items={items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
        <Footer count={count} />
      </div>
    </div>
  );
}

export default App;
