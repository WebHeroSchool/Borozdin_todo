import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<List component="nav" aria-label="todo-list">
  {items.map(item => (<li key={ item.value }>
        <Item
          value={ item.value}
          isDone={ item.isDone }
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
          id={item.id}
        />
      </li>
    )
      )}
      <Divider />
</List>);

export default ItemList;
