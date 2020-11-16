import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem1,todoItem2,todoItem3 }) => (<ul>
  <li><Item todoItem={ todoItem1 } /></li>
  <li><Item todoItem={ todoItem2 } /></li>
  <li><Item todoItem={ todoItem3 } /></li>
</ul>);

export default ItemList;
