
class Solution:
    def moveZeroes(self, nums):
        for i in range (0, len(nums)):

            if nums[len(nums)-i-1] == 0:

                del nums[len(nums) - i - 1]
                nums.append(0)
                
        return nums


# printme = Solution

# print(printme.moveZeroes('self', [0, 0, 1]))