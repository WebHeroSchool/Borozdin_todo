import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<List component="nav" aria-label="todo-list">
  {items.map(item => (<li key={ item.id }>
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

ItemList.propTypes ={
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;
