let isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sCharHash = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    sCharHash[sChar] = sCharHash[sChar] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    if (!sCharHash[tChar]) {
      return false;
    } else {
      sCharHash[tChar]--;
    }
  }
  return true;

};

console.log(isAnagram("anagram", "anagram")) // true
console.log(isAnagram("rat", "car")) // false