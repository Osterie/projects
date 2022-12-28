class Solution:
    def mergeAlternately(self, word1, word2):
        i= -1
        neword = ''
        while True:
            i += 1

            try:
                neword += word1[i] + word2[i]

            except:

                try:
                    print(word1[i])
                    return neword + word1[i:] 


                except:
                    return neword + word2[i:] 
                

printme = Solution
print(printme.mergeAlternately('self', 'ab', 'pqrs'))