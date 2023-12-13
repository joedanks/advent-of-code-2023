import * as fs from "fs";
import { partOne, partTwo } from "./code";

const loadInput = () => {
  return JSON.parse(fs.readFileSync("day05/input.json", "utf-8"));
};

const testInput = [
  ["seeds: 79 14 55 13"],
  ["seed-to-soil map:", "50 98 2", "52 50 48"],
  ["soil-to-fertilizer map:", "0 15 37", "37 52 2", "39 0 15"],
  ["fertilizer-to-water map:", "49 53 8", "0 11 42", "42 0 7", "57 7 4"],
  ["water-to-light map:", "88 18 7", "18 25 70"],
  ["light-to-temperature map:", "45 77 23", "81 45 19", "68 64 13"],
  ["temperature-to-humidity map:", "0 69 1", "1 0 69"],
  ["humidity-to-location map:", "60 56 37", "56 93 4"],
];

describe.skip("Part 1", () => {
  it("should pass test input", () => {
    expect(partOne(testInput)).toBe(35);
  });

  it("should run real input", () => {
    expect(partOne(loadInput())).toBe(510109797);
  });
});

describe("Part 2", () => {
  it("should pass test input", () => {
    expect(partTwo(testInput)).toBe(46);
  });

  it("should run real input", () => {
    const result = partTwo(loadInput());
    expect(result).toBeLessThan(510109797);
    expect(result).toBe(5921508);
  });
});
