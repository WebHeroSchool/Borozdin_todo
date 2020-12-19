import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <List component="ul" aria-label="todo-list">
    {items.map(item => (
      <Item
        value={ item.value}
        isDone={ item.isDone }
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        id={item.id}
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
