type Reveal = {
  red: number;
  green: number;
  blue: number;
};

type Game = {
  id: number;
  reveals: Reveal[];
};

function parseInput(input: string[]) {
  return input.map((x) => {
    const id = x.match(/^Game (\d*)/)[1];
    const reveals = x
      .split(":")[1]
      .split(";")
      .map((y) => {
        const redMatch = y.match(/(\d*) red/);
        const greenMatch = y.match(/(\d*) green/);
        const blueMatch = y.match(/(\d*) blue/);
        return {
          red: redMatch ? Number.parseInt(redMatch[1]) : 0,
          green: greenMatch ? Number.parseInt(greenMatch[1]) : 0,
          blue: blueMatch ? Number.parseInt(blueMatch[1]) : 0,
        };
      });
    return {
      id,
      reveals,
    };
  });
}

export function partOne(input) {
  const games = parseInput(input);
  return games
    .filter((game) => {
      return game.reveals.every(
        (r) => r.red <= 12 && r.green <= 13 && r.blue <= 14
      );
    })
    .map((game) => Number.parseInt(game.id, 10))
    .reduce((prev, curr) => prev + curr, 0);
}

export function partTwo(input) {
  const games = parseInput(input);
  const mins = games.map((game) => {
    let min = game.reveals.reduce(
      (prev, curr) => {
        return {
          red: Math.max(prev.red, curr.red),
          green: Math.max(prev.green, curr.green),
          blue: Math.max(prev.blue, curr.blue),
        };
      },
      {
        red: 0,
        green: 0,
        blue: 0,
      }
    );
    return min;
  });
  return mins
    .map(({ red, blue, green }) => red * blue * green)
    .reduce((prev, curr) => prev + curr, 0);
}
