class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        
        test = nums1 + nums2
        test.sort()

        #list is pair
        if len(test) % 2 == 0:
            return( (( float(test[(int(len(test)/2)-1)]) + float(test[(int(len(test)/2))]) ) / 2 ))
            
        #list is odd
        else:
            return( test[(int(len(test)/2))])

        
        

printme = Solution

# print(printme.findMedianSortedArrays( "what", [1,2], [3,4])) 