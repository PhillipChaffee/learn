function romanToInt(s: string): number {
  const romanNumeralMap = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ]);

  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const subtractSymbol = s.substring(i, i + 2);

    if (romanNumeralMap.has(subtractSymbol)) {
      value += romanNumeralMap.get(subtractSymbol) || 0;
      i++;
    } else {
      value += romanNumeralMap.get(s[i] || '') || 0;
    }
  }

  return value;
}

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
