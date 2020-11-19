import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
    id="standard-basic"
    variant="standard"
    label="Добавить задание"
    fullWidth
    InputLabelProps={{
      style: {
        marginLeft: 30,
        opacity: 0.5
      }
    }}
  />
</div>);

export default InputItem;
