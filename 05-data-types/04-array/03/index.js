let arr = ["a", "b"];

arr.push(function() {
  console.log(this);
});

arr[2](); // this it refer to the object arr so we will print arr as a value
