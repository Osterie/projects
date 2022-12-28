class Solution:
    def canMakeArithmeticProgression(self, arr):

        if len(arr) == 2:
            return True
        arr.sort()
        
        difference = arr[1] - arr[0]
        
        for i in range(1, len(arr)-1):
            
            if (arr[i] + difference) != arr[i+1]:
                return False
        
        return True

# printme = Solution

# print(printme.canMakeArithmeticProgression('what',[-13,-17,-8,-10,-20,2,3,-19,2,-18,-5,7,-12,18,-17,12,-1]))