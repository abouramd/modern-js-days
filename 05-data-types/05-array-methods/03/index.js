function filterRangeInPlace(arr, a, b) {

  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];

    if (item >= a && item <= b) continue;

    console.log(item)

    arr.splice(index, 1);


    index--;
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]
