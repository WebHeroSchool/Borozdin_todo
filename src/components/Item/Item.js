import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Item =({ value, isDone, onClickDone, onClickDelete, id }) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
  <ListItem button onClick={() => onClickDone(id)} >
    <ListItemText primary={ value } />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={() => onClickDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
</span>);

export default Item;
