"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""



class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """

        # approach: use recursion on each child

        if not root:
            return []

        result = []
        
        if root.children:
            for node in root.children:
                result.extend(self.preorder(node))

        return [root.val] + result


printme = Solution
print(printme.preorder(2, [1,None,3,2,4,None,5,6]))

#try both recursively and iteratively