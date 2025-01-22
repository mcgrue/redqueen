import React from 'react';
import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
import { ClickableCard } from './ClickableCard';

type DropZoneProps = {
  id: string;
  parent: string | null;
  color: string;
  startingCards?: any[];
};

export function DropZone({ id, parent, color, startingCards = [] }: DropZoneProps) {
  return <Droppable key={id} id={id}>
    <div style={{ height: '300px', width: '300px', backgroundColor: color, borderRadius: '10px' }} >
      <h1>{id}</h1>
      {startingCards.map((card, index) => (
        <Draggable key={`draggable-card-${card.uuid}`} id={`draggable-card-${card.uuid}`}>
          <ClickableCard card={card} faceUp={true} />
        </Draggable>
      ))}
    </div>

  </Droppable>;
}

export default DropZone;