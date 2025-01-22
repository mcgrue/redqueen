import { makePokerDeck } from './PokerDeck';

// test
describe('PokerDeck', () => {

  it('can make a deck', () => {
    const deck = makePokerDeck();
    expect(deck.length).toBe(52);
    
  });
});