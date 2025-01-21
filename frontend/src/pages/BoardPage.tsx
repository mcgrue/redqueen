import React, { useState } from 'react';

import styles from '../components/Card.module.css'
import Card, { type PokerCard } from '../components/Card';

function BoardPage() {

  const card_1: PokerCard = { suit: 'D', rank: '10' };
  const card_2: PokerCard = { suit: '♣', rank: 'Q' };
  const card_3: PokerCard = { suit: 'H', rank: '4' };

  type CardState = [PokerCard, boolean];

  const cardState: CardState[] = [
    [card_1, true],
    [card_2, false],
    [card_3, true],
  ];

  // usestate to keep track of the cards. clicking on them changes the boolean
  // if the card is face up or face down

  const [cards, setCards] = useState(cardState);

  return (
    <div className="BoardPage">
      <header className="App-header">
        Board Game



        <div style={{ background: 'green', width: '90%', height: '300px', margin: 'auto', paddingTop: '40px', borderRadius: '10px' }} >
          {cards.map(([card, faceUp]) => (
            ClickableCard(setCards, card, faceUp)
          ))}
        </div>

      </header>
    </div>
  );
}

export default BoardPage;

function ClickableCard(setCards: React.Dispatch<React.SetStateAction<[PokerCard, boolean][]>>, card: PokerCard, faceUp: boolean) {

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
