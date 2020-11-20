import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const ItemList = ({ items }) => (<List component="nav"
    aria-label="todo-list">
  {items.map(item => (<ListItem button key={ item.value }>
        <Item value={ item.value} isDone={ item.isDone } />
      </ListItem>
    )
      )}
      <Divider />
</List>);

export default ItemList;
