//creating two sum 
// from leetcode problem

var twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        
        for(let j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target) return [i, j]

        }

    }
    return false

}
console.log(twoSum([3, 2, 4, 33, 44], 6))