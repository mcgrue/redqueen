
import React from 'react';
import styles from './SvgLeteleCard.module.css';
// @ts-ignore
import * as deck from '@letele/playing-cards/dist/index.esm.js'

import { type PokerCard, type PokerSuit } from './PokerDeck';

const mult = 30;

const width = 5 * mult;
const height = 7 * mult;

const svgStyle = { position: "absolute", width: "100%", height: "100%", top: 0, left: 0 };

const symbolToLetter = (suit: PokerSuit) => {
  switch (suit) {
    case '♠':
      return 'S';
    case '♣':
      return 'C';
    case '♥':
      return 'H';
    case '♦':
      return 'D';
  }

  return suit;
}

const toLeteleIdx = (card: PokerCard): LeteleIdx => {
  // const suits = ['S', 'C', 'H', 'D'];
  // const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const _1 = symbolToLetter(card.suit);
  const _2 = card.rank.toLowerCase();

  return `${_1}${_2}` as LeteleIdx;
}

/**
 The package provides SVG components for standard playing cards, including different ranks (A, 2-10, J, Q, K) and suits (Hearts, Diamonds, Clubs, Spades). Additionaly there are 2 joker cards (J1, J2) and 2 back side cards (B1,B2) that represent the backside of a card.
Card Naming Convention

The naming convention for card components is a combination of the suit and rank initials.

    H:Hearts,D:Diamonds,C:Clubs,S:Spades
    The ranks are: (a,2-10,j,q,k)
    For instance, H2 represents the 2 of Hearts, and Sk represents the King of Spades.
 */
type LeteleIdx = 'Ha' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'H7' | 'H8' | 'H9' | 'H10' | 'Hj' | 'Hq' | 'Hk' | 'Da' | 'D1' | 'D2' | 'D3' | 'D4' | 'D5' | 'D6' | 'D7' | 'D8' | 'D9' | 'D10' | 'Dj' | 'Dq' | 'Dk' | 'Ca' | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8' | 'C9' | 'C10' | 'Cj' | 'Cq' | 'Ck' | 'Sa' | 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | 'S7' | 'S8' | 'S9' | 'S10' | 'Sj' | 'Sq' | 'Sk' | 'B1' | 'B2' | 'J1' | 'J2';

type SvgLeteleCardProps = {
  card: PokerCard;
};

export const SvgLeteleCard: React.FC<SvgLeteleCardProps> = ({ card }: SvgLeteleCardProps) => {
  const idx = card.faceUp ? toLeteleIdx(card) : 'B2';

  const CardArt = deck[idx];

  let extraProps: any = {};
  if (card.faceUp) {
    extraProps['data-rank'] = card.rank;
    extraProps['data-suit'] = card.suit;
    extraProps['data-faceup'] = 'true';
  } else {
    extraProps['data-faceup'] = 'false';
  }

  return (
    <div className={styles.PokerCard} {...extraProps} data-card-uuid={card.uuid}>
      {/* <CardArt style={{ height: `${height}px`, width: `${width}px` }} /> */}
      <CardArt style={svgStyle} />
    </div>
  );
}

type JokerOptions = 1 | 2;

type JokerProps = {
  jokerIdx?: JokerOptions;
  faceUp?: boolean;
};

export const Joker: React.FC<JokerProps> = ({ jokerIdx, faceUp }: JokerProps) => {

  const jidx = jokerIdx ? jokerIdx : 1;
  const face = !!faceUp;

  const CardArt = deck[`J${jidx}`];

  let extraProps: any = {};
  if (face) {
    extraProps['data-rank'] = 'Joker';
    extraProps['data-suit'] = 'Joker';
    extraProps['data-faceup'] = 'true';
  } else {
    extraProps['data-faceup'] = 'false';
  }

  return (
    <div className={styles.PokerCard} {...extraProps} data-card-uuid={'Jooooooker?'}>
      <CardArt style={svgStyle} />
      {/* <CardArt style={{ height: `${height}px`, width: `${width}px` }} /> */}
    </div>
  );
}


export default SvgLeteleCard;
