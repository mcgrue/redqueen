
import { useState } from "react";
import Card, { type PokerCard } from "./Card";

import styles from './DropZone.module.css';

type ClickableCardProps = {
  card: PokerCard;
  faceUp: boolean;
};

export function ClickableCard({ card, faceUp }: ClickableCardProps) {

  const [visible, setVisible] = useState(faceUp);

  const style = {
    background: 'none',
    border: 'none'
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