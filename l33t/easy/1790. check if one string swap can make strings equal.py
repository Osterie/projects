class Solution:
    def areAlmostEqual(self, s1: str, s2: str):

        if (s1 == s2):
            return True

        counter = 0
        letter1 = []
        letter2 = []

        for i in range(0, len(s1)):

            if s1[i] == s2[i]:
                counter += 1
            
            else:
                letter1.append(s1[i])
                letter2.append(s2[i])

        if counter+2 == len(s1) and letter1[0] == letter2[1] and letter1[1] == letter2[0]:
            return True

        return False

# printme = Solution
# print(printme.areAlmostEqual('self', 'bank', 'kanb'))