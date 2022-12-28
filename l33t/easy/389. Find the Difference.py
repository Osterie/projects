class Solution:
    def findTheDifference(self, s, t):

        while len(t) != 1:

            if s[0] in t:
                
                t = t.replace(s[0], '', s.count(s[0]))
                s = s.replace(s[0], '', s.count(s[0]))
 
        return t

# printme = Solution
# print(printme.findTheDifference('why am i here?' , 'abcd', 'abcde'))