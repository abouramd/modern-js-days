let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries)); // 650

function sumSalaries(salaries) {
  let sum = 0;
  for (const salar of Object.values(salaries)) sum += salar;
  return sum;
}
