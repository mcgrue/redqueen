import {type PokerCard} from './Card';


type CardPileUuid = `card-pile-${string}`;

type HexColor = `#${string}`;

export type GameBoard = {
  [key: CardPileUuid]: {
    color: HexColor
    cards?: PokerCard[]
  }
};


const MoveCardTo = (card: PokerCard, to: CardPileUuid, board: GameBoard): GameBoard => {
  if(!board[to]) {
    return board;
  }

  // find the id of the board with the card, else return false
  const from = Object.keys(board).find((pile) => {
    const idx = pile as CardPileUuid;
    if(!idx) {
      return false;
    }
    if( board[idx].cards?.find((c) => c.uuid === card.uuid) )
    {
      return idx;
    }
  });

  console.log(from);


};
