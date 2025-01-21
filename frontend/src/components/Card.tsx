
import React from 'react';
import styles from './Card.module.css';
// @ts-ignore
import { Sq } from '@letele/playing-cards/dist/index.esm.js'

// console.log(deck)

const mult = 30;

const width = 5 * mult;
const height = 7 * mult;

function Card() {
  return (
    <div style={{ backgroundColor: 'green' }}>
      <Sq style={{ height: `${height}px`, width: `${width}px` }} />
    </div>
  );
}

export default Card;
