import React, { useState } from 'react';
import { DndContext, DragEndEvent, useSensor, useSensors } from '@dnd-kit/core';

import { Draggable } from './Draggable';
import { type GameBoard } from './GameBoard';
import { SmartPointerSensor } from './SmartPointerSensor';
import { PokerCardUuid } from './Card';
import DropZone from './DropZone';


export function DnDemo() {
  const containers: GameBoard = {
    'Deck': {
      color: '#422'
    }, 'Hand': {
      color: '#242',
      cards: [
        { suit: 'D', rank: '10', uuid: PokerCardUuid() },
      ]
    }, 'Board': {
      color: '#224'
    }
  };

  const [board, setBoard] = useState(containers);

  // iterate over each containers

  // todo: keyboard sensor?
  const sensors = useSensors(

    useSensor(SmartPointerSensor, {
      // this is what gets clicks to prop through if not dragged
      // https://github.com/clauderic/dnd-kit/issues/591
      activationConstraint: {
        distance: 8,
      },
    })
  );

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>

        {Object.entries(containers).map(([id, container]) => (
          <DropZone key={id} id={`DropZone-${id}`} color={container.color} cards={container.cards} />
        ))}
      </div>
    </DndContext>
  );

  function handleDragEnd(e: DragEndEvent) {

    const { active, over } = e;
    if (!over) {
      return;
    }

    if (e.active.id === e.over?.id) {
      return;
    }

    debugger;


    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setBoard(board);
  }
};

export default DnDemo;

