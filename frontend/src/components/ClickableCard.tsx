
import { useState } from "react";
import SvgLeteleCard from "./SvgLeteleCard";
import { type PokerCard } from "./PokerDeck";

import styles from './DropZone.module.css';

type ClickableCardProps = {
  card: PokerCard;
};

export function ClickableCard({ card }: ClickableCardProps) {

  // https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback
  // const itemsRef = useRef(null);

  const [curCard, updateCard] = useState(card);
  const [visible, setVisible] = useState(!!curCard.faceUp);
  if (false) {
    console.log('visible: ', visible);
  }

  const style = {
    background: 'none',
    border: 'none',
    width: '100%',
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
      <SvgLeteleCard card={curCard} />
    </button>
  </div>;
}

export default ClickableCard;