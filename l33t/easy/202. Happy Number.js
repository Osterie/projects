/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) 
 {
    
    var runthrough = [];
    
    n = n.toString()

    while (true)
    {
        var newnum = 0
        
        for (let i of n) 
        {
            newnum += i**2           
        }

        if (newnum == 1)
        {
            return true
        }

        else if (newnum in runthrough)
        {
            return false
        }

        runthrough.push(newnum)
        n = newnum.toString()
    }
};

// console.log(isHappy(19),' truuusufosdufiou')