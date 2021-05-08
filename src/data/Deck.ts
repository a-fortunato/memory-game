const HALF_DECK: number[] = [...Array(16).keys()]

// shuffleDeck taken from https://stackoverflow.com/a/12646864/10309857
export function shuffleDeck(deck: number[]): void {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
}

function generateDeck(): number[] {
  return [...HALF_DECK, ...HALF_DECK]
}

function generateShuffledDeck(): number[] {
  const deck = generateDeck()
  shuffleDeck(deck)
  return deck
}

export const DECK = generateShuffledDeck()
