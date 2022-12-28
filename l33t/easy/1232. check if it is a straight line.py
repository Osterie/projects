
import math

print(math.acos(0) * (180.0 / math.pi))


# class Solution:
#     def checkStraightLine(self, coordinates):
        
#         x_list, y_list = map(list, zip(*coordinates))

#         if([x_list[0]]*len(x_list) == x_list):
#             return True

#         if([y_list[0]]*len(y_list) == y_list):
#             return True
    
#         if len(x_list) != len(set(x_list)):
#             return False
        
    
#         x_increase = abs(x_list[1] - x_list[0])
        
#         if x_increase == 0:
#             return False
        
#         y_increase_perX = abs(y_list[1] - y_list[0]) / x_increase


#         for i in range(0, len(x_list)-1):
            

#             try:
#                 if y_increase_perX != abs(y_list[i+1] - y_list[i]) / abs(x_list[i+1] - x_list[i]):
#                     return False

#             except:
#                 return False

#         return True

#     def outerTrees(self, trees):
#         return trees

# printme = Solution
# print(printme.outerTrees('se', [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]))
# # print(printme.checkStraightLine('what', [[1,-8],[2,-3],[1,2]]))