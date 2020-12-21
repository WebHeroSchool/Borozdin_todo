import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    helperText: ''
  };

  onButtonClick = () => {
    this.setState({inputValue: ''});

    if (this.state.inputValue !== '') {
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({error: true, helperText:'Заполните поле'});
    };
  }

  render() {
    const {onClickAdd} = this.props;

    return (
      <div className={styles.inputWrap}>
        <TextField
          error = {this.state.error}
          id="standard-basic"
          variant="outlined"
          size="small"
          placeholder="Просто введите сюда название дела..."
          helperText={this.state.helperText}
          InputLabelProps={{
            style: {
              marginLeft: 32,
              opacity: 0.5
            }
          }}
          className={styles.inputText}
          value={this.state.inputValue}
          onChange ={ event => this.setState({inputValue:event.target.value, error:false, helperText: '' })}
        />
        <Fab aria-label="add"
          color="primary"
          size="small"
          onClick={this.onButtonClick}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default InputItem;
