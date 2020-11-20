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
        isDone: true
      },
      {
        value: 'Сделать тренировку',
        isDone: false
      },
      {
        value: 'Сходить в магазин',
        isDone: false
      }
    ]
  };

  onClickDone = isDone => console.log(isDone);

  render() {
    return (
      <div className = {styles.wrap}>
        <h1 className = {styles.title}>todos</h1>
        <div className = {styles.todoBody}>
          <InputItem />
          <ItemList items={this.state.items} onClickDone={this.onClickDone} />
          <Footer count={this.state.items.length} />
        </div>
      </div>
    );
  }
}

export default App;
