from sortedcontainers import SortedList

class Solution:
    def mergeKLists(self, lists):

        newlist = SortedList()
        for i in range(0, len(lists)):
            newlist += (lists[i])

        
        return newlist


print(Solution.mergeKLists('self', [[1,4,5],[1,3,4],[2,6]]))