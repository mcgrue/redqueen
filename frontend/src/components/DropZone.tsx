import React from 'react';
import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
import { ClickableCard } from './ClickableCard';

import styles from './DropZone.module.css';

type DropZoneProps = {
  id: string;
  color: string;
  cards?: any[];
};

let top = 0;

export function DropZone({ id, color, cards = [] }: DropZoneProps) {
  return <Droppable key={id} id={`Droppable-${id}`}>

    <div className={styles.CardStackWrapper} style={{ backgroundColor: color }} >
      <h1>{id}</h1>
      <div className={styles.CardStack}>
        {cards.map((card) => (
          <Draggable key={`draggable-card-${card.uuid}`} id={`draggable-card-${card.uuid}`} style={{ top: `${top}px` }}>
            <ClickableCard card={card} faceUp={card.faceUp} />
          </Draggable>
        ))}
      </div>
    </div>

  </Droppable >;
}

export default DropZone;