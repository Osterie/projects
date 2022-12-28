/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    
    var sum = 0.0;

    salary.sort(function(a, b){return a-b});
    salary.pop();
    salary.shift();
    
    for (let i = 0; i< salary.length; i++)
    {
        sum += salary[i]    
    }
    return sum/salary.length
};

// console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]))