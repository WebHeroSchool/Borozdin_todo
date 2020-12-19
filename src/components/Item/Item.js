import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PropTypes from 'prop-types';

class Item extends React.Component {

  // componentDidMount() {
  //   this.timerId = setInterval(() => console.log('interval'),1000);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }

  render() {
    const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return(
      <div className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })
      }>
        <ListItem className={styles.itemWrap}>
          <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" fontSize="small"/>}
            checkedIcon={<CheckCircleIcon color="primary" fontSize="small"/>}
            color="primary"
            onClick={() => onClickDone(id)}
            checked={isDone}
          />
          <ListItemText primary={ value } className={styles.itemText}/>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onClickDelete(id)}>
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
