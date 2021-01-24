var longestCommonPrefix = function (strs) {
  let longest = "";
  if (strs.length === 0) return longest;
  for (let i = 0; i < strs[0].length; i++) {
    let character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) {
        return longest;
      }
    }
    longest = longest + character;
  }
  console.log(longest);
  return longest;
};
longestCommonPrefix(["flower", "flow", "fly"]);
