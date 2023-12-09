import * as fs from "fs";
import { partOne, partTwo } from "./code";

const loadInput = () => {
  return JSON.parse(fs.readFileSync("day03/input.json", "utf-8"));
};

const testInput = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

describe.skip("Part 1", () => {
  it("should pass test input", () => {
    expect(partOne(testInput)).toBe(4361);
  });

  it("should run real input", () => {
    expect(partOne(loadInput())).toBe(549908);
  });
});

describe("Part 2", () => {
  it("should pass test input", () => {
    expect(partTwo(testInput)).toBe(467835);
  });

  it("should run real input", () => {
    const result = partTwo(loadInput());
    expect(result).toBe(81166799);
  });
});
