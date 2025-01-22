import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';

import DropZone from './DropZone';

type DropZoneDef = {
  [key: string]: { color: string }
};

export function DnDemo() {
  const containers: DropZoneDef = {
    'Deck': {
      color: '#422'
    }, 'Hand': {
      color: '#242'
    }, 'Board': {
      color: '#224'
    }
  };

  const [parent, setParent] = useState(null);

  // iterate over each containers



  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>

        {Object.entries(containers).map(([id, container]) => (
          <DropZone key={id} id={id} parent={parent} color={container.color} draggableMarkup={draggableMarkup} />
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

