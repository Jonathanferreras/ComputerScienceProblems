// --- Directions
// Implement mergeSort

/**
 * My initial implementation
 */


function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];

  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]) {
      results.push(left.shift());
    } 
    else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = {mergeSort, merge}