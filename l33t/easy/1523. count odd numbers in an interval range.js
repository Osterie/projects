/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {

    var oddnumbers = 0;
    var toremove = 0;

    if (low % 2 != 0)
    {
        oddnumbers += 1;
        toremove += 1;
    }

    if (high % 2 != 0)
    {
        oddnumbers += 1;
        toremove += 1;
    }
                  //Works as floor division
    oddnumbers += Math.floor((high-low-toremove)/2 )

    return oddnumbers    
};

// console.log(countOdds(3, 7))


// Solution 2, much slower i would believe
//  var countOdds = function(low, high) {

//     var oddnumbers = 0;

//     for (let i = low; i <= high; i++)
//     {
//         if (i % 2 != 0)
//         {

//             oddnumbers += 1
//         }
        

//     }

//     return oddnumbers
    
// };

// console.log(countOdds(3, 7))