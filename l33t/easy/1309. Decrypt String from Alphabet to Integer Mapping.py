import string


class Solution(object):
    def freqAlphabets(self, s):

        alphabet = list(string.ascii_lowercase)

        for i in range(10, 27):
            s = s.replace(str(i) + '#', alphabet[i-1] )

        if not s.isalpha():
            for i in range(1, 10):
                s = s.replace(str(i), alphabet[i-1])


        return s
