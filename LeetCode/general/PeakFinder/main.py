class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        size = len(nums)
        mid = floor(size / 2) 
        left = mid - 1
        right = mid + 1
        
        while True:
            if left >= 0 and nums[left] > nums[mid]:
                mid = left
                left -= 1

            elif right < size and nums[right] > nums[mid]:
                mid = right
                right += 1

            else:
                break;
        
        return mid