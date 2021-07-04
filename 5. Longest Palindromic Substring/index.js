// To solve this problem we will use a technique called, "expand around the center".
let longestPalindrome = function (s) {
  let startIndex = 0;
  let maxLength = 1;

  // Helper Function
  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalindromeLength = right - left + 1;
      if (currentPalindromeLength > maxLength) {
        maxLength = currentPalindromeLength;
        startIndex = left;
      }
      left--;
      right++;
    }
  }

  // looping each char and expanding around to check for palindrome
  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1, s);
    expandAroundMiddle(i, i + 1, s);
  }

  return s.slice(startIndex, startIndex + maxLength)
};


console.log(longestPalindrome("babad")) //bab
console.log(longestPalindrome("cbbd")) //bb
console.log(longestPalindrome("a")) //a
console.log(longestPalindrome("ac")) //a
