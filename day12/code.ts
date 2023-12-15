/*
. operational
# damaged
contiguous group of damaged springs
*/

function parseInput(input: string[]): [string, number[]][] {
  return input.map((i) => {
    const [condition, groupsRaw] = i.split(" ");
    const groups = groupsRaw.split(",").map(x => Number.parseInt(x, 10));
    return [condition, groups];
  });
}

// function calculateValidArrangements(input: string) {
//   const numberUnknown = input.split("").filter((x) => x === "?").length;
//   new Array(numberUnknown).fill(".");
// }

function buildRegex(groups: number[]) {
  let body = groups
    .map((x) => {
      return `(#{${x}})`;
    })
    .join("\\.+");

  return new RegExp("^\\.*" + body + "\\.*$");
}

function isValid(input: string, regex: RegExp) {
  return regex.test(input);
}

const question = new RegExp(/\?/);

function generatePossible(input: string): string[] {
  if (question.test(input)) {
    return [input].flatMap((i) => {
      return [
        ...generatePossible(input.replace(/\?/, ".")),
        ...generatePossible(input.replace(/\?/, "#")),
      ];
    });
  }
  return [input];
}

export function partOne(input) {
  // const [s, g] = parseInput(input)[1];
  // const all = generatePossible(s);
  // console.log(all);
  // const regex = buildRegex(g);
  // console.log(regex)
  // all.forEach(s => {
  //   const valid = isValid(s, regex)
  //   console.log(`${s}|${valid}`)
  // })
  return parseInput(input)
    .map(([i, groups]) => {
      const regex = buildRegex(groups);
      const valid = generatePossible(i).filter((s) => isValid(s, regex)).length;
      console.log(`${i} : ${valid}`)
      return valid
    })
    .reduce((prev, curr) => {
      return prev + curr;
    }, 0);
}

export function partTwo(input) {}
