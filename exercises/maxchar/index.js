// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = str
    .split('')
    .reduce((acc, char) => {
      if(acc[char] >= 0) {
        acc[char] += 1;
        if(acc['max'].count < acc[char]) {
          acc['max'].count = acc[char];
          acc['max'].char = char;
        }
      } else {
        acc[char] = 0;
      }
      if(acc['max'].char === '') acc['max'].char = char;
      return acc;
    }, { max: { count: 0, char: '' } });

  return obj['max'].char;
}

// console.log("result: ", maxChar("abcdefghijklmnaaaaa"));

module.exports = maxChar;
