/**
 * @param {number[]} numArray
 * @return {number}
 */
var findPeakElement = function(numArray) {
  const sizeOfArray = numArray.length;
  let mid = Math.floor(sizeOfArray / 2);
  let left = mid - 1;
  let right = mid + 1;

  while(true) {
    if(left >= 0 && numArray[left] > numArray[mid]) {
      mid = left;
      left--;
    }
    else if (right < sizeOfArray && numArray[right] > numArray[mid]) {
      mid = right;
      right++;
    }
    else {
      break;
    }
  }

  return mid;
};