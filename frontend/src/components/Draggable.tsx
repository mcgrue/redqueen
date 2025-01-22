import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  let buttonStyle: any = {
    background: 'none',
    border: 'none',
    position: 'relative',
  }
  if (transform) {
    buttonStyle['transform'] = `translate3d(${transform.x}px, ${transform.y}px, 0)`;
  }

  return (
    <button ref={setNodeRef} style={buttonStyle} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}