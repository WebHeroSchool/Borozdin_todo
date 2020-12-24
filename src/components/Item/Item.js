import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PropTypes from 'prop-types';

class Item extends React.Component {

  render() {
    const { value, isDone, onClickDone, onClickDelete, id, onClickSelected, selectedId } = this.props;

    return(
      <div className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })
      }>
        <ListItem className={styles.itemWrap} onClick={() => onClickSelected(id)} selected={selectedId===id}>
          <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" fontSize="small"/>}
            checkedIcon={<CheckCircleIcon color="primary" fontSize="small"/>}
            color="primary"
            onClick={() => onClickDone(id)}
            checked={isDone}
            className={styles.checkbox}
          />
          <ListItemText primary={ value } className={styles.itemText}/>
          <ListItemSecondaryAction className={styles.deleteButtonWrap}>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onClickDelete(id)}
              className={classnames({[styles.deleteButtonVisible]: selectedId !== id, [styles.deleteButton]:true})}
            >
              <CancelIcon fontSize="small"/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>);
  }
}

Item.propTypes ={
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  id:PropTypes.number.isRequired
};

Item.defaultProps = {
  isDone: false
};

export default Item;
