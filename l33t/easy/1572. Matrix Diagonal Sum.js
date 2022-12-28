/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) 
 {
    var sum = 0;
    for (let i = 0; i < mat.length; i++) 
    {
        sum += mat[i][i] + mat[i][mat.length-i-1]
    }

    if (mat.length % 2 != 0)
    {
        sum -= mat[ parseInt(mat.length/2) ][ parseInt(mat.length/2) ]
    }

    return sum
};


// console.log(diagonalSum([[1,2,3],
//     [4,5,6],
//     [7,8,9]]))