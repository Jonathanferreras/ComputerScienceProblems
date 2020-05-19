/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 
     m     i
     ^     ^  
[1,2,3,0,0,0] 

     n
     ^ 
[2,5,6] 

Output: [1,2,2,3,5,6]

 */
var merge = function(nums1, m, nums2, n) {
  let i = nums1.length - 1;
  m--;
  n--;
  
  while(i >= 0) {
      if(m < 0) {
          nums1[i] = nums2[n--];
      } 
      else if(n < 0) {
          nums1[i] = nums1[m--];
      } 
      else {
          if(nums1[m] < nums2[n]) {
              nums1[i] = nums2[n--];
          } 
          else {
              nums1[i] = nums1[m--];
          }
      }
      
      i--;
  }

};