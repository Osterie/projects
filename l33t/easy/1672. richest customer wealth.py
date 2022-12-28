#Solution using sum()

class Solution:
    def maximumWealth(self, accounts):

        largest_sum = 0

        for i in range(0, len(accounts)):
            
            if sum(accounts[i]) > largest_sum:
                largest_sum = sum(accounts[i])
            
        return largest_sum


#Solution iterating all items in all lists

# class Solution:
#     def maximumWealth(self, accounts):

#         largest_sum = 0
#         for i in range(0, len(accounts)):
            
#             sum = 0

#             for j in range(0, len(accounts[i])):
                
#                 sum += accounts[i][j]

#             if sum > largest_sum:
#                 largest_sum = sum
            
#         return largest_sum

# printme = Solution
# print(printme.maximumWealth('self',  [[1,2,3],[3,2,1]]))