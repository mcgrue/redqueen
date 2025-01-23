
import { useState, useRef } from "react";
import Card from "./Card";
import { type PokerCard } from "./PokerDeck";

import styles from './DropZone.module.css';

type ClickableCardProps = {
  card: PokerCard;
  faceUp: boolean;
};

export function ClickableCard({ card, faceUp }: ClickableCardProps) {

  // https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback
  const itemsRef = useRef(null);

  const [curCard, updateCard] = useState(card);
  const [visible, setVisible] = useState(!!curCard.faceUp);

  const style = {
    background: 'none',
    border: 'none',
  }

  return <div className={styles.CardWrapper} ref={
    (node: any) => {
      card.ref = node;
    }
  }>
    <button style={style} onClick={() => {
      curCard.faceUp = !curCard.faceUp;
      setVisible(curCard.faceUp);
      updateCard(curCard);
    }}>
      <Card card={curCard} faceUp={visible} />
    </button>
  </div>;
}

export default ClickableCard;