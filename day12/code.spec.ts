import * as fs from "fs";
import { partOne, partTwo } from "./code";

const loadInput = () => {
  return JSON.parse(fs.readFileSync("day12/input.json", "utf-8"));
};

const testInput = [
  "???.### 1,1,3",
  ".??..??...?##. 1,1,3",
  "?#?#?#?#?#?#?#? 1,3,1,6",
  "????.#...#... 4,1,1",
  "????.######..#####. 1,6,5",
  "?###???????? 3,2,1",
];

describe("Part 1", () => {
  it("should pass test input", () => {
    expect(partOne(testInput)).toBe(21);
  });

  it("should run real input", () => {
    expect(partOne(loadInput())).toBe(6852);
  });
});

describe.skip("Part 2", () => {
  it("should pass test input", () => {
    expect(partTwo(testInput)).toBe(46);
  });

  it("should run real input", () => {
    const result = partTwo(loadInput());
    expect(result).toBeLessThan(510109797);
    expect(result).toBe(5921508);
  });
});
