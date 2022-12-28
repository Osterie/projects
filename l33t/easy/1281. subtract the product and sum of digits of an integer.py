class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        n = str(n)
        product = 1
        difference = 0

        for i in range(0, len(n)):
            product *= int(n[i])
            difference += int(n[i])

        return product - difference


# printme = Solution
# print(printme.subtractProductAndSum( 'self?', 500))