import React from 'react';
import { Droppable } from './Droppable';

type DropZoneProps = {
  id: string;
  parent: string | null;
  color: string;
  draggableMarkup: any;
};


export function DropZone({ id, parent, color, draggableMarkup }: DropZoneProps) {
  return <Droppable key={id} id={id}>
    <div style={{ height: '300px', width: '300px', backgroundColor: color, borderRadius: '10px' }} >
      <h1>{id}</h1>
      {parent === id ? draggableMarkup : 'Drop here'}
    </div>
  </Droppable >;
}

export default DropZone;