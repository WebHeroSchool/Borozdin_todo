import React from 'react';
import {shallow} from 'enzyme';
import ItemList from "./ItemList";
import Item from '../Item/Item';
import List from '@material-ui/core/List';

describe('ItemList test', ()=>{
  const items = [
    {value:"Изучить React", isDone:false, id:1},
    {value:"Найти работу",isDone:false, id:2}
  ];
  const selectedId = -1;
  const onClickDone = jest.fn();
  const onClickDelete = jest.fn();
  const onClickSelected = jest.fn();

  describe('Проверяем исходное сотояние',()=>{
    const wrapper = shallow(<ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickSelected={onClickSelected} selectedId={selectedId}/>);
    test('Создан компонент ItemList',()=>{
      expect(wrapper.exists()).toBe(true);
    });
    test('Создан компонент List',()=>{
      expect(wrapper.find(List).exists()).toBe(true);
    });
    test('Создано 2 элемента списка',()=>{
      expect(wrapper.find(Item)).toHaveLength(2);
    });
  });

  describe('Увеличим колличество задач до 4',()=>{
    const newItems = [
      {value:"Изучить React", isDone:false, id:1},
      {value:"Найти работу",isDone:false, id:2},
      {value:"Написать резюме",isDone:false, id:3},
      {value:"Сходить на собеседование",isDone:false, id:4}
    ];
    const wrapper = shallow(<ItemList items={newItems} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickSelected={onClickSelected} selectedId={selectedId}/>);
    test('Создано 4 элемента списка',()=>{
      expect(wrapper.find(Item)).toHaveLength(4);
    });
  });

  describe('Колличество задач = 0',()=>{
    const newItems = [];
    const wrapper = shallow(<ItemList items={newItems} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickSelected={onClickSelected} selectedId={selectedId}/>);
    test('Компонент List создан',()=>{
      expect(wrapper.find(List).exists()).toBe(true);
    });
    test('Создано 0 элементов списка',()=>{
      expect(wrapper.find(Item)).toHaveLength(0);
    });
  });
});
