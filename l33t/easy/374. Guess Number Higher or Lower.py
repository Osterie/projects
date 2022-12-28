# # The guess API is already defined for you.
# # @param num, your guess
# # @return -1 if num is higher than the picked number
# #          1 if num is lower than the picked number
# #          otherwise return 0
# # def guess(num: int) -> int:

# class Solution:
#     def guessNumber(self, n):

#         number = 2147483648
#         exponent = 9
#         while True:
            
#             if guess(number) == -1:
#                 number -= 10**exponent

#                 if guess(number) == 1:
#                     exponent -= 1

#             elif guess(number) == 1:
#                 number += 10**exponent

#                 if guess(number) == -1:
#                     exponent -= 1
#             else:
#                 return number

