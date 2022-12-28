class Solution(object):
    def maximum69Number (self, num):
        
        try:

            return (str(num).replace('6', '9', 1))
            
        except:
            
            return num
        

# printme = Solution()
# print(printme.maximum69Number(9669))


#SOLUTION 2
# class Solution(object):
#     def maximum69Number (self, num):
#         """
#         :type num: int
#         :rtype: int
#         """

        
        
#         list_num = list(str(num))

        
        
#         if '6' in list_num:

#             for i in range(0, len(list_num)):
                
#                 if list_num[i] == '6':
                    
#                     list_num[i] = '9'
#                     return ''.join(list_num)
                    

        
#         else:
#             return num
        

# printme = Solution()


