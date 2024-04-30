function unique(arr) {
  /* your code */
  let res = [];

  arr.forEach(e => {
    if (!res.includes(e))
      res.push(e);
  });

  return res;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O
