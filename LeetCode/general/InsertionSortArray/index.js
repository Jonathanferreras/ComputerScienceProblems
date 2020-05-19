/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Solved using insertion sort

var sortArray = function(nums) {    
  for(let i = 0; i < nums.length; i++) {
      let current = i;
      
      while(current - 1 >= 0  && nums[current - 1] > nums[current]) {
          let temp = nums[current - 1];

          nums[current - 1] = nums[current];
          nums[current] = temp;
          current--;
      }
  }
  
  return nums;
};