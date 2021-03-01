import React from 'react';
import {shallow} from 'enzyme';
import Item from "./Item";
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

describe('Item test',()=>{
  const item = {
      value:"Изучить React",
      isDone:false,
      id:1
  };
  const selectedId = -1;
  const onClickDone = jest.fn();
  const onClickDelete = jest.fn();
  const onClickSelected = jest.fn();

  describe('Проверяем исходное сотояние',()=>{
    const wrapper = shallow(<Item value={item.value} isDone={item.isDone} id={item.id} selectedId={selectedId} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickSelected={onClickSelected}/>);
    test('Создан компонент Item',()=>{
      expect(wrapper.exists()).toBe(true);
    });
    test('У div обёртки нет класса ".done"',()=>{
      expect(wrapper.find('.item').is('.done')).toBeFalsy();
    });
    test('Создан компонент ListItem',()=>{
      expect(wrapper.find(ListItem).exists()).toBe(true);
    });
    test('Создан компонент Checkbox',()=>{
      expect(wrapper.find(Checkbox).exists()).toBe(true);
    });
    test('Атрибут Checkbox "isDone" = false',()=>{
      expect(wrapper.find(Checkbox).prop('checked')).toEqual(false);
    });
    test('Создан компонент ListItemText',()=>{
      expect(wrapper.find(ListItemText).exists()).toBe(true);
    });
    test('ListItemText имеет значение = value',()=>{
      expect(wrapper.find(ListItemText).prop('primary')).toEqual(item.value);
    });
    test('Создан компонент ListItemSecondaryAction',()=>{
      expect(wrapper.find(ListItemSecondaryAction).exists()).toBe(true);
    });
    test('Создан компонент IconButton',()=>{
      expect(wrapper.find(IconButton).exists()).toBe(true);
    });
    test('У IconButton есть класс ".deleteButtonVisible"',()=>{
      expect(wrapper.find(IconButton).is('.deleteButtonVisible')).toBeTruthy();
    });
    test('Создан компонент CancelIcon',()=>{
      expect(wrapper.find(CancelIcon).exists()).toBe(true);
    });
  });

  describe('Изменим isDone на true',()=>{
    const newItem = {
      ...item,
      isDone:true
    };
    const wrapper = shallow(<Item value={newItem.value} isDone={newItem.isDone} id={newItem.id} selectedId={selectedId} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickSelected={onClickSelected}/>);
    test('У div обёртки появился класс ".done"',()=>{
      expect(wrapper.find('.item').is('.done')).toBeTruthy();
    });
    test('Атрибут Checkbox "isDone" = true',()=>{
      expect(wrapper.find(Checkbox).prop('checked')).toEqual(true);
    });
  });

  describe('Установим selectedId =1',()=>{
    const newSelectedId = 1;
    const wrapper = shallow(<Item value={item.value} isDone={item.isDone} id={item.id} selectedId={newSelectedId} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickSelected={onClickSelected}/>);
    test('Атрибут ListItem "selected" = true',()=>{
      expect(wrapper.find(ListItem).prop('selected')).toEqual(true);
    });
    test('У IconButton нет класса ".deleteButtonVisible"',()=>{
      expect(wrapper.find(IconButton).is('.deleteButtonVisible')).toBeFalsy();
    });
  });

  describe('Симулируем нажатия кнопок',()=>{
    const wrapper = shallow(<Item value={item.value} isDone={item.isDone} id={item.id} selectedId={selectedId} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickSelected={onClickSelected}/>);
    test('Симулируем нажатие на компонент ListItem, вызывается функция onClickSelected с аргументом id',()=>{
      wrapper.find(ListItem).simulate('click');
      expect(onClickSelected).toHaveBeenCalled();
      expect(onClickSelected).toHaveBeenCalledWith(item.id);
    });
    test('Симулируем нажатие на компонент Checkbox, вызывается функция onClickDone с аргументом id',()=>{
      wrapper.find(Checkbox).simulate('click');
      expect(onClickDone).toHaveBeenCalled();
      expect(onClickDone).toHaveBeenCalledWith(item.id);
    });
    test('Симулируем нажатие на компонент IconButton, вызывается функция onClickDelete с аргументом id',()=>{
      wrapper.find(IconButton).simulate('click');
      expect(onClickDelete).toHaveBeenCalled();
      expect(onClickDelete).toHaveBeenCalledWith(item.id);
    });
  });
});
