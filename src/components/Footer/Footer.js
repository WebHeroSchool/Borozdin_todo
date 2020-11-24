import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (
  <Grid container alignItems="center" spacing={1}>
    <Grid item xs={3}>
      <div className = {styles.count}>Осталось дел {count}</div>
    </Grid>
    <Grid item xs>
      <Button size="small">Все</Button>
      <Button size="small">Активные</Button>
      <Button size="small">Выполненные</Button>
    </Grid>
    <Grid item xs={3}>
      <Button size="small">Удалить выполненные</Button>
    </Grid>
  </Grid>
);

Footer.propTypes ={
  count: PropTypes.number.isRequired
};

export default Footer;
