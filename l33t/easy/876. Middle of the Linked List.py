# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def middleNode(self, head):
        amount = 1
        copy = head

        while head.next != None:
            amount += 1
            head = head.next

        for i in range(0, int(amount/2)):
            copy = copy.next

        return copy

        