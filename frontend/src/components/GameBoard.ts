import {type PokerCard} from './Card';

export type GameBoard = {
  [key: string]: {
    color: string
    cards?: PokerCard[]
  }
};

// const boardAfterMove = (board: GameBoard, card: PokerCard,  ): GameBoard => {
//   const {from, to, card} = move;
//   const fromColumn = board[from];
//   const toColumn = board[to];
//   if (!fromColumn || !toColumn) {
//     return board;
//   }
//   const fromCards = fromColumn.cards || [];
//   const toCards = toColumn.cards || [];
//   const fromCardsAfterMove = fromCards.filter(c => c !== card);
//   const toCardsAfterMove = [...toCards, card];
//   return {
//     ...board,
//     [from]: {
//       ...fromColumn,
//       cards: fromCardsAfterMove
//     },
//     [to]: {
//       ...toColumn,
//       cards: toCardsAfterMove
//     }
//   };
// };

// export MoveCardFromTo = {
//   from: string,
//   to: string,
//   card: PokerCard
// }