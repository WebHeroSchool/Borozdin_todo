import React, { useState, useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

import errorImg from '../../img/error.svg';

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
    lastID:3,
    countActive:2,
    countDone:1
  };

  const [items, setItems] = useState (initialState.items);
  const [count, setCount] = useState (initialState.count);
  const [lastID, setLastId] = useState (initialState.lastID);
  const [countActive, setCountActive] = useState (initialState.countActive);
  const [countDone, setCountDone] = useState (initialState.countDone);

  useEffect(() => {
    console.log("update");
    console.log(items);
    console.log("count:" + count);
    console.log("lastID:" + lastID);
    console.log("countDone:" + countDone);
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

    const newCountDone = newItemList.filter (item => item.isDone);
    const newCountActive = newItemList.filter (item => !item.isDone);

    setItems(newItemList);
    setCountDone(newCountDone.length);
    setCountActive(newCountActive.length);
  };

  const onClickDelete = id => {
    const newItemList = items.filter (item => item.id !== id);
    const newCountDone = newItemList.filter (item => item.isDone);
    const newCountActive = newItemList.filter (item => !item.isDone);
    setItems(newItemList);
    setCount((count) => count - 1);
    setCountDone(newCountDone.length);
    setCountActive(newCountActive.length);
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
    setCountActive((countActive) => countActive + 1);
  };

  return (
    <Card className={styles.todoCard} style={{borderRadius: 9}}>
      <div className={styles.todoCardHeader}>
        <h3 className = {styles.title}>Список моих дел</h3>
        <div className = {styles.todoCount}>
          <div className={styles.completedAffair}>
            <p className={styles.completedAffairText}>Завершенные</p>
            <div className={styles.completedAffairNuber}>&nbsp; {countDone} </div>
          </div>
          <div className={styles.completedAffair}>
            <p className={styles.completedAffairText}>Незавершенные </p>
            <div className={styles.completedAffairNuber}>&nbsp; {countActive}</div>
          </div>
          <p className={styles.completedAffairText}>Все</p>
        </div>
      </div>
      <CardContent className={styles.todoCardBody}>
        {items.length>0 ? <ItemList
          items={items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        /> : <div className={styles.emptyListWrap}>
          <img src={errorImg} alt='Ошибка загрузки' className={styles.emptyListImg}></img>
          <h2 className={styles.emptyListTitle}>Вы ещё не добавили ни одной задачи</h2>
          <p className={styles.emptyListText}>Сделайте это прямо сейчас!</p>
        </div>}
        <InputItem onClickAdd={onClickAdd} items={items}/>
      </CardContent>
    </Card>
  );
}

export default Todo;
