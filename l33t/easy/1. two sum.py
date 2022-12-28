class Solution(object):
    def twoSum(self, nums, target):

        # while nums[-1] > target and target > 0:
        #     del nums[-1]
        
        for i in range (1, len(nums)):
            
            tmp = target - nums[-i]

            if tmp in nums and nums.index(tmp) != (len(nums)-i):
                
                solution_list = [nums.index(tmp), len(nums)-i]
                return solution_list

printme = Solution

print(printme.twoSum('why am i here?' , [0,4,3,0], 0))