# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def getDecimalValue(self, head):

        sum = 0
        while (head != None):
            sum = (sum * 2) + head.val
            head = head.next
        
        return sum

        
