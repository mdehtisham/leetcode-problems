let totalFruit = function (fruits) {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  // using sliding window to solve this problem

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    fruitFrequency[rightFruit]++;

    // shrinking the sliding window ultil we are left with 2 fruits in dictionary
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit]--;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart++
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;

};


console.log(totalFruit([1, 2, 1])) // 3
console.log(totalFruit([0, 1, 2, 2])) // 3
console.log(totalFruit([1, 2, 3, 2, 2])) // 4
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])) // 5