class Solution(object):
    def nextGreaterElement(self, nums1, nums2):

        toreturn = []

        for i in range(0, len(nums1)):

            for j in range((nums2.index(nums1[i])), len(nums2)):

                if nums2[j] > nums1[i]:
                    toreturn.append(nums2[j])
                    break

                
                elif j == (len(nums2)-1):
                    toreturn.append(-1)
                    
                    break
                
                         
        return toreturn

# printme = Solution
# print(printme.nextGreaterElement('self', [4, 1, 2], [1,3,4,2]))