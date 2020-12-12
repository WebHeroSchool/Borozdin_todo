import React, { useState, useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
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
    count:3,
    lastID:3
  };

  const [items, setItems] = useState (initialState.items);
  const [count, setCount] = useState (initialState.count);
  const [lastID, setLastId] = useState (initialState.lastID);

  useEffect(() => {
    console.log("update");
    console.log(items);
    console.log("count:" + count);
    console.log("lastID:" + lastID);
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
        id: lastID + 1
      }
    ];
    setItems(newItem);
    setCount((count) => count + 1);
    setLastId((lastID) => lastID + 1);
  };

  return (
    <Card className={styles.todoCard}>
      <CardContent style={{paddingBottom: 8}}>
        <h1 className = {styles.title}>todos</h1>
        <InputItem onClickAdd={onClickAdd} />
        <ItemList
          items={items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
        <Footer count={count} />
      </CardContent>
    </Card>
  );
}

export default Todo;
