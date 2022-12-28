class Solution:
    def isUgly(self, n: int) -> bool:

        if n <= 0:
            return False

        divisor = 2

        while True:

            if int(n/divisor) == n/divisor:
                n = int(n/divisor)

            else:
                if divisor == 2:
                    divisor = 3

                elif divisor == 3:
                    divisor = 5

                else:
                    break
        

        if n == 1:
            return True

        return False
        
print(Solution.isUgly('self', 0))
