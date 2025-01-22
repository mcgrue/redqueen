
import { useState } from "react";
import Card from "./Card";
import { type PokerCard } from "./PokerDeck";

import styles from './DropZone.module.css';

type ClickableCardProps = {
  card: PokerCard;
  faceUp: boolean;
  top: number;
};

export function ClickableCard({ card, faceUp }: ClickableCardProps) {

  const [visible, setVisible] = useState(faceUp);

  const style = {
    background: 'none',
    border: 'none',
  }

  return <div className={styles.CardWrapper}>
    <button style={style} onClick={() => {
      setVisible(!visible);
    }}>
      <Card card={card} faceUp={visible} />
    </button>
  </div>;
}

export default ClickableCard;