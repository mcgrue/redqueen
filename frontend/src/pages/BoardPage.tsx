
import Card, { type PokerCard } from '../components/Card';

function BoardPage() {

  const card_1: PokerCard = { suit: 'D', rank: '10' };
  const card_2: PokerCard = { suit: '♣', rank: 'Q' };
  const card_3: PokerCard = { suit: 'H', rank: '4' };

  return (
    <div className="BoardPage">
      <header className="App-header">
        Board Game
        <Card card={card_1} faceUp={true} />
        <Card card={card_2} faceUp={false} />
        <Card card={card_3} faceUp={true} />
      </header>
    </div>
  );
}

export default BoardPage;