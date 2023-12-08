import * as fs from "fs";
import { partOne, partTwo } from "./code";

const loadInput = () => {
  return JSON.parse(fs.readFileSync("day01/input.json", "utf-8"));
};

const testInput = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

const secondTestInput = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

describe.skip("Part 1", () => {
  it("should pass test input", () => {
    expect(partOne(testInput)).toBe(142);
  });

  it("should run real input", () => {
    expect(partOne(loadInput())).toBe(54968);
  });
});

describe.skip("Part 2", () => {
  it("should pass test input", () => {
    expect(partTwo(secondTestInput)).toBe(281);
  });

  it("should run real input", () => {
    const result = partTwo(loadInput())
    expect(result).toBeLessThan(54110);
    expect(result).toBe(54094);
  });
});
