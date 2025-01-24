import React, { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, useSensor, useSensors } from '@dnd-kit/core';
import {
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import { CardPileId, findParentPileIdx, getCardById, moveCardTo, type GameBoard, type CardPileUuid } from './GameBoard';
import { SmartPointerSensor } from './SmartPointerSensor';
import { makePokerDeck, PokerCardUuid, type PokerCard } from './PokerDeck';
import DropZone from './DropZone';
import { SvgLeteleCard, Joker } from './SvgLeteleCard';


export function DnDemo() {

  let start: GameBoard = {};
  const deck = CardPileId('Deck');
  start[deck] = {
    cards: makePokerDeck(false),
    color: '#422',
  };
  const hand = CardPileId('Hand');
  start[hand] = {
    cards: [],
    color: '#242',
  };
  const field = CardPileId('Field');
  start[field] = {
    cards: [
    ],
    color: '#224',
  };

  const [board, setBoard] = useState(start);
  //const activeRef = useRef<HTMLDivElement | null>(null);
  const [lastActiveDragElement, setLastActiveDragElement] = useState<PokerCard | null>(null);

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

  function handleDragStart(e: DragEndEvent) {
    const { active } = e;

    const id = (active.id as string).split('draggable-card-')[1] as PokerCardUuid;
    const card = getCardById(id, board);

    console.log('card_id: ', id, ' found?: ', card !== false);

    if (card) {
      console.log('setLastActiveDragElement: ', card);
      setLastActiveDragElement(card);
    } else {
      console.log('no card!');
    }
  }

  function handleDragEnd(e: DragEndEvent) {

    const { over } = e;
    if (!over) {
      return;
    }

    const card_uuid = (e.active.id as string).split('draggable-card-')[1] as PokerCardUuid;
    const new_pile_id = (e.over?.id as string).split('Droppable-DropZone-')[1] as CardPileUuid;
    const current_pile_id = findParentPileIdx(card_uuid, board);

    if (current_pile_id === new_pile_id) {
      return;
    }

    const new_board = moveCardTo(card_uuid, new_pile_id, board);

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setBoard(new_board);
  }

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>

        {Object.entries(board).map(([id, container]) => (
          <DropZone key={id} id={`DropZone-${id}`} color={container.color} cards={container.cards} />
        ))}
      </div>

      <DragOverlay zIndex={999999999999999} modifiers={[restrictToWindowEdges]} dropAnimation={{
        duration: 500,
        easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
      }}>
        <div style={{ transform: 'rotate(2deg)' }}>
          {lastActiveDragElement ? <SvgLeteleCard card={lastActiveDragElement} /> : <Joker />}
        </div>
      </DragOverlay>
    </DndContext >
  );
};

export default DnDemo;

