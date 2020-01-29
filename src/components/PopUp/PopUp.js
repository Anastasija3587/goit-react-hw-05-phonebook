import React from 'react';
import styles from './PopUp.module.css';

const PopUp = () => {
  return (
    <div className={styles.div} role="presentation">
      <p className={styles.p}>This name already exists!</p>
    </div>
  );
};

export default PopUp;
