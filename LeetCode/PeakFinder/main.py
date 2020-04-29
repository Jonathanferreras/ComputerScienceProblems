class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        size = len(nums)
        mid = round((size - 1) / 2) 
        left = mid - 1
        right = mid + 1
        
        while True:
            if nums[left] and nums[left] > nums[mid]:
                mid = left
                left += 1

            elif nums[right] and nums[right] > nums[mid]:
                mid = right
                right += 1

            else:
                break;
        
        return mid