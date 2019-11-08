// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent


/**
 * My inital implementation
 */

module.exports = function validateBST(node, min = null, max = null) {
  // find a base case
  if(max && node.data > max) {
    return false;
  }

  if(min && node.data < min) {
    return false;
  }

  if(node.left && !validateBST(node.left, min, node.data)) {
    return false;
  }

  if(node.right && !validateBST(node.right, node.data, max)) {
    return false;
  }

  return true;
}