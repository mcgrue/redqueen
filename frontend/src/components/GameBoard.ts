import {type PokerCard, type PokerCardUuid} from './Card';

export type CardPileUuid = `card-pile-${string}`;

type HexColor = `#${string}`;

export type GameBoard = {
  [key: CardPileUuid]: {
    color: HexColor
    cards?: PokerCard[]
  }
};

export const findParentPileIdx = (card: PokerCardUuid, board: GameBoard): CardPileUuid | false => {

  for (const [pile, { cards }] of Object.entries(board)) {
    if (!cards) {
      continue;
    }
    if (cards.find((c) => c.uuid === card)) {
      return pile as CardPileUuid
    }
  }

  return false;
};

export const moveCardTo = (card: PokerCardUuid, to: CardPileUuid, board: GameBoard): GameBoard => {
  if(!board[to]) {
    return board;
  }

  const from = findParentPileIdx(card, board);
  if(!from) {
    return board;
  }

  const new_board = {
    ...board,
    [from]: {
      ...board[from],
      cards: board[from].cards?.filter((c) => c.uuid !== card)
    },
    [to]: {
      ...board[to],
      cards: [
        ...(board[to].cards || []),
        board[from].cards?.find((c) => c.uuid === card) as PokerCard
      ]
    }
  };

  return new_board;
};
