import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({inputValue: ''});

    if (this.state.inputValue !== '') this.props.onClickAdd(this.state.inputValue);
  }

  render() {
    const {onClickAdd} = this.props;

    return (
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs>
          <TextField
            id="standard-basic"
            variant="standard"
            label="Добавить задание"
            fullWidth
            InputLabelProps={{
              style: {
                marginLeft: 32,
                opacity: 0.5
              }
            }}
            style={{paddingLeft:16}}
            value={this.state.inputValue}
            onChange ={ event => this.setState({inputValue:event.target.value })}
          />
        </Grid>
        <Grid item xs={2} style={{textAlign:"center", paddingLeft:30}}>
          <IconButton aria-label="add"
            color="primary"
            onClick={this.onButtonClick}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>);
  }
}

export default InputItem;
