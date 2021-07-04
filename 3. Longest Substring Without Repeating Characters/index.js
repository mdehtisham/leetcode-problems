let lengthOfLongestSubstring = function (s) {
  // using sliding window to solve this problem

  let windowCharsHashmap = {},
    windowStart = 0,
    maxLength = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const endChar = s[windowEnd];

    if (windowCharsHashmap[endChar] >= windowStart) {
      windowStart = windowCharsHashmap[endChar] + 1;
    }

    windowCharsHashmap[endChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
};


console.log(lengthOfLongestSubstring("abcabcbb")) //3
console.log(lengthOfLongestSubstring("bbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("")) // 0