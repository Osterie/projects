class Solution:
    def matrixReshape(self, mat, r, c):

        if ((r*c) != (len(mat) * len(mat[0]))):
            return mat

        mat =  [item for sublist in mat for item in sublist]

        toreturn = []
        for i in range(0, r):
            toreturn.append(mat[i*c:(i+1)*c])

        return toreturn
# printme = Solution
# print(printme.matrixReshape('self', [[1,2],[3,4]], 1, 4))