/**
 * @param {string} s
 * @return {number}
 *
 * #ADVICE: ATTEMPT AGAIN
 */
var lengthOfLongestSubstring = function (s) {
  let chars = {};
  let start = 0;
  let end = 0;
  let max = 0;

  while (end < s.length) {
    const char = s[end];

    if (!chars[char]) {
      chars[char] = true;
      const keys = Object.keys(chars).length;

      if (max < keys) {
        max = keys;
      }

      end++;
    } else {
      delete chars[s[start]];
      start++;
    }
  }

  return max;
};
