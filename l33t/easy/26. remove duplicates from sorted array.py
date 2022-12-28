class Solution:
    def removeDuplicates(self, nums):

        nums.sort()
        k = 1
        i = 1

        while i < len(nums):
            if nums[i] in nums and nums.index(nums[i]) != i:
                del nums[i]

            else:
                i += 1
                k += 1
                
        # return k, nums

# printme = Solution
# print(printme.removeDuplicates('what', [1,1,2]))