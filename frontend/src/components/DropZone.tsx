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

export function DropZone({ id, color, cards = [] }: DropZoneProps) {

  const h1 = id.replaceAll('DropZone-card-pile-', '');

  return <Droppable key={id} id={`Droppable-${id}`}>

    <div className={styles.CardStackWrapper} style={{ backgroundColor: color }} >
      <h1>{h1}</h1>
      <div className={styles.CardStack}>
        {cards.map((card) => (
          <Draggable key={`draggable-card-${card.uuid}`} id={`draggable-card-${card.uuid}`} >
            <ClickableCard card={card} faceUp={card.faceUp} />
          </Draggable>
        ))}
      </div>
    </div>

  </Droppable >;
}

export default DropZone;