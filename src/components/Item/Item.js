import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Item =({ value, isDone, onClickDone }) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
  <ListItem button onClick={() => onClickDone(isDone)} >
    <ListItemText primary={ value } />
  </ListItem>
</span>);

export default Item;
