//creating two sum 
// from leetcode problem
//easy way
//checking time and space complexity

var twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++){// n

        let remaining = target - nums[i]
        
        for(let j = i + 1; j < nums.length; j++){// n
            if(remaining === nums[j]) return [i, j]

        }

    }
    return false

}
//Time complexity is BigO(n^2)
//Space complexity is BigO(1)

console.log(twoSum([2, 7, 11, 15, 3], 10))