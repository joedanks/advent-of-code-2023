type Card = {
  cardId: number;
  winningNumbers: number[];
  myNumbers: number[];
  score?: number;
};

function parseInput(input: string[]): Card[] {
  return input.map((i) => {
    const [idChunk, restChunk] = i.split(":");
    const id = Number.parseInt(idChunk.match(/(\d+)/dg)[0], 10);
    const [winningChunk, myChunk] = restChunk.split("|");
    const winningNumbers = winningChunk
      .match(/(\d+)/dg)
      .map((w) => Number.parseInt(w, 10));
    const myNumbers = myChunk
      .match(/(\d+)/dg)
      .map((m) => Number.parseInt(m, 10));
    return {
      cardId: id,
      winningNumbers,
      myNumbers,
    };
  });
}

function scoreCard(card: Card) {
  const matches = card.myNumbers.filter((m) =>
    card.winningNumbers.includes(m)
  ).length;

  return matches === 0 ? 0 : Math.pow(2, matches - 1);
}

function cardMatches(card: Card) {
  return card.myNumbers.filter((m) =>
    card.winningNumbers.includes(m)
  ).length;
}

export function partOne(input) {
  const cards = parseInput(input);
  const scored = cards.map((c) => {
    c.score = scoreCard(c);
    return c;
  });
  return scored.reduce((prev, curr) => prev + curr.score, 0);
}

export function partTwo(input) {
  const cards = parseInput(input);
  const cardCounts: Record<string, number> = {};
  cards.forEach((c) => (cardCounts[c.cardId] = 1));

  cards
    .sort((a, b) => a.cardId - b.cardId)
    .forEach((card) => {
      const score = cardMatches(card);
      for (let x = card.cardId + 1; x <= card.cardId + score; x++) {
        cardCounts[x] += cardCounts[card.cardId];
      }
    });

  console.log(cardCounts);

  return Object.values(cardCounts).reduce((prev, curr) => prev + curr, 0);
}
