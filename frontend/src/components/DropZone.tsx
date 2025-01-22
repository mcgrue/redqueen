import React from 'react';
import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
import { ClickableCard } from './ClickableCard';

type DropZoneProps = {
  id: string;
  color: string;
  cards?: any[];
};

export function DropZone({ id, color, cards = [] }: DropZoneProps) {
  return <Droppable key={id} id={`Droppable-${id}`}>
    <div style={{ height: '400px', width: '300px', backgroundColor: color, borderRadius: '10px' }} id={`DropZone-${id}`} >
      <h1>{id}</h1>
      {cards.map((card) => (
        <Draggable key={`draggable-card-${card.uuid}`} id={`draggable-card-${card.uuid}`}>
          <ClickableCard card={card} faceUp={true} />
        </Draggable>
      ))}
    </div>

  </Droppable>;
}

export default DropZone;