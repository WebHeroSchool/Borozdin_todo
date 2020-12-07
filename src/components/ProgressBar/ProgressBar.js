import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className= {styles.preloader} >
      <div className= {styles.preloader_container }>
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;
