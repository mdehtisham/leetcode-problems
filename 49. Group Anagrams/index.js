let groupAnagrams = function (strs) {
  let group = {};
  for (let str of strs) {
    const key = str.split('').sort().join()
    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(str);
  }
  return Object.values(group);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ] 
console.log(groupAnagrams([""]));
// Output: [['']] 
console.log(groupAnagrams(["a"]));
// Output: [ ['a'] ]

