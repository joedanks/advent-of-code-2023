function getPositionString(x: number, y: number) {
  return `${x},${y}`;
}

function readPositionString(positionString: string) {
  return positionString.split(",").map((p) => parseInt(p, 10));
}

function findSymbols(input: string[]) {
  const symbolLocations = [];
  for (let y = 0; y < input.length; y++) {
    const row = input[y].split("");
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      if (char.match(/[^\d/.]/)) {
        symbolLocations.push(getPositionString(x, y));
      }
    }
  }
  return symbolLocations;
}

function computeAdjacentPositions(symbolLocations: string[]) {
  const allAdjacent = symbolLocations.flatMap((loc) => {
    const [x, y] = readPositionString(loc);
    return [
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x - 1, y],
      [x + 1, y],
      [x - 1, y + 1],
      [x, y + 1],
      [x + 1, y + 1],
    ];
  });
  return Array.from(new Set(allAdjacent))
    .filter(([x, y]) => x >= 0 && y >= 0)
    .map(([x, y]) => ({
      symbolLocation: getPositionString(x, y),
    }));
}

// function findNumbers(input: string[], allAdjacent: string[]) {
//   const numbers = [];
//   allAdjacent.forEach((positionString) => {
//     const [x, y] = readPositionString(positionString);
//     const row = input[y].split("");
//     if (!Number.isNaN(Number.parseInt(row.at(x)))) {
//       const match = input[y].matchAll(/(?<number>\d*)/dg);
//       for (const value of match) {
//         // console.error(value)
//         if (
//           value[0] !== "" &&
//           value["indices"][0][0] <= x &&
//           value["indices"][0][1] >= x
//         ) {
//           if (
//             numbers.find(
//               (n) =>
//                 n.y === y &&
//                 n.xRange ===
//                   getPositionString(
//                     value["indices"][0][0],
//                     value["indices"][0][1]
//                   )
//             ) === undefined
//           ) {
//             numbers.push({
//               y,
//               xRange: getPositionString(
//                 value["indices"][0][0],
//                 value["indices"][0][1]
//               ),
//               number: Number.parseInt(value[0]),
//             });
//           }
//         }
//       }
//     }
//   });
//   console.error(numbers);
//   return numbers;
// }

function buildMap(input: string[]) {
  const map = {};
  for (let y = 0; y < input.length; y++) {
    const row = input[y].split("");
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      map[getPositionString(x, y)] = char;
    }
  }
  return map;
}

function getAllNumbers(input: string[]) {
  const numbers = [];
  input.forEach((row, y) => {
    const match = row.matchAll(/(?<number>\d*)/dg);
    for (const value of match) {
      if (value[0] !== "") {
        numbers.push({
          y,
          xRange: [value["indices"][0][0], value["indices"][0][1]],
          number: value[0],
        });
      }
    }
  });
  return numbers;
}

function numberAdjacentPositions(number): string[] {
  const adjacent = [];
  for (let x = number.xRange[0] - 1; x <= number.xRange[1]; x++) {
    adjacent.push(getPositionString(x, number.y - 1));
    adjacent.push(getPositionString(x, number.y + 1));
  }
  adjacent.push(getPositionString(number.xRange[0] - 1, number.y));
  adjacent.push(getPositionString(number.xRange[1], number.y));
  return adjacent;
}

function isNextToSymbol(number, map) {
  return numberAdjacentPositions(number).some((pos) => {
    if (map[pos] !== undefined && map[pos].match(/[^0-9.]/)) {
      return true;
    }
    return false;
  });
}

export function partOne(input) {
  const numbers = getAllNumbers(input);
  console.log(numbers);
  const map = buildMap(input);

  const schema = numbers.filter((number) => isNextToSymbol(number, map));

  console.log(schema);

  return schema
    .map((number) => number.number)
    .map(n => Number.parseInt(n, 10))
    .reduce((prev, curr) => prev + curr, 0);
}

export function partTwo(input) {}
