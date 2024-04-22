// while loop 

let index = 0;
console.log("while");
while (index < 3) {
  console.log("the index value:", index);
  index++;
}

// do while
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

console.log("do while");
do {
  console.log("the index value:", index);
  index--;
} while (index);


// for loop 
// for (begin; condition; step) { loop body }
//  examine the for statement part-by-part: begin condition body step
console.log("for loop");
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log("the index value:", i);
}

// break can force the loop to exit.

// continue It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

// Labels for break/continue
// A label is an identifier with a colon before a loop

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // if an "2", then the code execution jumps to the next iteration of the labeled loop
    if (input === "2") continue outer; // (*)

    // do something with the value...
  }
}




