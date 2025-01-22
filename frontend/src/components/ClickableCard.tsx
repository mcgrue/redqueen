
import { useState } from "react";
import Card, { type PokerCard } from "./Card";

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

  return <button style={style} onClick={() => {
    setVisible(!visible);
  }}>
    <Card card={card} faceUp={visible} />
  </button>;
}

export default ClickableCard;