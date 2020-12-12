import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import Todo from '../Todo/Todo';
import About from '../About/About';

import styles from './App.module.css';

const App = () =>  (
  <Router>
    <div className = {styles.wrap}>
      <Card className = {styles.sidebar}>
        <NavLink exact to='/' className={styles.link} activeClassName={styles.active_link}>Обо мне</NavLink>
        <NavLink to='/todo' className={styles.link} activeClassName={styles.active_link}>Дела</NavLink>
      </Card>
      <div className = {styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
      </div>
    </div>
  </Router>
);

export default App;
