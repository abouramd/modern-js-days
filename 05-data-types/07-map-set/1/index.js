function unique(arr) {
  /* your code */
  let mySet = new Set(arr);

  return Array.from(mySet);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O
