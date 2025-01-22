import { moveCardTo, findParentPileIdx, type GameBoard } from './GameBoard';

// test
describe('GameBoard', () => {

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