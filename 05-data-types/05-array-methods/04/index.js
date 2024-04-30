let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => {
  return b - a;
});

console.log(arr); // 8, 5, 2, 1, -10
