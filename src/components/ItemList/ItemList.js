import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete, onClickSelected, selectedId }) => (
  <List component="ul" aria-label="todo-list" className={styles.list} style={{padding:0}}>
    {items.map(item => (
      <Item
        value={ item.value}
        isDone={ item.isDone }
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        id={item.id}
        onClickSelected={onClickSelected}
        selectedId={selectedId}
        key={ item.id }
      />)
    )}
  </List>);

ItemList.propTypes ={
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;
