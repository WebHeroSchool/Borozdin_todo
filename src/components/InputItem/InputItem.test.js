import React from 'react';
import {shallow} from 'enzyme';
import InputItem from "./InputItem";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

describe('InputItem test',()=>{
  describe('Проверяем исходное состояние',()=>{
    const wrapper = shallow(<InputItem/>);
    test('Создан компонент InputItem', ()=> {
      expect(wrapper.exists()).toBe(true);
    });
    test('Создан компонент TextField', ()=> {
      expect(wrapper.find(TextField).exists()).toBe(true);
    });
    test('TextField не имеет ошибки', ()=> {
      expect(wrapper.find(TextField).prop('error')).toBeFalsy();
    });
    test('В TextField helperText =""', ()=> {
      expect(wrapper.find(TextField).prop('helperText')).toEqual('');
    });
    test('В TextField поле ввода пустое', ()=> {
      expect(wrapper.find(TextField).prop('value')).toEqual('');
    });
    test('Создан компонент Fab', ()=> {
      expect(wrapper.find(Fab).exists()).toBe(true);
    });
    test('Создан компонент AddIcon', ()=> {
      expect(wrapper.find(AddIcon).exists()).toBe(true);
    });
  });

  describe('Добавляем пустое дело',()=>{
    const wrapper = shallow(<InputItem/>);
    test('Появилась ошибка и сообщение в helperText о пустом поле ввода', ()=> {
      wrapper.find(Fab).simulate('click');
      expect(wrapper.find(TextField).prop('error')).toBeTruthy();
    });
    test('У TextField выводится сообщение в helperText ="Заполните поле"', ()=> {
      expect(wrapper.find(TextField).prop('helperText')).toEqual('Заполните поле');
    });
  });

  describe('Имитируем ввод текста',()=>{
    const items = [
      {value:"Изучить React", isDone:false, id:1},
      {value:"Найти работу",isDone:false, id:2}
    ];
    const simInputValue="Написать резюме";
    const onClickAdd=jest.fn();
    const wrapper = shallow(<InputItem onClickAdd={onClickAdd} items={items}/>);
    test('Имитируем ввод текста в поле ввода и проверяем вызов метода onClickAdd', ()=> {
      wrapper.find(TextField).simulate('change',{target:{value: simInputValue}});
      expect(wrapper.state('inputValue')).toEqual(simInputValue);
      expect(wrapper.find(TextField).prop('value')).toEqual(simInputValue);
      wrapper.find(Fab).simulate('click');
      expect(onClickAdd).toHaveBeenCalled();
    });
  });
});
