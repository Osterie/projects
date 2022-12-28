/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {

    nums.sort(function(a, b) { return b - a; });

    for (let i = 0; i < nums.length; i++) 
    {
        if (nums[i] > 0)
        {
            nums.splice(i, 1)
            i -= 1
            continue
        }

        else if (nums[i] == 0)
        {
            return 0
        }
        else
        {
            break
        }
    }

    if (nums.length % 2 == 0)
    {
        return 1
    }

    else
    {
        return -1
    }
};

// console.log(arraySign([-1,-2,-3,-4,3,2,1]))