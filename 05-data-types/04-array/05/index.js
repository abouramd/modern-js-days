function getMaxSubSum(arr) {
  // let newArr = [];
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    // let tmpArr = [];
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      // tmpArr.push(arr[i]);
      if (sum > maxSum) {
        // newArr = tmpArr;
        maxSum = sum;
      }
    }
  }

  return maxSum;
}


console.log(getMaxSubSum([-1, 2, 3, -9]) == 5,
  getMaxSubSum([2, -1, 2, 3, -9]) == 6,
  getMaxSubSum([-1, 2, 3, -9, 11]) == 11,
  getMaxSubSum([-2, -1, 1, 2]) == 3,
  getMaxSubSum([100, -9, 2, -3, 5]) == 100,
  getMaxSubSum([1, 2, 3]) == 6);
