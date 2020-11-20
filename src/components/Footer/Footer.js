import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
  <Grid container alignItems="center" spacing={1}>
    <Grid item xs>
      <div className = {styles.count}>Осталось дел {count}</div>
    </Grid>
    <Grid item xs={6}>
      <Button size="small">Все</Button>
      <Button size="small">Активные</Button>
      <Button size="small">Выполненные</Button>
    </Grid>
    <Grid item xs>
      <Button size="small">Удалить выполненные</Button>
    </Grid>
  </Grid>
);

export default Footer;
