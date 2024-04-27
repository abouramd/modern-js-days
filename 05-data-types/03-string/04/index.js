function extractCurrencyValue(str) {
  return +str.substring(1);
}

console.log(extractCurrencyValue('$120') === 120); // true
