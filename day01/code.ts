function parseInput(input: string[]): number[] {
  const numbers = input.map((value) =>
    value.split("").filter((x) => Number.isInteger(Number.parseInt(x, 10)))
  );
  return numbers
    .map((l) => {
      const first = l.shift();
      return first + (l.pop() ?? first);
    })
    .map((x) => Number.parseInt(x, 10));
}

export function partOne(input) {
  const values = parseInput(input);
  return values.reduce((prev, curr) => prev + curr, 0);
}

function replaceWord(input: string) {
    return input.replaceAll("one", "o1ne")
    .replaceAll("two", "t2wo")
    .replaceAll("three", "th3ree")
    .replaceAll("four", "fo4ur")
    .replaceAll("five", "fi5ve")
    .replaceAll("six", "si6x")
    .replaceAll("seven", "sev7en")
    .replaceAll("eight", "eig8ht")
    .replaceAll("nine", "ni9ne");
//   for (let i = 0; i < input.length-2; i++) {
//     for (let k = 3; k < 6; k++) {
//       const value = input.slice(i, i + k);
//       const updated = input.split("");
//       switch (value) {
//         case "one":
//           updated.splice(i, k, "1");
//           return replaceWord(updated.join(""));
//         case "two":
//           updated.splice(i, k, "2");
//           return replaceWord(updated.join(""));
//         case "three":
//           updated.splice(i, k, "3");
//           return replaceWord(updated.join(""));
//         case "four":
//           updated.splice(i, k, "4");
//           return replaceWord(updated.join(""));
//         case "five":
//           updated.splice(i, k, "5");
//           return replaceWord(updated.join(""));
//         case "six":
//           updated.splice(i, k, "6");
//           return replaceWord(updated.join(""));
//         case "seven":
//           updated.splice(i, k, "7");
//           return replaceWord(updated.join(""));
//         case "eight":
//           updated.splice(i, k, "8");
//           return replaceWord(updated.join(""));
//         case "nine":
//           updated.splice(i, k, "9");
//           return replaceWord(updated.join(""));
//       }
//     }
//   }
//   return input;
}

function replaceNumberWords(input: string[]) {
  return input.map((i) => replaceWord(i));
}

export function partTwo(input) {
  const clean = replaceNumberWords(input);
//   console.log(clean)
//   clean.forEach(x => {
//     if(x.includes('nine')) {
//         console.error(`MISSED: ${x}`)
//     }
//   })
  const values = parseInput(clean);
  return values.reduce((prev, curr) => prev + curr, 0);
}
