import { CardPileId, moveCardTo, findParentPileIdx, getCardById, type GameBoard } from './GameBoard';
import {type PokerCard} from './PokerDeck';

// test
describe('GameBoard', () => {

  it('can make an id', () => {
    const result = CardPileId('Deck');
    expect(result).toBe('card-pile-Deck');
  });

  it('can find a card by id', () => {
    const specific_card_id = 'poker-card-d10';
    const specific_card:PokerCard = { suit: 'D', rank: '10', uuid: specific_card_id };
    const inputBoard: GameBoard = {
      'card-pile-deck': {
        color: '#422',
        cards: []
      },
      'card-pile-hand': {
        color: '#242',
        cards: [specific_card]
      },
    };

    const result = getCardById(specific_card_id, inputBoard);
    expect(result).toEqual(specific_card);
  }),

  it('can find the parent pile of a card', () => {
    const inputBoard: GameBoard = {
      'card-pile-deck': {
        color: '#422',
        cards: [
          
        ]
      },
      'card-pile-hand': {
        color: '#242',
        cards: [{ suit: 'D', rank: '10', uuid: 'poker-card-d10' },]
      },
    };

    const result = findParentPileIdx('poker-card-d10', inputBoard);

    expect(result).toBe('card-pile-hand');
  });

  it('can move a card from one pile to another', () => {
    const inputBoard: GameBoard = {
      'card-pile-deck': {
        color: '#422',
        cards: [
          { suit: 'D', rank: '10', uuid: 'poker-card-d10' },
        ]
      },
      'card-pile-hand': {
        color: '#242',
        cards: []
      },
    };

    const expectedBoard: GameBoard = {
      'card-pile-deck': {
        color: '#422',
        cards: []
      },
      'card-pile-hand': {
        color: '#242',
        cards: [{ suit: 'D', rank: '10', uuid: 'poker-card-d10' },]
      },
    }

    const result = moveCardTo('poker-card-d10', 'card-pile-hand', inputBoard);

    expect(result).toEqual(expectedBoard);
  });
});