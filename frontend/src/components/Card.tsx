
import React from 'react';
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.topLeft}>A</div>
      <div className={styles.bottomRight}>A</div>
    </div>
  );
}

export default Card;
