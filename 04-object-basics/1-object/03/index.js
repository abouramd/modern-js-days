let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (name in salaries)
  sum += salaries[name];

console.log("sum all salaries is:", sum);
