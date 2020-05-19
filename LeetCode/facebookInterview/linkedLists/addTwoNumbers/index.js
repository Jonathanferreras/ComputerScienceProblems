/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * #ADVICE: ATTEMPT AGAIN
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0);
  let iterList = l3;
  let carry = false;

  while (l1 || l2) {
    let sum = 0;

    if (l1 === null) {
      sum += l2.val;
      l2 = l2.next;
    } else if (l2 === null) {
      sum += l1.val;
      l1 = l1.next;
    } else {
      sum += l1.val + l2.val;
      l1 = l1.next;
      l2 = l2.next;
    }

    if (carry) {
      sum++;
    }

    if (sum >= 10) {
      sum %= 10;
      carry = true;
    } else {
      carry = false;
    }

    const node = new ListNode(sum);
    iterList.next = node;
    iterList = iterList.next;
  }

  if (carry) {
    iterList.next = new ListNode(1);
  }

  return l3.next;
};
