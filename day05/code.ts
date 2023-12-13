type Mapping = {
  source: number;
  sourceEnd: number;
  destination: number;
  destinationEnd: number;
  size: number;
};

function parseMap(input: string[]): Record<string, Mapping> {
  input.shift();
  return input
    .map((i) => {
      const [destination, source, size] = i.match(/(\d+)/dg)!;
      return {
        source: Number.parseInt(source),
        sourceEnd: Number.parseInt(source) + Number.parseInt(size),
        destination: Number.parseInt(destination),
        destinationEnd: Number.parseInt(destination) + Number.parseInt(size),
        size: Number.parseInt(size),
      };
    })
    .reduce((prev, curr) => {
      return {
        ...prev,
        [curr.source]: curr,
      };
    }, {});
}

function mapDesination(x: number, map: Record<string, Mapping>): number {
  const closestMapping = Object.values(map).reduce((prev, curr) => {
    if (curr.source <= x && curr.source > prev.source) {
      return curr;
    }
    return prev;
  });

  if (
    closestMapping.source + closestMapping.size >= x &&
    closestMapping.source <= x
  ) {
    const diff = x - closestMapping.source;
    return closestMapping.destination + diff;
  }
  return x;
}

export function partOne(input) {
  const seeds: number[] = input
    .shift()[0]
    .match(/(\d+)/dg)
    .map((s) => Number.parseInt(s, 10));
  console.log(seeds);
  const maps = input.map((i) => parseMap(i));
  console.log(maps);
  const locations: [number, number][] = seeds.map((s) => {
    const dests: number[] = [];
    const result = [
      s,
      maps.reduce((prev, curr) => {
        const d = mapDesination(prev, curr);
        dests.push(d);
        return d;
      }, s),
    ];
    console.log(`Seed ${s}: ${dests}`);
    return result;
  });
  console.log(locations);

  const result = locations.reduce((prev, curr) => {
    if (prev[1] < curr[1]) {
      return prev;
    }
    return curr;
  });

  return result[1];
}

function lowestMapping(map: Record<string, Mapping>) {
  Object.values(map).reduce((prev, curr) => {
    if (prev.destination < curr.destination) {
      return prev;
    }
    return curr;
  });
}

function reverseMapping(min, max, map) {}

function crazy(input) {
  const seedRanges: number[][] = [];
  const seeds: number[] = input
    .shift()[0]
    .match(/(\d+)/dg)
    .map((s) => Number.parseInt(s, 10));

  for (let i = 0; i < seeds.length; i += 2) {
    const seedStart = seeds[i];
    const seedCount = seeds[i + 1];
    seedRanges.push([seedStart, seedCount]);
  }

  const maps = input.map((i) => parseMap(i)).reverse();
}

function mergeMaps(
  source: Record<string, Mapping>,
  destination: Record<string, Mapping>
) {
  Object.values(source).map((s) => {
    
  });
}

function partTwoRanges(input) {
  const seedRanges: number[][] = [];
  const seeds: number[] = input
    .shift()[0]
    .match(/(\d+)/dg)
    .map((s) => Number.parseInt(s, 10));
  for (let i = 0; i < seeds.length; i += 2) {
    const seedStart = seeds[i];
    const seedCount = seeds[i + 1];
    seedRanges.push([seedStart, seedCount]);
  }

  const maps = input.map((i) => parseMap(i));
  const locations: [number, number][] = seedRanges.map((s) => {
    const dests: number[] = [];
    let nearestSeed: number = -1;
    let nearest: number = Number.MAX_SAFE_INTEGER;
    for (let seed = s[0]; seed <= s[1] + s[0]; seed++) {
      const dist = maps.reduce((prev, curr) => {
        const d = mapDesination(prev, curr);
        dests.push(d);
        return d;
      }, s);

      if (dist < nearest) {
        nearest = dist;
        nearestSeed = seed;
      }
    }
    const result = [nearestSeed, nearest];
    // console.log(`Seed ${s}: ${dests}`);
    return result;
  });
  // console.log(locations);

  const result = locations.reduce((prev, curr) => {
    if (prev[1] < curr[1]) {
      return prev;
    }
    return curr;
  });

  return result[1];
}

export function partTwo(input) {
  const seedRanges: number[][] = [];
  const seeds: number[] = input
    .shift()[0]
    .match(/(\d+)/dg)
    .map((s) => Number.parseInt(s, 10));
  for (let i = 0; i < seeds.length; i += 2) {
    const seedStart = seeds[i];
    const seedCount = seeds[i + 1];
    seedRanges.push([seedStart, seedCount]);
  }

  const maps = input.map((i) => parseMap(i));
  const locations: [number, number][] = seedRanges.map((s) => {
    const dests: number[] = [];
    let nearestSeed: number = -1;
    let nearest: number = Number.MAX_SAFE_INTEGER;
    for (let seed = s[0]; seed <= s[1] + s[0]; seed++) {
      const dist = maps.reduce((prev, curr) => {
        const d = mapDesination(prev, curr);
        dests.push(d);
        return d;
      }, s);

      if (dist < nearest) {
        nearest = dist;
        nearestSeed = seed;
      }
    }
    const result = [nearestSeed, nearest];
    // console.log(`Seed ${s}: ${dests}`);
    return result;
  });
  // console.log(locations);

  const result = locations.reduce((prev, curr) => {
    if (prev[1] < curr[1]) {
      return prev;
    }
    return curr;
  });

  return result[1];
}
