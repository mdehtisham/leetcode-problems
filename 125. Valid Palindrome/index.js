function checkPalindrome(str) {
  // sanitize the string, remove all non alpha-numeric chars
  str = str.toLowerCase().replace(/[\W_]/g, "")
  // (/[\W_]/g, "") -> means grab all non alpha-numeric chars including _ and replace them with "".

  let leftPointer = 0,
    rightPointer = str.length - 1;

  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}

console.log(checkPalindrome("A man, a_ plan, a canal: Panama")) // true
console.log(checkPalindrome("race a ca_r")) // false