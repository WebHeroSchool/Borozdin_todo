import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
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

  onClickDone = id => {
    const newItemList = this.state.items.map (item=> {
      const newItem = { ...item };

      if(item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList});
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter (item => item.id !== id);
    this.setState({ items: newItemList});
  };

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
  }));

  render() {
    return (
      <div className = {styles.wrap}>
        <h1 className = {styles.title}>todos</h1>
        <div className = {styles.todoBody}>
          <InputItem onClickAdd={this.onClickAdd} />
          <ItemList
            items={this.state.items}
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
          />
          <Footer count={this.state.items.length} />
        </div>
      </div>
    );
  }
}

export default App;
