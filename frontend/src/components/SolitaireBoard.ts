import { type PokerCard } from "./PokerDeck";
import { CardPileId, type GameBoard } from "./GameBoard";

export const makeSolitaireDeck = (pokerDeck: PokerCard[]) : GameBoard => {
  
  let board:GameBoard = {};

  // export type GameBoard = {
  //   [key: CardPileUuid]: {
  //     color: HexColor
  //     cards?: PokerCard[]
  //   }
  // };

  board[CardPileId(`Deck`)] = { color: '#224', cards: [],}
  board[CardPileId(`Discard`)] = { color: '#224', cards: [],}
  board[CardPileId(`Null`)] = { color: '#000', cards: [],}

  board[CardPileId(`Ace-1`)] = { color: '#422', cards: [],}
  board[CardPileId(`Ace-2`)] = { color: '#422', cards: [],}
  board[CardPileId(`Ace-3`)] = { color: '#422', cards: [],}
  board[CardPileId(`Ace-4`)] = { color: '#422', cards: [],}

  makePiles(board, pokerDeck);

  // board[CardPileId(`Deck`)].cards = pokerDeck;

  return board;
};

function makePiles(board: GameBoard, pokerDeck: PokerCard[]) {
  for (let i = 0; i < 7; ++i) {
    const j = i;
    const key = CardPileId(`Pile-${j}`);
    const color = '#242';
    board[key] = {
      color,
      cards: [],
    };

    for (let k = 0; k <= j; ++k) {
      const card = pokerDeck.pop();
      if (card)
      {
        card.faceUp = (k == j);
        board[key].cards?.push(card);
      }
    }
  }
}

