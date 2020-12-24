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
    const isHave = item => item.value === this.state.inputValue;

    if (this.state.inputValue === '') {
      this.setState({error: true, helperText:'Заполните поле'});
    } else if (this.props.items.some(isHave)) {
      this.setState({error: true, helperText:'Такая задача уже есть в вашем списке. Введите другое название'});
    } else {
      this.props.onClickAdd(this.state.inputValue);
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
          InputProps={{
            style:{borderRadius:29}
          }}
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
          className={styles.buttonAdd}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default InputItem;
