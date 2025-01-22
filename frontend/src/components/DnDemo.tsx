import React, { useState } from 'react';
import { DndContext, useSensor, useSensors } from '@dnd-kit/core';

import { Draggable } from './Draggable';
import { SmartPointerSensor } from './SmartPointerSensor';
import { type PokerCard } from './Card';
import DropZone from './DropZone';
import { v4 as uuidv4 } from 'uuid';

type DropZoneDef = {
  [key: string]: {
    color: string
    startingCards?: PokerCard[]
  }
};

export function DnDemo() {
  const containers: DropZoneDef = {
    'Deck': {
      color: '#422'
    }, 'Hand': {
      color: '#242',
      startingCards: [
        { suit: 'D', rank: '10', uuid: uuidv4() },
      ]
    }, 'Board': {
      color: '#224'
    }
  };

  const [parent, setParent] = useState(null);

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
          <DropZone key={id} id={id} parent={parent} color={container.color} startingCards={container.startingCards} />
        ))}
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};

export default DnDemo;

