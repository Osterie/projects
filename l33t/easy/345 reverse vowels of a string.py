class Solution(object):
    def reverseVowels(self, s):
        
        vowel_position = []
        vowels = ['a', 'e', 'i', 'o', 'u']

        string_list = list(s)
        
        for i in range(0, len(s)):

            if (s[i]).lower() in vowels:
                vowel_position.append(i)
            
        
        if len(vowel_position) == 0:
            return s
        

        for j in range(0, int((len(vowel_position))/2)):

                string_list[vowel_position[j]] = s[vowel_position[-1-j]]
                string_list[vowel_position[-j-1]] = s[vowel_position[j]]

        solution = ''.join(string_list)
        return solution

printme = Solution()