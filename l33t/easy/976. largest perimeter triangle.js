/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {

    nums.sort(function(a, b) { return b - a; });
    var numbers = [nums[0], nums[1], nums[2]];

    for (let i = 3; i < nums.length; i++) {

        if (numbers[0] >= numbers[1] + numbers[2] && nums[i] < numbers[1] + numbers[2])
        {
            numbers[0] = nums[i]
            numbers.sort(function(a, b) { return b - a; });
        }
    }
    
    if (numbers[0] < numbers[1] + numbers[2])
    {
        return numbers[0] + numbers[1] + numbers[2]
    }

    return 0
};


// (largestPerimeter([1,2,2,4,18,8]))