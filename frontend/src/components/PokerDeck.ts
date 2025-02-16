import { v4 as uuidv4 } from 'uuid';

export type PokerSuit = '♠' | '♣' | '♥' | '♦' | 'S' | 'C' | 'H' | 'D';
export type PokerRank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
export type PokerCardUuid = `poker-card-${string}`;

export type PokerCard = {
  suit: PokerSuit;
  rank: PokerRank;
  uuid: PokerCardUuid;
  faceUp?: boolean;
  ref? : React.RefObject<HTMLDivElement>;
};

export const makePokerCardUuid = (): PokerCardUuid => {
  return `poker-card-${uuidv4()}`;
}

export const makePokerDeck = (faceUp:boolean = true): PokerCard[] => {
  const suits:PokerSuit[] = ['♠', '♣', '♥', '♦'];
  const ranks:PokerRank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let deck: PokerCard[] = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({ suit, rank, uuid: makePokerCardUuid(), faceUp, ref:undefined});
    }
  }

  return deck;
}