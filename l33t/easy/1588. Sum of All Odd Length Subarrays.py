class Solution:
    def sumOddLengthSubarrays(self, arr):
        
        #Verdiene fra sub_lister med lengde 1 lages 
        toreturn = sum(arr)

        #Denne gir resten av listene med sine lengder,
        #f.esk om man kan lage lister med 3 og 5 elementer,
        #vil vi ha i = 0 og i = 1
        for i in range(0, (len(arr)-1) // 2 ):
            
            sublist_length = 1 + 2*(i+1)

            for j in range(sublist_length, len(arr)+1):

                toreturn += sum(arr[j-sublist_length:j])
             
        return toreturn

# printme = Solution
# print(printme.sumOddLengthSubarrays('self', [1,4,2,5,3]))