
import Card, { type PokerCard } from "./Card";

export function ClickableCard(setCards: React.Dispatch<React.SetStateAction<[PokerCard, boolean][]>>, card: PokerCard, faceUp: boolean) {

  const style = {
    background: 'none',
    border: 'none'
  }

  return <button style={style} onClick={() => {
    setCards(prevCards => prevCards.map(([c, faceUp]) => c === card ? [c, !faceUp] : [c, faceUp]
    ));
  }}>
    <Card card={card} faceUp={faceUp} />
  </button>;
}

export default ClickableCard;