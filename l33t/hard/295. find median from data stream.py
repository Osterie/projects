from sortedcontainers import SortedList

class MedianFinder:

    def __init__(self):
        self.l = SortedList()

    def addNum(self, num):
        self.l.add(num)

    def findMedian(self):

        if len(self.l) % 2 == 0:

            return ( self.l[ len(self.l) // 2 ]    +    self.l[ (len(self.l) // 2) -1 ] ) / 2

        return self.l[ len(self.l) // 2]
            
# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(1)
# obj.addNum(2)
# obj.addNum(3)
# param_2 = obj.findMedian()
