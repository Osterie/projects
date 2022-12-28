/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    var counter = 0;

    n = n.toString(2)

    for (let i = 0; i < n.length; i++) 
        {    
        if (n[i] == '1')
            {
                counter += 1
            }
        }
    return counter
};

// hammingWeight(11111111111111111111111111111101)