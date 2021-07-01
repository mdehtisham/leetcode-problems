function getMinSubArraySum(arr, target) {
  let windowStart = 0,
    minLength = Infinity,
    windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] // adding the next element

    // shrinking the window as small as possible until the 'windowSum' becomes less than the target.
    while (windowSum >= target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength
}


console.log(getMinSubArraySum([2, 1, 5, 2, 3, 2], 7)) // 2
console.log(getMinSubArraySum([2, 1, 5, 2, 8], 7)) // 1
console.log(getMinSubArraySum([3, 4, 1, 1, 6], 8)) // 3